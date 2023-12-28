import React from 'react';
import '../styles/Header1.css';
import MenuIcon from '../assets/menu.svg';

function Header1() {
	return (
		<>
			<nav className='nav'>
				<div className='nav-container'>
					<h1 className='nav-logo'>AG</h1>
					<label for='menu' className='nav-label'>
						<img src={MenuIcon} alt='icon-menu-nav' className='nav-img' />
					</label>
					<input type='checkbox' id='menu' className='nav-input' />

					<div className='nav-menu'>
						<a className='nav-item' href='/'>Inicio</a>
						<a className='nav-item' href='/'>Acerca de</a>
						<a className='nav-item' href='/'>Contacto</a>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Header1;