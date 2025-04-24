function calcularPotencia() {
    const irradiancia = parseFloat(document.getElementById('irradiancia').value);
    const area = parseFloat(document.getElementById('area').value);
    const eficiencia = parseFloat(document.getElementById('eficiencia').value) / 100;

    if (isNaN(irradiancia) || isNaN(area) || isNaN(eficiencia)) {
      document.getElementById('resultado').innerText = "Por favor, introduce todos los valores correctamente.";
      return;
    }

    const potencia = irradiancia * area * eficiencia;
    document.getElementById('resultado').innerText = `Potencia generada: ${potencia.toFixed(2)} W`;
  }