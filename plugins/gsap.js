// ~/plugins/gsap.js
import { gsap } from 'gsap'

export default (_, inject) => {
  inject('gsap', gsap)
}
