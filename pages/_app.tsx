import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="mx-auto max-w-4xl  py-10 px-5">
        <main className="mx-auto max-w-3xl space-y-12 md:py-24">
          <Component {...pageProps} />
        </main>

        <footer className="mx-auto mt-20 max-w-3xl border-t-2 border-white/10 p-4 py-10 opacity-50">
          <h1 className="text-3xl font-bold">Kayla</h1>
          <p>Software Engineer • {new Date().getFullYear()}</p>
        </footer>
      </div>
    </>
  )
}
