<template>
  <div>
    <div
      id="container"
      text-center
    />
    <div
      flex
      justify-center
      gap-1
    >
      <button @click="showPre">
        上 一个
      </button>
      <button @click="openFullScreen">
        进入全屏
      </button>
      <button @click="showNext">
        下一个
      </button>
      <input
        v-model="jumpNum"
        type="number"
      >
      <button @click="onJump">
        跳转
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '展示妖怪 Animation',
  meta: [
    {
      name: '卡布西游妖怪展示',
      content: '卡布西游妖怪技能动画展示',
    },
  ],
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let player: any
let num = 1
const jumpNum = ref(1)
function openFullScreen() {
  player.enterFullscreen()
}

function showPre() {
  num -= 1
  num = num < 1 ? 1 : num
  player.load(`/battleRole/spirit${num}src.swf`)
}

function showNext() {
  num += 1
  if (num >= 10001) {
    num = num > 10535 ? 1 : num
  }
  else {
    num = num > 2758 ? 10001 : num
  }
  player.load(`/battleRole/spirit${num}src.swf`)
}

function onJump() {
  num = jumpNum.value
  player.load(`/battleRole/spirit${num}src.swf`)
}

onMounted(() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).RufflePlayer = (window as any).RufflePlayer || {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ruffle = (window as any).RufflePlayer.newest()
  player = ruffle.createPlayer()
  const container = document.getElementById('container')
  container?.appendChild(player)
  player.style.width = '1200px'
  player.style.height = '700px'

  player.config = {
    autoplay: 'auto',
    // and so on...
  }
  player.load(`/battleRole/spirit${num}src.swf`)
})
</script>

<style scoped></style>
