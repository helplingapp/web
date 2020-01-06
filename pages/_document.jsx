import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'

class Doc extends Document {
  render() {
    return (
      <html>
        <Head />
        <body className="bg-primary text-white font-sans cursor-default outline-none">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default Doc
