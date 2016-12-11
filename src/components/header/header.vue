<template>
  <div class="header">
    <div class="header-content-wrap">
      <div class="avatar">
        <img
          width="64"
          height="64"
          :src="seller.avatar"
          alt="avatar" />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
    </div>
    <div class="header-bulletin-wrap"></div>
  </div>
</template>

<script>
  export default {
    props: {
      seller: {
        type: Object
      }
    }
  }
</script>

<style lang="sass">
  .header
    color: #FFFFFF;
    background: #000;

    .header-content-wrap
      padding: 24px 12px 18px 24px;

      .avatar
        display: inline-block;
      .content
        display: inline-block;


</style>
