import Tile from '../Tile'
import './styles.css'
import placeholder from '../../assets/images/placeholder.jpeg'
import turnup from '../../assets/images/turnup-img.png'
// import Card from '../FancyCard'

const Projects = () => {
  let apps = [
    {
      name: 'Wack',
      img: placeholder,
      desc: '',
      link: '',
      stack: '',
    },
    {
      name: 'Wack',
      img: placeholder,
      desc: '',
      link: '',
      stack: '',
    },
    {
      name: 'Wack',
      img: placeholder,
      desc: '',
      link: '',
      stack: '',
    },
    {
      name: 'TurnUp',
      img: turnup,
      desc: 'A web based app designed to help people find and advertise free events in their local area. Created in three weeks within an agile team of new devs. ',
      link: 'https://production.d3hv43jagk7qg5.amplifyapp.com/',
      stack: 'JavaScript, React, Heroku, Node, MUI, Express, AWS ',
    },
  ]

  return (
    <section id="project-container">
      <h1> My projects</h1>
      <div id="display">{apps.map((app) => <Tile {...app} />)}</div>
      {/* <div class="container">
        <Card />
        <Card />
        <Card />
        <Card />
      </div> */}
    </section>
  )
}

export default Projects
