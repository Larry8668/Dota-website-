import React from 'react'

export default function FrontPg() {
	
	function scrollAba() {
		document.getElementById('aba').scrollIntoView({behavior: 'smooth'})
	}
	function scrollMk() {
		document.getElementById('enigma').scrollIntoView({behavior: 'smooth'})
	}
	function scrollFv() {
		document.getElementById('fv').scrollIntoView({behavior: 'smooth'})
	}
	function scrollPango() {
		document.getElementById('pango').scrollIntoView({behavior: 'smooth'})
	}
	function scrollVoid() {
		document.getElementById('void').scrollIntoView({behavior: 'smooth'})
	}
//bruh
	return(
		<>
			<div className='tile-wrapper'>			
				<h1>CHOOSE YOUR HERO</h1>
			</div>
			<br/>
			<div className='tile-wrapper'>
				<div className='Abaddon' onClick={scrollAba}><span className='fadeIn'>Abaddon</span></div>
				<div className='Mk' onClick={scrollMk}><span className='fadeIn'>Monkey King</span></div>
				<div className='Fv' onClick={scrollFv}><span className='fadeIn'>Faceless Void</span></div>
				<div className='Pango' onClick={scrollPango}><span className='fadeIn'>Pangolier</span></div>
				<div className='Void' onClick={scrollVoid}><span className='fadeIn'>Void Spirit</span></div>

			</div>
			<div className='fp--wrapper'>
				<div className='fp--content' id='home'>
					<div className='txt--wrapper'>
						<h1>Dive into the action</h1>

						<p className='fp--text'>
						Dota 2 is played in matches between two teams of five players, with each team occupying and defending their own separate base on the map. Each of the ten players independently controls a powerful character known as a "hero" that all have unique abilities and differing styles of play.
						<hr className='cool'/>
						</p>
					</div>
				</div>
			</div>
			
		</>
	)
}