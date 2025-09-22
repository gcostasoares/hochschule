<?php
/** Template Name: Semesterprojekte (Archive view) */
use basetheme\Utilities\Render_Navigation;

get_header();

// Always print the PHP header/nav (works even on block themes)
if (class_exists(Render_Navigation::class)) {
  Render_Navigation::render_navigation();
}

// Query the CPT so this page behaves like the archive
$paged = max(1, (int) get_query_var('paged'));
$q = new WP_Query([
  'post_type'      => 'semesterprojekte',
  'post_status'    => 'publish',
  'posts_per_page' => 12,
  'paged'          => $paged,
]);
?>
<section class="sp-archive">
  <header class="sp-archive__hero">
    <h1 class="sp-archive__title"><?php the_title(); ?></h1>
  </header>

  <div class="container sp-archive__grid">
    <?php if ($q->have_posts()): ?>
      <?php while ($q->have_posts()): $q->the_post(); ?>
        <article <?php post_class('sp-card'); ?>>
          <a class="sp-card__link" href="<?php the_permalink(); ?>">
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
      <?php endwhile; wp_reset_postdata(); ?>
    <?php else: ?>
      <p>Keine Projekte gefunden.</p>
    <?php endif; ?>
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
<?php get_footer();
