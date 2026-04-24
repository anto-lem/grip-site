import './globals.css'

export const metadata = {
  title: 'Grip : Your Marketing System — Build & Own Your Marketing',
  description: 'Grip is a certified marketing program for entrepreneurs and business owners who want to stop depending on agencies and build their own marketing system. Structured. Measurable. Certified.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
