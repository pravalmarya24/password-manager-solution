import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import PasswordListItems from '../PasswordListItem'

class Password extends Component {
  state = {
    passwordList: [],
    userName: '',
    websiteName: '',
    password: '',
    count: 0,
    isActive: false,
    searchInput: '',
  }

  onSubmitUserPassword = event => {
    const {websiteName, userName, password, count} = this.state
    event.preventDefault()

    const userPasswordInfo = {
      id: uuidv4(),
      websiteName,
      userName,
      password,
      count,
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, userPasswordInfo],
      userName: '',
      password: '',
      websiteName: '',
      count: prevState.count + 1,
    }))
  }

  onGettingWebsiteName = event => {
    this.setState({websiteName: event.target.value})
  }

  onGettingUserName = event => {
    this.setState({userName: event.target.value})
  }

  onGettingPassword = event => {
    this.setState({password: event.target.value})
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  ondeleteListItems = id => {
    const {passwordList} = this.state
    const deleteFilteredList = passwordList.filter(eachId => eachId.id !== id)
    this.setState(prevState => ({
      passwordList: deleteFilteredList,
      count: prevState.count - 1,
    }))
  }

  isChecked = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  render() {
    const {
      passwordList,
      websiteName,
      password,
      userName,
      count,
      searchInput,
      isActive,
    } = this.state

    const filteredSearchInputList = passwordList.filter(each =>
      each.websiteName.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="password-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo-size"
        />
        <div className="add-new-password-card-container">
          <form className="form-container" onSubmit={this.onSubmitUserPassword}>
            <h1 className="add-new-password-heading">Add New Password</h1>
            <div className="website-input-container">
              <div className="website-logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="website-logo-size"
                />
              </div>
              <input
                type="text"
                placeholder="Enter Website"
                className="text-elem-website"
                onChange={this.onGettingWebsiteName}
                value={websiteName}
              />
            </div>
            <div className="website-input-container">
              <div className="website-logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="website-logo-size"
                />
              </div>
              <input
                type="text"
                placeholder="Enter Username"
                className="text-elem-website"
                onChange={this.onGettingUserName}
                value={userName}
              />
            </div>
            <div className="website-input-container">
              <div className="website-logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="website-logo-size"
                />
              </div>
              <input
                type="password"
                placeholder="Enter Password"
                className="text-elem-website"
                onChange={this.onGettingPassword}
                value={password}
              />
            </div>
            <div className="button-container">
              <button className="add-btn" type="submit">
                Add
              </button>
            </div>
          </form>
          <div className="password-manager-img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager-size"
            />
          </div>
        </div>
        <div className="password-list-card-container">
          <div className="your-password-counter-container">
            <div className="heading-count-para-container">
              <h1 className="your-password-heading">Your Passwords</h1>
              <div className="counter-container">
                <p className="counter-para">{count}</p>
              </div>
            </div>
            <div className="search-input-container">
              <div className="search-logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-logo-size"
                />
              </div>
              <input
                type="search"
                placeholder="Enter search"
                className="text-elem-search"
                onChange={this.onSearchInput}
              />
            </div>
          </div>
          <hr className="horizontal-line" />
          <div className="checkbox-container">
            <input
              type="checkbox"
              className="checkbox-size"
              id="checkboxId"
              onClick={this.isChecked}
            />
            <label className="label-element" htmlFor="checkboxId">
              Show Passwords
            </label>
          </div>
          <ul className="unordered-list">
            {filteredSearchInputList.length === 0 ? (
              <div className="no-password-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-password-image"
                />
                <p className="no-password-para">No Passwords</p>
              </div>
            ) : (
              filteredSearchInputList.map(eachList => (
                <PasswordListItems
                  userInfo={eachList}
                  key={eachList.id}
                  ondeleteListItems={this.ondeleteListItems}
                  isValid={isActive}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default Password
