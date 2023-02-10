import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function Edit() {
	return (
		<div {...useBlockProps() }>
			<a>
				<div class="ws-grid-item-overlay-container">
					<InnerBlocks orientation="vertical"/>
				</div>
			</a>
		</div>
	);
}
