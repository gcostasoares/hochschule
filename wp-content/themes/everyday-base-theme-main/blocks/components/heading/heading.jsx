import { registerBlockType } from '@wordpress/blocks';
import { Heading, defaultHeadingAttributes } from '@utilities/heading/heading';
import { heading } from '@wordpress/icons';

registerBlockType('basetheme/heading', {
    title: 'Heading',
    icon: heading,
    category: 'layout',
    parent: ['basetheme/grid-item', 'basetheme/container'],
    description: 'A Description',
    keywords: [],
    supports: {},
    attributes: {
        ...defaultHeadingAttributes,
    },

    edit: EditComponent,
    save: () => null, // No save function, handled by PHP
});

function EditComponent(props) {
    const { attributes, setAttributes } = props;
    return <Heading attributes={attributes} setAttributes={setAttributes} />;
}
