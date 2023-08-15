import { createBoard } from '@wixc3/react-board';
import { ButtonType } from '../../../components/ButtonType/ButtonType';
import ButtonType_module from '../../../components/ButtonType/ButtonType.module.scss';


export default createBoard({
    name: 'Selected',
    Board: () => <ButtonType selected={false} />,
    
    isSnippet: true,
});
