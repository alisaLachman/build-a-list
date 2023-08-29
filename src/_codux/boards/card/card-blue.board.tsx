import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';
import Card_module from '../../../components/card/card.module.scss';

export default createBoard({
    name: 'Card blue',
    Board: () => (
        <Card
            color="purple"
            selected={false}
            title={'mc,nc,mnc'}
            pharahraphText={'This is one out of 4 cards this is a blue card'}
        />
    ),

    isSnippet: true,

    environmentProps: {
        windowWidth: 1024,
    },
});
