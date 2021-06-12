import './css/styles.css'
import IMAGE from './images/react.png'
import LOGO from './images/logo.svg'
import { ClickCounter } from './ClickCounter'

export const App = () => {
    const name = 'sample'
    return (
        <>
            <h1>
                Edited React Typescript Webpack Starter Template - {name}
                {process.env.NODE_ENV} {process.env.name}
            </h1>
            <img src={IMAGE} alt="React Logo" width="300" height="200" />
            <img src={LOGO} alt="React Logo" width="300" />
            <ClickCounter />
        </>
    )
}
