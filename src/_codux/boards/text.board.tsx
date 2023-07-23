import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'text',
    Board: () => (
        <div className="text">
            <h2 className="Headline">Heading 2</h2>
            <p className="Paragraph">This is a paragraph.</p>
        </div>
    ),
});
