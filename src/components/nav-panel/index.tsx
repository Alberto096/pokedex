import React from 'react';
//Base Web
import { Navigation } from 'baseui/side-navigation';
import { useHistory } from 'react-router-dom';

type NavPanelProps = {
    items: any;
};

const NavPanel: React.FC<NavPanelProps> = ({ items }: NavPanelProps) => {
    const history = useHistory();
    return (
        <Navigation
            items={items}
            activeItemId={history.location.pathname}
            onChange={({ event, item }) => {
                // prevent page reload
                event.preventDefault();
                history.push(item.itemId);
            }}
        />
    );
};

export default NavPanel;
