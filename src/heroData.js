export default {
	'hero':{
			'Abaddon':[
				{
					key:'q',
					img:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/abaddon_death_coil.png',
					vid:'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/abaddon/abaddon_death_coil.webm',
					name:'mist coil',
					desc:'Abaddon releases a coil of deathly mist that can damage an enemy unit or heal a friendly unit at the cost of some of Abaddon\'s health.',
					on:true
				},
				{				
					key:'w',
					img:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/abaddon_aphotic_shield.png',
					vid:'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/abaddon/abaddon_aphotic_shield.webm',
					name:'aphotic shield',
					desc:'Summons dark energies around an ally unit, creating a shield that absorbs a set amount of damage before expiring. When the shield is destroyed it will burst and deal damage equal to the amount it could absorb to an area around it. Removes certain types of negative buffs and stuns on cast.',
					on:false
				},
				{
					key:'e',
					img:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/abaddon_frostmourne.png',
					vid:'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/abaddon/abaddon_frostmourne.webm',
					name:'curse of avernus',
					desc:'Abaddon strikes an enemy, slowing the target\'s movement speed. If the target gets hit 4.0 times, they become affected by a chilling curse causing them to be silenced and slowed, and all attacks against them gain an attack speed boost.',
					on:false
				},
				{
					key:'r',
					img:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/abaddon_borrowed_time.png',
					vid:'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/abaddon/abaddon_borrowed_time.webm',
					name:'borrowed time',
					desc:'When activated, all damage dealt to you will heal instead of harm. Most negative buffs will also be removed. If the ability is not on cooldown, it will automatically activate if your health falls below 400.0.',
					on:false
				}
			],	
				
			'Enigma':[
				{
					key:'q',
					img:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/enigma_malefice.png',
					vid:'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/enigma/enigma_malefice.webm',
					name:'Malefice',
					desc:'Focuses Enigma\'s power on a target, causing it to take damage and become repeatedly stunned for multiple instances.  An instance strikes every 2.0 seconds.',
					on:true
				},
				{
					key:'w',
					img:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/enigma_demonic_conversion.png',
					vid:'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/enigma/enigma_demonic_conversion.webm',
					name:'Demonic Conversion',
					desc:'Transforms a creep into three fragments of Enigma himself.  These eidolons are all under Enigma\'s control, and repeated successful attacks cause them to multiply.  When this happens, the eidolons have their health restored.',
					on:false
				},
				{
					key:'e',
					img:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/enigma_midnight_pulse.png',
					vid:'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/enigma/enigma_midnight_pulse.webm',
					name:'Midnight Pulse',
					desc:'Steeps an area in dark resonance, damaging enemy units based on their current HP.',
					on:false
				},
				{
					key:'r',
					img:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/enigma_black_hole.png',
					vid:'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/enigma/enigma_black_hole.webm',
					name:'Black Hole',
					desc:'CHANNELED - Summons a vortex that sucks in nearby enemy units.  Enemies affected by Black Hole cannot move, attack, or cast spells.',
					on:false
				}
			],

			'Fv':[
				{
					key:'q',
					img:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/faceless_void_time_walk.png',
					vid:'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/faceless_void/faceless_void_time_walk.webm',
					name:'Time Walk',
					desc:'Rushes to a target location while backtracking any damage taken the last 2.0 seconds.',
					on:true
				},
				{
					key:'w',
					img:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/faceless_void_time_dilation.png',
					vid:'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/faceless_void/faceless_void_time_dilation.webm',
					name:'Time Dilation',
					desc:'Faceless Void traps all nearby enemies in a time dilation field for 8.0 seconds, extending their cooldowns and slowing their movement and attack speed by 10.0% for each cooldown extended. Deals bonus damage per second for each cooldown.',
					on:false
				},
				{
					key:'e',
					img:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/faceless_void_time_lock.png',
					vid:'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/faceless_void/faceless_void_time_lock.webm',
					name:'Time Lock',
					desc:'Adds the chance for an attack to lock an enemy unit in time while attacking it a second time.',
					on:false
				},
				{
					key:'r',
					img:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/faceless_void_chronosphere.png',
					vid:'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/faceless_void/faceless_void_chronosphere.webm',
					name:'Chronosphere',
					desc:'Creates a blister in spacetime, trapping all units caught in its sphere of influence and causes you to move very quickly inside it.  Only Faceless Void and any units he controls are unaffected.  Invisible enemies in the sphere will be revealed.',
					on:false
				}
			],
			'Pango':[
				{
					key:'q',
					img:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/pangolier_swashbuckle.png',
					vid:'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/pangolier/pangolier_swashbuckle.webm',
					name:'Swashbuckle',
					desc:'Vector Targeted. Pangolier dashes along the target line, then slashes all enemies in the drawn direction with several quick swipes. Lucky Shot has a chance to activate from this damage.',
					on:true
				},
				{
					key:'w',
					img:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/pangolier_shield_crash.png',
					vid:'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/pangolier/pangolier_shield_crash.webm',
					name:'Shield Crash',
					desc:'Pangolier jumps in the air and slams back to the ground in front of his current position, damaging and slowing all enemies in a radius. For each enemy hero hit, he gains a percentage of incoming damage reduction for a short time.Forward movement is maintained if Shield Crash is used while Rolling Thunder is active, and allows Rolling Thunder to clear walls or cliffs.',
					on:false
				},
				{
					key:'e',
					img:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/pangolier_lucky_shot.png',
					vid:'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/pangolier/pangolier_lucky_shot.webm',
					name:'Lucky Shot',
					desc:'Pangolier rolls the dice and lets fate decide the outcome for his enemies. Grants a chance to apply a Disarm and reduce armor on any damage dealt by Pangolier\'s attacks or abilities.',
					on:false
				},
				{
					key:'r',
					img:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/pangolier_gyroshell.png',
					vid:'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/pangolier/pangolier_gyroshell.webm',
					name:'Rolling Thunder',
					desc:'Pangolier curls into a spell-immune ball and rolls out. When rolling, he moves at an increased speed and can move through trees, but has a decreased ability to turn. Striking enemies knocks them back, inflicting damage and stunning them when they land. Colliding with walls or cliffs will cause a temporary pause while Pangolier reverses in direction.',
					on:false
				}
			],
			'Mk':[
				{
					key:'q',
					img:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/monkey_king_boundless_strike.png',
					vid:'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/monkey_king/monkey_king_boundless_strike.webm',
					name:'Boundless Strike',
					desc:'Monkey King enlarges his staff and slams it against the ground, stunning enemies in a line and damaging them with a critical hit based on his attack. Has True Strike.',
					on:true
				},
				{
					key:'w',
					img:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/monkey_king_tree_dance.png',
					vid:'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/monkey_king/monkey_king_tree_dance.webm',
					name:'Tree Dance',
					desc:'Monkey King jumps to a tree and perches atop it. While perched, he gains the Primal Spring ability-a channeled leap attack. If Monkey King\'s tree is destroyed, he falls and is stunned for 4 seconds. Taking damage from player controlled units or Roshan while on the ground puts Tree Dance on cooldown.',
					on:false
				},
				{
					key:'e',
					img:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/monkey_king_jingu_mastery.png',
					vid:'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/monkey_king/monkey_king_jingu_mastery.webm',
					name:'Jingu Mastery',
					desc:'Monkey King\'s attacks awaken the Jingu Bang\'s power. Upon the fourth hit on the same enemy hero, Monkey King earns four charged attacks that have bonus damage and lifesteal.',
					on:false
				},
				{
					key:'r',
					img:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/monkey_king_wukongs_command.png',
					vid:'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/monkey_king/monkey_king_wukongs_command.webm',
					name:'Wukong\'s Command',
					desc:'Monkey King creates a circular formation of soldiers that spread out from his position. If Monkey King leaves the area his soldiers disperse. The soldiers have Monkey King\'s attack and only target heroes. Monkey King is granted bonus armor for the spell\'s duration.',
					on:false
				}
			],
			'Void':[
				{
					key:'q',
					img:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/void_spirit_aether_remnant.png',
					vid:'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/void_spirit/void_spirit_aether_remnant.webm',
					name:'Aether Remnant',
					desc:'Vector targeted. Void Spirit dispatches a remnant to the target location. The remnant stands watch over the region, facing the direction of his vector. When a unit crosses its gaze, the remnant pulls it in and damages it.',
					on:true
				},
				{
					key:'w',
					img:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/void_spirit_dissimilate.png',
					vid:'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/void_spirit/void_spirit_dissimilate.webm',
					name:'Dissimilate',
					desc:'Void Spirit temporarily fades into the aether, creating a number of portals through which he can reassemble himself. Upon exiting a portal, he damages all enemies in the area.',
					on:false
				},
				{
					key:'e',
					img:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/void_spirit_resonant_pulse.png',
					vid:'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/void_spirit/void_spirit_resonant_pulse.webm',
					name:'Resonant Pulse',
					desc:'Void Spirit wraps himself in a protective shield that absorbs physical damage and emits a single damaging pulse around him. The shield gains increased damage absorption for each enemy hero the pulse hits.',
					on:false
				},
				{
					key:'r',
					img:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/void_spirit_astral_step.png',
					vid:'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/void_spirit/void_spirit_astral_step.webm',
					name:'Astral Step',
					desc:'Void Spirit tears a rift through the astral plane to appear at the target location, attacking all enemies along the path. This attack inflicts a void mark that slows for 1.3 seconds and then detonates.',
					on:false
				}
			],
			'Mars':[
				{
					key:'q',
					img:'',
					vid:'',
					name:'',
					desc:'',
					on:true
				},
				{
					key:'w',
					img:'',
					vid:'',
					name:'',
					desc:'',
					on:false
				},
				{
					key:'e',
					img:'',
					vid:'',
					name:'',
					desc:'',
					on:false
				},
				{
					key:'r',
					img:'',
					vid:'',
					name:'',
					desc:'',
					on:false
				}
			],
		}
}

 
