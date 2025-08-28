import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
          <div className="container">
          <section id='home'> <Hero /></section>
          <section id='about'><About /></section>
          <section id='skills'><Skills /></section>
          <section id='projects'><Projects /></section>
          <section id='experience'><Experience /></section>
          <section id='contact'> <Contact /></section>
        </div>
      <Footer />
    </>
  )
}

export default App