<?php
// Prepare attributes
$wrapper_attributes = get_block_wrapper_attributes();
$background_image_url = esc_url(
    isset($attributes['useCustomImage']) && $attributes['useCustomImage'] == true ?
    (isset($attributes['imageUrl'])? $attributes['imageUrl'] : null) :
    get_the_post_thumbnail_url(isset($attributes['page']['id']) ? $attributes['page']['id'] : null)
);
$aspect_ratio = esc_attr(isset($attributes['aspectRatio']) ? $attributes['aspectRatio'] : '16/9');
$overlayColor = esc_attr($attributes['overlayColor'] ?? 'rgba(0, 0, 0, 0.35)');
$overlayHoverColor = esc_attr($attributes['overlayHoverColor'] ?? 'rgba(0, 0, 0, 0.5)');
$permalink = esc_url(get_the_permalink(isset($attributes['page']['id']) ? $attributes['page']['id'] : null));

// Prepare inline CSS
$inline_styles = sprintf(
    'background-image: url(%s); aspect-ratio: %s;',
    $background_image_url,
    $aspect_ratio
);
$overlay_styles = sprintf(
    'background-color: %s;',
    $overlayColor
); 

// Generate dynamic CSS for hover effect
$hover_css = sprintf(
    '<style>.ws-grid-item-overlay-container:hover { background-color: %s !important; }</style>',
    $overlayHoverColor
);

// Prepare content
$content = isset($content) ? $content : '';

// Output block HTML
echo $hover_css;
echo sprintf(
    '<div %1$s style="%2$s"><a href="%3$s"><div class="ws-grid-item-overlay-container" style="%4$s">%5$s</div></a></div>',
    $wrapper_attributes,
    $inline_styles,
    $permalink,
    $overlay_styles,
    $content
);