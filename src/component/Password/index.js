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
    }))
  }

  onGettingWebsiteName = event => {
    this.setState({websiteName: event.target.value})
  }

  onGettinguserName = event => {
    this.setState({userName: event.target.value})
  }

  onGettingPassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {passwordList, websiteName, password, userName} = this.state
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
                onChange={this.onGettinguserName}
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
        <ul className="unordered-list">
          {passwordList.map(eachList => (
            <PasswordListItems userInfo={eachList} key={eachList.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Password
