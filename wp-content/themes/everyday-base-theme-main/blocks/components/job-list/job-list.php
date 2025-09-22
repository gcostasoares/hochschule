<?php

use basetheme\Utilities\Heading_Utils;
use basetheme\Utilities\Text_Utils;
use basetheme\Utilities\Button_Utils;



$attributes["tag"] = "h2";
Heading_Utils::init_heading($attributes);

if (!isset($attributes["startingDate"])) {
    $attributes["startingDate"] = "Ab Sofort";
}

if (!isset($attributes["text"])) {
    $attributes["text"] = "";
}

Button_Utils::init_button($attributes);

?>

<div>
    <?php echo Heading_Utils::render_heading($attributes["heading"], $attributes, "fs-26 fw-bold"); ?>
    <div class="fs-14 fw-light"><?php echo esc_html($attributes["startingDate"]); ?></div>
    <?php echo Text_Utils::render_text($attributes["text"], $attributes, "fs-16"); ?>

    <?php Button_Utils::render_button($attributes); ?>
</div>