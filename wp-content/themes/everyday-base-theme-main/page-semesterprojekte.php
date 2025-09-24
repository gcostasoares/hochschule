<?php

use basetheme\Utilities\Render_Navigation;

get_header();
?>
<style>
  html,body{overflow-x:hidden;background:#f3f5f1;}
</style>
<?php

if (class_exists(Render_Navigation::class)) {
  Render_Navigation::render_navigation();
}

$paged = max(1, (int) get_query_var('paged'));
$q = new WP_Query([
  'post_type'      => 'semesterprojekte',
  'post_status'    => 'publish',
  'posts_per_page' => 12,
  'paged'          => $paged,
  'orderby'        => 'date',
  'order'          => 'ASC',
]);
?>

<section class="sp-archive">
  <header class="sp-archive__hero">
    <div class="sp-hero-italic">
      <div class="sp-hero-italic__box">
        <h2 class="sp-hero-italic__title">SEMESTERPROJEKTE</h2>
        <h5 class="sp-hero-italic__subtitle">PROJEKTE</h5>
      </div>
    </div>

    <div class="sp-hero-row">
      <div class="sp-hero-row__left">
        <div class="sp-hero-row__content">
          <div class="sp-hero-row__text">
            <p>Hier findest du eine Übersicht unserer Semesterprojekte</p>
          </div>
        </div>
      </div>
      <div class="sp-hero-row__right" aria-hidden="true"></div>
    </div>
  </header>

  <div class="sp-stream">
    <?php
      $i = 0;
      if ($q->have_posts()):
        while ($q->have_posts()): $q->the_post();
          $i++;
          $odd_even = ($i % 2 === 0) ? 'is-even' : 'is-odd';

          $hero    = get_field('hero', get_the_ID());
          $h_title = is_array($hero) && !empty($hero['hero_title']) ? (string)$hero['hero_title'] : get_the_title();
          $h_sub   = is_array($hero) ? (string)($hero['hero_subtitle'] ?? '') : '';
          $h_img   = is_array($hero) ? ($hero['hero_image'] ?? null) : null;

          $img_url = '';
          $img_w_orig = 0;
          $img_h_orig = 0;

          if ($h_img && is_array($h_img) && !empty($h_img['ID'])) {
            $img_id = (int) $h_img['ID'];
            $src = wp_get_attachment_image_src($img_id, 'full');
            if ($src) {
              $img_url = esc_url($src[0]);
              $img_w_orig = (int) $src[1];
              $img_h_orig = (int) $src[2];
            } else {
              $meta = wp_get_attachment_metadata($img_id);
              if (!empty($meta['width']) && !empty($meta['height'])) {
                $img_w_orig = (int) $meta['width'];
                $img_h_orig = (int) $meta['height'];
                $img_url = esc_url(wp_get_attachment_url($img_id));
              }
            }
          }

          $fixed_display_w = 370;
          $render_h = 246;
          if ($img_w_orig > 0 && $img_h_orig > 0) {
            $render_h = (int) round($img_h_orig * ($fixed_display_w / $img_w_orig));
          }

          $style_vars = sprintf('--media-w:%dpx;--img-w:%dpx;--img-h:%dpx;--z:%d;', $fixed_display_w, $fixed_display_w, $render_h, $i);
    ?>
      <section class="sp-block <?php echo $odd_even; ?>" style="<?php echo esc_attr($style_vars); ?>">
        <div class="sp-block__media">
          <div class="sp-block__mediaTwin" aria-hidden="true"></div>
          <div class="sp-block__mediaWrap">
            <?php if ($img_url): ?>
              <img src="<?php echo $img_url; ?>" alt="<?php echo esc_attr($h_title); ?>">
            <?php endif; ?>
          </div>
          <a class="sp-block__mediaLink" href="<?php echo esc_url(get_permalink()); ?>" aria-label="<?php echo esc_attr($h_title); ?>"></a>
        </div>

        <div class="sp-block__meta">
          <div class="sp-block__metaInner">
            <div class="sp-block__textSkew">
              <h3 class="sp-block__title"><?php echo esc_html($h_title); ?></h3>
              <div class="sp-block__subtitles">
                <div class="sp-block__subtitle"><?php echo esc_html($h_sub); ?></div>
              </div>
            </div>
          </div>
          <a class="sp-block__metaLink" href="<?php echo esc_url(get_permalink()); ?>" aria-label="<?php echo esc_attr($h_title); ?>"></a>
        </div>
      </section>
    <?php
        endwhile;
        wp_reset_postdata();
      endif;
    ?>
  </div>

  <nav class="sp-archive__pagination">
    <?php
      echo paginate_links([
        'total'   => (int) $q->max_num_pages,
        'current' => $paged,
      ]);
    ?>
  </nav>
</section>

<?php get_footer(); ?>
