import './styles.css'
import avatar from '../../assets/images/profile-pic.jpg'
// import IntroTitle from '../IntroTitle'

//talk about bootcamp graduation and specialisation (tech stack)

const Profile = () => {
  return (
    <section className="profile">
      <div className="img-container">
        <img className="avatar" src={avatar} alt="profile" />
      </div>
      <div className="profile-text">
        <h3>
          I find talking about myself kinda cringe but I guess it’s necessary
          info for a portfolio. Let’s make it brief.
        </h3>
        <h2 className="subheading">Background</h2>
        <p>
          <ul>Biomedical Sciences graduate from Uni of Southampton</ul>
          <ul>
            Experience in Event Organisation and Quality Assurance before coming
            into the world of tech
          </ul>
          <ul>
            Enrolled in a bootcamp April 2022 learning Web Dev with JavaScript
            
          </ul>
        </p>
        <h2 className="subheading">Interests and Hobbies</h2>
        <p>
          <ul>
            - Rollerblading: I can go backwards and somehow not fall over (this
            is a lie sometimes I do fall over)
          </ul>
          <ul>
            - Cycling: (not the spandex road bike type, although I’m sure it’s
            very aerodynamic)
          </ul>
          <ul>
            - Incredibly amateur photography: The slideshow on this website is
            comprised of photos all taken by me
          </ul>
          <ul>
            - Video games: currently playing destiny 2 (this is a cry for help){' '}
          </ul>
        </p>
        <h2 className="subheading">FAQ</h2>
        <p>
          <ul>
            Q: Is your last name really Flash? <br></br>
            <br></br>
            A: It actually is, BUT I’ve never
            watched Flash Gordon, nor am I an athletic prodigy so please don’t
            expect me to win at any sporting event.
          </ul>
          <ul></ul>
        </p>
      </div>
    </section>
  )
}

export default Profile
