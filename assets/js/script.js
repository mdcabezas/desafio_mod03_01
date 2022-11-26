// Inicializa constantes formulario  
const $color = document.querySelector("#color");
const $quantity = document.querySelector("#quantity");
const $price = document.querySelector("#price");
// Inicializa constantes Resultado
const $displayAmount = document.querySelector("#displayAmount");
const $displayQty = document.querySelector("#displayQty");
const $displayColor = document.querySelector("#displayColor");

function handleChange() {
    // Obtiene total multiplicando precio por cantidad
    const amount = Number($price.textContent) * $quantity.value;
    // Mostrar valores calculados 
    $displayAmount.innerHTML = amount;
    $displayQty.innerHTML = $quantity.value;
    $displayColor.style.background = $color.value;
}