<template>

  <el-container>

    <el-header>Header</el-header>

    <el-container>

      <el-aside width="200px">
        <el-menu default-active="/test1"
                 class="el-menu-vertical-demo"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b"
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

          <el-menu-item index="/test1">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>

        <el-main> <router-view /> </el-main>

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
