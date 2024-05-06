import { condition } from "./functions"
import { firstLoad } from "./doom"
import { hoursData } from "./functions"

function getInput() {
	const input = document.querySelector('.locationInput')
	let value = input.value.toString()
	getData(value)
	hours(value)
	input.value = ''
}

async function getData(city) {
	try {
		const location = document.querySelector('.locationContainer')
		const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=431c923fb26a44249f8105826243004&q=${city}`)
		const data = await response.json()
		condition.temperatureC = data.current.temp_c
		condition.image = data.current.condition.icon
		firstLoad()
		location.textContent = `${data.location.name}`
	} catch (err) {
		console.log(err)
		const parent = document.querySelector('.dropDownContainer')
		while(parent.firstChild) {
			parent.style.display = 'none'
			parent.removeChild(parent.firstChild)
		}
		const input = document.querySelector('.locationInput')
		input.placeholder = 'There`s no such city...'
	}
}

	async function hours(value) {
		const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=431c923fb26a44249f8105826243004&q=${value}`)
		const data = await response.json()
	
		for (let i = 0; i < 12; i++) {
			hoursData[i].temperatureC = await data.forecast.forecastday[0].hour[i + 11].temp_c
			hoursData[i].image = await data.forecast.forecastday[0].hour[i + 11].condition.icon
		}
		firstLoad()
	}

	async function appendDropDown(value) {
		const input = document.querySelector('.locationInput')
		const parent = document.querySelector('.dropDownContainer')
		const response = await fetch(`http://api.weatherapi.com/v1/search.json?
		key=431c923fb26a44249f8105826243004&q=${value}`)
		while(parent.firstChild) {
			parent.style.display = 'none'
			parent.removeChild(parent.firstChild)
		}
		let cities = await response.json()
		if (cities.length >= 1) {
			parent.style.display = 'grid'
			for(let i = 0; i < cities.length; i++) {
				const name = cities[i].name
				const dropdown = document.createElement('option')
				dropdown.textContent = `${name}`
				dropdown.value = `${name}`
				parent.appendChild(dropdown)
				dropdown.addEventListener('click', () => {
					input.value = name
					parent.removeChild(dropdown)
					parent.style.display = 'none'
				})
			}
		}
	}

export { getInput }
export { condition }
export { appendDropDown }