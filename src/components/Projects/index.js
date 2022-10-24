import Card from '../Card'
import './styles.css'
import placeholder from '../../assets/images/placeholder.jpeg'
import turnup from '../../assets/images/turnup-img.png'
import  * as icons from '../../assets/icons/exports.js'

const Projects = () => {
  let apps = [
    
    {
      name: 'Wack',
      img: placeholder,
      desc: '',
      demo: '',
      github: '',
      stack: [icons.css, icons.html, icons.js, icons.react, icons.node, icons.heroku, icons.postgres, icons.netlify],
    },
  
    {
      name: 'TurnUp',
      img: turnup,
      desc: 'A web based app designed to help people find and advertise free events in their local area. Created in three weeks within an agile team of new devs. ',
      demo: 'https://production.d3hv43jagk7qg5.amplifyapp.com/',
      github: 'https://github.com/SchoolOfCode/final-project_front-end-slack-ops',
      stack: [icons.css, icons.html, icons.js, icons.node, icons.react, icons.aws, icons.heroku, icons.postgres, ],
    },
  ]


  return (
    <section id="project-container">
      <h1> My projects</h1>
      <div id="display">
        {apps.map((app) => (
          <Card {...app} />
        ))}
      </div>
    </section>
  )
}

export default Projects
