import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls } from '@wordpress/block-editor';
import { image } from '@wordpress/icons';
import {
    Image,
    ImageSettings,
    getDefaultImageAttributes,
} from '@utilities/image/image';

import { Button, defaultButtonAttributes } from '@utilities/button/button';

import { Heading, defaultHeadingAttributes } from '@utilities/heading/heading';

import { Subtitle, defaultSubtitleAttributes } from '@utilities/title/subtitle';

import {
    SpacerSettings,
    defaultSpacerAttributes,
    spacerClass,
} from '@configuration/spacer/spacer';

registerBlockType('basetheme/big-teaser', {
    title: 'Big-teaser',
    icon: image,
    supports: {},
    attributes: {
        ...getDefaultImageAttributes,
        ...defaultHeadingAttributes,
        ...defaultSubtitleAttributes,
        ...defaultSpacerAttributes,
        subtitle: {
            type: 'string',
            default: 'Subtitle',
        },
        ...defaultButtonAttributes,
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

// TODO:
// Build two two new utilities: Title and Subtitle, for building more standardized components.

function EditComponent(props) {
    const { attributes, setAttributes } = props;

    return (
        <>
            <InspectorControls>
                <SpacerSettings
                    title="Container Settings"
                    attributes={{
                        spacer: attributes.spacer,
                    }}
                    setAttributes={(newAttributes) =>
                        setAttributes({
                            spacer: newAttributes.spacer,
                        })
                    }
                />
                <ImageSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                    imageSizeOptions={imageSizeOptions}
                />
            </InspectorControls>
            <div className={`big-teaser ${spacerClass(attributes.spacer)}`}>
                <div className="position-relative w-100 h-100">
                    <Image
                        mediaUrl={attributes.mediaUrl}
                        alt="Upload Image"
                        variant="cover"
                    />
                    <div className="position-absolute bottom-0 left-0 w-100 pb-6">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <Heading
                                        attributes={attributes}
                                        setAttributes={setAttributes}
                                        className="text-white fs-36 fw-bold"
                                    />

                                    <Subtitle
                                        attributes={attributes}
                                        setAttributes={setAttributes}
                                        className="text-white fs-24 fw-bold"
                                    />
                                    <Button
                                        attributes={attributes}
                                        setAttributes={setAttributes}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
