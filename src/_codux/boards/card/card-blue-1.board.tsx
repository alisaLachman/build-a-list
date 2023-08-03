import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';
import Card_module from '../../../components/card/card.module.scss';
import Classnames from 'classnames';

export default createBoard({
    name: 'Card blue',
    Board: () => (
        <Card
            color="blue"
            selected={true}
            title={'kkkkkkk'}
            pharahraphText={'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'}
        />
    ),
    environmentProps: {
        canvasHeight: 376,
        canvasWidth: 200,
    },
    isSnippet: true,
});
