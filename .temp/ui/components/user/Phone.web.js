import Vue from 'vue';
import weex from 'weex-vue-render';

weex.init(Vue);



const App = require('../../../../src/ui/components/user/Phone.vue');
new Vue(Vue.util.extend({el: '#root'}, App));
