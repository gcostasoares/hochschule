import { registerBlockType } from '@wordpress/blocks';
import { postAuthor } from '@wordpress/icons';

import { RichText } from '@wordpress/block-editor';

import { Text, defaultTextAttributes } from '@utilities/text/text';

import { Heading, defaultHeadingAttributes } from '@utilities/heading/heading';

import { Button, defaultButtonAttributes } from '@utilities/button/button';

registerBlockType('basetheme/job-list', {
    title: 'Job List',
    icon: postAuthor,
    category: 'components',
    description: 'Job List Block to display open jobs',
    keywords: '[]',
    supports: {},
    attributes: {
        ...defaultHeadingAttributes,
        startingDate: {
            type: 'string',
            default: 'Ab Sofort',
        },
        ...defaultTextAttributes,
        ...defaultButtonAttributes,
    },

    edit: EditComponent,
    save: () => null,
});

function EditComponent(props) {
    const { attributes, setAttributes } = props;
    return (
        <div>
            <Heading
                attributes={attributes}
                setAttributes={setAttributes}
                enableAlignment={false}
                enableLevelSelection={false}
                className="fs-26 fw-bold"
            />
            <RichText
                tagName="div"
                className="fs-14 fw-light"
                value={attributes.startingDate}
                onChange={(value) => setAttributes({ startingDate: value })}
            />
            <Text
                attributes={attributes}
                setAttributes={setAttributes}
                enableAlignment={true}
                className="fs-16"
            />

            <Button attributes={attributes} setAttributes={setAttributes} />
        </div>
    );
}
