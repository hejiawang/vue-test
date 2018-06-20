<template>

  <el-container>

    <el-header>Header</el-header>

    <el-container>

      <el-aside width="200px">
        <el-menu default-active="/mainTest"
                 background-color="#00142a"
                 text-color="#fff"
                 active-text-color="#409eff"
                 unique-opened
                 collapse-transition
                 router
                 @select="menuSelect">
          <el-menu-item class="menu__mainTest" index="/mainTest">
            <i class="el-icon-setting"></i>
            <span slot="title">首页</span>
          </el-menu-item>

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group background-color="#ffffff">
              <el-menu-item class="menu__test2" index="/test2">选项1</el-menu-item>
              <el-menu-item class="menu__helloWord" index="/helloWord">选项2</el-menu-item>
              <el-menu-item class="menu__test1" index="/test1">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航二</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-1">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>JMonkey</el-breadcrumb-item>
          <template v-for="(breadcrumb, index) in breadcrumbs">
            <el-breadcrumb-item>{{ breadcrumb }}</el-breadcrumb-item>
          </template>
        </el-breadcrumb>
        <el-main>
          <router-view />
        </el-main>
      </el-container>

      <el-footer height="35px">Footer</el-footer>

    </el-container>

  </el-container>

</template>

<script>

  export default {
    name: 'Main',
    data () {
      return {
        breadcrumbs: ['首页']  //面包屑显示内容
      }
    },
    created(){
      //router.push("mainTest");
      this.$router.push("/mainTest");
    },
    methods: {
      /**
       * 菜单激活回调
       * @param index 选中菜单项的 index
       * @param indexPath 选中菜单项的 index path
       */
      menuSelect(index, indexPath) {
        this.breadcrumbs = [];

        var idnexClass =  index.replace(/\//g, '_');
        if( !$('.menu_' + idnexClass).parent().parent().hasClass("el-aside") ){
          var parentMenuText = $( $( $('.menu_' + idnexClass).parent().parent().parent().parent().children()[0] ).children()[1] ).text();
          this.breadcrumbs.push(parentMenuText);
        }
        this.breadcrumbs.push( $('.menu_' + idnexClass).text() );
      }
    }
  }

</script>
