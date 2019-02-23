<template>
	<li class="accordion__item" v-bind:class="{ accordion__active_start: open }">
		<div class="accordion__header" @click="toggle">{{title}}</div>
		<div class="accordion__content">
			{{text}} {{open}}
		</div>
	</li>
</template>
<script>

	import $ from 'jquery';

	export default {
		props: {
			title: String,
			text: String,
			open: Boolean
		},
		methods: {
			toggle(e){
				$(e.target).next().slideToggle(250);
				$(e.target).closest('.accordion__item').toggleClass('accordion__active');
			}
		}
	}

</script>
<style lang="scss" scoped>
	.accordion__header{
		position: relative;
		color: $blue2;
		line-height: 19px;
		font-size: 16px;
		padding-right: 28px;
		&:after{
			content: '';
			display: 	block;
			position: absolute;
			top: 11px;
			right: 	0;
			margin-top: -4px;
			width: 0;
			height: 0;
			border-style: solid;
			border-width: 5px 5px 0 5px;
			border-color: #757575 transparent transparent transparent;
			@include tablet{
				top: 11px;
			}
		}
		&:hover{
			cursor: pointer;
		}
		@include tablet{
			font-size: 13px;
			line-height: 20px;
			padding-bottom: 0;
		}
	}
	.accordion__content{
		display: none;
		padding-top: 15px;
		@include tablet{
			padding-bottom: 	0;
			padding-top: 	10px;
		}
	}
	.accordion__active{
		.accordion__header{
			&:after{
				border-width: 0px 5px 5px 5px;
				border-color: transparent transparent  #757575 transparent;
			}
		}
	}
	.accordion__active_start{
		.accordion__content{
			display: block;
		}
	}
</style>