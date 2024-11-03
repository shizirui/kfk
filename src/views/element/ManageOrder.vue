<template>
  <el-container>
    <manage-header />
    <el-main>
      <el-table :data="orderdata">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="订单号" prop="order_id"></el-table-column>
        <el-table-column label="用户名" prop="user_name"></el-table-column>
        <el-table-column label="订单日期" prop="order_date"></el-table-column>
        <el-table-column label="订单总额" prop="total_amount"></el-table-column>
        <el-table-column fixed="right" label="Operations" min-width="120">
          <template #default>
            <el-button link type="primary" size="small">
              Detail
            </el-button>
            <el-button link type="primary" size="small">Edit</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import ManageHeader from "@/components/ManageHeader.vue";

const orderdata = [
  {
    order_id: "1",
    user_name: "柿子瑞",
    order_date: "2024/12/24 15:25:30",
    total_amount: "168元",
  },
  {
    order_id: "2",
    user_name: "子瑞柿",
    order_date: "2024/12/24 15:25:30",
    total_amount: "156元",
  },
  {
    order_id: "3",
    user_name: "柿瑞子",
    order_date: "2024/12/24 15:25:30",
    total_amount: "16元",
  },
  {
    order_id: "4",
    user_name: "瑞柿子",
    order_date: "2024/12/24 15:25:30",
    total_amount: "17元",
  },
  {
    order_id: "5",
    user_name: "子瑞",
    order_date: "2024/12/24 15:25:30",
    total_amount: "12元",
  },
  {
    order_id: "6",
    user_name: "柿瑞",
    order_date: "2024/12/24 15:25:30",
    total_amount: "1324元",
  },
  {
    order_id: "7",
    user_name: "柿子",
    order_date: "2024/12/24 15:25:30",
    total_amount: "11254元",
  },
];
</script>