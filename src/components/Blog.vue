<template>
  <div class="content-blocks blog">
    <section class="content">
      <div class="block-content">
        <h3 class="block-title">{{ $t('section.blog.title') }}</h3>
        <div class="row">
          <div class="col-md-10 mx-auto">

            <div class="post">
              <div class="post-thumbnail">
                <a class="open-post" href="post-single.html">
                  <img src="images/blog/midium/4.jpg">
                </a>
              </div>
              <div class="post-title">
                <a class="open-post" href="post-single.html"><h2>Lorem ispum dolor sit amet</h2></a>
                <p class="post-info">
                  <span class="post-author">{{ $t('section.blog.posted_by', {name: 'Javier Poremski'}) }}</span>
                  <span class="slash"></span>
                  <span class="post-date">mm dd, yyyy</span>
                  <span class="slash"></span>
                  <span class="post-catetory">Lorem</span>
                </p>
              </div>
              <div class="post-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non enim ut enim fringilla adipiscing id in lorem. Quisque aliquet neque vitae lectus tempus consectetur. Aliquam erat volutpat. Nunc eu nibh nulla, id cursus arcu. </p>
                <a class="btn open-post" href="post-single.html">{{ $t('section.blog.read_more') }}</a>
              </div>
            </div>

            <div class="text-center">
              <ul class="pagination">
                <li class="page-item disabled">
                  <a class="page-link" href="#" tabindex="-1">{{ $t('section.blog.previous') }}</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item active">
                  <a class="page-link" href="#">2 <span class="sr-only">({{ $t('current') }})</span></a>
                </li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">4</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">{{ $t('section.blog.next') }}</a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>
