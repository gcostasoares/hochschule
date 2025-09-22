<?php

namespace basetheme\Utilities;

class Swiper_Utils
{

    public static function init_swiper(&$attributes)
    {
        if (! isset($attributes['loop'])) {
            $attributes["loop"] = "true";
        }

        if (!isset($attributes['autoplay'])) {
            $attributes["autoplay"] = "true";
        }

        if (!isset($attributes['autoplaySpeed'])) {
            $attributes["autoplaySpeed"] = 3000;
        }

        if (!isset($attributes['pagination'])) {
            $attributes["pagination"] = "true";
        }

        if (!isset($attributes['navigation'])) {
            $attributes["navigation"] = "true";
        }

        if (!isset($attributes['effect'])) {
            $attributes["effect"] = "slide";
        }

        if (!isset($attributes['spaceBetween'])) {
            $attributes["spaceBetween"] = 0;
        }

        if (!isset($attributes['slidesPerView'])) {
            $attributes["slidesPerView"] = 1;
        }

        if (!isset($attributes['infiniteLoop'])) {
            $attributes["infiniteLoop"] = "false";
        }

        if ($attributes["infiniteLoop"] != "false") {
            $attributes["infiniteLoop"] = "true";
        }
    }

    public static function render_swiper_settings(array $attributes): string
    {
        $settings = [
            'swiper-id' => $attributes['uuid'],
            'swiper-loop' => $attributes['loop'],
            'swiper-set-autoplay' => $attributes['autoplay'],
            'swiper-autoplay' => $attributes['autoplaySpeed'],
            'swiper-pagination' => $attributes['pagination'],
            'swiper-navigation' => $attributes['navigation'],
            'swiper-effect' => $attributes['effect'],
            'swiper-space-between' => $attributes['spaceBetween'],
            'swiper-slides-per-view' => $attributes['slidesPerView'],
            'swiper-infiniteloop' => $attributes['infiniteLoop'],
        ];

        return implode(' ', array_map(
            fn($key, $value) => sprintf('data-%s="%s"', $key, esc_attr($value)),
            array_keys($settings),
            $settings
        ));
    }
}
