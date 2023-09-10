import { 
	InnerBlocks, 
	BlockControls, 
	InspectorControls, 
	MediaUpload, 
	useBlockProps,
	__experimentalLinkControl as LinkControl,
} from '@wordpress/block-editor';
import {
	ToolbarDropdownMenu,
	ToggleControl,
	PanelBody,
	Button,
	ColorPicker,
} from '@wordpress/components';  
import { __ } from '@wordpress/i18n';
import { crop } from '@wordpress/icons';

import { useState } from 'react';

export default function Edit( { attributes, setAttributes } ) {
	const { 
		aspectRatio, 
		useCustomImage, 
		imageUrl, 
		overlayColor, 
		overlayHoverColor 
	} = attributes;

	const [isHovered, setIsHovered] = useState(false);
	
	return (
		<div {...useBlockProps() } style={{ backgroundImage: `url(${imageUrl})` }} >
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
			<InspectorControls>
				<PanelBody title={__('Image Settings')}>
					<ToggleControl
					label="Use Custom Image"
					checked={useCustomImage}
					onChange={() => setAttributes({ useCustomImage: !useCustomImage })}
					/>
					{useCustomImage && (
					<>
						<MediaUpload
						onSelect={(media) => setAttributes({ imageUrl: media.url })}
						allowedTypes={['image']}
						render={({ open }) => (
							<Button onClick={open}>
							{imageUrl ? 'Edit Image' : 'Select Image'}
							</Button>
						)}
						/>
						{imageUrl && (
						<Button
							isDestructive
							onClick={() => setAttributes({ imageUrl: null })}
						>
							Clear Image
						</Button>
						)}
					</>
					)}
					<p>Hint: To use a solid color, turn on this switch and don't select any image</p>
				</PanelBody>
				<PanelBody title={__('Overlay Settings')}>
					<div>
						<p>{__('Overlay Color')}</p>
						<ColorPicker
						color={overlayColor}
						onChangeComplete={(value) => setAttributes({ overlayColor: `rgba(${ value.rgb.r }, ${ value.rgb.g }, ${ value.rgb.b }, ${ value.rgb.a })` })}
						/>
					</div>
					<div>
						<p>{__('Overlay Color on Hover')}</p>
						<ColorPicker
						color={overlayHoverColor}
						onChangeComplete={(value) => setAttributes({ overlayHoverColor: `rgba(${ value.rgb.r }, ${ value.rgb.g }, ${ value.rgb.b }, ${ value.rgb.a })` })}
						/>
					</div>
				</PanelBody>
			</InspectorControls>
			<a>
				<div 
				    onMouseOver={() => setIsHovered(true)}
					onMouseOut={() => setIsHovered(false)}
					className="ws-grid-item-overlay-container" 
					style={{ backgroundColor: isHovered ? overlayHoverColor : overlayColor, 'aspect-ratio': attributes.aspectRatio }}
				>
					<InnerBlocks orientation="vertical"/>
				</div>
			</a>
		</div>
	);
}
