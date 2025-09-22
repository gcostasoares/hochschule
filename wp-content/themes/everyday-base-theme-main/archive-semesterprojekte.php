<?php
/** archive-semesterprojekte.php */

// HEADER (block-theme safe)
if (function_exists('block_template_part')) {
  block_template_part('header');
} else {
  get_header();
}
?>
<section class="sp-archive">
  <header class="sp-archive__hero">
    <h1 class="sp-archive__title">Semesterprojekte</h1>
  </header>

  <div class="container sp-archive__grid">
    <?php if (have_posts()): ?>
      <?php while (have_posts()): the_post(); ?>
        <article <?php post_class('sp-card'); ?>>
          <a class="sp-card__link"
             href="<?php the_permalink(); ?>"
             data-no-swup="true"
             data-no-pjax="true"
             data-hard-nav="1">
            <div class="sp-card__thumb">
              <?php
              $hero = function_exists('get_field') ? get_field('hero', get_the_ID()) : null;
              $img  = is_array($hero) && !empty($hero['hero_image']) ? $hero['hero_image'] : null;
              if (is_array($img) && !empty($img['ID'])) {
                echo wp_get_attachment_image((int)$img['ID'], 'large', false, ['class'=>'sp-card__img']);
              } elseif (has_post_thumbnail()) {
                the_post_thumbnail('large', ['class'=>'sp-card__img']);
              }
              ?>
            </div>
            <div class="sp-card__meta">
              <h2 class="sp-card__title"><?php the_title(); ?></h2>
              <?php if (!empty($hero['hero_subtitle'])): ?>
                <p class="sp-card__kicker"><?php echo esc_html($hero['hero_subtitle']); ?></p>
              <?php endif; ?>
            </div>
          </a>
        </article>
      <?php endwhile; ?>
    <?php else: ?>
      <p>Keine Projekte gefunden.</p>
    <?php endif; ?>
  </div>

  <nav class="sp-archive__pagination">
    <?php the_posts_pagination(); ?>
  </nav>
</section>
<?php
// FOOTER (block-theme safe)
if (function_exists('block_template_part')) {
  block_template_part('footer');
} else {
  get_footer();
}
