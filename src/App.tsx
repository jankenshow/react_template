import './css/styles.css'
// import IMAGE from './images/react.png'
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
            <div className="card-react img-content">
                <div className="card-react-content">
                    <h2 className="card-react-title">text</h2>
                    <p className="card-react-body">
                        Python is a programming language that lets you work
                        quickly and integrate systems more effectively.
                    </p>
                </div>
            </div>
            {/* <img src={IMAGE} alt="React Logo" width="300" height="200" /> */}
            <img
                className="img-content"
                src={LOGO}
                alt="React Logo"
                width="300"
            />
            <ClickCounter />
        </>
    )
}
