import { RichText } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType('basetheme/list-item', {
    title: 'List Item',
    icon: 'editor-ul',
    category: 'layout',
    parent: ['basetheme/list'],
    attributes: {
        content: {
            type: 'string',
            default: '',
        },
    },

    edit: EditComponent,
    save: () => null,
});

function EditComponent(props) {
    const { attributes, setAttributes } = props;

    return (
        <li className="custom-list-item">
            <RichText
                tagName="span"
                value={attributes.content}
                onChange={(newContent) =>
                    setAttributes({ content: newContent })
                }
                placeholder="List item text..."
            />
        </li>
    );
}
