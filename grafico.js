const ctx = document.getElementById("myChart").getContext('2d')

const labels = []

for (let i = 1; i <= 7; i++ ) {
    labels.push(i)
}

const data = {
    labels,
    datasets: [{
        data: [],
        label: "total aportado",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)'
    },

    {
        data: [1200, 1200, 1200, 1200, 1200, 1200, 1],
        label: "Ganhos",
        backgroundColor: 'rgb(80, 10, 302)',
        borderColor: 'rgb(80, 10, 302)'
    }, 
]     
}

const option = {
    responsive: true,

    scales: {
        x: {
          grid: {
            // borderColor: 'white'
            color: 'white'
          },

          ticks: {
            color: "rgb(255, 99, 132)"
          }
        },
        y: {
          grid: {
            //   borderColor: 'blue',
            color: 'white'  
          },
          ticks: {
            color: "rgb(255, 99, 132)"
          }
   
        }
      }
}

const plugin = {
    id: 'custom_canvas_background_color',
    beforeDraw: (chart) => {
      const ctx = chart.canvas.getContext('2d');
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = 'rgb(6, 4, 15)';
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    }
  };

const config = {
    type: 'line',
    data: data,
    options: option,
    plugins: [plugin],
};

const myChart = new Chart(ctx, config)

