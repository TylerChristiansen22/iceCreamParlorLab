const iceCream = [{
    name: 'Chocolate',
    price: 1.25,
    quantity: 0
},
{
    name: 'Vanilla',
    price: 1,
    quantity: 0
},
{
    name: 'Strawberry',
    price: 1.25,
    quantity: 0
}]

const toppings = [{
    name: 'Sprinkles',
    quantity: 0,
    price: .25
},
{
    name: 'Chocolate Chips',
    price: .25,
    quantity: 0
},
{
    name: 'Gummy Worms',
    price: .5,
    quantity: 0
}]
const containers = [
    {
        name: 'Waffle Cone',
        price: .25,
        quantity: 0
    },
    {
        name: 'Waffle Bowl',
        price: .50,
        quantity: 0
    },
    {
        name: 'Dipped Cone',
        price: .75,
        quantity: 0
    }
]
let cartElem = document.getElementById('cart')
let cartElem2 = document.getElementById('cart2')
let cartElem3 = document.getElementById('cart3')
let totalElm = document.getElementById('end')

function orderIceCream(flavorName) {
    let foundIceCream = iceCream.find(flavor => flavor.name == flavorName)
    foundIceCream.quantity++
    drawFlavor()
    console.log(foundIceCream)
}
function removeIceCream(flavorName) {
    let foundIceCream = iceCream.find(flavor => flavor.name == flavorName)
    if (foundIceCream.quantity > 0) {
        foundIceCream.quantity--
    }
    drawFlavor()
}
function orderToppings(toppingName) {
    let foundToppings = toppings.find(topping => topping.name == toppingName)
    foundToppings.quantity++
    drawToppings()
    console.log(foundToppings)
}
function removeToppings(toppingName) {
    let foundToppings = toppings.find(topping => topping.name == toppingName)
    if (foundToppings.quantity > 0) {
        foundToppings.quantity--
    }
    drawToppings()
}
function orderContainer(containerName) {
    let totalContainers = 0
    containers.forEach(container => {
        totalContainers += container.quantity
    })
    if (totalContainers < 1) {
        let foundContainers = containers.find(container => container.name == containerName)
        foundContainers.quantity++
        drawContainer()
        console.log(foundContainers)
    }
}
function removeContainer(containerName) {
    let foundContainers = containers.find(container => container.name == containerName)
    if (foundContainers.quantity > 0) {
        foundContainers.quantity--
    }
    drawContainer()
}
function drawFlavor() {
    let template = ''
    iceCream.forEach(flavor => {
        let total = 0
        total += flavor.price * flavor.quantity
        if (flavor.quantity > 0) {
            template += `<div class="row">
                    <div class="col-6">
                        <span>${flavor.name}</span>
                    </div>
                    <div class="col-6 d-flex justify-content-between">
                        <span>${flavor.quantity}</span>
                        <span>${flavor.price}</span>
                        <span>${total}</span>
                    </div>
                </div>`
        }
        console.log(template)
        cartElem.innerHTML = template
        drawTotals()
    })
}
function drawToppings() {
    let template = ''
    toppings.forEach(topping => {
        let total = 0
        total += topping.price * topping.quantity
        if (topping.quantity > 0) {
            template += `<div class="row">
                    <div class="col-6">
                        <span>${topping.name}</span>
                    </div>
                    <div class="col-6 d-flex justify-content-between">
                        <span>${topping.quantity}</span>
                        <span>${topping.price}</span>
                        <span>${total}</span>
                    </div>
                </div>`
        }
        console.log(template)
        cartElem2.innerHTML = template
        drawTotals()
    })
}
function drawContainer() {
    let template = ''
    containers.forEach(container => {
        let total = 0
        total += container.price * container.quantity
        if (container.quantity > 0) {
            template += `<div class="row">
                    <div class="col-6">
                        <span>${container.name}</span>
                    </div>
                    <div class="col-6 d-flex justify-content-between">
                        <span>${container.quantity}</span>
                        <span>${container.price}</span>
                        <span>${total}</span>
                    </div>
                </div>`
        }
        console.log(template)
        cartElem3.innerHTML = template
        drawTotals()
    })
}
function drawTotals() {
    let template = ''
    let total = 0
    iceCream.forEach(flavor => {
        if (flavor.quantity > 0) {
            total += flavor.quantity * flavor.price
        }
    })
    toppings.forEach(topping => {
        if (topping.quantity > 0) {
            total += topping.quantity * topping.price
        }
    })
    containers.forEach(container => {
        if (container.quantity > 0) {
            total += container.quantity * container.price
        }
    })
    template = total.toString()
    totalElm.innerHTML = '$' + template
}
function checkOut() {
    iceCream.forEach(flavor => {
        if (flavor.quantity > 0) {
            flavor.quantity = 0
        }
    })
    toppings.forEach(topping => {
        if (topping.quantity > 0) {
            topping.quantity = 0
        }
    })
    containers.forEach(container => {
        if (container.quantity > 0) {
            container.quantity = 0
        }
    })
    drawToppings()
    drawFlavor()
    drawContainer()
}