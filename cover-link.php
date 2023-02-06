<?php
/**
 * Plugin Name:       Cover Link
 * Plugin URI:        https://github.com/willsides/cover-link
 * Description:       A post link with text overlaid on the thumbnail
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Will Sides
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       cover-link
 *
 * @package           ws-cover-link
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function ws_cover_link_cover_link_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'ws_cover_link_cover_link_block_init' );
