const datosProduccion = {
  solar: 1500,
  eolica: 1200,
  hidro: 800,
  geotermica: 500,
  no_renovable: 2000
};

const totalRenovable = datosProduccion.solar + datosProduccion.eolica + datosProduccion.hidro + datosProduccion.geotermica;

const produccionTotal = totalRenovable + datosProduccion.no_renovable;

const form = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const consumo = parseFloat(document.getElementById("consumo").value);
  const proporcionRenovable = totalRenovable / produccionTotal;
  const consumoRenovableEstimado = consumo * proporcionRenovable;
  const porcentaje = (consumoRenovableEstimado / consumo) * 100;
  resultado.innerText = `Aproximadamente el ${porcentaje.toFixed(2)}% de tu consumo podría ser cubierto con energía renovable.`;
});

const ctx = document.getElementById("grafico").getContext("2d");

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Solar', 'Eólica', 'Hidro', 'Geotérmica', 'No Renovable'],
    datasets: [{
      label: 'Producción (kWh)',
      data: [
        datosProduccion.solar,
        datosProduccion.eolica,
        datosProduccion.hidro,
        datosProduccion.geotermica,
        datosProduccion.no_renovable
      ],
      backgroundColor: [ 
        '#F6FB7A',
        '#3FA2F6',
        '#96C9F4',
        '#9B3922',
        '#E65C19'
      ]
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Producción de Energía por Fuente'
      }
    }
  }
});