<template>
  <div id="">
    <!-- <bar-chart :chart-data="chartData" :options="chartOptions" /> -->
    <div class="container mt-4 d-flex justify-content-around">
      <!-- <h3>Random Dropdown</h3>
      <select class="form-select" id="randomDropdown">
      </select> -->
      <select class="form-select drop-select" aria-label="Default select example" @change="handleTypeChange($event)">
        <option selected value="bar">Bar</option>
        <option value="line">Line</option>
        <option value="doughnut">Donut</option>
      </select>
      <select class="form-select drop-select" aria-label="Default select example" @change="handleRaneChange($event)">
        <!-- <option selected>Open this select menu</option> -->
        <option selected value="daily">Daily</option>
        <option value="monthly">Monthly</option>
      </select>
    </div>
    <bar-chart :chartType="chartType" :range="range"/>
  </div>
</template>

<script>
import BarChart from "../components/Charst.vue";
// document.addEventListener("DOMContentLoaded", function () {

//   // Shuffle the items randomly
//   for (let i = items.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [items[i], items[j]] = [items[j], items[i]];
//   }

//   // Populate the dropdown with shuffled items
//   items.forEach((item) => {
//     const option = document.createElement("option");
//     option.value = item;
//     option.textContent = item;
//     dropdown.appendChild(option);
//   });
// });
export default {
  components: {
    BarChart,
  },
  data() {
    return {
      chartData: {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
          {
            label: "Sample Data",
            backgroundColor: "#41B883",
            data: [10, 20, 15, 25, 30],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
      chartType : 'bar',
      range : 'daily'
    };
  },
  methods : {
    handleTypeChange (event) {
      this.chartType = event.target.value;
    },
    handleRaneChange (event) {
      this.range = event.target.value;
    }
  }
};
</script>
<style>
.drop-select{
  width: 30%;
}
</style>
