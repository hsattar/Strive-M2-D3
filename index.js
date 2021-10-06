let travelDestinations = document.getElementsByClassName('travel-destination')
let jumbotronSubheading = document.getElementById('jumbotron-subheading')

jumbotronSubheading.innerText = `We Have ${travelDestinations.length} Great Destinations To Choose From`


const removeCards = () => {
    let cards = document.querySelectorAll('.card')
    
    for (let card of cards) {
        card.remove()
    }
}