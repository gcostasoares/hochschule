<?php
if ( ! defined('ABSPATH') ) exit;

add_filter('render_block_core/navigation', function($content, $block){
  return is_admin() && isset($block['attrs']['ref']) ? (string)$block['attrs']['ref'] : $content;
}, 10, 2);

add_filter('render_block_core/footer', function($content, $block){
  return is_admin() && isset($block['attrs']['ref']) ? (string)$block['attrs']['ref'] : $content;
}, 10, 2);

add_action('after_setup_theme', function () {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  add_theme_support('editor-styles');
  add_editor_style(['build/style-index.css','build/index.css']);
});

add_action('after_setup_theme', function () {
  add_image_size('full',1920,1080);
  add_image_size('pageBanner',1500,350,true);
});

add_action('wp_enqueue_scripts', function () {
  wp_enqueue_script('basetheme-main-js', get_theme_file_uri('/build/index.js'), [], microtime(), true);
  wp_enqueue_style('basetheme-main-css', get_theme_file_uri('/build/index.css'), [], microtime());
});

class PlaceholderBlock {
  function __construct($name){ $this->name=$name; add_action('init',[$this,'onInit']); }
  function ourRenderCallback($attributes,$content){ ob_start(); require get_theme_file_path("/blocks/{$this->name}.php"); return ob_get_clean(); }
  function onInit(){
    wp_register_script($this->name, get_stylesheet_directory_uri()."/blocks/{$this->name}.jsx", ['wp-blocks','wp-editor'], null, true);
    register_block_type("basetheme/{$this->name}",[
      'editor_script'  => $this->name,
      'render_callback'=> [$this,'ourRenderCallback']
    ]);
  }
}

require_once get_template_directory().'/registerBlocks/block.php';
require_once get_template_directory().'/blocks/configuration/spacer/spacer.php';
require_once get_template_directory().'/blocks/configuration/align/align.php';
require_once get_template_directory().'/blocks/utilities/swiper/swiper-settings.php';
require_once get_template_directory().'/blocks/components/navigation/render_navigation.php';
require_once get_template_directory().'/blocks/utilities/image/image.php';
require_once get_template_directory().'/blocks/utilities/text/text.php';
require_once get_template_directory().'/blocks/utilities/button/button.php';
require_once get_template_directory().'/blocks/utilities/heading/heading.php';
require_once get_template_directory().'/blocks/utilities/title/subtitle.php';

add_filter('upload_mimes', function($m){ return array_merge($m, ['svg'=>'image/svg+xml']); });

add_filter('wpcf7_form_class_attr', fn($c) => '');
add_filter('wpcf7_form_elements', function($content){ return preg_replace('/\sclass=".*?"/','',$content); });
add_filter('wpcf7_form_elements', function($content){
  $content = preg_replace('/<label(.*?)>/', '<label class="form-label w-100"$1>', $content);
  $content = preg_replace('/<(input|textarea|select)(.*?)class="(.*?)"/','<$1$2class="$3 form-control"',$content);
  $content = preg_replace('/<(input|textarea|select)(?!.*?class=)/','<$1 class="form-control"',$content);
  $content = preg_replace('/<input([^>]*?)type="submit"([^>]*?)value="([^"]*?)"([^>]*?)>/','<button type="submit" class="btn btn-primary text-white"$2$4>$3</button>',$content);
  return $content;
});
add_filter('wpcf7_form_elements', function($content){
  return preg_replace_callback('/<label([^>]*)><input([^>]*)type="checkbox"([^>]*)>(.*?)<\/label>/s', function($m){
    $id='checkbox-'.uniqid();
    return '<div class="form-check"><input class="form-check-input" id="'.$id.'"'.$m[2].'type="checkbox"'.$m[3].'><label class="form-check-label" for="'.$id.'"'.$m[1].'>'.$m[4].'</label></div>';
  }, $content);
});
add_filter('wpcf7_form_elements', function($content){
  return preg_replace_callback('/<label([^>]*)><input([^>]*)type="radio"([^>]*)>(.*?)<\/label>/s', function($m){
    $id='radio-'.uniqid();
    return '<div class="form-check"><input class="form-check-input" id="'.$id.'"'.$m[2].'type="radio"'.$m[3].'><label class="form-check-label" for="'.$id.'"'.$m[1].'>'.$m[4].'</label></div>';
  }, $content);
});

