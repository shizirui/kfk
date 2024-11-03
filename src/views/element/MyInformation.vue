<template>
  <main-header />
  <el-container style="margin: 0 150px">
    <el-aside width="250px">
      <el-menu :default-active="activeMenu">
        <el-menu-item index="1" @click="handleMenuSelect('1')"
          >个人信息</el-menu-item
        >
        <el-menu-item index="2" @click="handleMenuSelect('2')"
          >修改个人信息</el-menu-item
        >
        <el-menu-item index="3" @click="handleMenuSelect('3')"
          >修改密码</el-menu-item
        >
      </el-menu>
    </el-aside>
    <el-main>
      <div v-if="activeMenu === '1'">
        <information-com />
      </div>
      <div v-else-if="activeMenu === '2'">
        <inform-change />
      </div>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import MainHeader from "@/components/MainHeader.vue";
import InformationCom from "@/components/InformationCom.vue";
import InformChange from "@/components/InformChange.vue";
import { ref } from "vue";

const activeMenu = ref("1");

const handleMenuSelect = (index: string) => {
  activeMenu.value = index;
};
</script>