<?php
if ( ! function_exists('get_field') ) return;

$post_id = isset($args['post_id']) ? (int) $args['post_id'] : get_the_ID();

$hero         = get_field('hero', $post_id);
$hero_title   = $hero['hero_title'] ?? get_field('hero_title', $post_id) ?? get_the_title($post_id);
$hero_sub     = $hero['hero_subtitle'] ?? get_field('hero_subtitle', $post_id);
$hero_img     = $hero['hero_image'] ?? get_field('hero_image', $post_id);
$hero_img_id  = is_array($hero_img) ? ($hero_img['ID'] ?? 0) : (is_numeric($hero_img) ? (int)$hero_img : 0);
$hero_img_url = is_string($hero_img) && preg_match('#^https?://#',$hero_img) ? $hero_img : '';

$text1        = get_field('text_1', $post_id) ?: get_field('text1', $post_id);
$text1_title  = $text1['text_1_title'] ?? $text1['text1_title'] ?? get_field('text1_title', $post_id);
$text1_body   = $text1['text_1_body']  ?? $text1['text1_body']  ?? get_field('text1_body',  $post_id);

$text2        = get_field('text_image', $post_id) ?: get_field('text_2', $post_id) ?: get_field('text2', $post_id);
$text2_title  = $text2['ti_title'] ?? $text2['text_2_title'] ?? $text2['text2_title'] ?? get_field('text2_title', $post_id);
$text2_body   = $text2['ti_body']  ?? $text2['text_2_body']  ?? $text2['text2_body']  ?? get_field('text2_body',  $post_id);
$text2_img    = $text2['ti_image'] ?? $text2['text_2_image'] ?? $text2['text2_image'] ?? get_field('text2_image', $post_id);
$text2_img_id = is_array($text2_img) ? ($text2_img['ID'] ?? 0) : (is_numeric($text2_img) ? (int)$text2_img : 0);
$text2_img_url= is_string($text2_img) && preg_match('#^https?://#',$text2_img) ? $text2_img : '';

$video        = get_field('video', $post_id);
$video_url    = $video['video_url']    ?? get_field('video_url', $post_id);
$video_file   = $video['video_file']   ?? get_field('video_file', $post_id);
$video_poster = $video['video_poster'] ?? get_field('video_poster', $post_id);

$text3        = get_field('text_3', $post_id) ?: get_field('text3', $post_id);
$text3_title  = $text3['text_3_title'] ?? $text3['text3_title'] ?? get_field('text3_title', $post_id);
$text3_body   = $text3['text_3_body']  ?? $text3['text3_body']  ?? get_field('text3_body',  $post_id);

$slider_group = get_field('slider', $post_id);
$slider_raw   = $slider_group['slider_images'] ?? $slider_group ?? get_field('slider_images', $post_id) ?? get_field('slider', $post_id);
$slides_ids   = [];
if (is_array($slider_raw)) {
  foreach ($slider_raw as $it) { $slides_ids[] = is_object($it) ? (int)$it->ID : (int)$it; }
} elseif ($slider_raw) { $slides_ids[] = (int)$slider_raw; }

$text4        = get_field('text_4', $post_id) ?: get_field('text4', $post_id);
$text4_body   = $text4['text_4_body'] ?? $text4['text4_body'] ?? get_field('text4_body', $post_id);

$single_image = get_field('single_image', $post_id);
$image_single = $single_image['image'] ?? get_field('image_single', $post_id) ?? $single_image;
$image_single_id  = is_array($image_single) ? ($image_single['ID'] ?? 0) : (is_numeric($image_single) ? (int)$image_single : 0);
$image_single_url = is_string($image_single) && preg_match('#^https?://#',$image_single) ? $image_single : '';
?>

