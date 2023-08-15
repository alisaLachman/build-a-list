import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';
import Card_module from '../../../components/card/card.module.scss';


export default createBoard({
    name: 'Card blue',
    Board: () => 
        <Card
            color="blue"
            selected={true}
            title={'Blue Card'}
            pharahraphText={'This is one out of 4 cards this is a blue card'}
        
        />,
    

    isSnippet: true,
});
