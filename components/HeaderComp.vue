<template>
  <header class="header pl-16 pr-8">
    <div class="header__logo">
      <div class="title">
        <H2 class="title__content">
          <nuxt-link to="/">          GIT Dashboard
          </nuxt-link>
        </H2>
      </div>
    </div>

    <div class="header__links">
      <div
        class="header__links__burger"
        :class="{ active: isOpen }"
        @click="isOpen = !isOpen"
      >
        <div class="top"></div>
        <div class="mid"></div>
        <div class="bottom"></div>
      </div>
    </div>

    <transition name="translateL">
      <div v-show="isOpen" class="menu"></div>
    </transition>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  grid-area: header;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 60px;
  box-sizing: border-box;
  background-color: $blue;
  font-family: $font-family-1;
  font-weight: $bold-font-weight;
  font-size: $font-size-m;
  &__logo {
    width: fit-content;
    height: 100%;
    .title {
      display: block;
      position: relative;
      height: 100%;
      width: 100%;
      &__content {
        line-height: 60px;
        a{
          color: $white;
        }
      }
    }
  }
  &__links{
    &__burger {
      display: block;
      width: 50px;
      height: 50px;
      border: none;
      cursor: pointer;
      outline: none;
      position: relative;
      div {
        width: 27px;
        height: 3px;
        border-radius: 6px;
        margin: auto;
        background-color: white;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        transition: all 0.4s ease;
        &.top {
          transform: translateY(-10px);
        }

        &.bottom {
          transform: translateY(10px);
        }
      }
      &.active {
        .top {
          transform: rotate(-45deg);
        }
        .mid {
          transform: translateX(-20px) rotate(360deg);
          opacity: 0;
        }
        .bottom {
          transform: rotate(45deg);
        }
      }
    }
  }
  .menu {
    background-color: $blue;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 60px);
    z-index: 1;
  }
  @media screen and (min-width: $md) {

  }
  @media screen and (min-width: $xl) {

  }
  @media screen and (min-width: $xgl) {

  }
  @media screen and (min-width: $xgl) {
  }
}

.translateL-enter {
  transform: translateX(200px);
  opacity: 1;
}

.translateL-enter-active,
.translateL-leave-active {
  transform-origin: top right 0;
  transition: 0.2s ease;
}

.translateL-leave-to {
  transform: translateX(200px);
  opacity: 0;
}
</style>
