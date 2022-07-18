import './Profile.css'
import avatar from '../../assets/images/avatar.png'

const Profile = () => {
  return (
    <section id="profile">
      <h1> Hello, I'm Jordan</h1>
      <div id="container">
        <img className='avatar' src={avatar} alt="profile" />
      <div id="intro">
        <h3> Id elit et reprehenderit dolor ex sunt. Laboris velit elit sint ipsum labore velit cupidatat veniam cupidatat culpa minim. In occaecat eiusmod est deserunt non non laboris pariatur excepteur pariatur amet.  </h3>
      </div>
      </div>      
    </section>
  )
}

export default Profile
