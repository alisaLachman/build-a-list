import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Card pink',
    Board: () => <Card />,
    environmentProps: {
        canvasWidth: 192,
        canvasHeight: 192,
    },
});