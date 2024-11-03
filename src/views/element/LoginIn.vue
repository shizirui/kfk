<template>
  <div :style="{background:
          'url(https://qq-web.cdn-go.cn/zc.qq.com/8df0009e/v3/img/img-bg@2x.png)',
          backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',}">
    <main-header class="menu" />
    <el-container
      :style="{
        margin: '0 150px',
        
        height: `calc(100vh - ${headerHeight}px)`,
      }"
    
      >
      <el-main>
        <el-col :gutter="20">
          <el-row :span="6" justify="center"
            ><el-text class="mx-1" size="large" style="font-size: 50px;">欢迎登陆KFK！</el-text></el-row
          >

          <el-row :span="6" justify="space-around" :offset="6"
            ><el-card>
              <el-form :model="loginForm" label-width="200px" size="large">
                <el-form-item label="账号">
                  <el-input
                    v-model="loginForm.userid"
                    placeholder="请输入账号"
                  ></el-input>
                </el-form-item>
                <el-form-item label="密码">
                  <el-input
                    type="password"
                    v-model="loginForm.password"
                    placeholder="请输入密码"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="Info" @click="register">注册</el-button>
                  <el-button type="primary">登录</el-button>
                </el-form-item>
              </el-form></el-card
            ></el-row
          >
        </el-col></el-main
      >
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue";
import { useRouter } from 'vue-router';

import MainHeader from "../../components/MainHeader.vue";
const header = ref<HTMLElement | null>(null);
const headerHeight = ref(0);
const router = useRouter();

onMounted(() => {
  if (header.value) {
    headerHeight.value = header.value.clientHeight; // 获取 header 的高度
  }
});
const loginForm = reactive({
  userid: "",
  password: "",
});

const register = ()=>{
  router.push('/register');
}
</script>

<style>
.el-row {
  margin-bottom: 200px;
}
.menu{
  position: sticky; /* 悬浮定位 */
    top: 0; /* 距离顶部0像素 */
    z-index: 1000; /* 确保在其他元素之上 */
}
</style>