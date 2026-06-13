import { observer } from 'mobx-react-lite';
import { tabs_title } from '@/constants/bot-contents';
import { useStore } from '@/hooks/useStore';
import { Loader } from '@deriv-com/ui';

const BlocklyLoading = observer(() => {
    const { blockly_store } = useStore();
    const { is_loading, active_tab } = blockly_store;

    const is_workspace = active_tab === tabs_title.WORKSPACE;

    return (
        <>
            {is_loading && is_workspace && (
                <div className='bot__loading' data-testid='blockly-loader'>
                    <Loader />
                    <div>Loading Blockly...</div>
                </div>
            )}
        </>
    );
});

export default BlocklyLoading;
