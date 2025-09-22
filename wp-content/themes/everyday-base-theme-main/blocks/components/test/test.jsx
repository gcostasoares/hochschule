//https://wordpress.github.io/gutenberg/?path=/story/icons-icon--library
import { registerBlockType } from '@wordpress/blocks';
import { layout } from '@wordpress/icons';
registerBlockType('basetheme/test', {
    title: 'Test',
    icon: layout,
    category: 'layout',
    description: 'A Description',
    keywords: '[]',
    supports: {},
    attributes: {},

    edit: EditComponent,
    save: () => null,
});

function EditComponent(props) {
    const { attributes, setAttributes } = props;
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
}
