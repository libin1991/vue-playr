import VuePlayr from './VuePlayr.vue'

VuePlayr.install = (Vue, options = {}) => {
  const { componentName = 'vue-playr' } = options
  if (options.plyr) {
    VuePlayr.props.options.default = () => {
      return { ...options.plyr }
    }
  }
  if (options.emit) {
    VuePlayr.props.emit.default = () => {
      return [...options.emit]
    }
  }
  Vue.component(componentName, VuePlayr)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VuePlayr)
}

export default VuePlayr
