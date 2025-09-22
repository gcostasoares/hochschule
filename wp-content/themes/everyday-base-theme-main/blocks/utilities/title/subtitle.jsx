import { RichText } from '@wordpress/block-editor';

export const defaultSubtitleAttributes = {
    subtitle: {
        type: 'string',
        default: 'Subtitle',
    },
    alignment: {
        type: 'string',
    },
};

export function Subtitle({ attributes, setAttributes, className = '' }) {
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

    return (
        <RichText
            allowedFormats={['core/bold', 'core/italic']}
            tagName="p"
            value={attributes.subtitle}
            onChange={(newSubtitle) => setAttributes({ subtitle: newSubtitle })}
            placeholder="Subtitle eingabe..."
            className={combinedClassName}
        />
    );
}
