const day = {
	day: getDay()
}

const date = {
	date: getDate()
}

const time = {
	time: getTime()
}

const condition = {
	image: undefined,
	temperatureC: undefined
}

const hoursData = [
	{
		temperatureC: '',
		image: undefined
	},
	{
		temperatureC: '',
		image: undefined
	},
	{
		temperatureC: '',
		image: undefined
	},
	{
		temperatureC: '',
		image: undefined
	},
	{
		temperatureC: '',
		image: undefined
	},
	{
		temperatureC: '',
		image: undefined
	},
	{
		temperatureC: '',
		image: undefined
	},
	{
		temperatureC: '',
		image: undefined
	},
	{
		temperatureC: '',
		image: undefined
	},
	{
		temperatureC: '',
		image: undefined
	},
	{
		temperatureC: '',
		image: undefined
	},
	{
		temperatureC: '',
		image: undefined
	},
]

function getDay() {
	const currentDate = new Date()
 
	const dayOfWeek = currentDate.getDay()
 
	const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	const  dayName = daysOfWeek[dayOfWeek]
	return dayName
}

function getDate() {
	const currentDate = new Date() 
 
	const year = currentDate.getFullYear() 
	const month = currentDate.getMonth() + 1 
	const day = currentDate.getDate() 
 
	const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}` 
	return formattedDate
}

function getTime() {
	const currentTime = new Date()  

	const hours = currentTime.getHours() 
	const minutes = currentTime.getMinutes()

	const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}` 
	return formattedTime
}

export { day }
export { date }
export { time }
export { condition }
export { hoursData }


