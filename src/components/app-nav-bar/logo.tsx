import React from 'react';
//Base Web
import { useStyletron } from 'baseui';
import { useRouteMatch, Link } from 'react-router-dom';


const Logos: React.FC = () => {
    const match = useRouteMatch();
    const [css, theme] = useStyletron();
    return (
        <div
            className={css({
                display: 'flex',
                paddingTop: theme.sizing.scale500,
                paddingBottom: theme.sizing.scale500,
                paddingLeft: theme.sizing.scale800,
            })}
        >
            {/* Logo Smartboxes  */}
            <div
                className={css({
                    display: 'flex',
                    marginLeft: theme.direction === 'rtl' ? theme.sizing.scale400 : 'none',
                    marginRight: theme.direction === 'rtl' ? 'none' : theme.sizing.scale400,
                    ':focus': {
                        outline: `3px solid ${theme.colors.accent}`,
                        outlineOffset: '5px',
                    },
                })}
            >
                <Link to={`${match.url}`}>
                </Link>
            </div>
        </div>
    );
};
export default Logos;
