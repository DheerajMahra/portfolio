import React from 'react'
import './NavItem.css'

class NavItem extends React.Component {

    constructor(props) {
        super(props)
        this.label = React.createRef()
    }

    render() {
        return (
            <li className="Navigation__item">

                <label 
                    className="Navigation__close-on-click"
                    htmlFor="nav-toggler"
                    ref={this.label}
                ></label>

                <a
                    className="Navigation__link"
                    href={this.props.href}
                    onClick={() => this.label.current.click()}
                >
                    {this.props.children}
                </a>

            </li>
        )
    }
}

export default NavItem
