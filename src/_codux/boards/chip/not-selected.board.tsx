import { createBoard } from '@wixc3/react-board';
import { Chip } from '../../../components/chip/chip';
import Chip_module from '../../../components/chip/chip.module.scss';


export default createBoard({
    name: 'Not selected',
    Board: () => <Chip state={true} />,
});
