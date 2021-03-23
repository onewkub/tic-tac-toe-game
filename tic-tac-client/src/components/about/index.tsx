import './styles.scss'
import BackNavigator from 'components/backNavigator'
import githubLogo from './github-logo/GitHub-Mark-Light-120px-plus.png'
import facebookLogo from './facebook-logo/facebook-512.png'
function About() {
  return (
    <div className="about">
      <BackNavigator />
      <h3>About me</h3>
      <img style={{ width: 120, margin: '0 auto' }} src={githubLogo} />
      <a href="https://github.com/onewkub">github.com/onewkub</a>
      <div style={{ height: 36 }}></div>
      <img style={{ width: 120, margin: '0 auto' }} src={facebookLogo} />
      <a href="https://facebook.com/onewkub">facebook.com/onewkub</a>
    </div>
  )
}

export default About
