import './styles.css'
import Slideshow from './components/Slideshow'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Header from './components/Header'
function App() {
  return (
    <main>
      <Slideshow />
      <Header />
      <Profile />
      <Projects />
      <Footer />
    </main>
  )
}

export default App
