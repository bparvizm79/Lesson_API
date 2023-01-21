//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//56061f3090bcdbff496a8aea064c9e3f

const apikey="56061f3090bcdbff496a8aea064c9e3f"
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apikey}`).then((res)=>{
    console.log(res.data)
})