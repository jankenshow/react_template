// import IMAGE from './images/react.png'
// import LOGO from './images/logo.svg'
import { Card } from './Card'
// import { ClickCounter } from './ClickCounter'

export const App = () => {
    const name = 'sample'
    return (
        <>
            <h1>
                React Typescript Webpack Template - {name}
                {/* <br></br>
                {process.env.NODE_ENV} {process.env.name} */}
            </h1>
            <div className="cards">
                <Card />
                <Card />
                <Card />
            </div>
            {/* <img src={IMAGE} alt="React Logo" width="300" height="200" /> */}
            {/* <img
                className="img-content"
                src={LOGO}
                alt="React Logo"
                width="300"
            /> */}
            {/* <ClickCounter /> */}
        </>
    )
}
