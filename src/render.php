<?php
echo sprintf('<div %1$s style="background-image: url(%2$s); aspect-ratio: %3$s"><a href=%4$s><div class="ws-grid-item-overlay-container">%5$s</div></a></div>', 
				get_block_wrapper_attributes(), 
				// If attribute.post.id is set, get info from that post. Otherwise, set to null to get the global post.
				get_the_post_thumbnail_url(isset($attributes['page']['id']) ? $attributes['page']['id'] : null), 
				$attributes['aspectRatio'],
				get_the_permalink(isset($attributes['page']['id']) ? $attributes['page']['id'] : null),
				$content
		    );