import {
    RichText,
    BlockControls,
    AlignmentToolbar,
} from '@wordpress/block-editor';
import { Toolbar, ToolbarDropdownMenu } from '@wordpress/components';
import {
    headingLevel1,
    headingLevel2,
    headingLevel3,
    headingLevel4,
    headingLevel5,
    headingLevel6,
} from '@wordpress/icons';

export const defaultHeadingAttributes = {
    tag: {
        type: 'string',
        default: 'h1',
    },
    heading: {
        type: 'string',
    },
    alignment: {
        type: 'string',
    },
};

const headingIcons = {
    h1: headingLevel1,
    h2: headingLevel2,
    h3: headingLevel3,
    h4: headingLevel4,
    h5: headingLevel5,
    h6: headingLevel6,
};

export function Heading({
    attributes,
    setAttributes,
    enableAlignment = true,
    enableLevelSelection = true,
    className = '',
}) {
    const { tag = 'h1', heading, alignment } = attributes;

    const currentIcon = headingIcons[tag] || headingLevel1;

    let alignmentClass = '';
    switch (alignment) {
        case 'left':
            alignmentClass = 'text-left';
            break;
        case 'center':
            alignmentClass = 'text-center';
            break;
        case 'right':
            alignmentClass = 'text-right';
            break;
        default:
            alignmentClass = 'text-left';
    }

    const combinedClassName = `${alignmentClass} ${className}`.trim();

    return (
        <>
            <BlockControls>
                {enableLevelSelection && (
                    <Toolbar label="Überschrift">
                        <ToolbarDropdownMenu
                            icon={currentIcon}
                            label="Wählen Sie eine Überschriftsebene"
                            controls={['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map(
                                (level) => ({
                                    title: level.toUpperCase(),
                                    icon: headingIcons[level],
                                    onClick: () =>
                                        setAttributes({ tag: level }),
                                    isActive: tag === level,
                                })
                            )}
                        />
                    </Toolbar>
                )}

                {enableAlignment && (
                    <AlignmentToolbar
                        value={alignment}
                        onChange={(newAlign) =>
                            setAttributes({ alignment: newAlign })
                        }
                    />
                )}
            </BlockControls>

            <RichText
                tagName={tag}
                value={heading}
                onChange={(newText) => setAttributes({ heading: newText })}
                placeholder="Überschrift eingeben..."
                className={combinedClassName}
            />
        </>
    );
}
