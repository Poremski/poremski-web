<template>
  <section class="home img-bg" style="background: url('/static/img/bg/img-bg2.jpg') 0 0; background-size: cover;">
    <div class="overlay opacity5"></div>
    <div class="container">
      <div class="name-block">
        <div class="name-block-container">
          <ul class="languagepicker roundborders large">
            <a href="#sv"><li><img src="/static/img/flag/sv.png">Svenska</li></a>
            <a href="#en"><li><img src="/static/img/flag/en.png">English</li></a>
            <a href="#de"><li><img src="/static/img/flag/de.png">Deutsch</li></a>
            <a href="#fr"><li><img src="/static/img/flag/fr.png">Français</li></a>
            <a href="#es"><li><img src="/static/img/flag/es.png">Español</li></a>
            <a href="#pl"><li><img src="/static/img/flag/pl.png">Polski</li></a>
            <a href="#eo"><li><img src="/static/img/flag/eo.png">Esperanto</li></a>
          </ul>
          <h1 v-html="$t('section.home.hello')" style="clear:both"></h1>
          <h2>{{ $t('section.home.title')}}</h2>
          <a target="_blank" href="#" class="btn btn-download">{{ $t('section.home.download') }}</a>
          <ul class="social">
            <li><a href="//facebook.com/drewito"><i class="ion-social-facebook"></i></a></li>
            <li><a href="//github.com/poremski"><i class="ion-social-github"></i></a></li>
          </ul>
        </div>
      </div>
      <div class="menu-blocks">
        <div class="about-block menu-block">
          <div class="about-block-container">
            <h2 class="about menu-item">{{ $t('menu.items.resume') }}</h2>
          </div>
        </div>
        <div class="portfolio-block menu-block">
          <div class="portfolio-block-container">
            <h2 class="portfolio menu-item">{{ $t('menu.items.portfolio') }}</h2>
          </div>
        </div>
        <div class="blog-block menu-block">
          <div class="blog-block-container">
            <h2 class="blog menu-item">{{ $t('menu.items.blog') }}</h2>
          </div>
        </div>
        <div class="contact-block menu-block">
          <div class="contact-block-container">
            <h2 class="contact menu-item">{{ $t('menu.items.contact') }}</h2>
          </div>
        </div>
      </div>
      <about-component></about-component>
      <portfolio-component></portfolio-component>
      <blog-component></blog-component>
      <contact-component></contact-component>
      <div class="content-blocks pop">
        <div id="close-pop" class="close-pop">{{ $t('close') }} <i class="ion-ios-close-empty"></i></div>
        <section class="content"></section>
      </div>
    </div>
  </section>
</template>

<script>
  import AboutComponent from '@/components/About'
  import PortfolioComponent from '@/components/Portfolio'
  import BlogComponent from '@/components/Blog'
  import ContactComponent from '@/components/Contact'

  export default {
    components: {
      AboutComponent,
      PortfolioComponent,
      BlogComponent,
      ContactComponent
    }
  }
</script>
