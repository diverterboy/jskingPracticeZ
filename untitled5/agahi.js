const showTitle = document.getElementById('showTitle')
const showDescription = document.getElementById('desc')
const showPrice = document.getElementById('price')

const userSubject = localStorage.getItem("userSubject")
const userDescription = localStorage.getItem("userDescriPtion")
const userPrice = localStorage.getItem('userPrice')

showTitle.textContent = userSubject
showDescription.textContent = userDescription
showPrice.textContent = userPrice



