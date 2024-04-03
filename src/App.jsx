import './App.css'
import Header from "./components/Header"
import Projects from "./components/Projects"

function App() {

  const projects = [
    {
      nameProject: "Project 1",
      image: "https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, consequuntur?"
    },
    {

      nameProject: "Project 2",
      image: "https://images.pexels.com/photos/7031674/pexels-photo-7031674.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, consequuntur?"
    },
    {

      nameProject: "Project 3",
      image: "https://images.pexels.com/photos/2910028/pexels-photo-2910028.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, consequuntur?"
    }
  ]

  return (
    <>
      <Header />
      <section className='projects_section'>
        <Projects projects={projects} />
      </section>
    </>
  )
}

export default App
