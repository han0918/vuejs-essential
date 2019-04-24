<template>
  <div class="navbar navbar-default topnav">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" @click="toggleNav">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>

        <router-link to="/" class="navbar-brand">
          <span class="title">{{ logo.title }}</span>
          <img :src="logo.src" :alt="logo.title">
        </router-link>
      </div>

      <div id="top-navbar-collapse" :class="['collapse','navbar-collapse', { in: showCollapsedNav }]">
        <ul class="nav navbar-nav">
          <li v-for="(item,index) in navList" :class="{ active: index === activeNavIndex}">
            <a href="#" @click="changeNavIndex(index)">{{ item }}</a>
          </li>
        </ul>

        <!-- 入口组建 -->
        <div class="navbar-right">
          <!-- 搜索框 -->
          <SearchInput/>
          <TheEntry/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    //引入 TheEntry.vue 的默认值
    import TheEntry from '@/components/layouts/TheEntry'
    // 引入 SearchInput.vue 默认值
    import SearchInput from '@/components/layouts/SearchInput'

    export default {
        name: "TheHeader",
        // 添加 components 选项，并注册 TheEntry
        components: {
          TheEntry,
          // 注册 SearchInput
          SearchInput
        },
        data() {
          return {
            logo: {
              // src 的值是用反引号(`)标识的模版字符串，我们只需将变量放在 ${} 的大括号之中
              src: `${this.uploadsUrl}sites/ByvFbNlQYVwhvTyBgLdqitchoacDNznN.jpg`,
              title: 'VuejsCaff'
            },
            navList:['社区','头条','问答','教程'],
            activeNavIndex:0,
            showCollapsedNav: false
          }
        },
        beforeCreate() {
          // 在当前实例上添加一个 uploadsUrl 属性
          this.uploadsUrl = 'https://vuejscaffcdn.phphub.org/uploads/'
        },
        methods:{
          changeNavIndex(index) {
            this.activeNavIndex = index
          },
          toggleNav() {
            this.showCollapsedNav = !this.showCollapsedNav
          }
        }
    }
</script>

<style scoped>
  .title {display: none;}
  .navbar-default .navbar-nav > .active > a {background: rgba(0,0,0,.03);}
</style>
