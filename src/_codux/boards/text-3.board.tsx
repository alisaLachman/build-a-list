import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Heading 2',
    Board: () => (
        <div className="text">
            <h4 className="Headline">Heading 4</h4>
            <p className="Paragraph">This is a paragraph.</p>
        </div>
    ),
    isSnippet: true,
});
