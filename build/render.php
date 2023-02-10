<?php
echo sprintf('<div %1$s style="background-image: url(%2$s);"><a href=%3$s><div class="ws-grid-item-overlay-container">%4$s</div></a></div>', 
				get_block_wrapper_attributes(), 
				get_the_post_thumbnail_url(), 
				get_the_permalink(),
				$content
		    );

