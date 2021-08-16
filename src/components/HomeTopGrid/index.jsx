import './styles.scss'
import headerImage from '../../images/desktop/image-header.jpg'
import eggImage from '../../images/desktop/image-transform.jpg'
import cherryImage from '../../images/desktop/image-graphic-design.jpg'
import tangerineImage from '../../images/desktop/image-photography.jpg'
import cupImage from '../../images/desktop/image-stand-out.jpg'

export default function HomeTopGrid() {
  return (
    <div className="home">
      <div id="top-img">
        <img src={headerImage} alt="" />
      </div>

      <div className="home-grid">
        <div id="first">texto 1</div>
        <div id="second">
          <img src={eggImage} alt="" />
        </div>
        <div id="third">
          <img src={cupImage} alt="" />
        </div>
        <div id="fourth">texto 3</div>
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