add_filter('allowed_block_types_all', function($allowed, $ctx){
  if (!empty($ctx->post) && $ctx->post->post_type === 'semesterprojekte') return true;
  return $allowed;
}, 10, 2);

add_action('wp_enqueue_scripts', function(){
  if (is_admin()) return;
  $content = '';
  if (is_singular()) { $p=get_post(); if ($p) $content=$p->post_content; }
  if (is_singular('semesterprojekte') || ($content && has_shortcode($content,'semesterprojekt'))) {
    wp_enqueue_style('swiper','https://unpkg.com/swiper@9/swiper-bundle.min.css',[],null);
    wp_enqueue_script('swiper','https://unpkg.com/swiper@9/swiper-bundle.min.js',[],null,true);
    wp_add_inline_script('swiper','document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".js-sp-slider").forEach(function(el){new Swiper(el,{loop:true,slidesPerView:1,spaceBetween:16,pagination:{el:el.querySelector(".swiper-pagination"),clickable:true},navigation:{nextEl:el.querySelector(".swiper-button-next"),prevEl:el.querySelector(".swiper-button-prev")}});});});');
  }
});

add_action('wp_enqueue_scripts', function () {
  if (is_admin()) return;
  wp_add_inline_script('main-js', '(function(){
    document.addEventListener("click",function(e){
      var a = e.target && e.target.closest && e.target.closest("a");
      if(!a) return;
      if(a.hasAttribute("data-hard-nav")) {
        e.preventDefault();
        window.location.href = a.href;
      }
    }, true);
  })();');
}, 20);


function basetheme_get_semesterprojekt_html($post_id,$extra_class=''){
  $post=get_post($post_id);
  if(!$post || 'semesterprojekte'!==$post->post_type) return '';
  setup_postdata($post);
  ob_start();
  echo '<div class="sp-embed '.esc_attr($extra_class).'">';
  get_template_part('template-parts/semesterprojekt',null,['post_id'=>$post_id]);
  echo '</div>';
  wp_reset_postdata();
  return ob_get_clean();
}
add_shortcode('semesterprojekt', function($atts){
  $atts=shortcode_atts(['id'=>'','slug'=>'','class'=>'','latest'=>''],$atts,'semesterprojekt');
  $id=(int)$atts['id'];
  if(!$id && $atts['slug']){ $p=get_page_by_path(sanitize_title($atts['slug']),OBJECT,'semesterprojekte'); if($p) $id=(int)$p->ID; }
  if(!$id && $atts['latest']){ $q=get_posts(['post_type'=>'semesterprojekte','posts_per_page'=>1,'post_status'=>'publish','orderby'=>'date','order'=>'DESC']); if($q) $id=(int)$q[0]->ID; }
  if(!$id) return '';
  return basetheme_get_semesterprojekt_html($id,$atts['class']);
});

add_filter('nav_menu_css_class', function ($classes, $item) {
  if (is_singular('semesterprojekte')) {
    $target = home_url('/projekte/semesterprojekte/');
    if (untrailingslashit($item->url) === untrailingslashit($target)) {
      $classes[] = 'current-menu-item';
      $classes[] = 'current-menu-ancestor';
      $classes[] = 'current_page_parent';
    }
  }
  return $classes;
}, 10, 2);


