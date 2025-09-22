<?php

namespace basetheme\Utilities;

Heading_Utils::init_heading($attributes);

?>


<div <?php echo \get_block_wrapper_attributes([ 'class' => 'bs-heading' ]); ?>>
  <?php echo Heading_Utils::render_heading($attributes['heading'], $attributes, 'heading'); ?>
</div>

