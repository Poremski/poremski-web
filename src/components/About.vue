<template>
  <div class="content-blocks about">
    <section class="content" id="about">
      <div class="block-content">
        <h3 class="block-title">{{ $t('section.about.title.profile') }}</h3>
        <h3 class="subheading" v-html="$t('section.about.subheading')"></h3>
        <p></p>
        <div class="info-list row">
          <div class="col-sm-6" v-html="$t('section.about.name')"></div>
          <div class="col-sm-6" v-html="$t('section.about.date')"></div>
          <div class="col-sm-6" v-html="$t('section.about.location')"></div>
          <div class="col-sm-6" v-html="$t('section.about.email')"></div>
          <div class="col-sm-6" v-html="$t('section.about.phone')"></div>
        </div>
        <img class="sign" src="/static/img/signature.png" alt="">
      </div>
      <div class="block-content">
        <h3 class="block-title">{{ $t('section.about.title.skills') }}</h3>
        <label class="progress-bar-label">{{ $t('section.about.dev_lang.html_css') }} - <span>{{ $tc('section.about.years_experience', 10, {year: 10}) }}</span></label>
        <div class="progress">
          <div style="width: 99%;" class="progress-bar" role="progressbar" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100">
            <span>99%</span>
          </div>
        </div>
        <label class="progress-bar-label">{{ $t('section.about.dev_lang.js') }} - <span>{{ $tc('section.about.years_experience', 5, {year: 5}) }}</span></label>
        <div class="progress">
          <div style="width: 80%;" class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
            <span>99%</span>
          </div>
        </div>
        <label class="progress-bar-label">{{ $t('section.about.dev_lang.java') }} - <span>{{ $tc('section.about.years_experience', 5, {year: 5}) }}</span></label>
        <div class="progress">
          <div style="width: 85%;" class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
            <span>99%</span>
          </div>
        </div>
        <label class="progress-bar-label">{{ $t('section.about.dev_lang.android') }} - <span>{{ $tc('section.about.years_experience', 5, {year: 5}) }}</span></label>
        <div class="progress">
          <div style="width: 45%;" class="progress-bar" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">
            <span>99%</span>
          </div>
        </div>
        <label class="progress-bar-label">{{ $t('section.about.dev_lang.python') }} - <span>{{ $tc('section.about.years_experience', 5, {year: 5}) }}</span></label>
        <div class="progress">
          <div style="width: 90%;" class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
            <span>99%</span>
          </div>
        </div>
        <label class="progress-bar-label">{{ $t('section.about.dev_lang.swift') }} - <span>{{ $tc('section.about.years_experience', 2, {year: 2}) }}</span></label>
        <div class="progress">
          <div style="width: 40%;" class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
            <span>99%</span>
          </div>
        </div>
      </div>
      <div class="block-content">
        <h3 class="block-title">{{ $t('section.about.title.experience') }}</h3>
        <div class="timeline experience">
          <div class="row">
            <div class="col-md-12">
              <div class="exp-holder">
                <div class="exp">
                  <div class="hgroup">
                    <h4 v-html="$t('section.about.experience.1.title')"></h4>
                    <h5 v-html="$t('section.about.experience.1.time')"></h5>
                  </div>
                  <p v-html="$t('section.about.experience.1.info')"></p>
                </div>
                <div class="exp">
                  <div class="hgroup">
                    <h4 v-html="$t('section.about.experience.2.title')"></h4>
                    <h5 v-html="$t('section.about.experience.2.time')"></h5>
                  </div>
                  <p v-html="$t('section.about.experience.2.info')"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="block-content">
        <h3 class="block-title">{{ $t('section.about.title.education') }}</h3>
        <div class="timeline education">
          <div class="row">
            <div class="col-md-12">
              <div class="exp-holder">
                <div class="exp">
                  <div class="hgroup">
                    <h4 v-html="$t('section.about.education.1.title')"></h4>
                    <h5 v-html="$t('section.about.education.1.time')"></h5>
                  </div>
                  <p v-html="$t('section.about.education.1.info')">></p>
                </div>
                <div class="exp">
                  <div class="hgroup">
                    <h4 v-html="$t('section.about.education.2.title')"></h4>
                    <h5 v-html="$t('section.about.education.2.time')"></h5>
                  </div>
                  <p v-html="$t('section.about.education.2.info')">></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="block-content">
        <h3 class="block-title">{{ $t('section.about.title.services') }}</h3>
        <div class="row">
          <div class="col-md-4 col-sm-6 service">
            <div class="service-icon">
              <i class="ion-laptop"></i>
            </div>
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
          </div>
          <div class="col-md-4 col-sm-6 service">
            <div class="service-icon">
              <i class="ion-pie-graph"></i>
            </div>
            <h4>App Development</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
          </div>
          <div class="col-md-4 col-sm-6 service">
            <div class="service-icon">
              <i class="ion-paintbucket"></i>
            </div>
            <h4>Graphic Design</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
          </div>
          <div class="col-md-4 col-sm-6 service">
            <div class="service-icon">
              <i class="ion-printer"></i>
            </div>
            <h4>Print Design</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
          </div>
          <div class="col-md-4 col-sm-6 service">
            <div class="service-icon">
              <i class="ion-qr-scanner"></i>
            </div>
            <h4>Graphic Design</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
          </div>
          <div class="col-md-4 col-sm-6 service">
            <div class="service-icon">
              <i class="ion-social-buffer"></i>
            </div>
            <h4>Print Design</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
          </div>
        </div>
      </div>
      <!-- <div class="block-content">
        <h3 class="block-title">{{ $t('section.about.title.awards') }}</h3>
        <div class="row">
          <div class="col-md-3 col-sm-6 awards">
            <img src="/static/img/awards/1.jpg">
          </div>
          <div class="col-md-3 col-sm-6 awards">
            <img src="/static/img/awards/2.jpg">
          </div>
          <div class="col-md-3 col-sm-6 awards">
            <img src="/static/img/awards/3.jpg">
          </div>
          <div class="col-md-3 col-sm-6 awards">
            <img src="/static/img/awards/4.jpg">
          </div>
        </div>
      </div> -->
      <!-- <div class="block-content">
        <h3 class="block-title">{{ $t('section.about.title.testimonials') }}</h3>
        <div class="row">
          <div id="liontestimonial" class="owl-carousel owl-theme">
            <div class="item testimonials">
              <img src="/static/img/testimonials/1.jpg">
              <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <p class="quote"><span>Lorem Ipsum</span> - Excepteur sint occaecat</p>
              </blockquote>
            </div>
            <div class="item testimonials">
              <img src="/static/img/testimonials/2.jpg">
              <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <p class="quote"><span>Lorem Ipsum</span> - Excepteur sint occaecat</p>
              </blockquote>
            </div>
            <div class="item testimonials">
              <img src="/static/img/testimonials/3.jpg">
              <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <p class="quote"><span>Lorem Ipsum</span> - Excepteur sint occaecat</p>
              </blockquote>
            </div>
          </div>
        </div>
      </div> -->
      <div class="row text-center">
        <div class="col-md-12 btn-email">
          <a class="btn lowercase">javier@poremski.se</a>
        </div>
      </div>
    </section>
  </div>
</template>
