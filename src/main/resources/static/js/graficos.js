// Função para gerar um valor aleatório entre 40 e 50 graus Celsius
    function gerarTemperaturaAleatoria() {
        return (Math.random() * 10 + 40).toFixed(2); // Gera um valor entre 40 e 50
    }

    // Função para calcular a média das duas temperaturas
    function calcularMedia(temperatura1, temperatura2) {
        return ((parseFloat(temperatura1) + parseFloat(temperatura2)) / 2).toFixed(2);
    }

    // Função para atualizar os campos de temperatura e média
    function atualizarCamposTemperatura() {
        const temperatura1 = gerarTemperaturaAleatoria();
        const temperatura2 = gerarTemperaturaAleatoria();
        const media = calcularMedia(temperatura1, temperatura2);


        $('#temperatura1').val(temperatura1);
        $('#temperatura2').val(temperatura2);
        $('#media').val(media);

        if (media >= 49.00) {
                $('#alertaTemperatura').show();
            } else {
                $('#alertaTemperatura').hide();
            }
    }

    // Evento de clique no botão "Simular Temperatura"
    $('#simularTemperatura').click(function () {
        atualizarCamposTemperatura();
    });

    // Inicialização da simulação de temperatura
    atualizarCamposTemperatura();

    // Simulação de contagem de peças
let contadorPecas = 0;
const alertaPecas = $('#alertaPecas');
const contadorInput = $('#contadorPecas');

function simularContagemPecas() {
    alertaPecas.hide();
    const quantidade = Math.floor(Math.random() * 11);
    if (quantidade === 0) {
        alertaPecas.show();
    }
    contadorPecas += quantidade;
    contadorInput.val(contadorPecas);
}


    // Evento de clique no botão "Simular Contagem de Peças"
    $('#simularContagemPecas').click(function () {
        simularContagemPecas();
    });

    // Simulação de oscilação de tensão
    const alertaTensao = $('#alertaTensao');
    const tensaoSpan = $('#tensao');

    function simularOscilacaoTensao() {
        const tensao = (Math.random() * 58 + 343).toFixed(2); // Gera um valor entre 343 e 401
        tensaoSpan.val(tensao);

        if (tensao < 348 || tensao > 396) {
            alertaTensao.show();
        } else {
            alertaTensao.hide();
        }
    }

    // Evento de clique no botão "Simular Oscilação de Tensão"
    $('#simularOscilacaoTensao').click(function () {
        simularOscilacaoTensao();
    });

    // Inicialização da simulação de oscilação de tensão
    simularOscilacaoTensao();

    // Evento de clique no botão "Simular Todos"
    $('#simularTodos').click(function () {
            atualizarCamposTemperatura();
            simularContagemPecas();
            simularOscilacaoTensao();
            simularNivelOleo();
        });

// Simulação de nível de óleo
let nivelOleo = 100; // Nível máximo de óleo em porcentagem
const alertaOleo = $('#alertaOleo');
const oleoInput = $('#oleo');

function simularNivelOleo() {
    if (nivelOleo <= 40) {
        alertaOleo.show();
    } else {
        alertaOleo.hide();
    }

    oleoInput.val(nivelOleo + '%');
    nivelOleo--; // Reduz o nível de óleo a cada simulação
}

// Evento de clique no botão "Simular Nível de Óleo"
$('#simularNivelOleo').click(function () {
    simularNivelOleo();
});

// Inicialização da simulação de nível de óleo
simularNivelOleo();



