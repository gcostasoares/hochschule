<?php
namespace basetheme\Utilities;

defined('ABSPATH') || exit;

class Render_Navigation
{
    public static function render_navigation(array $navigation = [], $mediaId = 0) {
        if (empty($navigation)) {
            $navigation = self::get_navigation_from_wp_tree();
        }

        $active_section = self::find_active_section($navigation);


        if (!empty($active_section) && empty($active_section['children']) && !empty($active_section['object_id'])) {
            $active_section['children'] = self::get_direct_page_children((int) $active_section['object_id']);
        }

        $home_url  = home_url('/');
        $site_name = get_bloginfo('name');

        $brand_line1 = 'Fachhochschule Nordwestschweiz';
        $brand_line2 = 'Hochschule für Gestaltung und Kunst Basel';

        $logo_html = $mediaId
            ? wp_get_attachment_image($mediaId, 'medium', false, ['class' => 'header__logo-img', 'decoding' => 'async', 'loading' => 'eager'])
            : '<span class="header__logo-mark" aria-hidden="true">n|w</span>';
        ?>
        <header class="header" role="banner">
          <div class="header__inner">
            <div class="header__brand">
              <a class="header__logo" href="<?php echo esc_url($home_url); ?>" aria-label="<?php echo esc_attr($site_name); ?>">
                <?php echo $logo_html; ?>
              </a>
              <div class="header__brand-text" aria-hidden="true">
                <span><?php echo esc_html($brand_line1); ?></span>
                <span><?php echo esc_html($brand_line2); ?></span>
              </div>
            </div>

            <nav class="nav" role="navigation" aria-label="Hauptnavigation">
              <?php self::render_top_level($navigation, $active_section); ?>
            </nav>

            <div class="header__tools">
              <button class="tool tool--icon" aria-label="Suche öffnen">
                <svg class="ico" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="11" cy="11" r="6.75" />
                  <path d="M15.5 15.5L21 21" />
                </svg>
              </button>
              <div class="tool tool--divider" aria-hidden="true"></div>
              <button class="tool tool--lang" aria-label="Sprache wechseln">DE</button>
              <div class="tool tool--divider tool--divider--wide" aria-hidden="true"></div>
              <div class="tool tool--socials">
                <a class="tool--icon" href="#" aria-label="Instagram">
                  <svg class="ico" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="4" />
                    <circle cx="12" cy="12" r="4.25" />
                    <circle cx="17.25" cy="6.75" r="1.15" />
                  </svg>
                </a>
                <a class="tool--icon" href="#" aria-label="Facebook">
                  <svg class="ico" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="4" />
                    <path d="M13 7h2.75M13 7v10M10 12h5.75" />
                  </svg>
                </a>
                <a class="tool--icon" href="#" aria-label="Vimeo">
                  <svg class="ico" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="4" />
                    <path d="M7 11.75c.9 2.9 2.4 4.9 3.95 4.9 1.05 0 2.9-1.9 5.9-6.9" />
                  </svg>
                </a>
                <a class="tool--icon" href="#" aria-label="Flickr">
                  <svg class="ico" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="4" />
                    <circle cx="9.25" cy="12" r="2.4" />
                    <circle cx="14.75" cy="12" r="2.4" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </header>

        <?php if (!empty($active_section['children'])): ?>
          <nav class="subnav" role="navigation" aria-label="<?php echo esc_attr($active_section['title'] ?? 'Untermenü'); ?>">
            <?php self::render_sub_level($active_section['children']); ?>
          </nav>
        <?php endif;
    }


    private static function get_navigation_from_wp_tree(): array {
        $tree = [];
        $locs = get_nav_menu_locations();

        if (!empty($locs['primary'])) {
            $menu_items = wp_get_nav_menu_items($locs['primary']) ?: [];

            usort($menu_items, fn($a, $b) => ($a->menu_order <=> $b->menu_order));


            $by_id = [];
            foreach ($menu_items as $mi) {
                $by_id[$mi->ID] = [
                    'id'        => (int) $mi->ID,
                    'parent_id' => (int) $mi->menu_item_parent,
                    'object_id' => (int) $mi->object_id,
                    'title'     => $mi->title,
                    'href'      => $mi->url,
                    'children'  => [],
                ];
            }
     
            foreach ($by_id as $id => &$node) {
                if ($node['parent_id'] && isset($by_id[$node['parent_id']])) {
                    $by_id[$node['parent_id']]['children'][] = &$node;
                }
            }
            unset($node);

    
            foreach ($by_id as $node) {
                if ($node['parent_id'] === 0) $tree[] = $node;
            }
        }

  
        if (empty($tree)) {
            $ordered_slugs = ['home','projekte','netzwerk','events'];
            foreach ($ordered_slugs as $slug) {
                $page = get_page_by_path($slug);
                if ($page instanceof \WP_Post) {
                    $tree[] = [
                        'id'        => 0,
                        'parent_id' => 0,
                        'object_id' => (int) $page->ID,
                        'title'     => strtoupper($page->post_title),
                        'href'      => get_permalink($page->ID),
                        'children'  => [],
                    ];
                } else {
                    $tree[] = [
                        'id'        => 0,
                        'parent_id' => 0,
                        'object_id' => 0,
                        'title'     => strtoupper($slug),
                        'href'      => home_url("/$slug/"),
                        'children'  => [],
                    ];
                }
            }
        }

        return $tree;
    }

