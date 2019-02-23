<template>
	<div class="section-5 section accord__parent">
		<div class="section-padding">
			<div class="title accordion__title accordion__title-active">Остались вопросы?</div>
			<div class="accord__target">
				<div class="section-5__subtitle">Ответим с 09:00 до 21:00 без выходных</div>
				<div class="contacts"><a class="contact" href="#">8 (499) 380-74-22</a><a class="contact contact__vb" href="#">Написать в Viber</a><a class="contact contact__vk" href="#">Написать Вконтакте</a><a class="contact contact__wt" href="#">Написать в WhatsApp</a></div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {

	}
</script>
<style lang="scss" scoped>
	div.section-5{
		background: #E3F2FD;
	}
	.section-5__subtitle{
		margin-top: 7px;
		@include tablet{
			font-size: 13px;
			line-height: 15px;
		}
	}
	.contacts{
		width: 320px;
		margin: 0 auto;
		margin-top: 18px;
		text-align: center;
		margin-bottom: 	5px;
		@include tablet{
			max-width: 100%;
		}
	}
	.contact{
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		border-radius: 24px;
		height: 48px;
		margin-bottom: 9px;
		background: white;
		&:first-child{
			color: black;
			border: 1px solid #979797;
		}
		&:last-child{
			@include tablet{
				margin-bottom: 0;
			}
		}
		@include tablet{
			font-size: 14px;
		}
	}
	.contact.contact__vb{
		background: #7B529D;
	}
	.contact.contact__vk{
		background: #5B80B3;
	}
	.contact.contact__wt{
		background: #1FA900;
	}
</style>