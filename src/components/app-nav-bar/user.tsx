import React from 'react';
//Base Web
import { useStyletron } from 'baseui';
import { Button } from 'baseui/button';
import { ChevronDown } from 'baseui/icon';
import { StatefulPopover, PLACEMENT } from 'baseui/popover';
import { StatefulMenu } from 'baseui/menu';
import { ListItemLabel, MenuAdapter, ARTWORK_SIZES } from 'baseui/list';
import { Drawer } from 'baseui/drawer';
//icons
import { FaRegSun } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';
import { GrSecure } from 'react-icons/gr';

//Funciones
//router
import { useHistory } from 'react-router-dom';
import { Avatar } from 'baseui/avatar';
import { expandBorderStyles } from 'baseui/styles';

const WRAP_SEARCH = 715;
const mq = (breakpoint: number): string => `@media screen and (min-width: ${breakpoint}px)`;

function renderItem(item: any) {
    return item.label;
}

const ITEMS = [
    {
        Button: FaRegSun,
        subtitle: 'Configuración de perfil',
        item: { label: 'Account item2' },
        url: '/perfil',
        mapItemToNode: renderItem,
        mapItemToString: renderItem,
    },
    {
        Button: GrSecure,
        subtitle: 'Cambiar contraseña',
        item: { label: 'Cambiar contraseña' },
        url: '/perfil/password',
        mapItemToNode: renderItem,
        mapItemToString: renderItem,
    },
    {
        Button: AiOutlineLogout,
        subtitle: 'Cerrar Sesión',
        item: { label: 'Cerrar Sesión' },
        url: '/logout',
        mapItemToNode: renderItem,
        mapItemToString: renderItem,
    },
];

const avatar_user = () => {
    return (
        <Avatar
            overrides={{
                Root: {
                    style: ({ $theme }) => ({
                        ...expandBorderStyles($theme.borders.border500),
                    }),
                },
            }}
            name="user name #1"
            size= 'scale1000'
            src="https://avatars.dicebear.com/api/human/override.svg?width=285&mood=happy"
        />
    );
};

const UserMenu: React.FC = () => {
    const history = useHistory();
    const [isOpen, setIsOpen] = React.useState(false);
    const [css, theme] = useStyletron();

    return (
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
        >
            {/* Nav Desktop */}
            <StatefulPopover
                popoverMargin={0}
                focusLock
                placement={PLACEMENT.bottomLeft}
                content={({ close }) => (
                    <StatefulMenu
                        items={ITEMS}
                        onItemSelect={({ item }) => {
                            if (item.url === '/logout') {
                                return 0;
                            }
                            if (item.url === '/perfil') {
                                history.push('/perfil');
                                close();
                                return 0;
                            }
                            if (item.url === '/perfil/password') {
                                history.push('/perfil/password');
                                close();
                                return 0;
                            }
                            close();
                        }}
                        overrides={{
                            List: {
                                style: {
                                    //marginTop: '-2px',
                                    height: '300px',
                                    width: '300px',
                                },
                            },
                            Option: {
                                props: {
                                    overrides: {
                                        height: '52px',
                                        ListItem: {
                                            // eslint-disable-next-line react/display-name
                                            component: React.forwardRef((props: any, ref) => (
                                                <MenuAdapter
                                                    sublist={true}
                                                    {...props}
                                                    ref={ref}
                                                    artwork={props.item.Button}
                                                    artworkSize={ARTWORK_SIZES.SMALL}
                                                >
                                                    <ListItemLabel>{props.item.subtitle}</ListItemLabel>
                                                </MenuAdapter>
                                            )),
                                        },
                                    },
                                },
                            },
                        }}
                    />
                )}
            >
                <Button
                    startEnhancer={() => avatar_user()}
                    endEnhancer={() => <ChevronDown size={20} />}
                    overrides={{
                        BaseButton: {
                            style: {
                                paddingTop: '12px',
                                paddingBottom: '12px',
                                color: '#fff',
                                display: 'none',
                                [theme.mediaQuery.medium]: {
                                    display: 'flex',
                                },
                            },
                        },
                    }}
                >
                </Button>
            </StatefulPopover>

            {/* Nav Moviles */}
            <Button
                onClick={() => setIsOpen(true)}
                overrides={{
                    BaseButton: {
                        style: {
                            paddingTop: '12px',
                            paddingBottom: '12px',
                            color: '#fff',
                            display: 'flex',
                            [theme.mediaQuery.medium]: {
                                display: 'none',
                            },
                        },
                    },
                }}
            >
                {avatar_user()}
            </Button>
            <Drawer renderAll onClose={() => setIsOpen(false)} isOpen={isOpen}>
                <StatefulMenu
                    items={ITEMS}
                    onItemSelect={({ item }) => {
                        if (item.url === '/logout') {
                            setIsOpen(false);
                            return 0;
                        }
                        if (item.url === '/perfil') {
                            history.push('/perfil');
                            setIsOpen(false);
                            return 0;
                        }
                        if (item.url === '/perfil/password') {
                            history.push('/perfil/password');
                            setIsOpen(false);
                            return 0;
                        }
                    }}
                    overrides={{
                        Option: {
                            props: {
                                overrides: {
                                    ListItem: {
                                        // eslint-disable-next-line react/display-name
                                        component: React.forwardRef((props: any, ref) => (
                                            <MenuAdapter
                                                {...props}
                                                ref={ref}
                                                artwork={props.item.Button}
                                                artworkSize={ARTWORK_SIZES.LARGE}
                                            >
                                                <ListItemLabel>{props.item.subtitle}</ListItemLabel>
                                            </MenuAdapter>
                                        )),
                                    },
                                },
                            },
                        },
                    }}
                />
            </Drawer>
        </div>
    );
};
export default UserMenu;
