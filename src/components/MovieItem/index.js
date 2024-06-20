// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {actionList} = props
  const {thumbnailUrl, videoUrl} = actionList
  console.log(actionList)
  return (
    <Popup
      modal
      trigger={
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      }
    >
      {close => (
        <>
          <div className="popup-content-container">
            <button
              data-testid="closeButton"
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <div>
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        </>
      )}
    </Popup>
  )
}

export default MovieItem
