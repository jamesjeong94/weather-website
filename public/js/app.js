console.log(`client side javascript file is loaded`)



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const weatherMessage = document.getElementById('weather')
const errorMessage = document.getElementById('errorMsg')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    errorMessage.textContent = 'Loading'
    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if(data.error){
                console.log(data.error)
                errorMessage.textContent = `${data.error}`
            }
            else{
                weatherMessage.textContent = `${data.location} \n ${data.forecast}`
                console.log(data.location)
                console.log(data.forecast)
            }
        })
    })
})