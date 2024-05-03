import weatherImg from './64x64/day/113.png'

function firstLoad() {
    const weatherImage = document.querySelector('.weatherImage')
    const hourlyImage = document.querySelectorAll('.horlyImage')

    weatherImage.setAttribute('src', weatherImg)
    hourlyImage.forEach(image => {
        image.setAttribute('src', weatherImg)
    })
    console.log('wd')
}

export { firstLoad }