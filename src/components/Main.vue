<template>

  <el-container>

    <el-header>Header</el-header>

    <el-container>

      <el-aside width="200px">
        <el-menu default-active="/test1"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b"
                 unique-opened
                 collapse-transition
                 router>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/test2">选项1</el-menu-item>
              <el-menu-item index="/helloWord">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航二</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>


          <el-menu-item index="/test1">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>


        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/helloWord' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <el-main>
          <router-view />
        </el-main>

        <el-footer height="35px">Footer</el-footer>

      </el-container>

    </el-container>

  </el-container>

</template>

<script>

  export default {
    name: 'Main'
  }

</script>
