<?php

if (!isset($attributes["listType"])) {
    $attributes["listType"] = "ul";
}

?>

<div class="bs-list">
    <?php if ($attributes["listType"] == "ul"): ?>
        <ul class="list-group">
            <?php echo $content; ?>
        </ul>
    <?php elseif ($attributes["listType"] == "ol"): ?>
        <ol class="list-group">
            <?php echo $content; ?>
        </ol>
    <?php else: ?>
        <div class="bg-warning p-4">Error - Invalid list type: <?php echo htmlspecialchars($attributes["listType"]); ?></div>
    <?php endif; ?>
</div>