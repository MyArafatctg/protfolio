 
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import ProjectList from './components/Projects/ProjectList'



const App = () => {
  return (
    <>
  <Navbar/>
    <div className="container">
      <Hero/>
      <About/>
      <Skills/>
      <ProjectList/>
      <Contact/>
    </div>
  <Footer/>
    </>
  )
}

export default App
