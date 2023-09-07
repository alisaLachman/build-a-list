import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';
import Card_module from '../../../components/card/card.module.scss';

export default createBoard({
    name: 'Card blue',
    Board: () => (
        <Card
            title={'mc,nc,mnc'}
            pharahraphText={'This is one out of 4 cards this is a blue card'}
            selected={false}
        />
    ),

    isSnippet: true,

    environmentProps: {
        windowWidth: 1188,
        canvasHeight: 1104,
    },
});
