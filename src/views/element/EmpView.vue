<template>
  <div>
    <main-header />
    <el-container style="margin: 0 150px">
      <el-aside width="200px">
        <el-row class="tac">
          <el-col>
            <h5>今日菜单！</h5>
            <el-menu
              :default-active="activeIndex2"
              class="el-menu-vertical-demo"
            >
              <el-sub-menu index="1">
                <template #title>
                  <el-icon>
                    <ForkSpoon />
                  </el-icon>
                  <span>开封菜</span>
                </template>
                <el-menu-item index="1-1"
                  ><el-icon> <Burger /> </el-icon>堡</el-menu-item
                >
                <el-menu-item index="1-2"
                  ><el-icon> <Chicken /> </el-icon>翅</el-menu-item
                >
              </el-sub-menu>
              <el-menu-item index="2">
                <el-icon>
                  <Dish />
                </el-icon>
                <span>家常菜</span>
              </el-menu-item>
              <el-menu-item index="3">
                <el-icon>
                  <IceCream />
                </el-icon>
                <span>小吃</span>
              </el-menu-item>
              <el-menu-item index="4">
                <el-icon>
                  <IceTea />
                </el-icon>
                <span>饮料</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-main style="height: 800px; overflow-y: auto">
          <el-row style="display: flex; height: 40px" justify="end">
            <div class="flex gap-4 mb-4 items-center">
              <el-input
                v-model="input3"
                style="width: 240px"
                size="large"
                placeholder="搜索"
                :suffix-icon="Search"
              />
            </div>
            <el-button
              style="margin-left: 10px"
              :icon="Refresh"
              circle
              size="large"
              @click="fetchData()"
            ></el-button>
          </el-row>
          <el-row :gutter="20">
            <el-col v-for="o in searchform" :key="o.id" :span="6">
              <el-divider></el-divider>
              <el-card :body-style="{ padding: '0px' }" shadow="hover">
                <el-image
                  style="width: 100%; height: 100%"
                  :src="o.picture"
                  class="image"
                />
                <div style="padding: 14px">
                  <span>{{ o.name }}</span>
                  <br />
                  <span>{{ o.price }}</span>
                  <div class="bottom clearfix">
                    <div v-if="dishCounts[o.id] > 0">
                      <el-button
                        type="success"
                        class="button"
                        icon="Plus"
                        circle
                        @click="addDish(o.id)"
                      ></el-button>
                      <el-button
                        class="button"
                        style="font-size: 20px; margin: 0 20px; padding: 0 20px"
                        >{{ dishCounts[o.id] || 0 }}</el-button
                      >

                      <el-button
                        type="success"
                        class="button"
                        icon="Minus"
                        circle
                        @click="removeDish(o.id)"
                      ></el-button>
                    </div>
                    <div v-else>
                      <el-button
                        type="success"
                        class="button"
                        icon="Plus"
                        circle
                        @click="addDish(o.id)"
                      ></el-button>
                    </div>
                  </div>
                </div>
              </el-card>
            </el-col> </el-row
          ><el-footer
            ><div class="bottom-floating-bar">
              <el-badge :value="number1" :show-zero="false">
                <el-button
                  type="primary"
                  circle
                  style="font-size: 30px; width: 50px; height: 50px"
                  @click="drawer = true"
                  ><el-icon><ShoppingCart /></el-icon></el-button
              ></el-badge></div
          ></el-footer>
        </el-main>
      </el-container>
    </el-container>
  </div>

  <el-drawer
    v-model="drawer"
    title="点餐详情"
    direction="btt"
    size="70%"
    style="display: flex; align-items: stretch; justify-content: center"
  >
    <div style="display: flex; justify-content: center">
      <el-table
        show-summary
        sum-text="总计"
        :summary-method="getSummaries"
        :data="orderedDishes"
        style="width: 80%"
        max-height="400"
        empty-text="哎呀，这里空空如也，仿佛在呼唤美味的灵魂！快来点几道菜，让我们的胃也一起欢舞吧！"
      >
        <el-table-column type="index" />
        <el-table-column prop="url" label="">
          <template v-slot="scope">
            <el-image
              style="width: 50px; height: 50px"
              :src="scope.row.url"
            ></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="菜名"></el-table-column>
        <el-table-column prop="count" label="数量"></el-table-column>
        <el-table-column prop="price" label="单价"></el-table-column>
        <el-table-column label="合计"
          ><template v-slot="scope">
            {{ (scope.row.count * scope.row.price).toFixed(2) }}
          </template></el-table-column
        >
        <el-table-column label="">
          <template v-slot="scope">
            <el-button type="danger" plain @click="deleteDish(scope.row.id)"
              >删除</el-button
            ></template
          >
        </el-table-column>
      </el-table>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">
          确认
        </el-button>
      </div>
    </template>
  </el-drawer>
