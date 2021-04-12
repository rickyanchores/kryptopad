// CREATE COINS ARRAY OBJECTS
let coins = [
    {
        id: 0,
        name: "Bitcoin",
        quantity: "1",
        value: "61K $"
    },
    {
        id: 1,
        name: "Ethereum",
        quantity: "1",
        value: "1.5K $"
    },
    {
        id: 3,
        name: "Cardano",
        quantity: "1",
        value: "1.5 $"
    }
]

//CREATE ARROW FUNCTION 
const createRow = function(newCoin){
    let row = document.createElement('tr')
    let idCell = document.createElement('td')
    let nameCell = document.createElement('td')
    let quantityCell = document.createElement('td')
    let valueCell = document.createElement('td')
    //REMOVE BTN
    let removeBtn = document.createElement('button')
    removeBtn.classList.add('remove-btn')
    removeBtn.innerText = "Remove"

    idCell.innerText = newCoin.id
    nameCell.innerText = newCoin.name
    quantityCell.innerText = newCoin.quantity
    valueCell.innerText = newCoin.value

    row.appendChild(idCell)
    row.appendChild(nameCell)
    row.appendChild(quantityCell)
    row.appendChild(valueCell)
    row.appendChild(removeBtn)

    return row
}

//Create Table Function
let table = document.querySelector('#table1');

const tableFn = function(){
    for ( let i of coins){
        let row = createRow(i)
        table.appendChild(row)
    }
}

tableFn()

// ADD FUNCTIONS

// DOM INPUTS

let nameInput = document.querySelector('input:nth-of-type(1)')