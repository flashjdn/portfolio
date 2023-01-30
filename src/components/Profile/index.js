import './styles.css'
import profile from '../../models/text.js'
import avatar from '../../assets/images/profile-pic.jpg'
// import Header from '../Header'

//talk about bootcamp graduation and specialisation (tech stack)

const Profile = () => {
  return (
    <section>
      <h1> Jordan Flash</h1>
      <h3>Software engineer</h3>
      <div className="underline">underline here</div>
      <div className="profile">
        <h2>Background</h2>
        <p>{profile.background}</p>
      </div>
    </section>
  )
}

export default Profile
