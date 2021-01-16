import Sidebar from '../components/1-Sidebar/Sidebar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Sidebar />
    <div className="body">
      <Component {...pageProps} />
    </div>
  </>
}

export default MyApp
