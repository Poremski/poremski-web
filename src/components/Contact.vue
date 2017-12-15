<template>
  <div class="content-blocks contact">
    <section class="content">
      <div class="block-content">
        <h3 class="block-title">{{ $t('section.contact.title') }}</h3>
        <div class="row">
          <div class="col-md-6">
            <form id="contactForm" data-toggle="validator" class="contact-form shake">
              <div class="form-group">
                <input id="name" type="text" class="form-control" name="name" autocomplete="off" required :data-error="$t('section.contact.form.name.msg')" :placeholder="$t('section.contact.form.name.title')">
                <div class="help-block with-errors"></div>
              </div>
              <div class="form-group">
                <input id="email" type="email" class="form-control" name="email" autocomplete="off" required :data-error="$t('section.contact.form.email.msg')" :placeholder="$t('section.contact.form.email.title')">
                <div class="help-block with-errors"></div>
              </div>
              <div class="form-group">
                <textarea id="message" class="form-control textarea" rows="10" name="message" required :data-error="$t('section.contact.form.message.msg')" :placeholder="$t('section.contact.form.message.title')"></textarea>
                <div class="help-block with-errors"></div>
              </div>
              <div class="form-group">
                <button id="submit" type="submit" class="btn selected">{{ $t('section.contact.send') }}</button>
                <div id="msgSubmit" class="h3 text-center hidden"></div>
              </div>
            </form>
          </div>

          <div class="col-md-5 offset-md-1">
            <div class="contact-content">
              <div class="contact-icon">
                <i class="ion-ios-location-outline"></i>
              </div>
              <div class="contact-details">
                <h5>{{ $t('section.contact.location') }}</h5>
                <p>Helsingborg, Scania, Sweden</p>
              </div>
            </div>
            <div class="contact-content">
              <div class="contact-icon">
                <i class="ion-ios-telephone-outline"></i>
              </div>
              <div class="contact-details">
                <h5>{{ $t('section.contact.call') }}</h5>
                <p> <a href="tel:+46762208605">+46 762 20 86 05</a></p>
              </div>
            </div>
            <div class="contact-content">
              <div class="contact-icon">
                <i class="ion-ios-email-outline"></i>
              </div>
              <div class="contact-details">
                <h5>{{ $t('section.contact.enquiries') }}</h5>
                <p>{{ email }}</p>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div id="map"></div>
          </div>
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
