<template>
	<div class="header">
		<div class="hamburg__button">
			<div class="hamburg">
				<div class="hamburg-line hamburg-line1"></div>
				<div class="hamburg-line hamburg-line2"></div>
				<div class="hamburg-line hamburg-line3"></div>
			</div>
		</div>
		<div class="header-mobile">Каталог поздравлений</div>
		<ul class="menu">
			<li class="menu__item menu__item-active"><a href="#">День рождение</a></li>
			<li class="menu__item"><a href="#">Юбилеи</a></li>
			<li class="menu__item"><a href="#">Признания</a></li>
			<li class="menu__item"><a href="#">Свадебные</a></li>
			<li class="menu__item"><a href="#">Розыгрыши</a></li>
		</ul>
		<div class="menu__next">
			<div class="arrow"><img src="../assets/expand_more_24px.svg" alt=""/></div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.header{
		display: 	flex;
		height: 	51px;
		background: $blue;
		@include tablet{
			padding: 0 20px;
			box-shadow: 0px 1px 0px #DCDCDC;
			background: #F4F4F4;;
		}
	}
	.header-mobile{
		display: 	none;
		align-items: center;
		color: $blue2;
		font-weight: 500;
		font-size: 15px;
		@include tablet{
			display: 	flex;
		}
	}

	// menu
	.menu{
		display: 	flex;
		a{
			display: flex;
			align-items: 	center;
			color: white;
			font-size: 	16px;
			padding-left: 	13px;
			padding-right: 	20px;
		}
		@include tablet{
			display: none;
		}
	}
	.menu__item{
		position: 	relative;
		display: 	flex;
		margin-right: 	10px;
		&:after{
			content: '';
			display: 	block;
			position: absolute;
			top: 50%;
			right: 	0;
			margin-top: -4px;
			width: 0;
			height: 0;
			border-style: solid;
			border-width: 5px 5px 0 5px;
			border-color: rgba(255, 255, 255, 0.4) transparent transparent transparent;
		}
	}
	.menu__item-active{
		position: 	relative;
		&:before{
			content: '';
			display: 	block;
			height: 	3px;
			background: #E94747;
			position: 	absolute;
			right: 	5px;
			left: 	13px;
			bottom: 0;
		}
	}
	.menu__next{
		display: flex;
		align-items: center;
		margin-left: auto;
		margin-right: 2px;
		padding: 0 15px;
		&:hover{
			cursor: pointer;
		}
		@include tablet{
			display: none;
		}
	}

	// hamgurger
	.hamburg__button{
		align-items: center;
		display: none;
		padding-right: 18px;
		user-select: none;
		@include tablet{
			display: flex;
		}
	}
	.hamburg{
		position: relative;
		width: 18px;
		height: 12px;
		&:hover{
			cursor: pointer;
		}
	}
	.hamburg-line{
		width: 100%;
		height: 2px;
		background: $blue2;
		margin-bottom: 7px;
		position: absolute;
		border-radius: 3px;
		&:last-child{
			margin-bottom: 0;
		}
		transition: all .3s;
	}
	.hamburg-line1{
		top: 0;
	}
	.hamburg-line2{
		top: 50%;
		margin-top: -1px;
	}
	.hamburg-line3{
		bottom: 0;
	}
</style>