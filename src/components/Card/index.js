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
              <img src={icon} id='icon' alt={icon} />
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

/*

   <div class="film-card">
    <img src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg" alt="" class="film-card__img">
    <div data-id="tt1375666" class="film-card__info-backdrop">
      <div class="film-card__info">
        <h3 class="tertiary-heading bottom-margin-small">Inception</h3>
        <div class="film-card__details">
          <p class="sub-paragraph all-caps">PG-13</p>
          <p class="sub-paragraph all-caps">$292M</p>
        </div>
          <p class="sub-paragraph smaller all-caps">Action,  Adventure</p>  
      </div>
    </div>
  </div>

*/
