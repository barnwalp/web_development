import React from "react";
import hero from './assets/hero.png';
import { TbHotelService } from "react-icons/tb";
import './nav.scss';

function Nav() {
	return (
		<div className="header">
			<div className="nav">
				<h3><TbHotelService /> restinn</h3>
			</div>
			<div className="hero">
				<img src={hero} alt="hero" />
			</div>
		</div>

	)
}

export default Nav
