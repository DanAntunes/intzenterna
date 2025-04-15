
const winRateData = {
  labels: ['Vitórias', 'Derrotas'],
  datasets: [{
      data: [19,2],
      backgroundColor: ['#4caf50', '#f44336']
  }]
};

const winRateConfig = {
  type: 'doughnut',
  data: winRateData,
  options: {
    plugins: {
      legend: {
        position: 'right', 
        align: 'start', 
        labels: {
          padding: 10 
        }
      }
    }
  }
};

const winRateChart = new Chart(
  document.getElementById('winRateChart'),
  winRateConfig
);

const playerStatsData = {
  labels: ['Yang', 'Revolta', 'Tockers', 'Micao', 'Jockster'],
  datasets: [{
      label: 'KDA',
      data: [5.94, 6.18, 6.71, 6.83, 3.99],
      backgroundColor: '#42a5f5',
  }, {
      label: 'CS - Overall',
      data: [256.18, 117.67, 320.87, 279.05, 30.10],
      backgroundColor: '#66bb6a',
  }]
};

const playerStatsConfig = {
  type: 'bar',
  data: playerStatsData,
  options: {
      responsive: true,
      scales: {
          y: {
              beginAtZero: true,
              max: 350, 
          }
      },
      layout: {
          padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 25
          }
      }
  }
};

const playerStatsChart = new Chart(
  document.getElementById('playerStatsChart'),
  playerStatsConfig
);


const seriesData = {
  labels: ['Vitórias', 'Empates', 'Derrotas'],
  datasets: [{
      data: [8, 2, 0],
      backgroundColor: ['#4caf50', '#ffeb3b', '#f44336'],
  }]
};


const seriesConfig = {
  type: 'doughnut',
  data: seriesData,
  options: {
    plugins: {
      legend: {
        position: 'right', 
        align: 'start',
        labels: {
          padding: 10 
        }
      }
    }
  }
};

const seriesChart = new Chart(
  document.getElementById('seriesChart'),
  seriesConfig
);

function updateChart(metric) {
  if (metric === 'kda') {
      playerStatsChart.data.datasets[0].hidden = false; // Mostrar KDA
      playerStatsChart.data.datasets[1].hidden = true;  // Ocultar CS
      playerStatsChart.options.scales.y.max = 10; // Ajustar máximo para KDA
  } else {
      playerStatsChart.data.datasets[0].hidden = true;  // Ocultar KDA
      playerStatsChart.data.datasets[1].hidden = false; // Mostrar CS
      playerStatsChart.options.scales.y.max = 350; // Ajustar máximo para CS
  }
  playerStatsChart.update(); // Atualiza o gráfico
}

updateChart('kda');

document.getElementById('kdaBtn').addEventListener('click', () => updateChart('kda'));
document.getElementById('csBtn').addEventListener('click', () => updateChart('cs'));

// Dados dos campeões e taxas de vitória para cada jogador
const championsData = {
  'Yang': {
      labels: ['Rumble', 'Gnar', 'Maokai', 'Sion', 'Lissandra'],
      data: [100, 100,100, 100, 50],
      backgroundColor: '#42a5f5'
  },
  'Revolta': {
      labels: ['Lee Sin', 'Jarvan IV', 'Rek/Sai', 'Gragas', 'Nidalee'],
      data: [100, 100, 100, 100, 50],
      backgroundColor: '#66bb6a'
  },
  'Tockers': {
      labels: ['Azir', 'Kassadin', 'Xerath', 'Cassiopeia', 'Lissandra'],
      data: [100, 100, 33.33, 100, 100],
      backgroundColor: '#ff7043'
  },
  'Micao': {
      labels: ['Corki', 'Kalista', 'Graves', 'Ezreal', 'Jinx'],
      data: [100, 80, 100, 50, 100],
      backgroundColor: '#ab47bc'
  },
  'Jockster': {
      labels: ['Leona', 'Thresh', 'Nami', 'Lulu', 'Janna'],
      data: [66.67, 80, 100, 100, 100],
      backgroundColor: '#26a69a'
  }
};

// Configuração inicial do gráfico dos campeões
const championStatsData = {
  labels: [], // Será preenchido dinamicamente
  datasets: [{
      label: 'Taxa de Vitória (%)',
      data: [],
      backgroundColor: '' // Será preenchido dinamicamente
  }]
};

const championStatsConfig = {
  type: 'bar',
  data: championStatsData,
  options: {
      responsive: true,
      scales: {
          y: {
              beginAtZero: true,
              max: 100 // As taxas de vitória são representadas em porcentagem
          }
      },
      layout: {
          padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 25
          }
      }
  }
};

// Criação do gráfico dos campeões
const championStatsChart = new Chart(
  document.getElementById('championStatsChart'),
  championStatsConfig
);

// Função para atualizar o gráfico com base no jogador selecionado
function updateChampionStats(player) {
  const data = championsData[player];
  championStatsChart.data.labels = data.labels;
  championStatsChart.data.datasets[0].data = data.data;
  championStatsChart.data.datasets[0].backgroundColor = data.backgroundColor;
  championStatsChart.update();
}

// Event listeners para os botões de cada jogador
document.getElementById('yangBtn').addEventListener('click', () => updateChampionStats('Yang'));
document.getElementById('revoltaBtn').addEventListener('click', () => updateChampionStats('Revolta'));
document.getElementById('tockersBtn').addEventListener('click', () => updateChampionStats('Tockers'));
document.getElementById('micaoBtn').addEventListener('click', () => updateChampionStats('Micao'));
document.getElementById('jocksterBtn').addEventListener('click', () => updateChampionStats('Jockster'));