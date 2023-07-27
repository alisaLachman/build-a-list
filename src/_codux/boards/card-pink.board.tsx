import { createBoard } from '@wixc3/react-board';
import { Card } from '../../components/card/card';

export default createBoard({
    name: 'Card pink',
    Board: () => <Card color="pink" />,
});
