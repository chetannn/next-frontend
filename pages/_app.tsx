import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <div className="font-sans dark:bg-gray-900 antialiased bg-gray-100">
          <Component {...pageProps} />
     </div>
  );
  
  
}
export default MyApp