    private static function path_of(string $url): string {
        $path = parse_url($url, PHP_URL_PATH) ?? '/';
        $path = $path === '' ? '/' : $path;
        return $path === '/' ? '/' : untrailingslashit($path);
    }

    private static function current_path(): string {
        $raw  = $_SERVER['REQUEST_URI'] ?? '/';
        $path = parse_url($raw, PHP_URL_PATH) ?? '/';
        if ($path === '' || $path === false) $path = '/';
        return $path === '/' ? '/' : untrailingslashit($path);
    }


    private static function item_is_current(array $item): bool {
        $front_id = (int) get_option('page_on_front');

        if (!empty($item['object_id'])) {
            if ($front_id && $item['object_id'] === $front_id && (is_front_page() || is_home())) {
                return true;
            }
            if (is_page($item['object_id'])) return true;
        }


        $current_path = self::current_path();
        $item_path    = self::path_of((string)($item['href'] ?? ''));

        return ($item_path !== '') && ($item_path === $current_path);
    }


    private static function subtree_has_current(array $item): bool {
        foreach ($item['children'] ?? [] as $child) {
            if (self::item_is_current($child) || self::subtree_has_current($child)) return true;
        }
        return false;
    }


    private static function find_active_section(array $top_level): array {
        if (empty($top_level)) return [];

        $current_path = self::current_path();


        foreach ($top_level as $item) {
            if (self::item_is_current($item)) return $item;
        }


        foreach ($top_level as $item) {
            if (self::subtree_has_current($item)) return $item;
        }


        foreach ($top_level as $item) {
            $item_path = self::path_of((string)($item['href'] ?? ''));
            if ($item_path === '/') continue;
            $prefix = rtrim($item_path, '/') . '/';
            $current_with_slash = rtrim($current_path, '/') . '/';
            if (strpos($current_with_slash, $prefix) === 0) {
                return $item;
            }
        }

        return [];
    }


    private static function get_direct_page_children(int $parent_id): array {
        if (!$parent_id) return [];

        $pages = get_pages([
            'parent'      => $parent_id,  
            'sort_column' => 'menu_order,post_title',
            'post_status' => 'publish',
        ]);

        $out = [];
        foreach ($pages as $p) {
            $out[] = [
                'id'        => 0,
                'parent_id' => $parent_id,
                'object_id' => (int) $p->ID,
                'title'     => get_the_title($p->ID),
                'href'      => get_permalink($p->ID),
                'children'  => [], 
            ];
        }
        return $out;
    }


    private static function render_top_level(array $top_level, array $active_section): void {
        echo '<ul class="nav__level nav__level--0">';
        foreach ($top_level as $item) {
            $href     = esc_url((string)($item['href'] ?? '#'));
            $title    = esc_html((string)($item['title'] ?? ''));
            $children = $item['children'] ?? [];

            $is_current  = self::item_is_current($item);
            $is_active   = $is_current
                           || (!empty($active_section) && ($active_section['href'] ?? '') === ($item['href'] ?? ''))
                           || self::subtree_has_current($item);

            $classes = ['nav__item'];
            if ($is_active)  $classes[] = 'is-active';
            if ($children)   $classes[] = 'has-children';

            echo '<li class="'. esc_attr(implode(' ', $classes)) .'">';
            echo   '<a class="nav__link" href="'. $href .'"'. ($is_current ? ' aria-current="page"' : '') .'><span class="nav__label">'. $title .'</span></a>';
            echo '</li>';
        }
        echo '</ul>';
    }


    private static function render_sub_level(array $children): void {
        if (empty($children)) return;

        echo '<ul class="subnav__level">';
        foreach ($children as $child) {
            $href   = esc_url((string)($child['href'] ?? '#'));
            $title  = esc_html((string)($child['title'] ?? ''));
            $is_cur = self::item_is_current($child);

            $classes = ['subnav__item'];
            if ($is_cur) $classes[] = 'is-active';
            if (!empty($child['children'])) $classes[] = 'has-children';

            echo '<li class="'. esc_attr(implode(' ', $classes)) .'">';
            echo   '<a class="subnav__link" href="'. $href .'"'. ($is_cur ? ' aria-current="page"' : '') .'><span class="subnav__label">'. $title .'</span></a>';
            echo '</li>';
        }
        echo '</ul>';
    }
}
