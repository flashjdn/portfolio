import './styles.css'

const Card = ({ name, img, desc, demo, github, stack }) => {
  return (
    <article className="card-cont">
      <div className="card">
        <div className="img-div">
          <img className="card-image" src={img} alt="my project" />
        </div>
        <div className="info hidden">
          <div className="stack">
            {stack.map((icon) => (
              <img src={icon} id="icon" alt={icon} />
            ))}
          </div>
          <div className="description">
            <p>{desc}</p>
          </div>
          <div className="buttons">
            <a className="button1" href={demo}>
              Demo
            </a>

            <a className="button2" href={github}>
              Github
            </a>
          </div>
        </div>
      </div>
      <h3>{name}</h3>
    </article>
  )
}

export default Card
