<template>
	<div class="gifts">
		<div class="gifts__left accord__parent">
			<div class="gift__title">Текст поздравления</div>
			<div class="title accordion__title mobile__text">Текст поздравления</div>
			<div class="gift__text accord__target">
				<div v-if="pc">
					<div class="gift__text-p">Андрей, сегодня, в твой день <br> рожденья <br> Тебя обнимаю, шлю <br> поздравления! <br> Ты верь в удачу, и жизнь <br> исполнит твои <br> Желанья!</div>
					<div class="gift__text-p">В жизни порою <br> так поворотов много, <br> Перед тобою <br> прекрасная дорога! <br> Пусть тебе светит всегда <br> зеленый светофор</div>
					<div class="gift__text-p">День рожденья твой - это <br> праздник чудесный, <br> и тебя хочу я порадовать</div>
				</div>
				<div v-else class="alternate__text">
					Смею Вас заверить – Президент, несмотря на свою занятость, внимательно относится к своим гражданам, и имеет свои источники информации. От души поздравляю Вас с праздником! Желаю, чтобы цели. Которые Вы ставите перед собой, достигались с молниеносной скоростью! 
				</div>
			</div>
			<div class="gift__show"><a class="show" href="#">
				<div class="show__text">Показать полностью</div><img src="../assets/expand_more.png" alt=""/></a></div>
		</div>
		<div class="gifts__right">
				<div class="send__title">Отправить поздравление</div>
				<div class="send__text">Поздравление будет доставлено в виде входящего звонка на телефон получателя.</div>
				<form class="form" action="/">
					<div class="form-group">
						<label class="phone-label">Телефон получателя</label>
						<!-- <vueMask v-model="phone" class="phone-input phone-mask" mask="+7(000)-000-00-00" :raw="false" :options="options" type="text" placeholder="+7("></vueMask> -->
						<input v-mask="'+7(###)-###-##-##'" class="phone-input phone-mask" type="text" placeholder="+7(">
					</div>
					<div class="form__data">Когда позвонить?</div>
					<div class="form__data-groups">
						<div class="form-group form-group-datepicker"><img src="../assets/Shape.png" alt=""/>
							<!-- <input id="datepicker" type="text" autocomplete="off" value="29 декабря"/> -->
							<datepicker :language="ru" :format="'dd MMMM'" id="datepicker" :value="state.date" name="uniquename"></datepicker>
						</div>
						<div class="form-group form-group-timepicker">
							<div class="select">
								<select>
									<option value="0">0</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
									<option value="11">11</option>
									<option value="12">12</option>
									<option value="13">13</option>
									<option value="14">14</option>
									<option value="15">15</option>
									<option value="16">16</option>
									<option value="17">17</option>
									<option value="18" selected="selected">18</option>
									<option value="19">19</option>
									<option value="20">20</option>
									<option value="21">21</option>
									<option value="22">22</option>
									<option value="23">23</option>
									<option value="24">24</option>
									<option value="25">25</option>
									<option value="26">26</option>
									<option value="27">27</option>
									<option value="28">28</option>
									<option value="29">29</option>
									<option value="30">30</option>
									<option value="31">31</option>
									<option value="32">32</option>
									<option value="33">33</option>
									<option value="34">34</option>
									<option value="35">35</option>
									<option value="36">36</option>
									<option value="37">37</option>
									<option value="38">38</option>
									<option value="39">39</option>
									<option value="40">40</option>
									<option value="41">41</option>
									<option value="42">42</option>
									<option value="43">43</option>
									<option value="44">44</option>
									<option value="45">45</option>
									<option value="46">46</option>
									<option value="47">47</option>
									<option value="48">48</option>
									<option value="49">49</option>
									<option value="50">50</option>
									<option value="51">51</option>
									<option value="52">52</option>
									<option value="53">53</option>
									<option value="54">54</option>
									<option value="55">55</option>
									<option value="56">56</option>
									<option value="57">57</option>
									<option value="58">58</option>
									<option value="59">59</option>
									<option value="60">60</option>
								</select>
							</div>
						</div>
						<div class="form-group form-group-timepicker">
							<div class="select">
								<select>
									<option value="0">0</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
									<option value="11">11</option>
									<option value="12">12</option>
									<option value="13">13</option>
									<option value="14">14</option>
									<option value="15">15</option>
									<option value="16">16</option>
									<option value="17">17</option>
									<option value="18">18</option>
									<option value="19">19</option>
									<option value="20">20</option>
									<option value="21">21</option>
									<option value="22">22</option>
									<option value="23">23</option>
									<option value="24">24</option>
									<option value="25">25</option>
									<option value="26">26</option>
									<option value="27">27</option>
									<option value="28">28</option>
									<option value="29">29</option>
									<option value="30">30</option>
									<option value="31">31</option>
									<option value="32">32</option>
									<option value="33">33</option>
									<option value="34">34</option>
									<option value="35">35</option>
									<option value="36">36</option>
									<option value="37">37</option>
									<option value="38">38</option>
									<option value="39">39</option>
									<option value="40" selected="selected">40</option>
									<option value="41">41</option>
									<option value="42">42</option>
									<option value="43">43</option>
									<option value="44">44</option>
									<option value="45">45</option>
									<option value="46">46</option>
									<option value="47">47</option>
									<option value="48">48</option>
									<option value="49">49</option>
									<option value="50">50</option>
									<option value="51">51</option>
									<option value="52">52</option>
									<option value="53">53</option>
									<option value="54">54</option>
									<option value="55">55</option>
									<option value="56">56</option>
									<option value="57">57</option>
									<option value="58">58</option>
									<option value="59">59</option>
									<option value="60">60</option>
								</select>
							</div>
						</div>
					</div>
					<div class="form-group">
					<!-- 	<vueMask v-model="phone2" value="" class="phone-input phone-input2 phone-mask" type="text" placeholder="Ваш телефон" mask="+7(000)-000-00-00" :raw="false" :options="options2"></vueMask> -->
					<input v-mask="'+7(###)-###-##-##'" class="phone-input phone-input2 phone-mask" type="text" placeholder="Ваш телефон">
					</div>
					<div class="form__submit">
						<button class="submit" type="submit">Отправить</button>
					</div>
				</form>
		</div>
	</div>