// Gráfico de Temperatura
const ctxTemperatura = document.getElementById('graficoTemperatura').getContext('2d');
const graficoTemperatura = new Chart(ctxTemperatura, {
  type: 'line',
  data: {
    labels: [],
    datasets: [
      {
        label: 'Temperatura 1 (°C)',
        data: [],
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        fill: false,
      },
      {
        label: 'Temperatura 2 (°C)',
        data: [],
        borderColor: 'rgba(0, 99, 255, 1)',
        borderWidth: 1,
        fill: false,
      },
      {
        label: 'Média (°C)',
        data: [],
        borderColor: 'rgba(0, 255, 0, 1)',
        borderWidth: 1,
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      x: {
        beginAtQuarenta: true,
      },
      y: {
        beginAtCinquenta: true,
      },
    },
  },
});

function atualizarGraficoTemperatura() {
  const temperatura1 = parseFloat(document.getElementById('temperatura1').value);
  const temperatura2 = parseFloat(document.getElementById('temperatura2').value);
  const media = parseFloat(document.getElementById('media').value);

  const tempoAtual = new Date().toLocaleTimeString();

  graficoTemperatura.data.labels.push(tempoAtual);
  graficoTemperatura.data.datasets[0].data.push(temperatura1);
  graficoTemperatura.data.datasets[1].data.push(temperatura2);
  graficoTemperatura.data.datasets[2].data.push(media);

  graficoTemperatura.update();
}

document.getElementById('simularTemperatura').addEventListener('click', atualizarGraficoTemperatura);





  // Gráfico de Contagem de Peças
  const ctxContagemPecas = document.getElementById('graficoContagemPecas').getContext('2d');
  const graficoContagemPecas = new Chart(ctxContagemPecas, {
    type: 'bar',
    data: {
      labels: [],
      datasets: [{
        label: 'Contagem de Peças',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          beginAtZero: true
        },
        y: {
          beginAtZero: true
        }
      }
    }
  });

  function atualizarGraficoContagemPecas() {
    const contadorPecas = parseFloat(document.getElementById('contadorPecas').value);
    const tempoAtual = new Date().toLocaleTimeString();

    graficoContagemPecas.data.labels.push(tempoAtual);
    graficoContagemPecas.data.datasets[0].data.push(contadorPecas);

    graficoContagemPecas.update();
  }

  document.getElementById('simularContagemPecas').addEventListener('click', atualizarGraficoContagemPecas);


  // Gráfico de Oscilação de Tensão
  const ctxOscilacaoTensao = document.getElementById('graficoOscilacaoTensao').getContext('2d');
  const graficoOscilacaoTensao = new Chart(ctxOscilacaoTensao, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Tensão (Volts)',
        data: [],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          beginAtZero: true
        },
        y: {
          beginAtZero: false
        }
      }
    }
  });

  function atualizarGraficoOscilacaoTensao() {
    const tensao = parseFloat(document.getElementById('tensao').value);
    const tempoAtual = new Date().toLocaleTimeString();

    graficoOscilacaoTensao.data.labels.push(tempoAtual);
    graficoOscilacaoTensao.data.datasets[0].data.push(tensao);

    graficoOscilacaoTensao.update();
  }

  document.getElementById('simularOscilacaoTensao').addEventListener('click', atualizarGraficoOscilacaoTensao);


  // Gráfico de Nível de Óleo
  const ctxNivelOleo = document.getElementById('graficoNivelOleo').getContext('2d');
  const graficoNivelOleo = new Chart(ctxNivelOleo, {
    type: 'doughnut',
    data: {
      labels: ['Nível de Óleo', ''],
      datasets: [{
        data: [0, 100],
        backgroundColor: ['#007BFF', '#E6E6E6'],
      }]
    },
    options: {
      cutout: '80%',
      responsive: true,
    }
  });

  function atualizarGraficoNivelOleo() {
    const nivelOleo = parseFloat(document.getElementById('oleo').value);

    graficoNivelOleo.data.datasets[0].data[0] = nivelOleo;
    graficoNivelOleo.data.datasets[0].data[1] = 100 - nivelOleo;

    graficoNivelOleo.update();
  }

  document.getElementById('simularNivelOleo').addEventListener('click', atualizarGraficoNivelOleo);

function atualizarGraficos() {
        atualizarGraficoTemperatura();
        atualizarGraficoContagemPecas();
        atualizarGraficoOscilacaoTensao();
        atualizarGraficoNivelOleo();
    }

    // Evento de clique no botão "Simular Todos"
    document.getElementById('simularTodos').addEventListener('click', function() {
        atualizarGraficos();
    });
