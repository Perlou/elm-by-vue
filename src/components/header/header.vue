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
  @import '../../common/scss/common/mixin.scss';

  .header
    color: #FFFFFF;
    background: #000;

  .header-content-wrap
    padding: 24px 12px 18px 24px;
    font-size: 0

    .avatar
      display: inline-block;
      vertical-align: top;

      img
        border-radius: 2px;

    .content
      display: inline-block;
      margin-left: 16px;
      font-size: 14px;

    .title
      margin: 2px 0 8px 0;

      .brand
        display: inline-block;
        width: 30px;
        height: 18px;
        vertical-align: top;

      .name
        margin-left: 6px;
        font-size: 16px;
        line-height: 18px;

    .description
      margin-bottom: 10px;
      line-height: 12px;
      font-size: 12px;

    .support
      .icon
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-right: 4px;
        background-size: 12px 12px;
        background-repeat: no-repeat;

        &.decrease

        &.discount

        &.gurantee

        &.invoice

        &.special

</style>
