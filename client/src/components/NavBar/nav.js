import React from 'react';
// import { BrowserRouter as Router, Link } from 'react-router-dom';

function Navbar() {
	return (
		// formatting form boot swatch
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						{/* link to home pace (search) */}
						<a className="nav-link" href="/">
							Search
						</a>
					</li>
					{/* link to savedBooks page (saved) */}
					<li className="nav-item">
						<a className="nav-link" href="/saved">
							Saved
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
