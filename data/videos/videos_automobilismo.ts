export interface VideoItem {
  slug: string
  title: string
  category: string
  fileName: string
  thumbnail: string
}
const BUCKET_URL =
  'https://firebasestorage.googleapis.com/v0/b/monetizacao-cortes-studio.firebasestorage.app/o'

function makeThumbnail(category: string, file: string) {
  const encoded = encodeURIComponent(
    `thumbnails/${category}/${file.replace('.mp4', '.jpg')}`,
  )
  return `${BUCKET_URL}/${encoded}?alt=media`
}

export const videos_automobilismo: VideoItem[] = [
  {
    slug: 'automobilismo1',
    title: 'AUTOMOBILISMO 1',
    category: 'automobilismo',
    fileName: 'AUTOMOBILISMO1.mp4',
    thumbnail: '',
  },
  {
    slug: 'automobilismo2',
    title: 'AUTOMOBILISMO 2',
    category: 'automobilismo',
    fileName: 'AUTOMOBILISMO2.mp4',
    thumbnail: '',
  },
  {
    slug: 'automobilismo3',
    title: 'AUTOMOBILISMO 3',
    category: 'automobilismo',
    fileName: 'AUTOMOBILISMO3.mp4',
    thumbnail: '',
  },
  {
    slug: 'automobilismo4',
    title: 'AUTOMOBILISMO 4',
    category: 'automobilismo',
    fileName: 'AUTOMOBILISMO4.mp4',
    thumbnail: '',
  },
  {
    slug: 'automobilismo5',
    title: 'AUTOMOBILISMO 5',
    category: 'automobilismo',
    fileName: 'AUTOMOBILISMO5.mp4',
    thumbnail: '',
  },
  {
    slug: 'automobilismo6',
    title: 'AUTOMOBILISMO 6',
    category: 'automobilismo',
    fileName: 'AUTOMOBILISMO6.mp4',
    thumbnail: '',
  },
  {
    slug: 'automobilismo7',
    title: 'AUTOMOBILISMO 7',
    category: 'automobilismo',
    fileName: 'AUTOMOBILISMO7.mp4',
    thumbnail: '',
  },
  {
    slug: 'automobilismo8',
    title: 'AUTOMOBILISMO 8',
    category: 'automobilismo',
    fileName: 'AUTOMOBILISMO8.mp4',
    thumbnail: '',
  },
  {
    slug: 'automobilismo9',
    title: 'AUTOMOBILISMO 9',
    category: 'automobilismo',
    fileName: 'AUTOMOBILISMO9.mp4',
    thumbnail: '',
  },
  {
    slug: 'automobilismo10',
    title: 'AUTOMOBILISMO 10',
    category: 'automobilismo',
    fileName: 'AUTOMOBILISMO10.mp4',
    thumbnail: '',
  },
  {
    slug: 'automobilismo11',
    title: 'AUTOMOBILISMO 11',
    category: 'automobilismo',
    fileName: 'AUTOMOBILISMO11.mp4',
    thumbnail: '',
  },
  {
    slug: 'automobilismo12',
    title: 'AUTOMOBILISMO 12',
    category: 'automobilismo',
    fileName: 'AUTOMOBILISMO12.mp4',
    thumbnail: '',
  },
  {
    slug: 'automobilismo13',
    title: 'AUTOMOBILISMO 13',
    category: 'automobilismo',
    fileName: 'AUTOMOBILISMO13.mp4',
    thumbnail: '',
  },
  {
    slug: 'automobilismo14',
    title: 'AUTOMOBILISMO 14',
    category: 'automobilismo',
    fileName: 'AUTOMOBILISMO14.mp4',
    thumbnail: '',
  },
  {
    slug: 'automobilismo15',
    title: 'AUTOMOBILISMO 15',
    category: 'automobilismo',
    fileName: 'AUTOMOBILISMO15.mp4',
    thumbnail: '',
  },
  {
    slug: 'automobilismo16',
    title: 'AUTOMOBILISMO 16',
    category: 'automobilismo',
    fileName: 'AUTOMOBILISMO16.mp4',
    thumbnail: '',
  },
  {
    slug: 'automobilismo17',
    title: 'AUTOMOBILISMO 17',
    category: 'automobilismo',
    fileName: 'AUTOMOBILISMO17.mp4',
    thumbnail: '',
  },
  {
    slug: 'automobilismo18',
    title: 'AUTOMOBILISMO 18',
    category: 'automobilismo',
    fileName: 'AUTOMOBILISMO18.mp4',
    thumbnail: '',
  },
  {
    slug: 'automobilismo19',
    title: 'AUTOMOBILISMO 19',
    category: 'automobilismo',
    fileName: 'AUTOMOBILISMO19.mp4',
    thumbnail: '',
  },
  {
    slug: 'automobilismo20',
    title: 'AUTOMOBILISMO 20',
    category: 'automobilismo',
    fileName: 'AUTOMOBILISMO20.mp4',
    thumbnail: '',
  },
  {
    slug: 'automobilismo21',
    title: 'AUTOMOBILISMO 21',
    category: 'automobilismo',
    fileName: 'AUTOMOBILISMO21.mp4',
    thumbnail: '',
  },
  {
    slug: 'automobilismo22',
    title: 'AUTOMOBILISMO 22',
    category: 'automobilismo',
    fileName: 'AUTOMOBILISMO22.mp4',
    thumbnail: '',
  },
  {
    slug: 'automobilismo23',
    title: 'AUTOMOBILISMO 23',
    category: 'automobilismo',
    fileName: 'AUTOMOBILISMO23.mp4',
    thumbnail: '',
  },
  {
    slug: 'automobilismo24',
    title: 'AUTOMOBILISMO 24',
    category: 'automobilismo',
    fileName: 'AUTOMOBILISMO24.mp4',
    thumbnail: '',
  },
  {
    slug: 'automobilismo25',
    title: 'AUTOMOBILISMO 25',
    category: 'automobilismo',
    fileName: 'AUTOMOBILISMO25.mp4',
    thumbnail: '',
  },
  {
    slug: 'automobilismo26',
    title: 'AUTOMOBILISMO 26',
    category: 'automobilismo',
    fileName: 'AUTOMOBILISMO26.mp4',
    thumbnail: '',
  },
  {
    slug: 'automobilismo27',
    title: 'AUTOMOBILISMO 27',
    category: 'automobilismo',
    fileName: 'AUTOMOBILISMO27.mp4',
    thumbnail: '',
  },
  {
    slug: 'automobilismo28',
    title: 'AUTOMOBILISMO 28',
    category: 'automobilismo',
    fileName: 'AUTOMOBILISMO28.mp4',
    thumbnail: '',
  },
  {
    slug: 'automobilismo29',
    title: 'AUTOMOBILISMO 29',
    category: 'automobilismo',
    fileName: 'AUTOMOBILISMO29.mp4',
    thumbnail: '',
  },
  {
    slug: 'automobilismo30',
    title: 'AUTOMOBILISMO 30',
    category: 'automobilismo',
    fileName: 'AUTOMOBILISMO30.mp4',
    thumbnail: '',
  },
  {
    slug: 'automobilismo31',
    title: 'AUTOMOBILISMO 31',
    category: 'automobilismo',
    fileName: 'AUTOMOBILISMO31.mp4',
    thumbnail: '',
  },
]
