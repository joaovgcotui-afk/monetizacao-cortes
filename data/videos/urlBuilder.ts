export const FIREBASE_BUCKET = 'monetizacao-cortes-studio.firebasestorage.app'

export function buildFirebaseUrl(category: string, fileName: string) {
  const path = `${category.toUpperCase()}%2F${fileName}`
  return `https://firebasestorage.googleapis.com/v0/b/${FIREBASE_BUCKET}/o/${path}?alt=media`
}
