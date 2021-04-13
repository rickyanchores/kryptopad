
//Create Table Function
let table = document.querySelector('#table1');

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
        id: 2,
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
    

    idCell.innerText = newCoin.id
    nameCell.innerText = newCoin.name
    quantityCell.innerText = newCoin.quantity
    valueCell.innerText = newCoin.value

    row.appendChild(idCell)
    row.appendChild(nameCell)
    row.appendChild(quantityCell)
    row.appendChild(valueCell)

    return row
}


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
let quantityInput = document.querySelector('input:nth-of-type(2)')
let valueInput = document.querySelector('input:nth-of-type(3)')
let addBtn = document.getElementById('add-btn')


const createCoin = function(){
    
    let lastCoin = coins[coins.length - 1]

    let newCoin = {
        id: lastCoin.id + 1,
        name: nameInput.value,
        quantity: quantityInput.value,
        value: valueInput.value
    }

    coins.push(newCoin)

    let row = createRow(newCoin)
    table.append(row)   

    nameInput.value = ""
    quantityInput.value = ""
    valueInput.value = ""
}





//EVENTS 

addBtn.onclick = () =>createCoin()

