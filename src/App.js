import React from 'react' 
import './assets/css/style.css'

import Navbar from './assets/components/navbar.js'
import FrontPg from './assets/components/frontpg.js'
import AbilityWrapper from './assets/components/abilityWrapper.js'
import Esport from './assets/components/esports.js' 
import Footer from './assets/components/footer.js'

export default function App(){

		
	
	return(
		<>
			<Navbar />
			<FrontPg />
			<AbilityWrapper />
			<Esport />
			<Footer />
		</>
	)
}
 