<style>
.chartjs-render-monitor {
  margin: 0 auto;
}
</style>
<script>
import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  props: ['skills', 'title'],
  mounted() {
    var skills = this.skills
    var lang = [];
    var level = [];
    for (let [key, value] of Object.entries(skills)) {
      lang.push(key)
      level.push(value)
    }
    var backgroundColor = 'rgba(255, 195, 93, 0.2)'
    var borderColor = 'rgba(255, 195, 93, 1)'
    if (this.title === 'frontend') {
      backgroundColor = 'rgba(237, 146, 159, 0.2)'
      borderColor = 'rgba(237, 146, 159, 1)'
    } else if (this.title === 'backend') {
      backgroundColor = 'rgba(121, 198, 182, 0.2)'
      borderColor = 'rgba(121, 198, 182, 1)'
    }
    this.renderChart(
      {
        labels: lang,
        datasets: [{
          data: level,
          label: 'Front-end',
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          borderWidth: 1,
          pointBackgroundColor: borderColor,
          pointBorderColor: '#fff'
        }]
      },
      {
        responsive: true,
        legend: {
          display: false
        },
        responsiveAnimationDuration: 5,
        maintainAspectRatio: false,
        scale: {
          ticks: {
            beginAtZero: true,
            stepSize: 1,
            max: 5,
            fontSize: 10
          },
          pointLabels: {
            fontSize: 10
          }
        }
      }
    )
  }
}
</script>