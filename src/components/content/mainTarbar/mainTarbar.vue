<template>
  <div>
    <tarbar>
      <tarBarItem path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tarBarItem>
      <tarBarItem path="/category">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tarBarItem>
      <tarBarItem path="/cart">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tarBarItem>
      <tarBarItem path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tarBarItem>
    </tarbar>
  </div>
</template>

<script>
  import tarbar from "components/common/tarbar/TarBar";
  import tarBarItem from "components/common/tarbar/TarBarItem";

  export default {
    name: "mainTarbar",
    components: {
      tarbar,
      tarBarItem
    }
  }
</script>

<style scoped>

</style>
