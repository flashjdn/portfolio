import './styles.css'

const Card = ({ name, img, desc, demo, front, back, stack }) => {
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
            <a className="button" href={demo} target="_blank" rel="noreferrer">
              Demo
            </a>
            {front ? (
              <a
                className="button"
                href={front}
                target="_blank"
                rel="noreferrer"
              >
                Frontend
              </a>
            ) : null}

            {back ? (
              <a
                className="button"
                href={back}
                target="_blank"
                rel="noreferrer"
              >
                Backend
              </a>
            ) : null}
          </div>
        </div>
      </div>
      <h3>{name}</h3>
    </article>
  )
}

export default Card
