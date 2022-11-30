import React from 'react'

import Ability from './ability.js'
import hero from "../../heroData.js"

export default function AbilityWrapper(){


	const [heroData1,setHeroData1] = React.useState(hero.hero.Abaddon)
	const [heroData2,setHeroData2] = React.useState(hero.hero.Mk)
	const [heroData3,setHeroData3] = React.useState(hero.hero.Fv)
	const [heroData4,setHeroData4] = React.useState(hero.hero.Pango)
	const [heroData5,setHeroData5] = React.useState(hero.hero.Void)

	function range(start, end) {
	    var ans = [];
	    for (let i = start; i < end; i++) {
	        ans.push(i);
	    }
	    return ans;
	}
	const bruh1 = heroData1.map(ele=>{
		const newStuff = {ele}
		// console.log(newStuff)
		return newStuff
	})
	const bruh2 = heroData2.map(ele=>{
		const newStuff = {ele}
		// console.log(newStuff)
		return newStuff
	})
	const bruh3 = heroData3.map(ele=>{
		const newStuff = {ele}
		// console.log(newStuff)
		return newStuff
	})
	const bruh4 = heroData4.map(ele=>{
		const newStuff = {ele}
		// console.log(newStuff)
		return newStuff
	})
	const bruh5 = heroData5.map(ele=>{
		const newStuff = {ele}
		// console.log(newStuff)
		return newStuff
	})
	function toggle1(id){
	        setHeroData1(prev=>{
	            return prev.map(ele=>{
	                return ele.key===id ? {...ele , on: true} : {...ele , on: false} 
	            })
	        })
	    }
	 function toggle2(id){
	        setHeroData2(prev=>{
	            return prev.map(ele=>{
	                return ele.key===id ? {...ele , on: true} : {...ele , on: false} 
	            })
	        })
	    }

	 function toggle3(id){
	        setHeroData3(prev=>{
	            return prev.map(ele=>{
	                return ele.key===id ? {...ele , on: true} : {...ele , on: false} 
	            })
	        })
	    }
	 function toggle4(id){
	        setHeroData4(prev=>{
	            return prev.map(ele=>{
	                return ele.key===id ? {...ele , on: true} : {...ele , on: false} 
	            })
	        })
	    }
	 function toggle5(id){
	        setHeroData5(prev=>{
	            return prev.map(ele=>{
	                return ele.key===id ? {...ele , on: true} : {...ele , on: false} 
	            })
	        })
	    }
	const ability1 = heroData1.map(ele=>{
		if(ele.on){
				// console.log(ele.on)
				return <Ability	item={ele} stuff={bruh1} func={toggle1} heroName='aba'/> 
			}
		})

	const ability2 = heroData2.map(ele=>{
		if(ele.on){
				// console.log(ele.on)
				return <Ability	item={ele} stuff={bruh2} func={toggle2} heroName='enigma'/> 
			}
		})
	const ability3 = heroData3.map(ele=>{
		if(ele.on){
				// console.log(ele.on)
				return <Ability	item={ele} stuff={bruh3} func={toggle3} heroName='fv'/> 
			}
		})
	const ability4 = heroData4.map(ele=>{
		if(ele.on){
				// console.log(ele.on)
				return <Ability	item={ele} stuff={bruh4} func={toggle4} heroName='pango'/> 
			}
		})
	const ability5 = heroData5.map(ele=>{
		if(ele.on){
				// console.log(ele.on)
				return <Ability	item={ele} stuff={bruh5} func={toggle5} heroName='void'/> 
			}
		})
	return(
		<div className='app--ability' id='heros'>
			<div className='app--abText'>
				<h1>DISCOVER YOUR HEROS</h1>
				<p>From magical tacticians to fierce brutes and cunning rogues, Dota 2's hero pool is massive and limitlessly diverse. Unleash incredible abilities and devastating ultimates on your way to victory.</p>
				<hr/>
			</div>
			{ability1}
			{ability2}
			{ability3}
			{ability4}
			{ability5}
		</div>
	)
}