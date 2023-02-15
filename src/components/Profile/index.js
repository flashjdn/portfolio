import './styles.css'
import avatar from '../../assets/images/flash-headshot.jpg'

//talk about bootcamp graduation and specialisation (tech stack)

const Profile = () => {
  return (
    <section className="container margin">
      <div className="title">
        <h1> Jordan Flash</h1>
        <h3>Junior Software Engineer</h3>
        <div className="underline"></div>
      </div>
      <div className="profile">
        <div className="text">
        <article className='paragraph'>
          <h2>Background</h2>
          <p>Biomedical Sciences graduate from Uni of Southampton</p>
          <p>
            Experience in Event Organisation and Quality Assurance before coming
            into the world of tech
          </p>
          <p>
            Graduated from School of Code in August 2022, a Full Stack Web
            Development Bootcamp.
          </p>
          </article>
          <article className='paragraph '>
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
          </article>
          <article className='paragraph bottom'>
          <h2> FAQ </h2>
          <p className="question">Is your last name really Flash?</p>
          <ul className="answer">
            It actually is, BUT I’ve never watched Flash Gordon, nor am I an
            athletic prodigy so please don’t expect me to win at any sporting
            event.
          </ul>
          <p className="question">Where are you based?</p>
          <ul className="answer">
            I currently live in London, UK and have done for most of my life.
            The only exception is when I moved out to go to university in
            Southampton.
          </ul>
          <p className="question">
            {' '}
            You sound amazing! How can I get in contact with you?
          </p>
          <ul className="answer">
            Flattery gets you everywhere in life. You can find links to my
            socials and CV at the bottom of the page.
          </ul>
          </article>
        </div>
        <img
          className="photo"
          src={avatar}
          alt="A headshot of the page's author, Jordan Flash"
        ></img>
      </div>
      <div className='faq'>
      <article>
      <h2> FAQ </h2>
          <p className="question">Is your last name really Flash?</p>
          <ul className="answer">
            It actually is, BUT I’ve never watched Flash Gordon, nor am I an
            athletic prodigy so please don’t expect me to win at any sporting
            event.
          </ul>
          <p className="question">Where are you based?</p>
          <ul className="answer">
            I currently live in London, UK and have done for most of my life.
            The only exception is when I moved out to go to university in
            Southampton.
          </ul>
          <p className="question">
            {' '}
            You sound amazing! How can I get in contact with you?
          </p>
          <ul className="answer">
            Flattery gets you everywhere in life. You can find links to my
            socials and CV at the bottom of the page.
          </ul>
          </article>
      </div>
    </section>
  )
}

export default Profile
