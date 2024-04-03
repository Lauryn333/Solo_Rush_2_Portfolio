import './App.css'
import Header from "./components/Header"
import Languages from './components/Languages'
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {

  const projects = [
    {
      nameProject: "Projet 1",
      image: "https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, consequuntur?"
    },
    {

      nameProject: "Projet 2",
      image: "https://images.pexels.com/photos/7031674/pexels-photo-7031674.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, consequuntur?"
    },
    {

      nameProject: "Projet 3",
      image: "https://images.pexels.com/photos/2910028/pexels-photo-2910028.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, consequuntur?"
    }
  ]

  return (
    <>
      <Header />
      <Languages />
      <section className='projects_section'>
        <Projects projects={projects} />
      </section>
      <Contact />
    </>
  )
}

export default App
