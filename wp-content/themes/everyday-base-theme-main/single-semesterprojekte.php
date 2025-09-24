<?php

get_header();

if ( ! did_action('basetheme_header_nav_rendered') ) {
  if ( class_exists('\basetheme\Utilities\Render_Navigation') && is_callable(['\basetheme\Utilities\Render_Navigation','render_navigation']) ) {
    \basetheme\Utilities\Render_Navigation::render_navigation();
  }
}

if (have_posts()) : while (have_posts()) : the_post();
  $pid = get_the_ID();

  $hero         = function_exists('get_field') ? get_field('hero', $pid) : null;
  $text_1       = function_exists('get_field') ? get_field('text_1', $pid) : null;
  $text_2       = function_exists('get_field') ? get_field('text_2', $pid) : null;
  $video        = function_exists('get_field') ? get_field('video',  $pid) : null;
  $text_3       = function_exists('get_field') ? get_field('text_3', $pid) : null;
  $image_slider = function_exists('get_field') ? get_field('image_slider', $pid) : null;
  $text_4       = function_exists('get_field') ? get_field('text_4', $pid) : null;
  $image_group  = function_exists('get_field') ? get_field('image', $pid) : null;
  $credits      = function_exists('get_field') ? get_field('credits', $pid) : null;

  $hero_title    = is_array($hero) ? ($hero['hero_title'] ?? '') : '';
  $hero_subtitle = is_array($hero) ? ($hero['hero_subtitle'] ?? '') : '';
  $hero_image    = is_array($hero) ? ($hero['hero_image'] ?? null) : null;

  $t1_title = is_array($text_1) ? ($text_1['text_1_title'] ?? '') : '';
  $t1_body  = is_array($text_1) ? ($text_1['text_1_body']  ?? '') : '';

  $t2_title = is_array($text_2) ? ($text_2['text_2_title'] ?? '') : '';
  $t2_body  = is_array($text_2) ? ($text_2['text_2_body']  ?? '') : '';
  $t2_image = is_array($text_2) ? ($text_2['text_2_image'] ?? null) : null;

  $video_url = is_array($video) ? ($video['video_url'] ?? '') : '';

  $t3_title = is_array($text_3) ? ($text_3['text_3_title'] ?? '') : '';
  $t3_desc  = is_array($text_3) ? ($text_3['text_3_description'] ?? '') : '';

  $slides   = is_array($image_slider) ? ($image_slider['slider_images'] ?? []) : [];
  if (!is_array($slides)) $slides = [];

  $t4_desc  = is_array($text_4) ? ($text_4['text_4_description'] ?? '') : '';

  $single_img = is_array($image_group) ? ($image_group['image'] ?? null) : null;

  $credits_text = is_array($credits) ? ($credits['credits_text'] ?? '') : '';
?>
<article <?php post_class('sp'); ?> id="post-<?php the_ID(); ?>">

  <?php if ($hero_title || $hero_subtitle || $hero_image): ?>
  <section class="sp__hero">
    <div class="sp__hero-content">
      <h1 class="sp__title"><?php echo esc_html($hero_title ?: get_the_title()); ?></h1>
      <?php if ($hero_subtitle): ?><p class="sp__subtitle"><?php echo esc_html($hero_subtitle); ?></p><?php endif; ?>
    </div>
    <?php
      if (is_array($hero_image) && !empty($hero_image['ID'])) {
        echo wp_get_attachment_image((int)$hero_image['ID'], 'full', false, ['class'=>'sp__hero-image']);
      }
    ?>
  </section>
  <?php endif; ?>

  <?php if ($t1_title || $t1_body): ?>
  <section class="sp__section sp__section--text">
    <?php if ($t1_title): ?><h2 class="sp__h2"><?php echo esc_html($t1_title); ?></h2><?php endif; ?>
    <?php if ($t1_body): ?><div class="sp__content"><?php echo wpautop( wp_kses_post($t1_body) ); ?></div><?php endif; ?>
  </section>
  <?php endif; ?>

  <?php if ($t2_title || $t2_body || $t2_image): ?>
  <section class="sp__section sp__section--text-image">
    <?php if ($t2_title): ?><h2 class="sp__h2"><?php echo esc_html($t2_title); ?></h2><?php endif; ?>
    <div class="sp__two-col">
      <div class="sp__col sp__col--text"><?php if ($t2_body) echo wpautop( wp_kses_post($t2_body) ); ?></div>
      <div class="sp__col sp__col--image">
        <?php if (is_array($t2_image) && !empty($t2_image['ID'])) echo wp_get_attachment_image((int)$t2_image['ID'], 'large', false, ['class'=>'sp__img']); ?>
      </div>
    </div>
  </section>
  <?php endif; ?>

  <?php if ($video_url): ?>
  <section class="sp__section sp__section--video"><div class="sp__video"><?php echo wp_oembed_get( esc_url($video_url) ); ?></div></section>
  <?php endif; ?>

  <?php if (!empty($slides)): ?>
  <section class="sp__section sp__section--slider">
    <div class="swiper js-sp-slider">
      <div class="swiper-wrapper">
        <?php foreach ($slides as $img): if (is_array($img) && !empty($img['ID'])): ?>
          <div class="swiper-slide"><?php echo wp_get_attachment_image((int)$img['ID'], 'large', false, ['class'=>'sp__slide-image']); ?></div>
        <?php elseif (is_numeric($img) && $img): ?>
          <div class="swiper-slide"><?php echo wp_get_attachment_image((int)$img, 'large', false, ['class'=>'sp__slide-image']); ?></div>
        <?php endif; endforeach; ?>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </section>
  <?php endif; ?>

  <?php if ($t3_title || $t3_desc): ?>
  <section class="sp__section sp__section--text">
    <?php if ($t3_title): ?><h2 class="sp__h2"><?php echo esc_html($t3_title); ?></h2><?php endif; ?>
    <?php if ($t3_desc): ?><div class="sp__content"><?php echo wpautop( wp_kses_post($t3_desc) ); ?></div><?php endif; ?>
  </section>
  <?php endif; ?>

  <?php if ($t4_desc): ?>
  <section class="sp__section sp__section--text"><div class="sp__content"><?php echo wpautop( wp_kses_post($t4_desc) ); ?></div></section>
  <?php endif; ?>

  <?php if (is_array($single_img) && !empty($single_img['ID'])): ?>
  <section class="sp__section sp__section--image"><figure><?php echo wp_get_attachment_image((int)$single_img['ID'], 'full', false, ['class'=>'sp__image']); ?></figure></section>
  <?php endif; ?>

  <?php if ($credits_text): ?>
  <section class="sp__section sp__section--credits"><div class="sp__content"><?php echo wpautop( esc_html($credits_text) ); ?></div></section>
  <?php endif; ?>

</article>
<?php
endwhile; endif;

get_footer();
