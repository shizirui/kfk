<template>
  <div
    :style="{
      background:
        'url(https://qq-web.cdn-go.cn/zc.qq.com/8df0009e/v3/img/img-bg@2x.png)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }"
  >
    <main-header class="menu" />
    <el-container
      :style="{
        margin: '0 150px',

        height: `calc(100vh - ${headerHeight}px)`,
      }"
    >
      <el-main>
        <el-col :gutter="20">
          <el-row :span="6" justify="space-around" :offset="6"
            ><el-card>
              <el-form
                :ref="ruleFormRef"
                :model="loginForm"
                label-width="200px"
                size="large"
                :rules="rules"
              >
                <el-form-item
                  label="用户名"
                  label-position="left"
                  prop="username"
                >
                  <el-input
                    v-model="loginForm.username"
                    placeholder="请输入用户名"
                  ></el-input>
                </el-form-item>
                <el-form-item label="邮箱" label-position="left" prop="email">
                  <el-input
                    v-model="loginForm.email"
                    placeholder="请输入邮箱"
                  ></el-input>
                </el-form-item>
                <el-form-item label="手机号" label-position="left" prop="phone">
                  <el-input
                    v-model="loginForm.phone"
                    placeholder="请输入手机号"
                  ></el-input>
                </el-form-item>
                <el-form-item
                  label="密码"
                  label-position="left"
                  prop="password"
                >
                  <el-input
                    type="password"
                    show-password
                    v-model="loginForm.password"
                    placeholder="请输入密码"
                    style="width: 240px"
                  ></el-input>
                </el-form-item>

                <el-form-item
                  label="请再次输入密码"
                  label-position="left"
                  prop="password1"
                >
                  <el-input
                    type="password"
                    show-password
                    v-model="loginForm.password1"
                    placeholder="请再次输入密码"
                    style="width: 240px"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary">注册</el-button>
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
import MainHeader from "@/components/MainHeader.vue";
import { FormInstance, FormRules } from "element-plus";
import header from "element-plus/es/components/table-v2/src/components/header";
import { onMounted, reactive, ref } from "vue";
const headerHeight = ref(0);

onMounted(() => {
  if (header.value) {
    headerHeight.value = header.value.clientHeight; // 获取 header 的高度
  }
});
const loginForm = reactive({
  userid: "",
  username: "",
  password: "",
  password1: "",
  email: "",
  phone: "",
});

const ruleFormRef = ref<FormInstance>();

const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value !== loginForm.password) {
    callback(new Error("两次输入不一致！"));
  } else {
    callback();
  }
};

const validatePhone = (rule: any, value: any, callback: any) => {
if (!/^\d+$/.test(value) ) { // 检查是否为数字
    callback(new Error('电话号码只能是数字！'));
  } else {
    callback();
  }
}

const rules = reactive<FormRules<typeof loginForm>>({
  username: [
    { required: true, message: "请输入用户名", trigger: "change" },
    { min: 2, max: 10, message: "用户名长度应在2-10之间", trigger: "change" },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "change",
    },
  ],phone: [
    {
      required: true,
      message: "请输入电话",
      trigger: "change",
    },{
      len:11,
      message: "您输入的电话号码不正确",
      trigger: "blur",
    },{
      validator: validatePhone, // 这里引用之前的电话号码验证函数
      trigger: "blur",
    },
  ],
  email: [
    {
      required: true,
      message: "请输入邮箱",
      trigger: "change",
    },
  ],
  password1: [
    { required: true, message: "请再次输入密码", trigger: "change" },
    {
      validator: validatePass2,
      trigger: "blur",
    },
  ],
});
</script>