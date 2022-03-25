import './styles.scss'
import headerImage from '../../images/desktop/image-header.jpg'
import eggImage from '../../images/desktop/image-transform.jpg'
import cherryImage from '../../images/desktop/image-graphic-design.jpg'
import tangerineImage from '../../images/desktop/image-photography.jpg'
import cupImage from '../../images/desktop/image-stand-out.jpg'

export default function HomeTopGrid() {
  return (
    <div className="home">
      <h1>WE ARE CREATIVES</h1>
      <div id="top-img">
        <img src={headerImage} alt="" />
      </div>

      <div className="home-grid">
        <div id="first">
          <h2>Transform your brand</h2>

          <p>We are a full-service creative agency specializing in helping brands grow fast. 
          Engage your clients through compelling visuals that do most of the marketing for you.</p>

          <a href="#first">Learn more</a>
        </div>

        <div id="second">
          <img src={eggImage} alt="" />
        </div>

        <div id="third">
          <img src={cupImage} alt="" />
        </div>
        
        <div id="fourth">
          <h2>Stand out to the right audience</h2>

          <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>

          <a href="#first">Learn more</a>
        </div>
        
        <div id="fifth">
          <img src={cherryImage} alt="" />
        </div>

        <div id="sixth">
          <img src={tangerineImage} alt="" />
        </div>
      </div>
    </div>
  )
}