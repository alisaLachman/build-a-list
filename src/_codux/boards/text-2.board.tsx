import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'text 2',
    Board: () => (
        <div className="text">
            <h1 className="Headline">Heading 1</h1>
            <p className="Paragraph">This is a paragraph.</p>
        </div>
    ),
    isSnippet: true,
});
