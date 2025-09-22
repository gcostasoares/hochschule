<?php

use basetheme\Utilities\Swiper_Utils;

Swiper_Utils::init_swiper($attributes);

?>

<section class="bs-hero-slider hero-slider swiper swiper-id-<?php echo $attributes["uuid"]; ?> <?php echo $attributes["infiniteLoop"] == "true" ? 'swiper-transition-timing-linear' : ''; ?>"
    data-swiper <?php echo Swiper_Utils::render_swiper_settings($attributes); ?>>

    <div class="swiper-wrapper">
        <?php echo $content; ?>
    </div>

    <?php if ($attributes["pagination"] == 'true') : ?>
        <div class="swiper-pagination swiper-pagination-id-<?php echo $attributes["uuid"]; ?>"></div>
    <?php endif; ?>
    <?php if ($attributes["navigation"] == 'true') : ?>
        <div class="swiper-button-prev swiper-button__prev-id-<?php echo $attributes["uuid"]; ?>"></div>
        <div class="swiper-button-next swiper-button__next-id-<?php echo $attributes["uuid"]; ?>"></div>
    <?php endif; ?>
</section>