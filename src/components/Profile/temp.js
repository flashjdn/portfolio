import './styles.css'
import avatar from '../../assets/images/profile-pic.jpg'


//talk about bootcamp graduation and specialisation (tech stack)

const Profile = () => {
  return (
    <section>
      <h1> Jordan Flash</h1>
      <h3>Software engineer</h3>
      <div className='underline'>underline here</div>
      <div className="profile">
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
            <ul>- Biomedical Sciences graduate from Uni of Southampton</ul>
            <ul>
              - Experience in Event Organisation and Quality Assurance before
              coming into the world of tech
            </ul>
            <ul>
              - Enrolled in a bootcamp April 2022 learning Web Dev with
              JavaScript
            </ul>
            <ul>
              - First contract landed with Robert Half in March 2023. See CV for more information.
            </ul>
          </p>
          <h2 className="subheading">Interests and Hobbies</h2>
          <p>
            <ul>
              - Rollerblading: I can go backwards and somehow not fall over
              (this is a lie sometimes I do fall over)
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
              - Video games: Helldivers 2, Tekken 8, Skull and Bones{' '}
            </ul>
          </p>
          <h2 className="subheading">FAQ</h2>
          <p>
            <ul>
              Q: Is your last name really Flash? <br></br>
              <br></br>
              A: It actually is, BUT I’ve never watched Flash Gordon, nor am I
              an athletic prodigy so please don’t expect me to win at any
              sporting event.
            </ul>
            <ul></ul>
            <h4>
              {' '}
              Side note: CSS is currently undergoing reconstruction, and I'm in
              the process of moving over my project databases to MongoDB because
              Heroku wanted to be rude and remove their free tier.{' '}
            </h4>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Profile
