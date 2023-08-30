import { 
	InnerBlocks, 
	BlockControls,
	useBlockProps,
	__experimentalLinkControl as LinkControl,
 } from '@wordpress/block-editor';
import {
	ToolbarDropdownMenu
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { crop } from '@wordpress/icons';

export default function Edit( { attributes, setAttributes } ) {
	return (
		<div {...useBlockProps() }>
			<BlockControls>
				<LinkControl
					searchInputPlaceholder="Search here..."
					value={ attributes.page }
					onChange={ ( newPage ) => setAttributes( { page: newPage } ) }
					showInitialSuggestions={true}
				>
				</LinkControl>
				<ToolbarDropdownMenu
					label="Aspect Ratio"
					icon={ crop }
					controls={[
						{
							title: "21:9",
							onClick: () => setAttributes( { aspectRatio: "21/9" } )
						},
						{
							title: "16:9",
							onClick: () => setAttributes( { aspectRatio: "16/9" } )
						},
						{
							title: "3:2",
							onClick: () => setAttributes( { aspectRatio: "3/2" } )
						},
						{
							title: "4:3",
							onClick: () => setAttributes( { aspectRatio: "4/3" } )
						},
						{
							title: "1:1",
							onClick: () => setAttributes( { aspectRatio: "1/1" } )
						},
					]}
				/>
			</BlockControls>
			<a>
				<div class="ws-grid-item-overlay-container" style={ { 'aspect-ratio': attributes.aspectRatio } } >
					<InnerBlocks orientation="vertical"/>
				</div>
			</a>
		</div>
	);
}
