import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType('basetheme/list', {
    title: 'List',
    icon: 'editor-ul',
    category: 'layout',
    attributes: {
        listType: {
            type: 'string',
            default: 'ul',
        },
    },

    edit: EditComponent,
    save: SaveComponent,
});
function EditComponent(props) {
    const { attributes, setAttributes } = props;
    const TagName = attributes.listType;

    return (
        <>
            <InspectorControls>
                <PanelBody title="List Settings">
                    <SelectControl
                        label="List Type"
                        value={attributes.listType}
                        options={[
                            { label: 'Unordered List', value: 'ul' },
                            { label: 'Ordered List', value: 'ol' },
                        ]}
                        onChange={(value) => setAttributes({ listType: value })}
                    />
                </PanelBody>
            </InspectorControls>

            <TagName className="custom-list border border-light p-2 pe-8">
                <InnerBlocks
                    allowedBlocks={['basetheme/list-item']}
                    template={[['basetheme/list-item']]}
                />
            </TagName>
        </>
    );
}
function SaveComponent() {
    return <InnerBlocks.Content />;
}
