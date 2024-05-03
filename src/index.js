import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import styles from "./styles.css"
import { firstLoad } from './doom'

async function getData() {
    // const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=431c923fb26a44249f8105826243004&q=London')
    const response = await fetch('http://api.weatherapi.com/v1/search.json?key=431c923fb26a44249f8105826243004&q=lond')
    return console.log(await response.json())
}

firstLoad()

getData()