import a from './src/index';
let {
  components,
  directives,
  mixins,
  plugins
} = a;

export default {

  // 注册全局组件
  registerComponents(Vue) {
    components.forEach(component => {
      Vue.component(component.name, component);
    });
  },

  // 注册全局指令
  registerDirectives(Vue) {
    directives.forEach(directive => {
      Vue.directive(directive.name, directive);
    });
  },

  // 注册全局混入
  registerMixins(Vue) {
    mixins.forEach(mixin => {
      Vue.mixin(mixin)
    });
  },

  // 注册全局插件
  registerPlugin(Vue) {
    plugins.forEach(plugin => {
      Vue.use(plugin)
    });
  },

  install(Vue) {
    this.registerComponents(Vue);
    this.registerDirectives(Vue);
    this.registerMixins(Vue);
    this.registerPlugin(Vue);
  }
}
