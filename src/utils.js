class Utils {
	constructor() { }

	escapeCode = (char) => {
		return char
	}

	/**
	  * 
	  * @param {number[]} array 
	  */
	sum = (array) => {
		return array.reduce((pV, cV, cI, array) => pV + cV)
	}
	/**
	 * 
	 * @param {any[]} array 
	 */
	random = (array) => {
		let real = array.filter(e => typeof e !== undefined)
		return real[Math.floor(Math.random() * real.length)]
	}

	/**
	  * 
	  * @param {number[]} mtx 
	  * @param {number} pos The nth position to cut from
	  */
	slp = (mtx, pos) => {
		let stem = {}
		for (const num of mtx) {
			let n = num % (pos || 10)
			let masterN = String(num)[0]
			if (!stem[masterN]) {
				stem[masterN] = [n]
			} else {
				stem[masterN].push(n)
			}
		}
		return stem
	}

	autoSize = (n) => {
		return { width: n, height: n }
	}
}


export { Utils }