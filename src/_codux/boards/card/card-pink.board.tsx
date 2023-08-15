import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';
import Card_module from '../../../components/card/card.module.scss';
import Classnames from 'classnames';

export default createBoard({
    name: 'Card pink',
    Board: () => <Card color="yellow" selected={true} className={Card_module.blabla} />,
    environmentProps: {
        canvasHeight: 376,
    },
    isSnippet: true,
});
