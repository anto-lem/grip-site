import './globals.css'

export const metadata = {
  title: 'Grip : Your Marketing System — Build & Own Your Marketing',
  description: 'Grip is a certified marketing program for entrepreneurs and business owners who want to stop depending on agencies a',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MVF2GKJK');`}} />
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MVF2GKJK" height="0" width="0" style="display:none;visibility:hidden"></iframe>`}} />
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  )
}
