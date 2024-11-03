<template>
  <div>
    <main-header />
    <el-container style="margin: 0 150px">
      <el-aside style="width: 200px">
        <el-row>
          <span>你好</span>
        </el-row>
      </el-aside>
      <el-main>
        <div></div>
        <div>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column type="selection" width="55"> </el-table-column>
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
            <el-table-column prop="price" label="总金额"></el-table-column>
            <el-table-column fixed="right" label="操作">
              <el-button @click="dialogVisible = true" type="text" size="small"
                >查看详情</el-button
              >
              <el-button @click="dialogVisible" type="text" size="small"
                >删除记录</el-button
              >
            </el-table-column>
          </el-table>
          <div>
            <el-pagination
              :hide-on-single-page="true"
              :total="10"
              layout="prev, pager, next"
            >
            </el-pagination>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
  <el-dialog v-model="dialogVisible" title="点餐详情" width="500">
    <span>This is a message</span>
    <el-table :data="tableData" style="width: 80%">
      <el-table-column prop="url" label="">
        <template v-slot="scope">
          <el-image
            style="width: 50px; height: 50px"
            :src="scope.row.url"
          ></el-image>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="菜名"></el-table-column>
      <el-table-column label="数量"></el-table-column>
      <el-table-column label="价格"></el-table-column>
    </el-table>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">
          确认
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import MainHeader from '../../components/MainHeader.vue';
import { ref } from "vue";

const tableData = [
  {
    date: "2016-05-02 19:20:20",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
    price: 123.5,
  },
  {
    date: "2016-05-04 19:20:20",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1517 弄",
  },
  {
    date: "2016-05-01 19:20:20",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1519 弄",
  },
  {
    date: "2016-05-03 19:20:20",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1516 弄",
  },
];

const dialogVisible = ref(false);
</script>