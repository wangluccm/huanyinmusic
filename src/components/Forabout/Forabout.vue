<template>
<div class="main">
	<div class="home mm">
		<!--<div class="t">-->
			<vue-audio-native 
				size='small'
				:url=url 
				:showCurrentTime=showCurrentTime 
				:showControls=showControls 
				:showVolume=showVolume
				:showDownload=showDownload 
				:autoplay=autoplay 
				:hint=hint 
				:waitBuffer=waitBuffer
				:downloadName=downloadName
			
				>
			</vue-audio-native>
			<!-- <button @click="swtichSrc(0)">音频1</button>
			<button @click="swtichSrc(1)">音频2</button>
			<button @click="play" style="background:#000">开始播放</button>
			<button @click="pause">暂停播放</button> -->
		<!--</div>-->
	</div>
</div>
</template>

<script>

	export default {
		name: "home",
		data() {
			return {
				urlArray: ["http://mp3.9ku.com/m4a/183203.m4a", "http://www.170mv.com/kw/other.web.rh01.sycdn.kuwo.cn/resource/n3/21/19/3413654131.mp3"], //演示路径
				url: 'http://music.163.com/song/media/outer/url?id=1403250178.mp3',
				showCurrentTime: true, //默认true，是否显示当前播放时间
				showControls: false, //默认false，true:展示原生音频播放控制条，false：展示模拟播放控制条
				showVolume: true, //默认true，默认显示音量调节和静音按钮 true显示音量调节和静音按钮
				showDownload: true, //默认true，默认显示下载按钮
				autoplay: true, //默认false，自动播放有效音频(由于高版本浏览器协议限制，初始化页面时无法自动播放，可以在点击页面后手动触发)
				waitBuffer:true,//默认true，拖拽到未加载的时间，是否需要等待加载，true:滑块位置不动，等待加载音频资源后播放，false：当滑动位置大于当前缓冲的最大位置，则重置到当前最大缓冲位置
				downloadName:"下载音频",//默认“下载音频”，在Chrome和火狐、同域名下，修改下载文件名称，其它保持原文件服务器名称
				hint: "音频正在上传中，请稍等…", //无音频情况下提示文案
				currentAudioId:"",//当前正在播放的audio id
			}
		},
		methods: {
			// change(event) {
			// 	console.log("当前播放状态：", event)
			// },
			// timeupdate(event) {
			// 	console.log("当前播放时间：", event)
			// },
			// metadata(event) {
			// 	console.log(event, "音频长度：", event.target.duration)
			// },
			//切换音频地址
			swtichSrc(index) {
				let t = this;
				t.url = t.urlArray[index];
			},
			//获取正在播放音频currentAudioId，可存全局，用以播放和暂停音频
			audioId(event){
				this.currentAudioId=event;
			},
			//使用组件的id，用来开始播放录音
			play(){
				document.getElementById(this.currentAudioId).play();
			},
			//使用组件的id，用来暂停播放录音
			pause(){
				document.getElementById(this.currentAudioId).pause();
			}
		},
	}
</script>

<style>
.main{
	width:100%;
	height:65px;
	background: #333;
	position: fixed;
  left: 0;
  bottom :0;

}
.mm{
	width:1200px;
	height:45px;
	margin: 0 auto;
	line-height :45px;
	color:#F27A7A
}

</style>