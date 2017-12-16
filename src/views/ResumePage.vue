<template>
  <section class="home img-bg" style="background: url('/static/img/bg/img-bg2.jpg') 0 0; background-size: cover;">
    <div class="overlay opacity5"></div>
    <div class="container">
      <div class="name-block">
        <div class="name-block-container">
          <h1 v-html="$t('section.home.hello')" style="clear:both"></h1>
          <h2>{{ $t('section.home.title')}}</h2>
          <a target="_blank" href="#" class="btn btn-download">{{ $t('section.home.download') }}</a>
          <ul class="languagepicker">
            <li><a data-language="sv" data-dir="ltr" v-on:click="setLang('sv')"><img src="/static/img/flag/sv.png" title="Svenksa"></a></li>
            <li><a data-language="en" data-dir="ltr" v-on:click="setLang('en')"><img src="/static/img/flag/en.png" title="English"></a></li>
            <li><a data-language="de" data-dir="ltr" v-on:click="setLang('de')"><img src="/static/img/flag/de.png" title="Deutsch"></a></li>
            <li><a data-language="fr" data-dir="ltr" v-on:click="setLang('fr')"><img src="/static/img/flag/fr.png" title="Français"></a></li>
            <li><a data-language="es" data-dir="ltr" v-on:click="setLang('es')"><img src="/static/img/flag/es.png" title="Español"></a></li>
            <li><a data-language="eo" data-dir="ltr" v-on:click="setLang('eo')"><img src="/static/img/flag/eo.png" title="Esperanto"></a></li>
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
      <about-component :email="email"></about-component>
      <portfolio-component :email="email"></portfolio-component>
      <blog-component></blog-component>
      <contact-component :email="email"></contact-component>
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

  import axios from 'axios'

  export default {
    data () {
      return {
        email: atob('amF2aWVyQHBvcmVtc2tpLnNl')
      }
    },
    components: {
      AboutComponent,
      PortfolioComponent,
      BlogComponent,
      ContactComponent
    },
    created: function () {
      this.setLang('sv')
    },
    methods: {
      setLang (lang) {
        axios.get('/static/i18n/' + lang + '.json').then((res) => {
          this.$i18n.add(lang, res.data)
          this.$i18n.set(lang)
          document.documentElement.lang = lang
        }, (err) => {
          console.log(err)
        })
      }
    }
  }
</script>
