import React from 'react';

const Header = ({ title }) => (
	<header>
		<nav className="nav-wrapper light-blue darken-3">
			<a className="brand-logo center">{title}</a>
		</nav>
	</header>
);

export default Header;
