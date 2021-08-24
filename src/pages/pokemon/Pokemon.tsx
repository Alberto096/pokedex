import React, { useEffect, useState } from 'react';
//Base Web
import { Block } from 'baseui/block';
import { useStyletron } from 'baseui';
import { Grid, Cell, ALIGNMENT } from 'baseui/layout-grid';

// import { Card, StyledAction } from 'baseui/card';
// import { Button } from 'baseui/button';
import { Display4 } from 'baseui/typography';

import axios from 'axios';
import { ApiUrl } from '../../constants/constants';
import { Button } from 'baseui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'baseui/icon';
import { Tag, VARIANT, SIZE } from "baseui/tag";
import { ButtonGroup, SHAPE } from "baseui/button-group";
// import { ArrowLeft, ArrowRight } from 'baseui/icon';

type PokemonProps = {
    match: any;
};

const PokemonId: React.FC<PokemonProps> = ({ match }: PokemonProps) => {
    const [css] = useStyletron();
    const [apisUrl, serApisUrl] = useState(ApiUrl + 'pokemon/' + match.params.id + '/')
    const [next, setNext] = useState(0);
    const [previous, setPrevious] = useState(0);
    const [name, setName] = useState('')
    const [abilities, setAbilities] = useState([]);
    const [game_indices, setGame_indices] = useState([]);
    const [sprites, setSprites] = useState([]);
    const [types, setTypes] = useState([]);
    const [moves, setMoves] = useState([]);



    const ResultExtrac = (data: any) => {
        setNext(data?.id + 1)
        setPrevious(data?.id + 2)
        setName(data?.name)
        setAbilities(data?.abilities)
        setGame_indices(data?.game_indices)
        setSprites(data?.sprites?.versions)
        setTypes(data?.types)
        setMoves(data?.moves)
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
                            <div className={css({ padding: '16px 16px 16px 0' })}>
                                <Link
                                    to={`${'/pokemon/' + previous}`}
                                    className={css({ textDecoration: 'none', color: '#000' })}
                                >
                                    <Button onClick={() => serApisUrl(ApiUrl + 'pokemon/' + previous + '/')} startEnhancer={() => <ArrowLeft size={24} />}>
                                        Previous
                                    </Button>
                                </Link>
                            </div>
                        </Cell>
                        <Cell span={[12, 12, 8]}>
                            <div className={css({ padding: '16px 16px 16px 0', textAlign: 'center' })}>
                                <Display4 color="#545454">{name}</Display4>
                            </div>
                        </Cell>
                        <Cell span={[12, 12, 2]}>
                            <div className={css({ padding: '16px 16px 16px 0' })}>
                                <div className={css({ padding: '16px 16px 16px 0' })}>
                                    <Link
                                        to={`${'/pokemon/' + next}`}
                                        className={css({ textDecoration: 'none', color: '#000' })}
                                    >
                                        <Button onClick={() => serApisUrl(ApiUrl + 'pokemon/' + next + '/')} startEnhancer={() => <ArrowRight size={24} />}>
                                            Next
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Cell>
                        <Cell span={[12, 12, 12]}>
                            <div className={css({ background: 'transparent', padding: '16px' })}></div>
                        </Cell>
                        <Cell span={[12, 12, 8]}>
                            <div
                                className={css({
                                    background: 'white',
                                    borderRadius: '4px',
                                    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
                                    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
                                    textAlign: 'center',
                                })}
                            >
                                {/*
                                {console.log(types)}
                                {console.log(types)} */}
                                {/* <div>
                                    {sprites.map((index: any) => {
                                        console.log(index)
                                        return(
                                            <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600" />
                                        )
                                    })}
                                </div> */}
                                <div>
                                    {game_indices.map((index: any) => {
                                        return (
                                            <Button key={index?.version?.name} shape={SHAPE.pill}>{index?.version?.name}</Button>
                                        )
                                    })}
                                </div>
                            </div>
                        </Cell>
                        <Cell span={[6, 3, 4]}>
                            <div
                                className={css({
                                    background: 'white',
                                    borderRadius: '4px',
                                    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
                                    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
                                    textAlign: 'center',
                                })}
                            >
                                <div>
                                    {types.map((index: any) => {
                                        return (
                                            <Link
                                                key={index?.slot}
                                                to={`${'/'}`}
                                                className={css({ textDecoration: 'none', color: '#000' })}
                                            >
                                                <Tag
                                                    closeable={false}
                                                    variant={VARIANT.solid}
                                                    size={SIZE.medium}
                                                >
                                                    {index?.type?.name}
                                                </Tag>
                                            </Link>
                                        )
                                    })}
                                </div>
                                <div>
                                    {abilities.map((index: any) => {
                                        return (
                                            <Link
                                                key={index?.slot}
                                                to={`${'/'}`}
                                                className={css({ textDecoration: 'none', color: '#000' })}
                                            >
                                                <Tag
                                                    closeable={false}
                                                    variant={VARIANT.solid}
                                                    size={SIZE.medium}
                                                >
                                                    {index?.ability?.name}
                                                </Tag>
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        </Cell>
                    </Grid>
                </Block>
            </Block>
        </div>
    );
};

export default PokemonId;


