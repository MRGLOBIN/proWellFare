import { Inter, Lusitana, Roboto } from 'next/font/google'

export const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
})

export const inter = Inter({ subsets: ['latin'] })

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
})
