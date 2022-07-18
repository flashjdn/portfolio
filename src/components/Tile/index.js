import placeholder from '../../assets/images/placeholder.jpeg'
import "./tile.css"

const Tile = () => {
  return (
    <article className="tile">
      <img className="tile-image" src={placeholder} alt="my project" />
      <h3> my project</h3>
    </article>
  )
}

export default Tile
