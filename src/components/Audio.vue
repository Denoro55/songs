<template>
	<div class="audio">
		<div class="audio__left">
			<div class="audio__circle">
				<div class="control-play control-hidden">
					<svg width="28" height="28">
						<polyline points="0,0 28,14 0,28 " fill="white"></polyline>
					</svg>
				</div>
				<div class="control-pause">
					<svg viewBox="0 0 21 28">
						<rect width="7" height="28" fill="white"></rect>
						<rect x="14" width="7" height="28" fill="white"></rect>
					</svg>
				</div>
			</div>
		</div>
		<div class="audio__right">
			<div class="audio__progress">
				<div class="audio__line">
					<div class="audio__line-progress"></div>
				</div>
				<div class="audio__text">идет воспроизведение</div>
			</div>
			<div class="audio__time">00:12</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.audio{
		display: flex;
		align-items: center;
		margin-top: 25px;
		@include tablet{
			margin-top: 15px;
		}
	}
	.audio__left{
		display: flex;
		justify-content: center;
		align-items: center;
		background: #F7F7F7;
		border-radius: 12px;
		height: 96px;
		width: 96px;
		margin-right: 14px;
		@include tablet{
			width: 64px;
			height: 64px;
			margin-right: 	10px;
		}
	}
	.audio__right{
		position: 	relative;
		display: flex;
		align-items: center;
		background: #F7F7F7;
		flex: 1;
		border-radius: 12px;
		padding-left: 19px;
		height: 96px;
		@include tablet{
			height: 64px;
			padding-left: 	10px;
		}
	}
	.audio__circle{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 70px;
		height: 70px;
		background: $blue;
		border-radius: 50%;
		&:hover{
			cursor: pointer;
		}
		@include tablet{
			width: 44px;
			height: 44px;
		}
	}
	.audio__progress{
		flex: 1;
	}
	.audio__line{
		background: $grey;
		height: 12px;
		border-radius: 12px;
		overflow: hidden;
	}
	.audio__line-progress{
		width: 45%;
		background: $blue;
		height: 100%;
		border-radius: 12px;
	}
	.audio__text{
		position: absolute;
		bottom: 13px;
		right: 0;
		left: 0;
		text-align: center;
		color: $grey;
		font-size: 14px;
		white-space: nowrap;
		@include tablet{
			font-size: 11px;
			bottom: 7px;
			letter-spacing: -0.06875px;
		}
	}
	.audio__time{
		width: 105px;
		text-align: center;
		@include tablet{
			width: 58px;
			font-size: 13px;
		}
	}
</style>