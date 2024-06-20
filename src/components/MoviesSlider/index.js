// Write your code here
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  const action = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedy = moviesList.filter(each => each.categoryId === 'COMEDY')
  return (
    <div className="two-slider-container">
      <h1 className="category">Action Movies</h1>
      <Slider {...settings} className="slider-container">
        {action.map(each => (
          <MovieItem actionList={each} key={each.id} />
        ))}
      </Slider>
      <h1 className="category">Comedy Movies</h1>
      <Slider {...settings} className="slider-container">
        {comedy.map(each => (
          <MovieItem actionList={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
