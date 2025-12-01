export interface VideoItem {
  slug: string
  title: string
  category: string
  fileName: string
  thumbnail: string
}
const BUCKET_URL =
  "https://firebasestorage.googleapis.com/v0/b/monetizacao-cortes-studio.firebasestorage.app/o";

function makeThumbnail(category: string, file: string) {
  const encoded = encodeURIComponent(`thumbnails/${category}/${file.replace('.mp4', '.jpg')}`);
  return `${BUCKET_URL}/${encoded}?alt=media`;
}

export const videos_caminhoes: VideoItem[] = [
  {
    slug: 'caminhoes1',
    title: 'CAMINHOES 1',
    category: 'caminhoes',
    fileName: 'CAMINHOES1.mp4',
    thumbnail: makeThumbnail('caminhoes', 'CAMINHOES1.mp4'),
  },
  {
    slug: 'caminhoes2',
    title: 'CAMINHOES 2',
    category: 'caminhoes',
    fileName: 'CAMINHOES2.mp4',
    thumbnail: makeThumbnail('caminhoes', 'CAMINHOES2.mp4'),
  },
  {
    slug: 'caminhoes3',
    title: 'CAMINHOES 3',
    category: 'caminhoes',
    fileName: 'CAMINHOES3.mp4',
    thumbnail: makeThumbnail('caminhoes', 'CAMINHOES3.mp4'),
  },
  {
    slug: 'caminhoes4',
    title: 'CAMINHOES 4',
    category: 'caminhoes',
    fileName: 'CAMINHOES4.mp4',
    thumbnail: makeThumbnail('caminhoes', 'CAMINHOES4.mp4'),
  },
  {
    slug: 'caminhoes5',
    title: 'CAMINHOES 5',
    category: 'caminhoes',
    fileName: 'CAMINHOES5.mp4',
    thumbnail: makeThumbnail('caminhoes', 'CAMINHOES5.mp4'),
  },
  {
    slug: 'caminhoes6',
    title: 'CAMINHOES 6',
    category: 'caminhoes',
    fileName: 'CAMINHOES6.mp4',
    thumbnail: makeThumbnail('caminhoes', 'CAMINHOES6.mp4'),
  },
  {
    slug: 'caminhoes7',
    title: 'CAMINHOES 7',
    category: 'caminhoes',
    fileName: 'CAMINHOES7.mp4',
    thumbnail: makeThumbnail('caminhoes', 'CAMINHOES7.mp4'),
  },
  {
    slug: 'caminhoes8',
    title: 'CAMINHOES 8',
    category: 'caminhoes',
    fileName: 'CAMINHOES8.mp4',
    thumbnail: makeThumbnail('caminhoes', 'CAMINHOES8.mp4'),
  },
  {
    slug: 'caminhoes9',
    title: 'CAMINHOES 9',
    category: 'caminhoes',
    fileName: 'CAMINHOES9.mp4',
    thumbnail: makeThumbnail('caminhoes', 'CAMINHOES9.mp4'),
  },
  {
    slug: 'caminhoes10',
    title: 'CAMINHOES 10',
    category: 'caminhoes',
    fileName: 'CAMINHOES10.mp4',
    thumbnail: makeThumbnail('caminhoes', 'CAMINHOES10.mp4'),
  },
  {
    slug: 'caminhoes11',
    title: 'CAMINHOES 11',
    category: 'caminhoes',
    fileName: 'CAMINHOES11.mp4',
    thumbnail: makeThumbnail('caminhoes', 'CAMINHOES11.mp4'),
  },
  {
    slug: 'caminhoes12',
    title: 'CAMINHOES 12',
    category: 'caminhoes',
    fileName: 'CAMINHOES12.mp4',
    thumbnail: makeThumbnail('caminhoes', 'CAMINHOES12.mp4'),
  },
  {
    slug: 'caminhoes13',
    title: 'CAMINHOES 13',
    category: 'caminhoes',
    fileName: 'CAMINHOES13.mp4',
    thumbnail: makeThumbnail('caminhoes', 'CAMINHOES13.mp4'),
  },
  {
    slug: 'caminhoes14',
    title: 'CAMINHOES 14',
    category: 'caminhoes',
    fileName: 'CAMINHOES14.mp4',
    thumbnail: makeThumbnail('caminhoes', 'CAMINHOES14.mp4'),
  },
  {
    slug: 'caminhoes15',
    title: 'CAMINHOES 15',
    category: 'caminhoes',
    fileName: 'CAMINHOES15.mp4',
    thumbnail: makeThumbnail('caminhoes', 'CAMINHOES15.mp4'),
  },
  {
    slug: 'caminhoes16',
    title: 'CAMINHOES 16',
    category: 'caminhoes',
    fileName: 'CAMINHOES16.mp4',
    thumbnail: makeThumbnail('caminhoes', 'CAMINHOES16.mp4'),
  },
  {
    slug: 'caminhoes17',
    title: 'CAMINHOES 17',
    category: 'caminhoes',
    fileName: 'CAMINHOES17.mp4',
    thumbnail: makeThumbnail('caminhoes', 'CAMINHOES17.mp4'),
  },
  {
    slug: 'caminhoes18',
    title: 'CAMINHOES 18',
    category: 'caminhoes',
    fileName: 'CAMINHOES18.mp4',
    thumbnail: makeThumbnail('caminhoes', 'CAMINHOES18.mp4'),
  },
  {
    slug: 'caminhoes19',
    title: 'CAMINHOES 19',
    category: 'caminhoes',
    fileName: 'CAMINHOES19.mp4',
    thumbnail: makeThumbnail('caminhoes', 'CAMINHOES19.mp4'),
  },
  {
    slug: 'caminhoes20',
    title: 'CAMINHOES 20',
    category: 'caminhoes',
    fileName: 'CAMINHOES20.mp4',
    thumbnail: makeThumbnail('caminhoes', 'CAMINHOES20.mp4'),
  },
  {
    slug: 'caminhoes21',
    title: 'CAMINHOES 21',
    category: 'caminhoes',
    fileName: 'CAMINHOES21.mp4',
    thumbnail: makeThumbnail('caminhoes', 'CAMINHOES21.mp4'),
  },
  {
    slug: 'caminhoes22',
    title: 'CAMINHOES 22',
    category: 'caminhoes',
    fileName: 'CAMINHOES22.mp4',
    thumbnail: makeThumbnail('caminhoes', 'CAMINHOES22.mp4'),
  },
  {
    slug: 'caminhoes23',
    title: 'CAMINHOES 23',
    category: 'caminhoes',
    fileName: 'CAMINHOES23.mp4',
    thumbnail: makeThumbnail('caminhoes', 'CAMINHOES23.mp4'),
  },
  {
    slug: 'caminhoes24',
    title: 'CAMINHOES 24',
    category: 'caminhoes',
    fileName: 'CAMINHOES24.mp4',
    thumbnail: makeThumbnail('caminhoes', 'CAMINHOES24.mp4'),
  },
  {
    slug: 'caminhoes25',
    title: 'CAMINHOES 25',
    category: 'caminhoes',
    fileName: 'CAMINHOES25.mp4',
    thumbnail: makeThumbnail('caminhoes', 'CAMINHOES25.mp4'),
  },
  {
    slug: 'caminhoes26',
    title: 'CAMINHOES 26',
    category: 'caminhoes',
    fileName: 'CAMINHOES26.mp4',
    thumbnail: makeThumbnail('caminhoes', 'CAMINHOES26.mp4'),
  },
  {
    slug: 'caminhoes27',
    title: 'CAMINHOES 27',
    category: 'caminhoes',
    fileName: 'CAMINHOES27.mp4',
    thumbnail: makeThumbnail('caminhoes', 'CAMINHOES27.mp4'),
  },
  {
    slug: 'caminhoes28',
    title: 'CAMINHOES 28',
    category: 'caminhoes',
    fileName: 'CAMINHOES28.mp4',
    thumbnail: makeThumbnail('caminhoes', 'CAMINHOES28.mp4'),
  },
  {
    slug: 'caminhoes29',
    title: 'CAMINHOES 29',
    category: 'caminhoes',
    fileName: 'CAMINHOES29.mp4',
    thumbnail: makeThumbnail('caminhoes', 'CAMINHOES29.mp4'),
  },
  {
    slug: 'caminhoes30',
    title: 'CAMINHOES 30',
    category: 'caminhoes',
    fileName: 'CAMINHOES30.mp4',
    thumbnail: makeThumbnail('caminhoes', 'CAMINHOES30.mp4'),
  },
  {
    slug: 'caminhoes31',
    title: 'CAMINHOES 31',
    category: 'caminhoes',
    fileName: 'CAMINHOES31.mp4',
    thumbnail: makeThumbnail('caminhoes', 'CAMINHOES31.mp4'),
  },
  {
    slug: 'caminhoes32',
    title: 'CAMINHOES 32',
    category: 'caminhoes',
    fileName: 'CAMINHOES32.mp4',
    thumbnail: makeThumbnail('caminhoes', 'CAMINHOES32.mp4'),
  },
  {
    slug: 'caminhoes33',
    title: 'CAMINHOES 33',
    category: 'caminhoes',
    fileName: 'CAMINHOES33.mp4',
    thumbnail: makeThumbnail('caminhoes', 'CAMINHOES33.mp4'),
  },
]
