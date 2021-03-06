//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
  name: "Spinner",
  props: {
    src: {
      type: String,
      required:true,
    },
    top:{
        type:String,
        default: '50%'
    },
    overlay:{
        type:String,
        default:'rgba(255, 255, 255, 0.0)'
    },
    width:{
        type:String,
        default:'50px'
    },
    type:{
        type: String,
        default:'rotating'
    }
  },
  methods:{
      spinner: function spinner(){
          return {
            top:this.top,
          }
      },
      spinnerContainer: function spinnerContainer(){
          return {
              backgroundColor:this.overlay
          }
      },
      imageStyles: function imageStyles(){
          return {
              width:this.width,
          }
      }
  },
  mounted: function mounted() {
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}
var HEAD = document.head || document.getElementsByTagName('head')[0];
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) { style.element.setAttribute('media', css.media); }
      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) { style.element.removeChild(nodes[index]); }
      if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }else { style.element.appendChild(textNode); }
    }
  }
}

var browser = createInjector;

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"spinner-container",style:(_vm.spinnerContainer())},[_c('div',{staticClass:"spinner",style:(_vm.spinner())},[_c('img',{class:_vm.type,style:(_vm.imageStyles()),attrs:{"src":_vm.src}})])])])};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-4414801f_0", { source: ".spinner-container[data-v-4414801f]{position:fixed;width:100%;height:100%;top:0;left:0;right:0;bottom:0;z-index:998}.spinner[data-v-4414801f]{position:absolute;opacity:1;left:50%;z-index:999;transform:translate(-50%,-50%)}.breathing[data-v-4414801f]{-webkit-animation:breathing-data-v-4414801f 1s ease-out infinite normal;animation:breathing-data-v-4414801f 1s ease-out infinite normal;-webkit-font-smoothing:antialiased}.scale-up[data-v-4414801f]{-webkit-animation:rotate-scale-up-data-v-4414801f 1s both infinite;animation:rotate-scale-up-data-v-4414801f 1s both infinite}.spinner[data-v-4414801f]{animation:spinner-container-animation 1.2s infinite}.jumping[data-v-4414801f]{-webkit-animation:jumping-data-v-4414801f .7s infinite alternate;animation:jumping-data-v-4414801f .7s infinite alternate}.linear-rotating[data-v-4414801f]{-webkit-animation:rotating-data-v-4414801f 1.2s linear infinite;-moz-animation:rotating-data-v-4414801f 1.2s linear infinite;-ms-animation:rotating-data-v-4414801f 1.2s linear infinite;-o-animation:rotating-data-v-4414801f 1.2s linear infinite;animation:rotating-data-v-4414801f 1.2s linear infinite}.rotating[data-v-4414801f]{-webkit-animation:rotating-data-v-4414801f 1.2s infinite;-moz-animation:rotating-data-v-4414801f 1.2s infinite;-ms-animation:rotating-data-v-4414801f 1.2s infinite;-o-animation:rotating-data-v-4414801f 1.2s infinite;animation:rotating-data-v-4414801f 1.2s infinite}@-webkit-keyframes rotating-data-v-4414801f{from{-webkit-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotating-data-v-4414801f{from{-ms-transform:rotate(0);-moz-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0)}to{-ms-transform:rotate(360deg);-moz-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes breathing-data-v-4414801f{0%{-webkit-transform:scale(.8);transform:scale(.8)}25%{-webkit-transform:scale(1);transform:scale(1)}60%{-webkit-transform:scale(.9);transform:scale(.9)}100%{-webkit-transform:scale(.83);transform:scale(.83)}}@keyframes breathing-data-v-4414801f{0%{-webkit-transform:scale(.8);-ms-transform:scale(.8);transform:scale(.8)}25%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}60%{-webkit-transform:scale(.9);-ms-transform:scale(.9);transform:scale(.9)}100%{-webkit-transform:scale(.83);-ms-transform:scale(.83);transform:scale(.83)}}@-webkit-keyframes jumping-data-v-4414801f{0%{transform:translateY(0)}100%{transform:translateY(-15px)}}@keyframes jumping-data-v-4414801f{0%{transform:translateY(0)}100%{transform:translateY(-15px)}}@-webkit-keyframes rotate-scale-up-data-v-4414801f{0%{-webkit-transform:scale(1) rotateZ(0);transform:scale(1) rotateZ(0)}50%{-webkit-transform:scale(1.5) rotateZ(180deg);transform:scale(1.5) rotateZ(180deg)}100%{-webkit-transform:scale(1) rotateZ(360deg);transform:scale(1) rotateZ(360deg)}}@keyframes rotate-scale-up-data-v-4414801f{0%{-webkit-transform:scale(1) rotateZ(0);transform:scale(1) rotateZ(0)}50%{-webkit-transform:scale(1.5) rotateZ(180deg);transform:scale(1.5) rotateZ(180deg)}100%{-webkit-transform:scale(1) rotateZ(360deg);transform:scale(1) rotateZ(360deg)}}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = "data-v-4414801f";
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject SSR */
  

  
  var Spinner = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    browser,
    undefined
  );

var entry = {
    install: function install (Vue) {
        Vue.component('Spinner', Spinner);
    }
};

export default entry;
export { Spinner };
