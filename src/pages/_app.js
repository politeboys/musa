import Sidebar from '../components/1-Sidebar/Sidebar'
import Sidebar2 from '../components/1-Sidebar/Sidebar2'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <div className="dsk">
      <Sidebar />
    </div>
    <div className="mobile">
      <Sidebar2 />
    </div>
    <div className="body">
      <Component {...pageProps} />
    </div>
  </>
}

export default MyApp
