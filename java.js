
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const monthView = document.querySelector('.monthView')

const prevBtn = document.querySelector('.arrow.prev-mth')
const nextBtn = document.querySelector('.arrow.next-mth')
prevBtn.addEventListener('click', previousMth)
nextBtn.addEventListener('click', nextMth)

let initialDate = new Date()
let initialYear = initialDate.getFullYear()
let initialMonth = initialDate.getMonth()
let initialDay = initialDate.getDate()

// At the beginning, the current date will be displayed
monthView.textContent = months[initialMonth] + ' ' + initialYear

let dateEdit = initialDate
let yearEdit = initialYear
let monthEdit = initialMonth
let dayEdit = initialDay


function previousMth() {
    monthEdit --
    if (monthEdit < 0) {
        monthEdit = 11
        yearEdit --
    }
    monthView.textContent = months[monthEdit] + ' ' + yearEdit   
    console.log(monthEdit); 
}

function nextMth() {
    monthEdit ++
    if (monthEdit > 11) {
        monthEdit = 0
        yearEdit ++
    }
    monthView.textContent = months[monthEdit] + ' ' + yearEdit   
    console.log(monthEdit); 
}

