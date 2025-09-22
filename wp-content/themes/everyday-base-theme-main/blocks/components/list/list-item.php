<?php

if (!isset($attributes["content"])) {
    $attributes["content"] = "No List Item is Set";
}

?>

<li>
    <?php echo $attributes["content"]; ?>
</li>