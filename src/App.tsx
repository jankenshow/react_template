import './css/styles.css'
import IMAGE from './images/react.png'
import LOGO from './images/logo.svg'

export const App = () => {
    return <>
        <h1>React Typescript Webpack Starter Template</h1>
        <img src={IMAGE} alt="React Logo" width="300" height="200" />
        <img src={LOGO} alt="React Logo" width="300" />
    </>
}