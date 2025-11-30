const { onObjectFinalized } = require('firebase-functions/v2/storage')
const { initializeApp } = require('firebase-admin/app')
const { getStorage } = require('firebase-admin/storage')

const ffmpeg = require('fluent-ffmpeg')
const ffmpeg_static = require('ffmpeg-static')
const fs = require('fs')

initializeApp()
const bucket = getStorage().bucket()

const THUMB_WIDTH = 480
const THUMB_HEIGHT = 270

function isThumbnail(path) {
  return path.includes('thumbnails/')
}

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
