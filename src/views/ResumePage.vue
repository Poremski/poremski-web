<template>
  <section class="home img-bg" style="background: url('/static/img/bg/img-bg2.jpg') 0 0; background-size: cover;">
    <div class="overlay opacity5"></div>
    <div class="container">
      <div class="name-block">
        <div class="name-block-container">
          <h1 v-html="{{ $t('section.home.hello', '<span>Hej, Jag är</span>Javier Poremski')}}"></h1>
          <h2>{{ $t('section.home.title', 'Systemutvecklare')}}</h2>
          <a target="_blank" href="#" class="btn btn-download">{{ $t('section.home.download', 'Ladda ner CV')}}</a>
          <ul class="social">
            <li><a href="//www.facebook.com/drewito"><i class="ion-social-facebook"></i></a></li>
            <li><a href="//github.com/poremski"><i class="ion-social-github"></i></a></li>
          </ul>
        </div>
      </div>
      <div class="menu-blocks">
        <div class="about-block menu-block">
          <div class="about-block-container">
            <h2 class="about menu-item">{{ $t('menu.items.resume', 'Resumé')}}</h2>
          </div>
        </div>
        <div class="portfolio-block menu-block">
          <div class="portfolio-block-container">
            <h2 class="portfolio menu-item">{{ $t('menu.items.portfolio', 'Portfolio')}}</h2>
          </div>
        </div>
        <div class="blog-block menu-block">
          <div class="blog-block-container">
            <h2 class="blog menu-item">{{ $t('menu.items.blog', 'Blogg')}}</h2>
          </div>
        </div>
        <div class="contact-block menu-block">
          <div class="contact-block-container">
            <h2 class="contact menu-item">{{ $t('menu.items.contact', 'Kontakt')}}</h2>
          </div>
        </div>
      </div>
      <about-component></about-component>
      <portfolio-component></portfolio-component>
      <blog-component></blog-component>
      <contact-component></contact-component>
      <div class="content-blocks pop">
        <div id="close-pop" class="close-pop">{{ $t('close', 'Stäng')}} <i class="ion-ios-close-empty"></i></div>
        <section class="content"></section>
      </div>
    </div>
    <form class="lang-select lang-select-green">
      <select>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="eo">Esperanto</option>
        <option value="sv" selected>Svenska</option>
      </select>
    </form>
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