</template>



<script lang="ts" setup>
interface Dish {
  id: number;
  name: string;
  picture: string;
  price: number;
  introduction: string;
}

import { ref, onMounted, VNode, h } from "vue";
import axios from "axios";
import MainHeader from "../../components/MainHeader.vue";
import { Refresh } from "@element-plus/icons-vue";
import { ElButton, TableColumnCtx } from "element-plus";
import { Search } from "@element-plus/icons-vue";

const searchform = ref<Dish[]>([]);
const activeIndex2 = ref("1-1");
const number1 = ref(0);
const dishCounts = ref<Record<number, number>>({}); // 用于保存每个菜品的数量
const drawer = ref(false);
const dialogVisible = ref(true);
const orderedDishes = ref<
  Array<{ url: string; name: string; count: number; price: number; id: number }>
>([]); //保存数量大于0的菜，用于展示。
const input3 = ref("");

const fetchData = async () => {
  try {
    const result = await axios.get("http://localhost:3000/api/data");
    searchform.value = result.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const addDish = (id: number) => {
  if (!dishCounts.value[id]) {
    dishCounts.value[id] = 0; // 初始化数量
  }
  dishCounts.value[id]++;

  const dish = searchform.value.find((item) => item.id === id);
  if (dish) {
    const existingDish = orderedDishes.value.find(
      (item) => item.name === dish.name
    );
    if (existingDish) {
      existingDish.count++;
    } else {
      orderedDishes.value.push({
        url: dish.picture,
        name: dish.name,
        count: 1,
        price: dish.price,
        id: dish.id,
      });
    }
  }

  number1.value++;
};

const removeDish = (id: number) => {
  if (dishCounts.value[id] > 0) {
    dishCounts.value[id]--;

    const dish = searchform.value.find((item) => item.id === id);
    if (dish) {
      const existingDish = orderedDishes.value.find(
        (item) => item.name === dish.name
      );
      if (existingDish) {
        if (existingDish.count > 1) {
          existingDish.count--; // 只减少数量
        } else {
          // 数量为 1，删除该菜品
          orderedDishes.value = orderedDishes.value.filter(
            (item) => item.name !== dish.name
          );
        }
      }
    }

    number1.value--; // 减少总数
  }
};

const deleteDish = (id: number) => {
  const dish = searchform.value.find((item) => item.id === id);
  if (dish) {
    const existingDish = orderedDishes.value.find(
      (item) => item.name === dish.name
    );
    if (existingDish) {
      number1.value -= existingDish.count; // 减去总数
      orderedDishes.value = orderedDishes.value.filter(
        (item) => item.name !== dish.name
      ); // 从点餐中移除
      dishCounts.value[id] = 0;
    }
  }
};

interface SummaryMethodProps<T = Dish> {
  columns: TableColumnCtx<T>[];
  data: T[];
}

const getSummaries = (param: SummaryMethodProps) => {
  const { columns, data } = param;
  const sums: (string | VNode)[] = [];
  columns.forEach((column, index) => {
    if (index === 0) {
      sums[index] = h("div", { style: { textDecoration: "underline" } }, [
        "总计",
      ]);
      return;
    }
    if (index === 1) {
      sums[index] = Object.keys(dishCounts.value)
        .filter((id) => dishCounts.value[+id] > 0)
        .length.toString();
    }
    if (index === 3) {
      sums[index] = number1.value.toString();
    }
    if (index === 5) {
      sums[index] = data
        .reduce(
          (sum, dish) => sum + dish.price * (dishCounts.value[dish.id] || 0),
          0
        )
        .toFixed(2)
        .toString();
    }
    if (index === 6) {
      sums[index] = h(
        ElButton,
        {
          type: "danger",
          plain: true,
          onClick: () => {
            dishCounts.value = {};
            orderedDishes.value = [];
            number1.value = 0; // 重置总数
          },
        },
        "清空全部"
      );
    }
  });

  return sums;
};

onMounted(() => {
  fetchData();
});
</script>




<style>
.bottom {
  margin-top: 13px;
  line-height: 25px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  height: 200px;
  display: block;
  object-fit: cover;
}

.clearfix:before,
.clearfix:after {
  display: flex;
  content: "";
}

.clearfix:after {
  clear: both;
}

.bottom-floating-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 25px;
  text-align: center;
}
</style>
