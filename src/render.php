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
$permalink = isset($attributes['page']['url']) ? 
    esc_url($attributes['page']['url']) :
    esc_url(get_the_permalink(isset($attributes['page']['id']) ?
        $attributes['page']['id'] :
        null));

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

$uniqueId = uniqid('ws-cover-overlay-');
$innerDivAttributes = sprintf(
    'class="ws-cover-overlay-container" id="%s"',
    $uniqueId
);

if ($overlayHoverColor != "rgba(0, 0, 0, 0.5)") {
    // Generate dynamic CSS for hover effect
    $hover_css = sprintf(
        '<style>#%s:hover { background-color: %s !important; }</style>',
        $uniqueId,
        $overlayHoverColor
    );
    echo $hover_css;
}

// Prepare content
$content = isset($content) ? $content : '';

// Output block HTML
echo sprintf(
    '<div %1$s style="%2$s"><a href="%3$s"><div %4$s style="%5$s">%6$s</div></a></div>',
    $wrapper_attributes,
    $inline_styles,
    $permalink,
    $innerDivAttributes,
    $overlay_styles,
    $content
);