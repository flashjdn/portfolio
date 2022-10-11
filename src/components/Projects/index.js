import Tile from '../Tile'
import './styles.css'

const Projects = () => {
  return (
    <section id="project-container">
      <h1> My projects</h1>
      <div id='display'>
        <Tile />
        <Tile />
        <Tile />
        <Tile />
      </div>
    </section>
  )
}

export default Projects
