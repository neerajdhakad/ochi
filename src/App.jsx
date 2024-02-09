import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Markquee from './components/Marquee'
function App() {

  return (
    <>
    <div className="w-full h-screen text-white">
      <Navbar/>
      <LandingPage/>
      <Markquee/>
    </div>
    </>
  )
}

export default App
