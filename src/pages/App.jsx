// IMPROT STYLE
import './styles/App.css'

import { Header, Footer } from '../components'
import { Home, About, Skills, Projects, Contact } from '../components/sections'
import Banner from '../components/Banner'

export default function App() {
  return (
    <>
      <Banner />
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects /> 
        <Contact />
      </main>
      <Footer />
    </>
  )
}