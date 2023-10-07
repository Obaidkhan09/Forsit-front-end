<template>
  <div class="reports-container mt-4">
    <div class="chart">
      <canvas ref="myChartCanvas"></canvas>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, watch } from "vue";
import {
  Chart,
  LinearScale,
  Title,
  Tooltip,
  CategoryScale,
  BarController,
} from "chart.js/auto";

let daily = [
  [12, 19, 3, 5, 2, 3, 15],
  [10, 13, 9, 7, 6, 1, 8],
  [9, 10, 5, 9, 10, 8, 11]
];

let monthly = [
  [10, 13, 9, 7, 6, 1],
  [5, 13, 7, 7, 14, 12],
  [12, 19, 3, 5, 2, 3]
];
const dailyLabels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", 'Sunday'];
const monthlyLabels = ["January", "February", "March", "April", "June", "July"];


const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default {
  props: {
    chartType: String,
    range: String,
  },
  setup(props) {
    const myChartCanvas = ref(null);
    const chartInstance = ref(null);
    const data = {
      labels: dailyLabels,
      datasets: [
        {
          label: "# of Orders",
          data: props.range === 'month' ? monthly[0] : daily[0],
          borderWidth: 1,
        },
        {
          label: "# of Sales",
          data: props.range === 'month' ? monthly[1] : daily[1],
          borderWidth: 1,
        },
        {
          label: "# of Impressions",
          data: props.range === 'month' ? monthly[2] : daily[2],
          borderWidth: 1,
        }
      ],
    };

    onMounted(() => {
      Chart.defaults.color = "#ffff";
      // Register the scales and other necessary components
      Chart.register(
        LinearScale,
        Title,
        Tooltip,
        CategoryScale,
        BarController
      );

      // Your initial chart configuration

      const ctx = myChartCanvas.value;
      if (ctx) {
        chartInstance.value = new Chart(ctx, {
          type: props.chartType || "line",
          data,
          options,
        });
      }
    });

    // Watch for changes in the range prop
    watch(
      () => props.range,
      (newRange) => {
        if (chartInstance.value) {
          chartInstance.value.destroy(); // Destroy the old chart
          const ctx = myChartCanvas.value;
          if (ctx) {
            data.labels = newRange === 'monthly' ? monthlyLabels : dailyLabels;
            data.datasets[0].data = newRange === 'monthly' ? monthly[0] : daily[0];
            data.datasets[1].data = newRange === 'monthly' ? monthly[1] : daily[1];
            data.datasets[2].data = newRange === 'monthly' ? monthly[2] : daily[2];

            chartInstance.value = new Chart(ctx, {
              type: props.chartType,
              data,
              options,
            });
          }
        }
      }
    );
    watch(
      () => props.chartType,
      (newChartType) => {
        if (chartInstance.value) {
          chartInstance.value.destroy(); // Destroy the old chart
          const ctx = myChartCanvas.value;
          if (ctx) {
            data.datasets[0].data = props.range === 'monthly' ? monthly[0] : daily[0];
            data.datasets[1].data = props.range === 'monthly' ? monthly[1] : daily[1];
            data.datasets[2].data = props.range === 'monthly' ? monthly[2] : daily[2];
            chartInstance.value = new Chart(ctx, {
              type: newChartType,
              data,
              options,
            });
          }
        }
      }
    );
    return { myChartCanvas };
  },
};
</script>

<style>
.reports-container {
  display: flex;
  justify-content: center;
}
.chart {
  width: 75%;
  height: 75vh;
}
</style>

<style>
.reports-container {
display: flex;
justify-content: center;
}
.chart {
  width: 75%;
  height: 75vh;
}
</style>
