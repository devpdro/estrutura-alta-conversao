import type { AppProps } from 'next/app'
import 'src/presentation/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
 