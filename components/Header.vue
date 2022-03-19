<template>
  <header class="header">
    <div class="header__logo">
      <nuxt-link to="/" class="header__logo__img">
<!--        <img-->
<!--          class="header__logo__img__noMobile"-->
<!--          :src="`${$store.state.domain}/includes/webappB2B/images/logos/stellantis_logo.svg`"-->
<!--        />-->
<!--        <img-->
<!--          class="header__logo__img__mobile"-->
<!--          :src="`${$store.state.domain}/includes/webappB2B/images/logos/Logo_Stellantis_Mobile_bleu.png`"-->
<!--        />-->
      </nuxt-link>
      <span class="header__logo__payoff">dashboard</span>
    </div>

    <div class="header__links">
<!--      <a-->
<!--        class="header__links__rulebook btn-radius-big"-->
<!--        @click="-->
<!--          updateDrawer({-->
<!--            component: '',-->
<!--            contents: $store.state.ruleBook,-->
<!--            transition: 't-slide-top',-->
<!--            gridArea: 'ga-aside-main',-->
<!--          })-->
<!--        "-->
<!--      >-->
<!--        {{ $store.state.ruleBook.title }}-->
<!--      </a>-->
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
// import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    // ...mapMutations({
    //   updateDrawer: 'ui/updateDrawer',
    // }),
  },
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 60px;
  box-sizing: border-box;
  background-color: $white;
  &__logo {
    width: 60px;
    height: 100%;
    &__img {
      display: block;
      position: relative;
      height: 100%;
      width: 100%;
      &__noMobile {
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      }
      &__mobile {
        display: block;
        height: 50px;
        // padding: 5px 0;
      }
    }
    &__payoff {
      color: $blue;
      display: none;
    }
  }

  &__links {
    text-align: right;
    display: flex;
    &__rulebook {
      background-color: $yellow;
      color: $white;
      text-transform: uppercase;
      height: 30px;
      width: 170px;
      display: block;
      margin: 2px 0 0px 0;
      line-height: 30px;
      padding: unset;
      margin: 10px 0 0 0;
      text-align: center;
      &:hover {
        background-color: $orange;
        font-weight: bold;
      }
    }

    &__burger {
      display: block;
      width: 50px;
      height: 50px;
      border: none;
      cursor: pointer;
      outline: none;
      position: relative;
      // margin: 6px 0;
      div {
        width: 27px;
        height: 3px;
        border-radius: 6px;
        margin: auto;
        background-color: $blue;
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
  @media screen and (min-width: $md) {
    &__links {
      &__burger {
        display: none;
      }
    }
  }
  @media screen and (min-width: $xl) {
    text-align: center;
    align-items: center;
    &__logo {
      width: 500px;
      display: flex;
      justify-content: space-between;
      &__img {
        width: 250px;
        &__noMobile {
          display: block;
        }
        &__mobile {
          display: none;
        }
      }
      &__payoff {
        display: block;
        width: fit-content;
        line-height: 40px;
      }
    }
    &__links {
      &__rulebook {
        margin: 0;
      }
      &__burger {
        display: none;
      }
    }
  }
  @media screen and (min-width: $xgl) {
    height: 90px;
    &__logo {
      width: 500px;
      display: flex;
      justify-content: space-between;
      &__img {
        width: 300px;
        &__noMobile {
          display: block;
        }
        &__mobile {
          display: none;
        }
      }
      &__payoff {
        display: block;
        width: fit-content;
        line-height: 70px;
      }
    }
    &__links {
      &__rulebook {
        height: 40px;
        width: 220px;
        margin: 10px 0 10px 0;
        line-height: 40px;
      }
    }
  }
  @media screen and (min-width: $xgl) {
  }
}

.menu {
  background-size: cover;
  background-position-x: right;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 60px);
  z-index: 1;
}
#LayoutHeader {
  grid-area: header;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: $white;

  @media screen and (min-width: $lg) {
    height: 90px;
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
