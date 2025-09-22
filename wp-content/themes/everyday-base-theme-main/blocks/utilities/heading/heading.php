<?php

namespace basetheme\Utilities;

class Heading_Utils
{
    public static function init_heading(&$attributes)
    {
        if (!isset($attributes["tag"])) {
            $attributes["tag"] = "h1";
        }

        if (!isset($attributes["alignment"])) {
            $attributes["alignment"] = "left";
        }

        if (!isset($attributes["heading"])) {
            $attributes["heading"] = "<span class='bg-warning p-3'>No Heading is Set</span>";
        }
    }

    public static function render_heading($heading, $attributes, $class = "heading")
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

        return '<' . $attributes["tag"] . ' class="' . $alignmentClass . ' ' . $class . '">' . $heading . '</' . $attributes["tag"] . '>';
    }
}
