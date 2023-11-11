----------------------
------Deprecated------
----------------------

Please use the Image Container - Dynamic or Image Container - Static plugins for all future implementations
Those updated blocks offer better UI, more functionality, and adhere better to Gutenberg best practices for better code maintenance and usability in themes

----------------------
----------------------
----------------------

=== Cover Link ===
Contributors:      Will Sides
Tags:              block
Tested up to:      6.1
Stable tag:        1.1.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

A post link with text overlaid on the thumbnail

== Description ==

Adds a Gutenberg block that displays a darkened post thumbnail as a link to that post, with hover effects.
Supports nested blocks, such as Post Title, Post Date, etc. to overlay on the image.

Allows linking to a specific page or post. 
If no link is set, it will default to the current global post.
If the link is to a local wordpress post, it will use that post's thumbnail as the image.
The user also has the option to pick an image of their choice, or display no image at all (showing only the overlay color as a solid background).

Allows setting a custom aspect ratio.

The user can select a overlay color for the image that can be affected by hovering the mouse over the link. 
The default behavior is a darkened overlay, that gets darker when hovered. 

== Installation ==

1. Upload the following files and directories to the `/wp-content/plugins/cover-link` directory:
	* build/
	* cover-link.php

2. Activate the plugin through the 'Plugins' screen in WordPress

== Changelog ==

= 1.0.0 =
* Release
