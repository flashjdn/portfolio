import './styles.css'
import profile from '../../models/text.js'
import avatar from '../../assets/images/profile-pic.jpg'
// import Header from '../Header'

//talk about bootcamp graduation and specialisation (tech stack)

const Profile = () => {
  return (
    <section className="container">
      <h1> Jordan Flash</h1>
      <h3>Junior Software Engineer</h3>
      <div className="underline"></div>
      <div className="profile">
        <div className="text">
          <h2>Background</h2>
          <p>Biomedical Sciences graduate from Uni of Southampton</p>
          <p>
            Experience in Event Organisation and Quality Assurance before coming
            into the world of tech
          </p>
          <p>
            Enrolled in a bootcamp April 2022 learning Web Dev with JavaScript
          </p>
          <h2>Interests and Hobbies</h2>
          <p>
            {' '}
            Rollerblading: I can go backwards and somehow not fall over (this is
            a lie sometimes I do fall over){' '}
          </p>
          <p>
            {' '}
            Cycling: (not the spandex road bike type, although I’m sure it’s
            very aerodynamic){' '}
          </p>
          <p>
            {' '}
            Incredibly amateur photography: The slideshow on this website is
            comprised of photos all taken by me{' '}
          </p>
          <p>
            {' '}
            Video games: Currently playing Destiny 2 (this is a cry for help){' '}
          </p>
          <h2> FAQ </h2>
          <p> Q: Is your last name really Flash?</p>
          <ul>
            A: It actually is, BUT I’ve never watched Flash Gordon, nor am I an
            athletic prodigy so please don’t expect me to win at any sporting
            event.
          </ul>
        </div>
          <img className='photo' src={avatar} alt="A headshot of the page's author, Jordan Flash"></img>

      </div>
    </section>
  )
}

export default Profile
