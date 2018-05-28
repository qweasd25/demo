<template>
  <div class="left-nav">
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">  
      <el-menu-item index="1">
        <i class="icon iconfont icon-goumai"></i>
        <span slot="title">收银</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="icon iconfont icon-dianpu"></i>
        <span slot="title">店铺</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="icon iconfont icon-hanbao"></i>
        <span slot="title">商品</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="icon iconfont icon-huiyuanqia"></i>
        <span slot="title">会员</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="icon iconfont icon-zuanshi"></i>
        <span slot="title">统计</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="icon iconfont icon-gongnengjianyi"></i>
        <span slot="title">设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
   export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }

</script>
<style>
  .left-nav {
    color: #fff;
    font-size: 10px;
    height: 100%;
    background-color: #1d8ce0;
    float: left;
    min-width: 50px;
  }

  .iconfont {
    font-size: 24px;
  }

  .left-nav el-menu {
    padding: 0px;
    margin: 0px;
    
  }

  .left-nav el-menu-item {
    text-align: center;
    border-bottom: 1px solid #20a0ff;
    padding: 10px;
  }

</style>
