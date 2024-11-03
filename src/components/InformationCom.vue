<template>
  <el-main>
    <el-card style="width: 700px;">
        <el-form :model="informationform" disabled label-width="auto">
          <el-form-item label="账号" label-position="left" style="width: 500px;">
            <el-input v-model="informationform.user_id" ></el-input>
          </el-form-item>
          <el-form-item label="用户名" label-position="left" style="width: 500px;">
            <el-input v-model="informationform.username" ></el-input>
          </el-form-item>
          <el-form-item label="邮箱" label-position="left" style="width: 500px;">
            <el-input v-model="informationform.email" ></el-input>
          </el-form-item>
          <el-form-item label="电话号码" label-position="left" style="width: 500px;">
            <el-input v-model="informationform.phone" ></el-input>
          </el-form-item>
          <el-form-item label="详细地址" label-position="left" style="width: 500px;">
            <el-input v-model="informationform.address" ></el-input>
          </el-form-item>
        </el-form>
    </el-card>
  </el-main>
</template>

<script lang="ts" setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const information = {
  user_id: "",
  username: "",
  email: "",
  phone: "",
  address: "",
};

const informationform = ref<Partial<typeof information>>({});


const fetchData = async () => {
  try {
    const result = await axios.get("http://localhost:3000/api/information");
    informationform.value = result.data.data[0];
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(() => {
  fetchData();
});
</script>