add_action('acf/init', function () {
  if ( ! function_exists('acf_add_local_field_group') ) return;
  acf_add_local_field_group([
    'key'    => 'group_68cbec69d6ad2',
    'title'  => 'Semesterprojekte Inhalte',
    'fields' => [
      [
        'key'        => 'field_68cbece42cb8a',
        'label'      => 'Hero',
        'name'       => 'hero',
        'type'       => 'group',
        'layout'     => 'block',
        'sub_fields' => [
          [
            'key'   => 'field_68cbecf92cb8b',
            'label' => 'Hero Title',
            'name'  => 'hero_title',
            'type'  => 'text',
            'wrapper'=>['width'=>60],
          ],
          [
            'key'   => 'field_68cbed0d2cb8c',
            'label' => 'Hero Subtitle',
            'name'  => 'hero_subtitle',
            'type'  => 'text',
            'wrapper'=>['width'=>40],
          ],
          [
            'key'           => 'field_68cbed1f2cb8d',
            'label'         => 'Hero Image',
            'name'          => 'hero_image',
            'type'          => 'image',
            'return_format' => 'array',
            'library'       => 'all',
            'preview_size'  => 'medium',
            'wrapper'=>['width'=>100],
          ],
        ],
        'wrapper'=>['class'=>'sp-hero']
      ],
      [
        'key'        => 'field_68cbed99f7671',
        'label'      => 'Text 1',
        'name'       => 'text_1',
        'type'       => 'group',
        'layout'     => 'block',
        'sub_fields' => [
          [
            'key'   => 'field_68cbee73f7672',
            'label' => 'Text Title',
            'name'  => 'text_title',
            'type'  => 'text',
            'wrapper'=>['width'=>40],
          ],
          [
            'key'          => 'field_68cbeec9f7674',
            'label'        => 'Text 1 Body',
            'name'         => 'text_1_body',
            'type'         => 'wysiwyg',
            'tabs'         => 'all',
            'toolbar'      => 'full',
            'media_upload' => 1,
            'delay'        => 0,
            'wrapper'=>['width'=>60],
          ],
        ],
      ],
      [
        'key'        => 'field_68cbeedbf7675',
        'label'      => 'Text + Bild',
        'name'       => 'text_2',
        'type'       => 'group',
        'layout'     => 'block',
        'sub_fields' => [
          [
            'key'   => 'field_68cbeeeff7676',
            'label' => 'Text 2 Title',
            'name'  => 'text_2_title',
            'type'  => 'text',
            'wrapper'=>['width'=>40],
          ],
          [
            'key'          => 'field_68cbeefcf7677',
            'label'        => 'Text 2 Body',
            'name'         => 'text_2_body',
            'type'         => 'wysiwyg',
            'tabs'         => 'all',
            'toolbar'      => 'full',
            'media_upload' => 1,
            'delay'        => 0,
            'wrapper'=>['width'=>60],
          ],
          [
            'key'           => 'field_68cbef18f7678',
            'label'         => 'Bild',
            'name'          => 'text_2_image',
            'type'          => 'image',
            'return_format' => 'array',
            'library'       => 'all',
            'preview_size'  => 'medium',
            'wrapper'=>['width'=>40],
          ],
        ],
        'wrapper'=>['class'=>'sp-two-col']
      ],
      [
        'key'        => 'field_68cbef34f7679',
        'label'      => 'Video',
        'name'       => 'video',
        'type'       => 'group',
        'layout'     => 'block',
        'sub_fields' => [
          [
            'key'   => 'field_68cbef6ef767a',
            'label' => 'Embed URL (YouTube/Vimeo/etc.)',
            'name'  => 'video',
            'type'  => 'url',
            'wrapper'=>['width'=>60],
          ],
        ],
      ],
      [
        'key'        => 'field_68cbefa6ba7a0',
        'label'      => 'Text 3',
        'name'       => 'text_3',
        'type'       => 'group',
        'layout'     => 'block',
        'sub_fields' => [
          [
            'key'   => 'field_68cbefb6ba7a1',
            'label' => 'Text 3 Title',
            'name'  => 'text_3_title',
            'type'  => 'text',
            'wrapper'=>['width'=>40],
          ],
          [
            'key'          => 'field_68cbefc0ba7a2',
            'label'        => 'Text 3 Description',
            'name'         => 'text_3_description',
            'type'         => 'wysiwyg',
            'tabs'         => 'all',
            'toolbar'      => 'full',
            'media_upload' => 1,
            'delay'        => 0,
            'wrapper'=>['width'=>60],
          ],
        ],
      ],
      [
        'key'        => 'field_68cbefd0ba7a3',
        'label'      => 'Image Slider',
        'name'       => 'image_slider',
        'type'       => 'group',
        'layout'     => 'block',
        'sub_fields' => [
          [
            'key'           => 'field_68cbefe5ba7a4',
            'label'         => 'Slider',
            'name'          => 'slider',
            'type'          => 'post_object',
            'post_type'     => ['attachment'],
            'return_format' => 'id',
            'multiple'      => 1,
            'allow_null'    => 0,
            'ui'            => 1,
          ],
        ],
      ],
      [
        'key'        => 'field_68cbf063fd166',
        'label'      => 'Text 4',
        'name'       => 'text_4',
        'type'       => 'group',
        'layout'     => 'block',
        'sub_fields' => [
          [
            'key'          => 'field_68cbf07efd167',
            'label'        => 'Text 4 Description',
            'name'         => 'text_4_description',
            'type'         => 'wysiwyg',
            'tabs'         => 'all',
            'toolbar'      => 'full',
            'media_upload' => 1,
            'delay'        => 0,
          ],
        ],
      ],
      [
        'key'        => 'field_68cbf09ad3b08',
        'label'      => 'Einzelbild',
        'name'       => 'image',
        'type'       => 'group',
        'layout'     => 'block',
        'sub_fields' => [
          [
            'key'           => 'field_68cbf0a6d3b09',
            'label'         => 'Bild',
            'name'          => 'image',
            'type'          => 'image',
            'return_format' => 'array',
            'library'       => 'all',
            'preview_size'  => 'medium',
          ],
        ],
      ],
      [
        'key'        => 'field_68cbf0bcb4fbb',
        'label'      => 'Credits',
        'name'       => 'credits',
        'type'       => 'group',
        'layout'     => 'block',
        'sub_fields' => [
          [
            'key'   => 'field_68cbf0c8b4fbc',
            'label' => 'Credits Text',
            'name'  => 'credits_text',
            'type'  => 'text',
          ],
        ],
      ],
    ],
    'location'              => [[['param' => 'post_type','operator' => '==','value' => 'semesterprojekte']]],
    'position'              => 'acf_after_title',
    'style'                 => 'seamless',
    'menu_order'            => 0,
    'label_placement'       => 'top',
    'instruction_placement' => 'label',
    'active'                => true,
    'show_in_rest'          => 0,
  ]);
});

