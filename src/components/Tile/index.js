import './tile.css'

const Tile = ({name, img, desc, link, stack}) => {
  return (
    <article className="tile">
      <img className="tile-image" src={img} alt="my project" />

      <h3>{name}</h3>
    </article>
  )
}

export default Tile
