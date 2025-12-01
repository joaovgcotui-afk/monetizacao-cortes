const { onObjectFinalized } = require('firebase-functions/v2/storage')
const { onRequest } = require('firebase-functions/v2/https')
const { initializeApp } = require('firebase-admin/app')
const { getStorage } = require('firebase-admin/storage')

const ffmpeg = require('fluent-ffmpeg')
const ffmpeg_static = require('ffmpeg-static')
const fs = require('fs')

// Inicializar Firebase
initializeApp()
const bucket = getStorage().bucket()

const THUMB_WIDTH = 480
const THUMB_HEIGHT = 270

function isThumbnail(path) {
  return path.includes('thumbnails/')
}

// =======================================
// 1. Função automática | generateThumbnail
// =======================================
exports.generateThumbnail = onObjectFinalized(
  { region: 'southamerica-east1' },
  async (event) => {
    const object = event.data
    if (!object) return

    const filePath = object.name
    const contentType = object.contentType

    if (!filePath || !contentType) return

    if (isThumbnail(filePath)) {
      console.log('Ignorando thumbnail:', filePath)
      return
    }

    if (!contentType.startsWith('video/')) {
      console.log('Ignorando arquivo não-vídeo:', filePath)
      return
    }

    console.log('Processando vídeo:', filePath)

    const parts = filePath.split('/')
    const category = parts[0]
    const fileName = parts[1]

    const thumbName = fileName.replace('.mp4', '.jpg')

    const tempVideoPath = `/tmp/${fileName}`
    const tempThumbPath = `/tmp/${thumbName}`

    await bucket.file(filePath).download({
      destination: tempVideoPath,
    })

    ffmpeg.setFfmpegPath(ffmpeg_static)

    await new Promise((resolve, reject) => {
      ffmpeg(tempVideoPath)
        .on('end', resolve)
        .on('error', reject)
        .screenshots({
          timestamps: ['00:00:01'],
          filename: thumbName,
          folder: '/tmp',
          size: `${THUMB_WIDTH}x${THUMB_HEIGHT}`,
        })
    })

    const thumbStoragePath = `thumbnails/${category}/${thumbName}`

    await bucket.upload(tempThumbPath, {
      destination: thumbStoragePath,
      metadata: {
        contentType: 'image/jpeg',
      },
    })

    console.log('Thumbnail criada:', thumbStoragePath)

    try {
      fs.unlinkSync(tempVideoPath)
      fs.unlinkSync(tempThumbPath)
    } catch {}

    return
  },
)

// =======================================
// 2. Função manual | regenerateAllThumbnails
// =======================================
exports.regenerateAllThumbnails = onRequest(
  { region: 'southamerica-east1' },
  async (req, res) => {
    try {
      console.log('Iniciando regeneração de thumbnails...')

      const [files] = await bucket.getFiles()

      const videoFiles = files.filter((f) => f.name.endsWith('.mp4'))

      console.log(`Encontrados ${videoFiles.length} vídeos.`)

      for (const file of videoFiles) {
        const filePath = file.name

        console.log('Processando vídeo:', filePath)

        const parts = filePath.split('/')
        const category = parts[0]
        const fileName = parts[1]

        const thumbName = fileName.replace('.mp4', '.jpg')
        const tempVideoPath = `/tmp/${fileName}`
        const tempThumbPath = `/tmp/${thumbName}`

        await bucket.file(filePath).download({
          destination: tempVideoPath,
        })

        ffmpeg.setFfmpegPath(ffmpeg_static)

        await new Promise((resolve, reject) => {
          ffmpeg(tempVideoPath)
            .on('end', resolve)
            .on('error', reject)
            .screenshots({
              timestamps: ['00:00:01'],
              filename: thumbName,
              folder: '/tmp',
              size: `${THUMB_WIDTH}x${THUMB_HEIGHT}`,
            })
        })

        const thumbStoragePath = `thumbnails/${category}/${thumbName}`

        await bucket.upload(tempThumbPath, {
          destination: thumbStoragePath,
          metadata: { contentType: 'image/jpeg' },
        })

        console.log('Thumbnail criada:', thumbStoragePath)

        try {
          fs.unlinkSync(tempVideoPath)
          fs.unlinkSync(tempThumbPath)
        } catch {}
      }

      res.status(200).send('Regeneração concluída.')
    } catch (error) {
      console.error('Erro ao regenerar thumbnails:', error)
      res.status(500).send('Erro ao regenerar thumbnails.')
    }
  },
)
