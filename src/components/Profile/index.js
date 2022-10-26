import './styles.css'
import avatar from '../../assets/images/profile-pic.jpg'
// import IntroTitle from '../IntroTitle'

const Profile = () => {
  return (
    <section className="profile">
      <div className="img-container">
        <img className="avatar" src={avatar} alt="profile" />
      </div>
      <div id="intro">
        <h3>
          Recent School of Code graduate and full stack developer. Passion for
          science, learning new things and a whole lot more, tune in next time
          on dragonball Z.
        </h3>
      </div>
    </section>
  )
}

export default Profile
