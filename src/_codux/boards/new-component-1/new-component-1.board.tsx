import { createBoard } from '@wixc3/react-board';
import { NewComponent1 } from '../../../components/new-component-1/new-component-1';

export default createBoard({
    name: 'NewComponent1',
    Board: () => <NewComponent1 />,
    isSnippet: true,
});
