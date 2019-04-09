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
      }
    }
  })
}
