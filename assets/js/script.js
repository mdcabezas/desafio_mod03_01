function handleChange() {
    // Asignacion constantes    
    const color = document.querySelector("#color").value;
    const quantity = document.querySelector("#quantity").value;
    const price = document.querySelector("#price").textContent;

    // Calcular total de precio por cantidad
    const amount = Number(price) * quantity;

    // Mostrar valores calculados 
    document.querySelector("#amount").innerHTML = amount;
    document.querySelector("#displayQty").innerHTML = quantity;
    document.querySelector("#displayColor").style.background = color;
}