import React , {Component} from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render () {
        return (
            <nav>
                <div className = "nav-wrapper">
                    <ul className = "right">
                        <li>
                            <Link to = "/">Home</Link>
                        </li>
                        <li>
                            <Link to = "/quotes">Quotes</Link>
                        </li>
                        <li>
                            <Link to = "/sign-in">Sign In</Link>
                        </li>
                        <li>
                            <Link to = "/sign-up">Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;