<?php


use basetheme\Utilities\Spacer_Utils;

if (!isset($attributes["spacer"])) {
    $attributes["spacer"] = "medium";
}

?>

<section class="bs-call-to-action position-relative z-1 <?php echo Spacer_Utils::render_spacer($attributes['spacer']); ?>">
    <div class="container">
        <div class="row justify-content-center g-0">
            <?php echo $content; ?>
        </div>
    </div>
</section>