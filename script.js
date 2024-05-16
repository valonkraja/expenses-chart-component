import data from "./data.json" with { type: "json" };

const dataArray = data.map((el) => el.amount);

const d = new Date();

const day = d.getDay();


const ctx = document.getElementById("chart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
    datasets: [
      {
        label: false,
        backgroundColor: function(color){
          let colors = color.index === day ? 'hsl(186, 34%, 60%)' : "hsl(10, 79%, 65%)"
        
          return colors
        },
        data: dataArray,
        borderWidth: 0,
        hoverBackgroundColor: function(color){
          let colors = color.index === day ? 'hsl(186, 34%, 60%, 0.7)' : "hsl(10, 79%, 65%, 0.7)"
        
          return colors
        },
        borderRadius: 4,
        borderSkipped: false,
      },
    ],
  },
  options: {
    plugins: {
      tooltip: {
        yAlign: "bottom",
        displayColors: false,
        backgroundColor: "hsl(25, 47%, 15%)",
        caretSize: 0,
        callbacks: {
          title: function (title) {
            return "";
          },
          label: function (context) {
            return `$${context.dataset.data[context.dataIndex]}`;
          },
          labelColor: function (context) {
            return {
              display: false,
            };
          },
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        border: {
          display: false,
        },
        grid: {
          display: false,
          drawOnChartArea: false,
          drawBorder: false,
        },
      },
      y: {
        grid: {
          display: false,
          drawOnChartArea: false,
          drawBorder: false,
        },
        border: {
          display: false,
        },
        beginAtZero: true,
        ticks: {
          display: false,
        },
        scaleShowLabels: false,
      },
    },
  },
});
