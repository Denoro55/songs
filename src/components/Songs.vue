<template>
	<div class="section-2 section">
		<div class="section-padding">
			<div class="section-2__header">
				<div class="title">Вам также понравится</div><a class="show__all" href="#">Показать все</a>
			</div>
			<div class="songs">
				<div class="songs__row">
					<div class="song">
						<div class="song__left">
							<div class="audio__circle">
								<div class="control-play">
									<svg viewBox="0 0 18 18">
										<polyline points="0,0 18,9 0,18 " fill="white"></polyline>
									</svg>
								</div>
								<div class="control-pause control-hidden">
									<svg width="21" height="28">
										<rect width="7" height="28" fill="white"></rect>
										<rect x="14" width="7" height="28" fill="white"></rect>
									</svg>
								</div>
							</div>
						</div>
						<div class="song__right">
							<div class="song__title">Поздравление с Днём Рождения ( Звонок из полиции )</div><a class="song__send" href="#">Отправить</a>
						</div>
					</div>
					<div class="song">
						<div class="song__left">
							<div class="audio__circle">
								<div class="control-play">
									<svg viewBox="0 0 18 18">
										<polyline points="0,0 18,9 0,18 " fill="white"></polyline>
									</svg>
								</div>
								<div class="control-pause control-hidden">
									<svg width="21" height="28">
										<rect width="7" height="28" fill="white"></rect>
										<rect x="14" width="7" height="28" fill="white"></rect>
									</svg>
								</div>
							</div>
						</div>
						<div class="song__right">
							<div class="song__title">Для прекрасной королевы красоты (древняя песня)</div><a class="song__send" href="#">Отправить</a>
						</div>
					</div>
				</div>
				<div class="songs__row">
					<div class="song">
						<div class="song__left">
							<div class="audio__circle">
								<div class="control-play">
									<svg viewBox="0 0 18 18">
										<polyline points="0,0 18,9 0,18 " fill="white"></polyline>
									</svg>
								</div>
								<div class="control-pause control-hidden">
									<svg width="21" height="28">
										<rect width="7" height="28" fill="white"></rect>
										<rect x="14" width="7" height="28" fill="white"></rect>
									</svg>
								</div>
							</div>
						</div>
						<div class="song__right">
							<div class="song__title">Пусть в День Рождения исполнится любое желание! (длинная песня)</div><a class="song__send" href="#">Отправить</a>
						</div>
					</div>
					<div class="song">
						<div class="song__left">
							<div class="audio__circle">
								<div class="control-play">
									<svg viewBox="0 0 18 18">
										<polyline points="0,0 18,9 0,18 " fill="white"></polyline>
									</svg>
								</div>
								<div class="control-pause control-hidden">
									<svg width="21" height="28">
										<rect width="7" height="28" fill="white"></rect>
										<rect x="14" width="7" height="28" fill="white"></rect>
									</svg>
								</div>
							</div>
						</div>
						<div class="song__right">
							<div class="song__title">Пусть будет твоя жизнь такой, как мечталось! (песня)</div><a class="song__send" href="#">Отправить</a>
						</div>
					</div>
				</div>
			</div>
			<div class="show__bottom"><a class="show__all" href="#">Показать все</a></div>
		</div>
	</div>
</template>
<script>
	export default {

	}
</script>
<style lang="scss" scoped>
	.section-2__header{
		display: flex;
		align-items: center;
		margin-bottom: 	25px;
		@include tablet{
			margin-bottom: 14px;
		}
	}
	.show__all {
		margin-left: auto;
		color: black;
		font-weight: 500;
		font-size: 14px;
		color: $blue2;
		text-transform: uppercase;
		@include tablet{
			display: none;
		}
	}

	// songs

	.songs__row{
		display: 	flex;
		margin-bottom: 	21px;
		border-bottom: 1px solid #F0F0F0;
		padding-bottom: 	20px;
		&:last-child{
			border-bottom: 0;
			padding-bottom: 0;
			margin-bottom: 0;
			@include tablet{
				.song:last-child{
					border-bottom: 0;
				}
			}
		}
		@include tablet{
			display: block;
			border-bottom: 0;
			padding-bottom: 0;
			margin-bottom: 0;
		}
	}
	.song{
		display: 	flex;
		width: 	50%;
		@include tablet{
			width: 100%;
			border-bottom: 1px solid #F0F0F0;
			padding-bottom: 10px;
			margin-bottom: 10px;
		}
	}
	.song__left{
		display: 	flex;
		justify-content: 	center;
		align-items: 	center;
		width: 	65px;
		height: 	65px;
		background: #FAFAFA;
		border-radius: 12px;
		@include tablet{
			width: 48px;
			height: 48px;
		}
	}
	.song__title{
		line-height: 22px;
		font-size: 16px;
		color: $blue2;
		margin-bottom: 	11px;
		min-height: 	66px;
		@include tablet{
			line-height: 18px;
			font-size: 13px;
			margin-bottom: 8px;
			min-height: inherit;
		}
	}
	.song__send{
		color: #E94747;
		font-weight: 	500;
	}
	.songs{
		margin-bottom: 10px;
		.audio__circle{
			width: 	44px;
			height: 44px;
			@include tablet{
				width: 35px;
				height: 35px;
			}
		}
		.control-play{
			height: 18px;
			width: 18px;
			@include tablet{
				height: 14px;
				width: 14px;
				line-height: 1.1;
			}
		}
	}
	.song__right{
		margin-left: 18px;
		max-width: 	215px;
		padding-top: 	8px;
		@include tablet{
			padding-top: 4px;
			max-width: inherit;
		}
	}
	.show__bottom{
		display: none;
		padding-top: 10px;
		@include tablet{
			.show__all{
				display: block;
			}
			display: block;
		}
	}
</style>