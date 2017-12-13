<template>
  <div class="content-blocks portfolio">
    <section class="content">
      <div class="block-content">
        <h3 class="block-title">Portfolio</h3>
        <div class="row">
          <div class="col-md-12">
            <div class="filters">
              <span>Filters :</span>
              <ul id="filters">
                <li class="active" data-filter="*">All</li>
                <li data-filter=".mobile">Mobile Development</li>
                <li data-filter=".webdesign">Web Design</li>
                <li data-filter=".tools">Tools</li>
              </ul>
            </div>
            <div class="portfolio-container row isotope" id="portfolio-container">

              <div class="col-md-4 col-sm-6 col-xs-12 portfolio-item webdesign">
                <a class="open-project" href="project-1.html">
                  <div class="portfolio-column">
                    <div class="portfolio-hover">
                      <div class="portfolio-content">
                        <h2>Verboflex Web</h2>
                        <hr>
                        <p>View details.</p>
                      </div>
                      <div class="portfolio-overlay"></div>
                    </div>
                    <img src="images/portfolio/masonry/001.jpg">
                  </div>
                </a>
              </div>

              <div class="col-md-4 col-sm-6 col-xs-12 portfolio-item mobile">
                <a class="open-project" href="project-1.html">
                  <div class="portfolio-column">
                    <div class="portfolio-hover">
                      <div class="portfolio-content">
                        <h2>Verboflex Mobile</h2>
                        <hr>
                        <p>View details.</p>
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
          <a class="btn lowercase">javier@poremski.se</a>
        </div>
      </div>
    </section>
  </div>
</template>
