<template>
  <el-container style="display: flex; margin: 0 150px">
    <el-header
      style="height: auto; align-items: center; justify-content: center"
    >
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        :ellipsis="false"
        router="true"
        style="display: flex"
      >
        <el-menu-item index="0" route="/main">
          <img
            src="https://sowebsite.oss-cn-shanghai.aliyuncs.com/files/2017/05/%E8%82%AF%E5%BE%B7%E5%9F%BA.png"
            alt=""
            style="width: 3cm"
          />
        </el-menu-item>
        <el-menu-item index="1" route="/main">首页</el-menu-item>
        <el-menu-item index="2" route="/order">点餐</el-menu-item>
        <el-sub-menu index="3">
          <template #title>我的</template>
          <el-menu-item index="3-1" route="/my/order">我的订单</el-menu-item>
          <el-menu-item index="3-2" route="/my/information">个人信息</el-menu-item>
        </el-sub-menu>
        <el-menu-item style="width: 10px">
          <el-divider direction="vertical"></el-divider>
        </el-menu-item>
        <el-menu-item index="4" route="/login"> 登录 </el-menu-item>
      </el-menu>
    </el-header>
  </el-container>
</template>
  
  <script>
export default {
  data() {
    return {
      activeIndex: "", // 默认值
    };
  },
  methods: {
    setActiveIndex() {
      const path = this.$route.path;
      if (path === "/main") {
        this.activeIndex = "1";
      } else if (path === "/order") {
        this.activeIndex = "2";
      } else if (path === "/my/order") {
        this.activeIndex = "3-1";
      } else if (path === "/my/information") {
        this.activeIndex = "3-2";
      } else if (path === "/login") {
        this.activeIndex = "4";
      } else {
        this.activeIndex = ""; // 默认的 "点餐" 页
      }
    },
  },
  watch: {
    $route() {
      this.setActiveIndex(); // 监听路由变化，动态设置 activeIndex
    },
  },
  mounted() {
    this.setActiveIndex(); // 组件挂载时调用一次，设置正确的菜单项
  },
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