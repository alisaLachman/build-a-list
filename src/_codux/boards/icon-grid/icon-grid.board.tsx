import { createBoard } from '@wixc3/react-board';
import { IconGrid } from '../../../components/icon-grid/icon-grid';

export default createBoard({
    name: 'IconGrid',
    Board: () => <IconGrid />
});
