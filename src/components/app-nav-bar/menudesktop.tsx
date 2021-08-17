import React from 'react';
//Base Web
import { Button, SIZE, SHAPE } from 'baseui/button';
import { CgAdd } from 'react-icons/cg';
import { useStyletron } from 'baseui';
import { useHistory } from 'react-router-dom';
import { AiOutlineHome, AiOutlineSetting } from 'react-icons/ai';

const WRAP_SEARCH = 715;
const mq = (breakpoint: number): string => `@media screen and (min-width: ${breakpoint}px)`;

const MenuOpc: React.FC = () => {
    const [css, theme] = useStyletron();
    const history = useHistory();

    const hadleOnClickHome = (event: any) => {
        event.preventDefault();
        history.push(`/`);
    };


    const hadleOnClickAddIngreso = (event: any) => {
        event.preventDefault();
        history.push(`/ingresos/add`);
    };

    const hadleOnClickConfig = (event: any) => {
        event.preventDefault();
        history.push(`/configuracion/`);
    };

    return (
        <div
            className={css({
                width: '100%',
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
        >
            <Button
                startEnhancer={() => <AiOutlineHome color={'#fff'} size={24} />}
                onClick={hadleOnClickHome}
                size={SIZE.default}
                shape={SHAPE.pill}
                overrides={{
                    BaseButton: {
                        style: {
                            paddingTop: '8px',
                            paddingBottom: '8px',
                            color: '#fff',
                            display: 'none',
                            [theme.mediaQuery.medium]: {
                                display: 'flex',
                            },
                        },
                    },
                }}
            >
                {'Home'}
            </Button>
            <Button
                startEnhancer={() => <CgAdd color={'#fff'} size={24} />}
                onClick={hadleOnClickAddIngreso}

                size={SIZE.default}
                shape={SHAPE.pill}
                overrides={{
                    BaseButton: {
                        style: {
                            paddingTop: '8px',
                            paddingBottom: '8px',
                            color: '#fff',
                            display: 'none',
                            [theme.mediaQuery.medium]: {
                                display: 'flex',
                            },
                        },
                    },
                }}
            >
                {'Nuevo Registro'}
            </Button>
            <Button
                startEnhancer={() => <AiOutlineSetting color={'#fff'} size={24} />}
                onClick={hadleOnClickConfig}
                size={SIZE.default}
                shape={SHAPE.pill}
                overrides={{
                    BaseButton: {
                        style: {
                            paddingTop: '8px',
                            paddingBottom: '8px',
                            color: '#fff',
                            display: 'none',
                            [theme.mediaQuery.medium]: {
                                display: 'flex',
                            },
                        },
                    },
                }}
            >
                {'Configuraciones'}
            </Button>
        </div>
    );
};
export default MenuOpc;
