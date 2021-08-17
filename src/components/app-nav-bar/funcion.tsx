import React from 'react';
//Base Web
import { useStyletron } from 'baseui';
import { BrowserRouter } from 'react-router-dom';

import { withRouter  } from 'react-router';


const WRAP_SEARCH = 715;
const mq = (breakpoint: number): string => `@media screen and (min-width: ${breakpoint}px)`;

const Funciones: React.FC = () => {
    const [css] = useStyletron();
    return (
        <BrowserRouter>
            <div
                className={css({
                    textDecoration: 'none',
                    color: 'inherit',
                    ':hover': { color: 'inherit' },
                    ':visited': { color: 'inherit' },
                    display: 'flex',
                    alignItems: 'center',
                    order: 2,
                    [mq(WRAP_SEARCH)]: {
                        order: 3,
                    },
                })}
            ></div>
        </BrowserRouter>
    );
};
export default withRouter(Funciones);
