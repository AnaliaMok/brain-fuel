import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/styles.css'

export default function(Vue) {
  Vue.component('Layout', DefaultLayout)
  Vue.mixin({
    methods: {
      getMonth(month) {
        const monthNames = [
          'Jan',
          'Feb',
          'March',
          'April',
          'May',
          'June',
          'July',
          'Aug',
          'Sept',
          'Oct',
          'Nov',
          'Dec'
        ]

        return monthNames[month]
      },
      formatDate(dateString) {
        if (dateString.length) {
          const dateObject = new Date(dateString)
          const date = `${this.getMonth(
            dateObject.getMonth()
          )} ${dateObject.getDate()}, ${dateObject.getFullYear()}`

          return date
        }
        return ''
      }
    }
  })
}
