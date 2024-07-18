function calcularPedido() {
    let stockActual = parseFloat(document.getElementById('stock_actual').value);
    let consumoMedio = parseFloat(document.getElementById('consumo_medio').value);
    let leadTime = parseFloat(document.getElementById('lead_time').value);

    let puntoDePedido = consumoMedio * leadTime; // Esto es cuánto consumirás en el lead time
    let consumoDuranteLeadTime = consumoMedio * leadTime; // Consumo durante el tiempo de espera del pedido

    let unidadesAPedir = consumoDuranteLeadTime + puntoDePedido - stockActual;

    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `Punto de Pedido: ${puntoDePedido.toFixed(2)} unidades<br>` +
                             `Unidades a Pedir: ${Math.max(unidadesAPedir, 0).toFixed(2)} unidades<br>` +
                             `Nota: Las unidades a pedir consideran el consumo durante el lead time más el punto de pedido necesario.`;
}
