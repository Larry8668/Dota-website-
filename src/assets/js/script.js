function range(start, end) {
	    var ans = [];
	    for (let i = start; i < end; i++) {
	        ans.push(i);
	    }
	    return ans;
	}
function toggle(id){
	        setHeroData(prev=>{
	            return prev.map(ele=>{
	                return ele.key===id ? {...ele , on: true} : {...ele , on: false} 
	            })
	        })
	    }