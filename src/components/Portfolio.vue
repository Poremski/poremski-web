<template>
  <div class="content-blocks portfolio">
    <section class="content">
      <div class="block-content">
        <h3 class="block-title">{{ $t('section.portfolio.title') }}</h3>
        <div class="row">
          <div class="col-md-12">
            <div class="filters">
              <span>{{ $t('section.portfolio.filter') }}</span>
              <ul id="filters">
                <li class="active" data-filter="*">{{ $t('section.portfolio.filters.all') }}</li>
                <li data-filter=".apps">{{ $t('section.portfolio.filters.apps') }}</li>
                <li data-filter=".web">{{ $t('section.portfolio.filters.web') }}</li>
                <li data-filter=".tools">{{ $t('section.portfolio.filters.tools') }}</li>
              </ul>
            </div>
            <div class="portfolio-container row isotope" id="portfolio-container">

              <div class="col-md-4 col-sm-6 col-xs-12 portfolio-item web">
                <a class="open-project" href="project-1.html">
                  <div class="portfolio-column">
                    <div class="portfolio-hover">
                      <div class="portfolio-content">
                        <h2>Verboflex Web</h2>
                        <hr>
                        <p>{{ $t('section.portfolio.details') }}</p>
                      </div>
                      <div class="portfolio-overlay"></div>
                    </div>
                    <img src="images/portfolio/masonry/001.jpg">
                  </div>
                </a>
              </div>

              <div class="col-md-4 col-sm-6 col-xs-12 portfolio-item app">
                <a class="open-project" href="project-1.html">
                  <div class="portfolio-column">
                    <div class="portfolio-hover">
                      <div class="portfolio-content">
                        <h2>Verboflex Mobile</h2>
                        <hr>
                        <p>{{ $t('section.portfolio.details') }}</p>
                      </div>
                      <div class="portfolio-overlay"></div>
                    </div>
                    <img src="images/portfolio/masonry/001.jpg">
                  </div>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="row text-center">
        <div class="col-md-12 btn-email">
          <a class="btn lowercase">{{ email }}</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    props: ['email']
  }
</script>
