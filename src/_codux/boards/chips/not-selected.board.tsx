import { createBoard } from '@wixc3/react-board';
import { Chips } from '../../../components/chips/chips';

export default createBoard({
    name: 'Not selected',
    Board: () => <Chips />,
});
