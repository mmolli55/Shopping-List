const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")
const deleteInstructions = document.getElementById("delete-instructions")

let groceryList = []
if(localStorage.getItem("groceryList")) {
    groceryList = JSON.parse(localStorage.getItem("groceryList"))
    updateShoppingListEl()
} 

inputFieldEl.addEventListener("keypress", function(e) {
    if (inputFieldEl.value && e.key === 'Enter') {
        let inputValue = inputFieldEl.value
        groceryList.push(inputValue)
        updateLocalStorage()
        clearInputFieldEl()
        updateShoppingListEl()
    }
})

addButtonEl.addEventListener("click", function() {
    if (inputFieldEl.value) {
        let inputValue = inputFieldEl.value
        groceryList.push(inputValue)
        updateLocalStorage()
        clearInputFieldEl()
        updateShoppingListEl()
    } 
})

function updateShoppingListEl() {
    clearShoppingListEl()
    if (groceryList.length > 0) {
        groceryList.map(item => appendItemToShoppingListEl(item))
        deleteInstructions.style.display = "block"
    } else {
          shoppingListEl.innerHTML = "List is currently empty..."
          shoppingListEl.style.display = "flex"
          shoppingListEl.style.justifyContent = "center"
          deleteInstructions.style.display = "none"
    }
}

function updateLocalStorage() {
  localStorage.setItem("groceryList", JSON.stringify(groceryList))
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
        updateLocalStorage()
    })
    shoppingListEl.append(newEl)
}