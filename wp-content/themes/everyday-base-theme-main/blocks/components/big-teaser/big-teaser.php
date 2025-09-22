<?php

use basetheme\Utilities\Image_Utils;
use basetheme\Utilities\Spacer_Utils;
use basetheme\Utilities\Button_Utils;

use basetheme\Utilities\Heading_Utils;
use basetheme\Utilities\Subtitle;

Image_Utils::init_image($attributes);
Button_Utils::init_button($attributes);
Heading_Utils::init_heading($attributes);
Subtitle::init_subtitle($attributes);


if (!isset($attributes["spacer"])) {
    $attributes["spacer"] = "";
}
?>

<section class="bs-big-teaser big-teaser <?php echo Spacer_Utils::render_spacer($attributes['spacer']); ?>">
    <div class="position-relative w-100 h-100">
        <?php Image_Utils::render_image($attributes, "w-100 h-100 object-fit-cover"); ?>
        <div class="position-absolute bottom-0 left-0 w-100 pb-6">
            <div class="container">
                <div class="row">
                    <div class="col-12">

                        <?php echo Heading_Utils::render_heading($attributes["heading"], $attributes, "fs-36 fw-bold text-white"); ?>
                        <?php echo Subtitle::render_subtitle($attributes["subtitle"], $attributes, "fs-24 fw-bold text-white"); ?>
                        <?php Button_Utils::render_button($attributes); ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>