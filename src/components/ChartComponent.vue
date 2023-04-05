<template>
  <div>
    <canvas ref="chart"></canvas>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Chart from 'chart.js/auto';

export default defineComponent({
  name: 'ChartComponent',
  props: {
    lastWeekData: Array,
    thisWeekData: Array
  },
  mounted() {
    const ctx = this.$refs.chart.getContext('2d');
    // eslint-disable-next-line no-unused-vars
    const chart = new Chart(ctx, {
      type: 'line', // bar, line ...
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Last Week',
            data: this.lastWeekData,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          },
          {
            label: 'This Week',
            data: this.thisWeekData,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })
  }
})
</script>
