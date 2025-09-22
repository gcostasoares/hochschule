// https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
// common
// formatting
// layout
// widgets
// embed
// design

import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import {
    SwiperSettings,
    defaultSwiperAttributes,
} from '@utilities/swiper/swiper-settings';

import { useEffect } from '@wordpress/element';
import { v4 as uuidv4 } from 'uuid';
import { icon } from '@configuration/icon/icons';

registerBlockType('basetheme/hero-slider', {
    title: 'Hero Slider',
    icon: icon.heroSlider,
    category: 'layout',
    description: 'A hero slider block',
    keywords: ['slider', 'hero'],

    supports: {
        align: ['full'],
    },
    attributes: {
        align: { type: 'string', default: 'full' },
        uuid: {
            type: 'string',
            default: '',
        },
        ...defaultSwiperAttributes,
    },

    edit: EditComponent,
    save: SaveComponent,
});

function EditComponent(props) {
    const { attributes, setAttributes } = props;

    useEffect(() => {
        if (!attributes.uuid) {
            setAttributes({ uuid: uuidv4() });
        }
    }, []);

    const BLOCKS_TEMPLATE = [['basetheme/hero-slider-item']];

    return (
        <>
            <InspectorControls>
                <SwiperSettings
                    title="Hero Slider Settings"
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            </InspectorControls>

            <div className="my-4">
                <div className="border border-light p-2 bg-gray-100">
                    <InnerBlocks
                        allowedBlocks={['basetheme/hero-slider-item']}
                        template={BLOCKS_TEMPLATE}
                    />
                </div>
            </div>
        </>
    );
}

function SaveComponent() {
    return <InnerBlocks.Content />;
}
