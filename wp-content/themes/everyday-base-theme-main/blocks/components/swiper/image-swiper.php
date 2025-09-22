<?php

use basetheme\Utilities\Swiper_Utils;
use basetheme\Utilities\Spacer_Utils;

Swiper_Utils::init_swiper($attributes);

if (!isset($attributes["spacer"])) {
    $attributes["spacer"] = "medium";
}

$spacer = Spacer_Utils::render_spacer($attributes['spacer']);
?>


<section class="bs-image-swiper container <?php echo $spacer; ?>">
    <div class="image-swiper swiper swiper-id-<?php echo $attributes["uuid"]; ?>"
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
    </div>
</section>