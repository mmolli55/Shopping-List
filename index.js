const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")
const groceryList = []


addButtonEl.addEventListener("click", function() {
    if (inputFieldEl.value) {
        let inputValue = inputFieldEl.value
        groceryList.push(inputValue)
        clearInputFieldEl()
        updateShoppingListEl()
    } 
})

function updateShoppingListEl() {
    clearShoppingListEl()
    if (groceryList.length > 0) {
        groceryList.map(item => appendItemToShoppingListEl(item))
    } else {
          shoppingListEl.innerHTML = "List is currently empty..."
          shoppingListEl.style.display = "flex"
          shoppingListEl.style.justifyContent = "center"
    }
}

function clearShoppingListEl() {
    shoppingListEl.innerHTML = ""
}

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendItemToShoppingListEl(item) {
    let newEl = document.createElement("li")
    newEl.textContent = item

    newEl.addEventListener("dblclick", function() {
        const itemIndex = groceryList.indexOf(item)
        groceryList.splice(itemIndex, 1)
        updateShoppingListEl()
    })
    shoppingListEl.append(newEl)
}