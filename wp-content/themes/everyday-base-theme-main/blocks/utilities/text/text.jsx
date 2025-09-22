import {
    RichText,
    BlockControls,
    AlignmentToolbar,
    RichTextToolbarButton,
} from '@wordpress/block-editor';

import { toggleFormat, registerFormatType } from '@wordpress/rich-text';

export const defaultTextAttributes = {
    text: {
        type: 'string',
    },
    alignment: {
        type: 'string',
    },
};

const underlineFormat = 'basetheme/underline-format';
const UnderlineButton = (props) => {
    return (
        <RichTextToolbarButton
            icon="editor-underline"
            title="Underline"
            onClick={() => {
                props.onChange(
                    toggleFormat(props.value, {
                        type: underlineFormat,
                    })
                );
            }}
            isActive={props.isActive}
        />
    );
};

registerFormatType(underlineFormat, {
    title: 'Underline',
    tagName: 'u', // The tag to use for the format
    className: null, // Optional class name
    edit({ isActive, value, onChange }) {
        return (
            <UnderlineButton
                isActive={isActive}
                value={value}
                onChange={onChange}
            />
        );
    },
});

// TODO: Add ul-list and ol-list formats

export function Text({
    attributes,
    setAttributes,
    enableAlignment = true,
    className = '',
}) {
    let alignmentClass = '';
    switch (attributes.alignment) {
        case 'left':
            alignmentClass = 'text-start';
            break;
        case 'center':
            alignmentClass = 'text-center';
            break;
        case 'right':
            alignmentClass = 'text-end';
            break;
        default:
            alignmentClass = 'text-start';
    }

    const combinedClassName = `${alignmentClass} ${className}`.trim();

    if (enableAlignment) {
        return (
            <>
                <BlockControls>
                    <AlignmentToolbar
                        value={attributes.alignment}
                        onChange={(newVal) =>
                            setAttributes({ alignment: newVal })
                        }
                    />
                </BlockControls>
                <RichText
                    value={attributes.text}
                    onChange={(newText) => setAttributes({ text: newText })}
                    placeholder="Text eingabe..."
                    className={combinedClassName}
                />
            </>
        );
    }

    return (
        <RichText
            value={attributes.text}
            onChange={(newText) => setAttributes({ text: newText })}
            placeholder="Text eingabe..."
            className={combinedClassName}
        />
    );
}
