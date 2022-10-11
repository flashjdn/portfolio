import './styles.css'
import { useState } from 'react'

function Footer() {
  const [site, setSite] = useState(null);

  
  function openTab(site) {
    window.open(site)
  }
  const github = 'https://github.com/flashjdn'

  return (
    <div className="footer">
      <div className="icons">
        <button class="fa-brands fa-github"></button>
        <button class="fa-brands fa-linkedin"></button>
        <button class="fa-solid fa-envelope"></button>
        <button class="fa-solid fa-file"></button>
      </div>
      <h5> Copyright © 2022 Jordan Flash</h5>
    </div>
  )
}

export default Footer
