import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';
import Card_module from '../../../components/card/card.module.scss';
import Classnames from 'classnames';

export default createBoard({
    name: 'Card yellow',
    Board: () => <Card color="yellow" selected={true} />,
    environmentProps: {
        canvasHeight: 376,
    },
});
