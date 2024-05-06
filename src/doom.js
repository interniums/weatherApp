import { day } from './functions'
import { date } from './functions'
import { time } from './functions'
import { condition } from './functions'
import { hoursData } from './functions'
import { getInput } from './new'
import { appendDropDown } from './new'

function firstLoad() {
		const weatherContainer = document.querySelector('.weatherScreenContainer')
    const weatherImage = document.querySelector('.weatherImage')
		const dayHtml = document.querySelector('.day')
		const dateHtml = document.querySelector('.date')
		const timeHtml = document.querySelector('.time')
		const temperature = document.querySelector('.temperature')
		const button = document.querySelector('.submitButton')
		const input = document.querySelector('.locationInput')

		button.addEventListener('click', getInput)
		input.addEventListener('keydown', event=> {
			appendDropDown(input.value)
		})

		for (let i = 0; i < 12; i++) {
			const element = document.querySelector(`[data-index="${i}"]`)
			element.children[2].textContent = `${hoursData[i].temperatureC}`
			element.children[1].setAttribute('src', hoursData[i].image)
		}

		weatherImage.setAttribute('src', condition.image)
		dayHtml.textContent = `${day.day}`
		dateHtml.textContent = `${date.date}`
		timeHtml.textContent = `${time.time}`
		temperature.textContent = `${condition.temperatureC}°C`
	}

export { firstLoad }