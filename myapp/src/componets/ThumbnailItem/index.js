import './index.css'

const ThumbnailItem = props => {
  // const {imageDetails, isActive, setActiveThumbnailId} = props
  // const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  // const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`

  const onClickThumbnail = (id) => {

    props.setActiveThumbnailId(id)
  }

  return (
    <ul className="thumbnails-list">
    {props.imagesList.map(eachImage => (
      <li className="thumbnail-list-item">
      <button
        type="button"
        className="thumbnail-button"
        onClick={() => onClickThumbnail(eachImage.id)}
      >
        <img
          src={eachImage.thumbnailUrl}
          alt={eachImage.thumbnailAltText}
          className={eachImage.thumbnailClassName}
        />
      </button>
    </li>
    ))}
  </ul>
  )
}

export default ThumbnailItem
