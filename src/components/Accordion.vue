<template>
	<div class="section-4 section accord__parent">
		<div class="section-padding">
			<div class="title accordion__title accordion__title-active">Есть вопросы?</div>
			<div class="accord__target">
				<ul class="accordion">

					<AccordionElement open title="Что такое аудио поздравление?" text="Аудио поздравления - это классные поздравления с Днем рождения, юбилеем или любым другим праздником. Поздравление доставляется получателю обычным входящим звонком на его телефон. Яркие эмоции и хорошее настроение гарантированы!"></AccordionElement>

					<AccordionElement title="Какое время доставки выбрать, если получатель живет в другом часовом поясе?" text="Аудио поздравления - это классные поздравления с Днем рождения, юбилеем или любым другим праздником. Поздравление доставляется получателю обычным входящим звонком на его телефон. Яркие эмоции и хорошее настроение гарантированы!"></AccordionElement>

					<AccordionElement title="Какое время доставки выбрать, если получатель живет в другом часовом поясе?" text="Аудио поздравления - это классные поздравления с Днем рождения, юбилеем или любым другим праздником. Поздравление доставляется получателю обычным входящим звонком на его телефон. Яркие эмоции и хорошее настроение гарантированы!"></AccordionElement>

				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	import AccordionElement from './Blocks/Accordion_Element.vue';

	export default {
		data(){
			return {
				open: false
			}
		},
		components: {
			AccordionElement
		}
	}

</script>
<style lang="scss" scoped>
	.accordion{
		margin-top: 25px;
		@include tablet{
			font-size: 13px;
			line-height: 20px;
			margin-top: 	15px;
		}
	}
	.accordion__item{
		margin-bottom: 42px;
		&:first-child{
			.accordion__content{
				display: block;
			}
		}
		&:last-child{
			margin-bottom: 25px;
			padding-bottom: 	0;
			@include tablet{
				margin-bottom: 0px;
			}
		}
		margin-bottom: 20px;
		border-bottom: 1px solid #F0F0F0;
		padding-bottom: 20px;
		&:last-child{
			border-bottom: 0;
			margin-bottom: 	5px;
			@include tablet{
				margin-bottom: 	0;
			}
		}
		@include tablet{
			padding-bottom: 	10px;
			margin-bottom: 	10px;
		}
	}
	.accordion__active{
		&:after{
			border-width: 0px 5px 5px 5px;
			border-color: transparent transparent  #757575 transparent;
		}
	}
</style>