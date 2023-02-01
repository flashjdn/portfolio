import './styles.css'
import cv from '../../assets/cv.pdf'

function Footer() {
  return (
    <div className="footer">
      <div className="icons">
        <a
          className="fa-brands fa-github footer-button"
          href="https://github.com/flashjdn"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
        </a>
        <a
          className="fa-brands fa-linkedin footer-button"
          href="https://www.linkedin.com/in/jordanflash/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
        </a>
        <a
          className="fa-solid fa-envelope footer-button"
          href="mailto:flash.jordan.3@gmail.com"
          subject="Job opportunity"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
        </a>
        <a
          className="fa-solid fa-file footer-button"
          href={cv}
          download="Jordan Flash CV"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
        </a>
      </div>
      <h5 className="copyright">Design by Jordan Flash</h5>
    </div>
  )
}

export default Footer
