
const winRateData = {
  labels: ['Vitórias', 'Derrotas'],
  datasets: [{
      data: [13,2],
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
      data: [5.7, 5.72, 5.42, 3.77, 4.65],
      backgroundColor: '#42a5f5',
  }, {
      label: 'CS',
      data: [295.68, 318.57, 256.52, 57.91, 105.34],
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
      data: [13, 2, 0],
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
      labels: ['Maokai', 'Gnar', 'Lissandra', 'Rumble', 'Irelia'],
      data: [75, 60, 80, 50, 40],
      backgroundColor: '#42a5f5'
  },
  'Revolta': {
      labels: ['Lee Sin', 'Rek\'Sai', 'Jarvan IV', 'Nidalee', 'Gragas'],
      data: [85, 70, 55, 60, 65],
      backgroundColor: '#66bb6a'
  },
  'Tockers': {
      labels: ['Ahri', 'Orianna', 'Zed', 'LeBlanc', 'Lulu'],
      data: [78, 82, 68, 74, 66],
      backgroundColor: '#ff7043'
  },
  'Micao': {
      labels: ['Lucian', 'Jinx', 'Sivir', 'Caitlyn', 'Kalista'],
      data: [70, 62, 75, 55, 60],
      backgroundColor: '#ab47bc'
  },
  'Jockster': {
      labels: ['Thresh', 'Annie', 'Leona', 'Janna', 'Morgana'],
      data: [65, 60, 55, 80, 58],
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