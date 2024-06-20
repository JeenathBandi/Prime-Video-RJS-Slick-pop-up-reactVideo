// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-banner"
      />
      <div className="division-2">
        <MoviesSlider moviesList={moviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
