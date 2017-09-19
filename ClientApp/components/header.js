import React, { Component } from "react"
import { connect } from "react-redux"
import { Link, NavLink } from "react-router-dom"

class Header extends Component {

	render() {
		return (
			<header className="header">
				<div className="container">
					<nav className="navbar">
						<div className="navbar-brand">
							<a className="navbar-item" href="/">
								<img src="/images/logo-header.png" width="66" height="28" />
							</a>

							<div className="navbar-burger burger">
								<span></span>
								<span></span>
								<span></span>
							</div>
						</div>

						<div className="navbar-menu">
							<div className="navbar-start">
								<Link className="navbar-item" to="/reading">Reading</Link>
								<Link className="navbar-item" to="/writing">Writing</Link>
								<Link className="navbar-item" to="/configuration">Configuration</Link>
								<Link className="navbar-item" to="/type-converters">Type Converters</Link>
								<Link className="navbar-item" to="/change-log">Change Log</Link>
							</div>
						</div>
					</nav>
				</div>

				{/*
				The actual navbar above is fixed so we need to add the same amount of space
				to the top of the page so it's not hidden behind the header.
				*/}
				<div className="navbar">
				</div>
			</header>
		)
	}

}

export default connect()(Header)