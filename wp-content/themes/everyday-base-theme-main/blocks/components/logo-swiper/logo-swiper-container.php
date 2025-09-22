<?php

use basetheme\Utilities\Spacer_Utils;
use basetheme\Utilities\Swiper_Utils;

Swiper_Utils::init_swiper($attributes);

if (!isset($attributes["spacer"])) {
    $attributes["spacer"] = "medium";
}


?>

<section class="bs-logo-swiper logo-swiper <?php echo Spacer_Utils::render_spacer($attributes['spacer']); ?>">
    <div class="container-fluid px-0">
        <div class="swiper swiper-id-<?php echo $attributes["uuid"]; ?> <?php echo $attributes["infiniteLoop"] == "true" ? 'swiper-transition-timing-linear' : ''; ?>"
            data-swiper <?php echo Swiper_Utils::render_swiper_settings($attributes); ?>>

            <div class="swiper-wrapper h-100">
                <?php echo $content; ?>
            </div>

            <?php if ($attributes["pagination"] == 'true') : ?>
                <div class="swiper-pagination swiper-pagination-id-<?php echo $attributes["uuid"]; ?>"></div>
            <?php endif; ?>
            <?php if ($attributes["navigation"] == 'true') : ?>

                <div class="swiper-button-prev swiper-button__prev-id-<?php echo $attributes["uuid"]; ?>"></div>
                <div class="swiper-button-next swiper-button__next-id-<?php echo $attributes["uuid"]; ?>"></div>

            <?php endif; ?>
        </div>
    </div>
</section>