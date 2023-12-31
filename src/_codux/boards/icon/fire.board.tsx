import { createBoard } from '@wixc3/react-board';
import { Icon } from '../../../components/icon/icon';

export default createBoard({
    name: 'CardIcon',
    Board: () => <Icon iconType="cloud" />,
    isSnippet: true,
});
