import React from 'react';
//Base Web
import { useStyletron } from 'baseui';

import Funcion from './funcion';
import Logos from './logo';
import UserMenu from './user';
import MenuOpc from './menudesktop';

const WRAP_SEARCH = 715;
const mq = (breakpoint: number): string => `@media screen and (min-width: ${breakpoint}px)`;

const HeaderComponent: React.FC = () => {
    const [css, theme] = useStyletron();
    return (
        <header
            className={css({
                ...theme.typography.ParagraphMedium,
                display: 'flex',
                flexWrap: 'wrap',
                borderBottomStyle: 'solid',
                borderBottomWidth: '0px',
                borderBottomColor: theme.colors.border,
                background: theme.colors.backgroundAlwaysDark,
                [mq(WRAP_SEARCH)]: {
                    flexWrap: 'nowrap',
                },
            })}
        >
            <div
                className={css({
                    marginLeft: theme.direction === 'rtl' ? 'auto' : 'none',
                    marginRight: theme.direction === 'rtl' ? 'none' : 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    order: 1,
                })}
            >
                <Logos />
                <div
                    className={css({
                        display: 'none',
                        [theme.mediaQuery.medium]: {
                            display: 'flex',
                        },
                    })}
                >
                    <MenuOpc />
                    <Funcion />
                </div>
            </div>
            {/* Toggles & Links */}
            <UserMenu />
        </header>
    );
};

export default HeaderComponent;