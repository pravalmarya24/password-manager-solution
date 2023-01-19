import './index.css'

const PasswordListItem = props => {
  const {userInfo, ondeleteListItems, isValid} = props
  const {websiteName, userName, password, id} = userInfo
  const firstLetter = userName[0]

  const onDeleteingList = () => {
    ondeleteListItems(id)
  }

  return (
    <li className="list-container">
      <div className="passwords-list-container">
        <div className="name-initial-letter">
          <p className="initial-para">{firstLetter}</p>
        </div>
        <div className="description-para">
          <h1 className="website-name">{websiteName}</h1>
          <p className="username-para">{userName}</p>
          <p className="password-image">
            {isValid ? (
              password
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                alt="star"
                className="star-size"
              />
            )}
          </p>
        </div>
        <button className="delete-btn" type="button" onClick={onDeleteingList}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-image"
            data-testId="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordListItem
