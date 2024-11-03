<template>
  <div>
    <main-header class="menu"/>
    <el-container
      style="display: flex; margin: 0 150px; justify-content: center"
    >
      
      <el-container>
        <el-main>
          <el-row style="text-align: center ;flex-direction: column">
            <div>
              <h1 style="font-size: 45px">肯德坤连锁店</h1>
              <el-carousel :interval="4000" type="card" height="200px">
                <el-carousel-item v-for="item in picture" :key="item">
                  <img :src="item" alt="carousel image" />
                </el-carousel-item>
              </el-carousel>
            </div>
            <div style="height: 150px"></div>
            <el-card class="box-card" style="background-color: #f9f9f9">
              <div class="restaurant-intro">
                <h2>肯德坤餐厅简介</h2>
                <p>
                  肯德坤餐厅自创立以来，始终秉持“美味与品质并重”的经营理念。餐厅的前身是一家小型的<span style="color:chocolate">ikun</span>快餐店，成立于2024年。随着顾客的不断增多和口碑的提升，肯德坤逐渐发展成了一家受欢迎的连锁餐饮品牌。餐厅的名字源于ikun们的偶像<span style="color:chocolate">蔡徐坤</span>的姓氏，寓意着将美味与时尚结合，让每位顾客在享受美食的同时，也能感受到浓厚的<span style="color:chocolate">kunkun</span>文化氛围。
                </p>

                <p>
                  在初创时期，肯德坤餐厅专注于提供经典的快餐选项，如汉堡、薯条和饮料。随着时间的推移，餐厅不断推出新菜品，融入了更多健康和创新的元素，特别是采用新鲜的本地食材，力求为顾客提供更优质的用餐体验。餐厅也引入了现代化的点餐系统，顾客可以通过网页应用程序轻松下单，极大地提升了用餐的便利性。
                </p>

                <p>
                  肯德坤不仅仅是一个餐厅，更是一个<span style="color:chocolate">ikun们</span>文化交流的平台。餐厅内定期举办各类主题活动，如<span style="color:chocolate">ikun</span>音乐晚会、<span style="color:chocolate">kunkun</span>艺术展览等，吸引了许多年轻人前来聚会与社交。在这里，顾客不仅能享受到美味的食物，还能体验到丰富多彩的<span style="color:chocolate">ikun</span>生活。
                </p>

                <p>
                  未来，肯德坤餐厅计划继续扩展其品牌影响力，力求在全国范围内开设更多分店。同时，餐厅也会继续关注可持续发展，努力减少食品浪费，倡导绿色饮食，为社会贡献更多力量。
                </p>

                <p>
                  无论是忙碌的工作日，还是闲暇的周末，肯德坤餐厅始终是您享受美食、放松心情的理想选择。欢迎您光临，体验我们的热情与美味！
                </p>
              </div></el-card
            >
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
  
  <script>
import MainHeader from '../../components/MainHeader.vue';
export default {
  components: { MainHeader },
  data() {
    return {
      searchform: [],
      activeIndex: "1",
      activeIndex2: "1-1",
      picture: [
        "https://th.bing.com/th/id/OIP.-yy1u1o5Bt1rtQiDeBeMdgHaD6?w=340&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "https://th.bing.com/th/id/OIP.n1dTRz6LUPqg3ep82imvcAHaD4?w=338&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "https://th.bing.com/th/id/OIP.eqKVFV7Vgi6NJczLGda18wHaEK?w=319&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "https://tse1.mm.bing.net/th?&id=OVP.EqHWNcOaVmua0303HdtMqQIIGG&w=400&h=200&c=7&pid=1.7&rs=1",
      ],
    };
  },
  methods: {
    fetchData() {
      // 这里可以添加获取数据的逻辑
      console.log("Fetching data...");
      // 例如，通过 API 获取数据
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>
  
  
  
  <style>
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.button {
  padding: 0;
  float: right;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.restaurant-intro {
  line-height: 1.6;
  color: #333;
  max-width: 850px;
  margin: 20px auto;

  text-align: left;
}

.restaurant-intro h2 {
  text-align: center;
  color: #d24e4e;
}

.restaurant-intro p {
  margin-bottom: 15px;
}

.menu{
  position: sticky; /* 悬浮定位 */
    top: 0; /* 距离顶部0像素 */
    z-index: 1000; /* 确保在其他元素之上 */
}
</style>