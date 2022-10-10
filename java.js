
window.addEventListener('DOMContentLoaded', () => {
    generateDays()
})

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const monthView = document.querySelector('.monthView')
const dayBox = document.querySelector('.dayBox')

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
    generateDays()
}

function nextMth() {
    monthEdit ++
    if (monthEdit > 11) {
        monthEdit = 0
        yearEdit ++
    }
    monthView.textContent = months[monthEdit] + ' ' + yearEdit   
    generateDays()
}

function generateDays() {
    dayBox.innerHTML = ''  //empty dayBox
    let daysInMonth = new Date(yearEdit, monthEdit, 0).getDate()

    for (let i = 0; i < daysInMonth; i++) { // generate content in dayBox
        const genDay = document.createElement('div')
        genDay.classList.add ('day')
        genDay.textContent = i + 1
        
        if (dayEdit == (i + 1) && monthEdit == initialMonth && yearEdit == initialYear) {
            genDay.classList.add ('selected')
        }

        genDay.addEventListener('click', () => {
            dayEdit = (i + 1)
            initialMonth = monthEdit 
            initialYear = yearEdit
            generateDays()
        })

        dayBox.appendChild(genDay)
    }
}


