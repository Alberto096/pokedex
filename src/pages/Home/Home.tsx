import React, { useEffect, useState } from 'react';
//Base Web
import { Block } from 'baseui/block';
import { useStyletron } from 'baseui';
import { Grid, Cell, ALIGNMENT } from 'baseui/layout-grid';

import { Card, StyledAction } from 'baseui/card';
import { Button } from 'baseui/button';
import { Display4 } from 'baseui/typography';

import axios from 'axios';
import { ApiUrl } from '../../constants/constants';
import { ArrowLeft, ArrowRight } from 'baseui/icon';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    const [css] = useStyletron();
    const [next, setNext] = useState('');
    const [previous, setPrevious] = useState('');
    const [results, setResults] = useState([]);
    const [apisUrl, serApisUrl] = useState(ApiUrl + 'pokemon/?offset=0&limit=20')

    const ResultExtrac = (data: any) => {
        console.log(data)
        setNext(data?.next);
        setPrevious(data?.previous)
        setResults(data?.results)
    }

    useEffect(() => {
        console.log(apisUrl)
        axios.get(apisUrl)
            .then((response) => {
                ResultExtrac(response?.data)
            })
            .catch((error => {
                console.log(error)
            }))
    }, [apisUrl]);


    return (
        <div
            className={css({
                background: '#EFF3FE',
                padding: '0',
                overflow: 'auto',
            })}
        >
            <Block height={'100%'} display={'flex'}>
                <Block width={'100%'} backgroundColor={'#EFF3FE'} flex={1}>
                    <Grid
                        gridColumns={12}
                        gridGaps={[4, 6, 0]}
                        gridMargins={[8, 8, 8]}
                        gridMaxWidth={1440}
                        align={ALIGNMENT.start}
                    >
                        <Cell span={[12, 12, 2]}>
                            {previous
                                ? (
                                    <div className={css({ padding: '16px 16px 16px 0' })}>
                                        <Button onClick={() => serApisUrl(previous)} startEnhancer={() => <ArrowLeft size={24} />}>
                                            Previous
                                        </Button>
                                    </div>
                                )
                                : (null)
                            }
                        </Cell>
                        <Cell span={[12, 12, 8]}>
                            <div className={css({ padding: '16px 16px 16px 0', textAlign: 'center' })}>
                                <Display4 color="#545454">Pokedex</Display4>
                            </div>
                        </Cell>
                        <Cell span={[12, 12, 2]}>
                            {next
                                ? (
                                    <div className={css({ padding: '16px 16px 16px 0' })}>
                                        <Button onClick={() => serApisUrl(next)} startEnhancer={() => <ArrowRight size={24} />}>
                                            Next
                                        </Button>
                                    </div>
                                )
                                : (null)
                            }
                        </Cell>
                        <Cell span={[12, 12, 12]}>
                            <div className={css({ background: 'transparent', padding: '16px' })}></div>
                        </Cell>
                        {results.map((index: any) => {
                            return (
                                <Card
                                    key={index?.name.toUpperCase()}
                                    overrides={{ Root: { style: { width: '328px', textAlign: 'center' } } }}
                                    headerImage={
                                        'https://source.unsplash.com/user/erondu/700x400'
                                    }
                                    title={index?.name.toUpperCase()}
                                >
                                    <StyledAction>
                                        <Link
                                            to={`${'/pokemon/' + index?.name}`}
                                            className={css({ textDecoration: 'none', color: '#000' })}
                                        >
                                            <Button overrides={{ BaseButton: { style: { width: '100%' } } }}>
                                                Saber Mas
                                            </Button>
                                        </Link>
                                    </StyledAction>
                                </Card>
                            )
                        })}
                        <Cell span={[6, 3, 2]}>

                        </Cell>
                    </Grid>
                </Block>
            </Block>
        </div>
    );
};

export default Home;


