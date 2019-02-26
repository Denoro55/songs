<template>
	<div class="section-3 section accord__parent">
		<div class="section-padding">
			<div class="title accordion__title accordion__title-active">Гарантии</div>
			<div class="accord__target">
				<ul class="guarantees">
					<li v-for="(g,i) in guarantees" v-bind:key="i" class="guarantees__item">
						<div class="guarantees__left">
							<img :src="require(`@/assets/icons/${g.imageUrl}`)"/>
						</div>
						<div class="guarantees__right">
							<div class="guarantees__title">{{g.title}}</div>
							<div class="guarantees__text">{{g.text}}</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				guarantees: [
					{
						imageUrl: '1.svg',
						title: 'Вернем деньги',
						text: 'Если именник не получит от нас звонок с поздравлением.'
					},
					{
						imageUrl: '2.svg',
						title: 'Гарантия доставки',
						text: 'Будем дозваниваться до поулчателя поздравления 10 раз.'
					},
					{
						imageUrl: '3.svg',
						title: 'Мы против спама',
						text: 'Номера телефонов используются только для указания услуг'
					},
					{
						imageUrl: '4.svg',
						title: 'Нашему сервису 7 лет',
						text: 'Мы отправили поздравления 2 миллионов раз'
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.guarantees{
		display: flex;
		flex-wrap: wrap;
		margin-bottom: -10px;
		margin-top:  25px;
		@include tablet{
			display: block;
			margin-top: 	15px;
		}
	}
	.guarantees__item{
		display: flex;
		line-height: 20px;
		font-size: 16px;
		width: 50%;
		margin-bottom: 28px;
		letter-spacing: -0.116667px;
		@include tablet{
			width: 100%;
		}
		@include tablet{
			line-height: 18px;
			font-size: 13px;
			margin-bottom: 15px;
			&:last-child{
				margin-bottom: 12px;
			}
		}
	}
	.guarantees__left{
		margin-right: 13px;
		img{
			@include tablet{
				width: 48px;
			}
		}
		@include tablet{
			margin-right: 9px;
		}
	}
	.guarantees__right{
		padding-top: 3px;
	}
	.guarantees__title{
		color: black;
		margin-bottom: 4px;
		font-weight: 500;
		@include tablet{
			margin-bottom: 2px;
			font-size: 	14px;
		}
	}
	.guarantees__text{
		color: #606060;
		font-size: 14px;
		@include tablet{
			line-height: 18px;
			font-size: 13px;
		}
	}
</style>