import { createBoard } from '@wixc3/react-board';
import { Icon1 } from '../../../components/icon-1/icon-1';

export default createBoard({
    name: 'Icon1',
    Board: () => <Icon1 />,
    isSnippet: true,
});
