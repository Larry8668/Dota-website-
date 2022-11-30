import React from 'react'

export default function Footer(){

	return(
		<footer>
			

			<div className='footer--content'>
				<div className='footer--text'>
					<p> Dota and the Dota logo are trademarks and/or registered trademarks of Valve Corporation. 2022 Valve Corporation, all rights reserved. </p>
				</div>
				<div className='socials'>
					<a href='#'><i class="fa-brands fa-twitter"></i></a>
					<a href='#'><i class="fa-brands fa-linkedin"></i></a>
					<a href='#'><i class="fa-brands fa-github"></i></a>	
				</div>
			</div>

			
			<div className='footer--bgwrapper bgone'>
				<div className='footer--bg1'><div></div><div></div><div></div><div></div></div>
				<div className='footer--bg12'></div>
				<div className='footer--bg13'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
			</div>
			
			<div className='footer--bgwrapper bgtwo'>
				<div className='footer--bg1'><div></div></div>
				<div className='footer--bg12'></div>
				<div className='footer--bg13'><div></div><div></div><div></div><div></div><div></div><div></div></div>
			</div>

			<div className='footer--bg2'></div>

			

		</footer>

	)
}