<article class="sp" data-post="<?php echo esc_attr($post_id); ?>">

  <?php if ($hero_title || $hero_img_id || $hero_img_url): ?>
  <section class="sp__hero">
    <div class="sp__hero-content">
      <?php if ($hero_title): ?><h1 class="sp__title"><?php echo esc_html($hero_title); ?></h1><?php endif; ?>
      <?php if ($hero_sub): ?><p class="sp__subtitle"><?php echo esc_html($hero_sub); ?></p><?php endif; ?>
    </div>
    <?php if ($hero_img_id) echo wp_get_attachment_image($hero_img_id, 'full', false, ['class'=>'sp__hero-image']); ?>
    <?php if (!$hero_img_id && $hero_img_url) echo '<img class="sp__hero-image" src="'.esc_url($hero_img_url).'" alt="">' ?>
  </section>
  <?php endif; ?>

  <?php if ($text1_title || $text1_body): ?>
  <section class="sp__section sp__section--text">
    <?php if ($text1_title): ?><h2 class="sp__h2"><?php echo esc_html($text1_title); ?></h2><?php endif; ?>
    <div class="sp__content"><?php echo wpautop( wp_kses_post($text1_body) ); ?></div>
  </section>
  <?php endif; ?>

  <?php if ($text2_title || $text2_body || $text2_img_id || $text2_img_url): ?>
  <section class="sp__section sp__section--text-image">
    <?php if ($text2_title): ?><h2 class="sp__h2"><?php echo esc_html($text2_title); ?></h2><?php endif; ?>
    <div class="sp__two-col">
      <div class="sp__col sp__col--text"><?php echo wpautop( wp_kses_post($text2_body) ); ?></div>
      <div class="sp__col sp__col--image">
        <?php if ($text2_img_id) echo wp_get_attachment_image($text2_img_id, 'large'); ?>
        <?php if (!$text2_img_id && $text2_img_url) echo '<img src="'.esc_url($text2_img_url).'" alt="">' ?>
      </div>
    </div>
  </section>
  <?php endif; ?>

  <?php if ($video_url || !empty($video_file['url'])): ?>
  <section class="sp__section sp__section--video">
    <div class="sp__video">
      <?php
      if ($video_url) {
        echo wp_oembed_get($video_url);
      } elseif (!empty($video_file['url'])) {
        $poster = !empty($video_poster['url']) ? ' poster="'.esc_url($video_poster['url']).'"' : '';
        echo '<video controls'.$poster.'><source src="'.esc_url($video_file['url']).'"></video>';
      }
      ?>
    </div>
  </section>
  <?php endif; ?>

  <?php if ($slides_ids): ?>
  <section class="sp__section sp__section--slider">
    <div class="swiper js-sp-slider">
      <div class="swiper-wrapper">
        <?php foreach ($slides_ids as $id) :
          if (!$id || !wp_attachment_is_image($id)) continue; ?>
          <div class="swiper-slide">
            <?php echo wp_get_attachment_image($id, 'large', false, ['class'=>'sp__slide-image']); ?>
          </div>
        <?php endforeach; ?>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </section>
  <?php endif; ?>

  <?php if ($text3_title || $text3_body): ?>
  <section class="sp__section sp__section--text">
    <?php if ($text3_title): ?><h2 class="sp__h2"><?php echo esc_html($text3_title); ?></h2><?php endif; ?>
    <div class="sp__content"><?php echo wpautop( wp_kses_post($text3_body) ); ?></div>
  </section>
  <?php endif; ?>

  <?php if ($text4_body): ?>
  <section class="sp__section sp__section--text">
    <div class="sp__content"><?php echo wpautop( wp_kses_post($text4_body) ); ?></div>
  </section>
  <?php endif; ?>

  <?php if ($image_single_id || $image_single_url): ?>
  <section class="sp__section sp__section--image">
    <figure>
      <?php if ($image_single_id) echo wp_get_attachment_image($image_single_id, 'full'); ?>
      <?php if (!$image_single_id && $image_single_url) echo '<img src="'.esc_url($image_single_url).'" alt="">' ?>
    </figure>
  </section>
  <?php endif; ?>

  <?php if ($credits_text = ($credits_text ?? get_field('credits_text', $post_id))): ?>
  <section class="sp__section sp__section--credits">
    <div class="sp__content"><?php echo wpautop( wp_kses_post($credits_text) ); ?></div>
  </section>
  <?php endif; ?>

</article>