</template>
<script>
	import {mask} from 'vue-the-mask'
	import Datepicker from 'vuejs-datepicker';
	import {ru} from 'vuejs-datepicker/dist/locale'
	ru.months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
	if (window.innerWidth<767){
		ru.months = ['янв.', 'фев.', 'мар.', 'апр.', 'мая', 'июн.', 'июл.', 'авг.', 'сен.', 'окт.', 'ноя.', 'дек.'];
	}
	export default {
		data(){
			return {
				ru: ru,
				pc: true,
				state: {
					date: new Date(2019, 11, 31)
				}
			}
		},
		components: {
			Datepicker
		},
		methods: {
			checkWidth(){
				let w = window.innerWidth;
				if (w<=767){
					this.pc = false
				} else {
					this.pc = true
				}
			}
		},
		created(){
			this.checkWidth();
			window.onresize = ()=>{
				this.checkWidth();
			}
		},
		directives: {mask}
	}
</script>
<style lang="scss" scoped>
	.gifts{
		display: flex;
		margin-top: 20px;
		@include tablet{
			display: block;
		}
	}
	.gifts__left{
		padding-top: 21px;
		margin-right: 50px;
		@include tablet{
			width: 	100%;
			padding-top: 	11px;
			border-bottom: 1px solid #F0F0F0;
			border-top: 1px solid #F0F0F0;
			padding: 15px 0;
		}
	}
	.gifts__right{
		width: 391px;
		margin-left:  auto;
		background: #FFFFFF;
		border: 2px solid #FFFFFF;
		box-sizing: border-box;
		box-shadow: 0px 5px 14px rgba(0, 0, 0, 0.13335);
		border-radius: 12px;
		padding: 19px 27px;
		flex-shrink: 0;
		margin-left: auto;
		padding-bottom: 35px;
		@include tablet{
			width: 100%;
			box-shadow: none;
			padding: 0;
			padding-top: 	17px;
		}
	}
	.gift__title {
		margin-bottom: 15px;
		font-weight: 900;
		line-height: 21px;
		font-size: 18px;
		letter-spacing: 0.27px;
		@include tablet{
			display: 	none;
		}
	}
	.gift__text{
		line-height: 19px;
		font-size: 14px;
		letter-spacing: -0.0875px;
		color: #4A4A4A;
		@include tablet{
			display: 	none;
			margin-bottom: 	0px;
		}
	}
	.gift__text-p{
		margin-bottom: 26px;
		&:last-child{
			margin-bottom: 0;
		}
	}
	.show{
		display: flex;
		align-items: center;
		text-transform: uppercase;
		color: $blue2;
		font-weight: 500;
	}
	.gift__show{
		margin-top: 14px;
		@include tablet{
			display: 	none;
		}
	}
	.show__text{
		margin-right: 8px;
	}
	.send__title{
		font-weight: 900;
		line-height: 21px;
		font-size: 18px;
		letter-spacing: 0.27px;
		margin-bottom: 14px;
		@include tablet{
			font-size: 16px;
			font-weight: 500;
		}
	}
	.send__text{
		@include tablet{
			font-size: 13px;
			
		}
	}
		// form

		.form{
			margin-top: 22px;
		}

		.form-group{
			background: #F8F8F8;
			border-radius: 8px;
			padding: 5px;
			padding-bottom: 0px;
			label{
				display: block;
			}
		}
		.phone-label{
			line-height: 14px;
			font-size: 12px;
			color: $blue2;
			margin-bottom: 3px;
		}
		.phone-input{
			width: 100%;
			outline: 0;
			border: 0;
			border-bottom: 2px solid $blue2;
			background: none;
			line-height: 19px;
			font-size: 16px;
			letter-spacing: -1.49012e-09px;
			height: 29px;
			padding-left: 3px;
			&::-webkit-input-placeholder { /* Chrome/Opera/Safari */
				font-size: 16px;
				color: black;
			}
			&::-moz-placeholder { /* Firefox 19+ */
				font-size: 16px;
				color: black;
			}
			&:-ms-input-placeholder { /* IE 10+ */
				font-size: 16px;
				color: black;
			}
			&:-moz-placeholder { /* Firefox 18- */
				font-size: 16px;
				color: black;
			}
		}
		.form__data{
			font-size: 16px;
			margin-top: 15px;
			margin-bottom: 9px;
			@include tablet{
				font-size: 14px;
			}
		}
		.form__data-groups{
			display: flex;
			margin-bottom: 18px;
			height: 	56px;
			.form-group{
				display: flex;
				align-items: center;
				height: 100%;
				padding-top: 	0;
			}
		}
		.form-group-datepicker{
			flex: 1;
			min-width: 0;
			margin-right: 3px;
			padding-left: 12px;
			img{
				@include tablet{
					width: 	18px;
				}
			}
			@include tablet{
				margin-right: 	0;
			}
		}
		.form-group-timepicker{
			width: 73px;
			margin-left: 15px;
			@include tablet{
				width: 52px;
				margin-left: 	10px;
			}
		}
		.select{
			position: relative;
			width: 51px;
			background: #F8F8F8;
			margin-left: 3px;
			&:after{
				content: '';
				display: 	block;
				position: absolute;
				top: 50%;
				right: 	0;
				margin-top: -1px;
				width: 0;
				height: 0;
				border-style: solid;
				border-width: 5px 5px 0 5px;
				border-color: #757575 transparent transparent transparent;
				pointer-events: none;
			}
			@include tablet{
				width: 38px;
				margin-left: 0;
			}
		}
		select{
			color: black;
			border: 0;
			outline: none;
			background: none;
			appearance: none;
			width: 100%;
			line-height: 19px;
			font-size: 16px;
			padding: 5px;
			padding-right: 10px;
		}
		.phone-input2{
			height: 58px;
			border-bottom: 1px solid #757575;
			color: #757575;
			&::-webkit-input-placeholder { /* Chrome/Opera/Safari */
				font-size: 16px;
				color: #757575;
			}
			&::-moz-placeholder { /* Firefox 19+ */
				font-size: 16px;
				color: #757575;
			}
			&:-ms-input-placeholder { /* IE 10+ */
				font-size: 16px;
				color: #757575;
			}
			&:-moz-placeholder { /* Firefox 18- */
				font-size: 16px;
				color: #757575;
			}
		}
		.form__submit{
			margin-top: 21px;
		}
		.submit{
			color: white;
			background: $blue;
			border-radius: 14px;
			width: 100%;
			height: 54px;
			font-size: 16px;
			font-weight: 500;
			border: 0;
			&:hover{
				cursor: pointer;
			}
		}
		.mobile__text{
			display: 	none;
			width: 	100%;
			color: $blue2;
			line-height: 16px;
			font-size: 14px;
			margin-bottom: 	17px;
			@include tablet{
				display: 	block;
				margin-bottom: 0;
			}
		}
		.alternate__text{
			padding-top: 15px;
		}
</style>