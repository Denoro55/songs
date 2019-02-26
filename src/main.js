import Vue from 'vue'
import App from './App.vue'

import $ from 'jquery' // подключаем глобально jquery
window.$ = $;

$('body').on('click','.accordion__title',function(){
	if ($(window).width()<=767){
		$(this).toggleClass('accordion__title-active');
		$(this).closest('.accord__parent').find('.accord__target').slideToggle(250);
	}
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
