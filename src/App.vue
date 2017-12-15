<template>
  <div id="app">
    <div class="preloader">
      <div class="anim pulse"><i class="ion-ios-bolt-outline"></i></div>
    </div>
    <div class="preloader-left"></div>
    <div class="inline-menu-container">
      <span class="status contact menu-item">{{ $t('menu.status') }}</span>
      <ul class="inline-menu">
        <li class="about menu-item">{{ $t('menu.items.resume') }}</li>
        <li class="portfolio menu-item">{{ $t('menu.items.portfolio') }}</li>
        <li class="blog menu-item">{{ $t('menu.items.blog') }}</li>
        <li class="contact menu-item">{{ $t('menu.items.contact') }}</li>
        <li id="close" class="menu-item"><i class="ion-ios-close-empty"></i></li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import i18n from './i18n/lang'
  export default {
    name: 'app',
    data () {
      return {}
    },
    methods: {
    }
  }
</script>
