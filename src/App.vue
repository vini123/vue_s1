<template>
	<div>
		<div class="u-name">{{name}} </div>
		<span class="u-like" v-for="item in likes">
			{{item}}
		</span>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				name: '七月羽歌',
				likes:[
					'热血江湖',
					'王者荣耀',
					'跑跑卡丁车',
					'地下城勇士'
				]
			}
		}

	}
</script>

<style>
	.u-name{
		color: #000;
		font-size: 16px;
		font-weight:bold;
		margin-left: 5px;
	}

	.u-like{
		display:inline-block;
		padding: 6px 15px;
		border-radius: 5px;
		font-size: 13px;
		color: #fff;
		background-color: #a38;
		cursor: pointer;
		margin: 15px 5px;
	}
</style>
