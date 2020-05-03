import React from 'react'
import { Link } from 'react-router-dom'

import './main.scss'

type Props = {
}

const Main: React.FC<Props> = ({ children }) => (
    <div className="App">
        <div className="container">
            <header>
                <h1>Squiz Workflow</h1>
                <div className="header_primary-nav">
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="header_profile-box">
                    <Link to="/login">Login</Link>
                </div>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <h1>Footer</h1>
            </footer>
        </div>
    </div>
)

export default Main
