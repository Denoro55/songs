<template>
	<div id="app">
		<div class="wrapper">
			<div class="container">
				<div class="content">
					<Main></Main>
					<Songs></Songs>
					<Guarantees></Guarantees>
					<Accordion></Accordion>
					<Questions></Questions>
					<Footer></Footer>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import Questions from './components/Questions.vue';
import Accordion from './components/Accordion.vue';
import Guarantees from './components/Guarantees.vue';
import Songs from './components/Songs.vue';

export default {
  name: 'app',
  components: {
	Footer,
	Questions,
	Accordion,
	Guarantees,
	Songs,
	Main
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700,900');
#app {
	font-family: 'Roboto', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>

