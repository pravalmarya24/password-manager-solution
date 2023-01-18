import './index.css'

const PasswordListItem = props => {
  const {userInfo} = props
  const {websiteName, userName, password} = userInfo
  return (
    <div className="password-list-card-container">
      <div className="password-and-search-container">
        <div className="your-password-counter-container">
          <h1 className="your-password-heading">Your Passwords</h1>
          <p className="counter-para">0</p>
        </div>
      </div>
      <div className="checkbox-container">
        <input type="checkbox" className="checkbox-size" id="checkboxId" />
        <label className="label-element" htmlFor="checkboxId">
          Show Passwords
        </label>
      </div>
      <li className="list-container">
        <div className="passwords-list-container">
          <div className="name-initial-letter">
            <p className="initial-para">P</p>
          </div>
          <div className="description-para">
            <h1 className="website-name">{websiteName}</h1>
            <p className="username-para">{userName}</p>
            <p className="password-image">{password}</p>
          </div>
        </div>
      </li>
    </div>
  )
}

export default PasswordListItem
