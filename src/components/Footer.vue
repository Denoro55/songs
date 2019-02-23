<template>
	<footer class="footer">
		<div class="copyright">© ИП Карманов А.Э., 2018 г. Все права защищены.</div>
		<div class="politics">
			<div class="politics__item"><a href="#">Пользовательское соглашение</a></div>
			<div class="politics__item"><a href="#">Политика конфиденциальности</a></div>
		</div>
	</footer>
</template>


<script>
	export default {

	}
</script>
<style lang="scss" scoped>
	.footer{
		padding-left: 25px;
		color: #9B9B9B;
		font-size: 12px;
		letter-spacing: -0.133333px;
		margin-top: 19px;
		margin-bottom: 50px;
		a{
			color: #9B9B9B;
		}
		@include tablet{
			padding-left: 0;
		}
	}
	.politics{
		display: flex;
		a{
			text-decoration: underline;
			margin-right: 10px;
		}
		@include tablet{
			display: block;
		}
		margin-top: 3px;
		@include tablet{
			margin-top: 10px;
		}
	}
	.politics__item{
		@include tablet{
			margin-top: 5px;
		}
	}
</style>
