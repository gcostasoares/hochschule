import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls } from '@wordpress/block-editor';
import { image } from '@wordpress/icons';
import {
    Image,
    ImageSettings,
    getDefaultImageAttributes,
} from '@utilities/image/image';

registerBlockType('basetheme/hero-image', {
    title: 'Hero-image',
    icon: image,
    supports: {},
    attributes: {
        ...getDefaultImageAttributes,
    },
    edit: EditComponent,
    save: () => null,
});

const imageSizeOptions = [
    { value: 'pageBanner', label: 'Banner' },
    { value: 'full', label: 'Full' },
    { value: 'medium', label: 'Medium' },
    { value: 'partnerLogo', label: 'Partner Logo' },
];

function EditComponent(props) {
    const { attributes, setAttributes } = props;

    return (
        <>
            <InspectorControls>
                <ImageSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                    imageSizeOptions={imageSizeOptions}
                />
            </InspectorControls>

            <Image mediaUrl={attributes.mediaUrl} alt="Upload Image" />
        </>
    );
}
