<?php

namespace basetheme\Utilities;

class Subtitle
{
    public static function init_subtitle(&$attributes)
    {

        if (!isset($attributes["alignment"])) {
            $attributes["alignment"] = "left";
        }
    }
    public static function render_subtitle($subtitle, $attributes, $class = "subtitle")
    {
        if (!isset($attributes["alignment"])) {
            $attributes["alignment"] = "left";
        }

        $alignmentClass = "text-left";
        switch ($attributes["alignment"]) {
            case "left":
                $alignmentClass = "text-start";
                break;
            case "center":
                $alignmentClass = "text-center";
                break;
            case "right":
                $alignmentClass = "text-end";
                break;
            default:
                $alignmentClass = "text-start";
                break;
        }

        return '<p class="' . $alignmentClass . ' ' . $class . '">' . $subtitle . '</p>';
    }
}
