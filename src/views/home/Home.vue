<template>
  <div id="home">
    <NavBar class="home-nav">
      <span slot="center">购物街</span>
    </NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <Recommend-view :recommends="recommends"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from "./childComps/RecommendView";

  import {getHomeMultidata, getHomeGoods} from "network/home"

  export default {
    name: 'Home',
    data() {
      return {
        banners: [],
        recommends: [],
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      RecommendView
    },
    created() {
      getHomeMultidata().then(res => {
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
        }
      ),
        getHomeGoods().then(res => {
          console.log(res)
        })

    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    /*    height: 100vh;
        position: relative;*/
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
</style>
