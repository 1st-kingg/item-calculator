const priceInput = document.getElementById('price')

const deliveryInput = document.getElementById('delivery')

const numOfItems = document.getElementById('numOfItems')

const total = document.getElementById('total')

let Items = Number(numOfItems.innerText)

const calculateBill = () =>{
    const price = Number(priceInput.value)
    
    const delivery = Number(deliveryInput.value)
    
    const bill = price + delivery
    
    const itemsTotal = price * Items + delivery
    console.log(itemsTotal)
    
    total.innerText = `$${itemsTotal.toFixed(2)}`
    
}


const increaseItems = () => {
    Items += 1
    
    numOfItems.innerText = Items
    
    calculateBill()
}

const decreaseItems = () => {
    if (Items <= 1) {
        alert("Can't go below 1")
        return false
    }
    
    Items -= 1 
    
    numOfItems.innerText = Items
    
    
    
    calculateBill()
}

