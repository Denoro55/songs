<template>

	<div class="main-block section">

		<Header></Header>

		<div class="main-content">

			<div class="nav"><a class="nav__link" href="#"><img src="../assets/arrow_back.png" alt=""/>
				<div class="nav__text">{{navText}}</div></a>
			</div>
			<div class="content__title">Медведев поздравляет с днем Медицинского работника и желает хорошего здоровья</div>
			
			<Audio></Audio>

			<Gifts></Gifts>

		</div>
	</div>

</template>
<script>

import Header from './Header.vue';
import Audio from './Audio.vue';
import Gifts from './Gifts.vue';

import $ from 'jquery';

export default {
	data(){
		return {
			navText: 'Прикольные'
		}
	},
	components: {
		Header,
		Audio,
		Gifts
	},
	methods: {
		checkWidth(){
			let w = $(window).width();
			if (w<=767){
				this.navText = 'Дедушке'
			} else {
				this.navText = 'Прикольные'
			}
		}
	},
	created(){
		this.checkWidth();
		$(window).resize(()=>{
			this.checkWidth();
		})
	}
}
</script>
<style lang="scss" scoped>
	.nav{
		display: flex;
		justify-content: flex-start;
	}
	.nav__link{
		display: flex;
		align-items: center;
		text-transform: uppercase;
		color: $blue2;
		margin-top: 25px;
		margin-bottom: 10px;
		@include tablet{
			margin-top: 17px;
		}
	}
	.nav__text{
		margin-left: 12px;
	}

	.content__title{
		font-size: 28px;
		font-weight: 900;
		line-height: 33px;
		@include tablet{
			font-weight: 500;
			line-height: 22px;
			font-size: 16px;
		}
	}
</style>