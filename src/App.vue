<template>
  <div id="router">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <a v-link="{path: '/goods'}">商品</a>
      </div>
      <div class="tab-item">
        <a v-link="{path: '/ratings'}">评论</a>
        </div>
      <div class="tab-item">
        <a v-link="{path: '/seller'}">商家</a>
      </div>
    </div>
    <router-view></router-view>
  </div>

</template>

<script>
  import header from './components/header/header.vue'

  const ERR_OK = 0

  export default {
    data () {
      return {
        seller: {}
      }
    },
    created () {
      this.$http.get('/api/seller').then((res) => {
        let data = res.body.data
        let errno = res.body.errno

        if (errno === ERR_OK) {
          this.seller = data
        }
      })
    },
    components: {
      'v-header': header
    }
  }

</script>

<style lang="sass">
  .tab
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);

    .tab-item
      flex: 1;
      text-align: center;
      & > a
        display: block;
        font-size: 14px;
        color: rgb(77, 85, 93);

        &.active
          color: #f01414;

</style>
