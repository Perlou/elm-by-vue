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
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count">
        <span class="count">{{seller.supports.length}}个</span>
        <i class=""></i>
      </div>
    </div>
    <div class="header-bulletin-wrap">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i></i>
    </div>
    <div class="header-background">
      <img :src="seller.avatar" width="100%" height="100%" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    created () {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'gurantee']
    }
  }
</script>

<style lang="sass">
  @import '../../common/scss/common/mixin.scss';

  .header
    color: #FFFFFF;
    position: relative;
    background: rgba(7, 17, 27, 0.5);
    overflow: hidden;

  .header-content-wrap
    padding: 24px 12px 18px 24px;
    font-size: 0;
    position: relative;

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
        vertical-align: top;
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

      .text
        line-height: 12px;
        font-size: 10px;

    .support-count
      position: absolute;
      right: 12px;
      bottom: 18px;
      padding: 0 8px;
      height: 24px;
      line-height: 24px;
      border-radius: 14px;
      background: rgba(0, 0, 0, 0.2);
      text-align: center;

      .count
        vertical-align: top;
        font-size: 10px;

      .icon-arrow-right
        font-size: 10px;

  .header-bulletin-wrap
    height: 28px;
    line-height: 28px;
    position: relative;
    padding: 0 22px 0 12px;
    background: rgba(7, 17, 27, 0.2);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    .bulletin-title
      display: inline-block;
      vertical-align: top;
      width: 22px;
      height: 12px;
      margin-top: 8px;
      background: red;

    .bulletin-text
      vertical-align: top;
      margin: 0 4px;
      font-size: 10px;
      font-weight: 200;

  .header-background
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(10px);

</style>