add_action('admin_enqueue_scripts', function($hook){
  if(!in_array($hook,['post-new.php','post.php'], true)) return;
  $screen=get_current_screen();
  if(!$screen || $screen->post_type!=='semesterprojekte') return;
  $css = '
  .post-type-semesterprojekte .acf-admin-toolbar{display:none}
  .post-type-semesterprojekte .acf-postbox .acf-fields{border:none;padding:0}
  .post-type-semesterprojekte .acf-fields > .acf-field{padding-top:12px;padding-bottom:12px}
  .post-type-semesterprojekte .acf-field .acf-label label{font-weight:600}
  .post-type-semesterprojekte .acf-field-image .image-wrap img{max-height:220px;object-fit:cover}
  .post-type-semesterprojekte .acf-field-group.sp-two-col .acf-input > .acf-fields{display:grid;grid-template-columns:3fr 2fr;gap:16px}
  .post-type-semesterprojekte .acf-field-group.sp-two-col [data-name="text_2_body"]{grid-column:1/2}
  .post-type-semesterprojekte .acf-field-group.sp-two-col [data-name="text_2_image"]{grid-column:2/3}
  .post-type-semesterprojekte .acf-after-title .acf-postbox{box-shadow:none;border:none}
  ';
  wp_register_style('basetheme-acf-admin', false);
  wp_enqueue_style('basetheme-acf-admin');
  wp_add_inline_style('basetheme-acf-admin', $css);
});
