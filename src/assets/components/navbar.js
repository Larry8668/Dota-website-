import React from 'react'

import logo from '../imgs/dota_logo.png'

export default function Navbar(){

	return(
		<>
			<div className='nav'>
				<img src={logo} />
				<div className='nav--content'>
					<ul>
					    <li className='inactive side'><a> Login</a></li>
					    <li className="inactive"><a href="#home">Home</a></li>
					    <li className="inactive"><a href="#heros">Heros</a></li>
					    <li className="inactive"><a href="#esports">Esports</a></li>
	  				</ul>
				</div>
				<a href='https://store.steampowered.com/app/570/Dota_2/'>
				<div className='btn'><i className="fa-brands fa-steam"></i> PLAY FOR FREE</div>
				</a>
			</div>
			<div className='fp--vid'>
				<video loop muted autoPlay>
					<source type='video/webm' src='https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_webm.webm' />
				</video>
			</div>
		</>

	)
}