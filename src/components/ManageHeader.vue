<template>
  <el-container style="display: flex;">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      @select="activeIndex"
      :ellipsis="false"
      router="true"
      @open="handleOpen"
      @close="handleClose"
      style="width: 200px;"
    >
      <el-menu-item index="0" route="/manage/main">
        <img
          src="https://sowebsite.oss-cn-shanghai.aliyuncs.com/files/2017/05/%E8%82%AF%E5%BE%B7%E5%9F%BA.png"
          alt=""
          style="width: 3cm"
        />
      </el-menu-item>
      <el-menu-item index="1" route="/manage/main">首页</el-menu-item>
      <el-menu-item index="2" route="/manage/order">订单管理</el-menu-item>
      <el-menu-item index="3" route="/my/order">菜单管理</el-menu-item>
      <el-menu-item index="4" route="/my/order">类别管理</el-menu-item>
      <el-menu-item index="5" route="/my/information">会员管理</el-menu-item>

      <el-menu-item index="6" route="/login">管理员管理</el-menu-item>
    </el-menu>
  </el-container>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const activeIndex = ref(""); // 默认值
const route = useRoute();

const setActiveIndex = () => {
  const path = route.path;
  if (path === "/manage/main") {
    activeIndex.value = "1";
  } else if (path === "/order") {
    activeIndex.value = "2";
  } else if (path === "/my/order") {
    activeIndex.value = "3";
  } else if (path === "/my/information") {
    activeIndex.value = "4";
  } else if (path === "/login") {
    activeIndex.value = "5";
  } else {
    activeIndex.value = ""; // 默认的 "点餐" 页
  }
};

watch(route, setActiveIndex); // 监听路由变化
setActiveIndex(); // 组件挂载时调用一次，设置正确的菜单项

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>


<style>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
.el-menu {
  background-color: rgba(255, 255, 255, 0.5); /* 半透明背景 */
  backdrop-filter: blur(10px); /* 毛玻璃效果 */
  /* 其他样式 */
}
</style>