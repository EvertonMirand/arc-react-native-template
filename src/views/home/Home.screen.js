import React, { useState, useEffect, useContext } from 'react';
import { LoadingFooter, Container } from '~/components/ui'
import { GetListCharacter } from '~/services/HomeService'
import { styles } from './Home.styles'
import { FlatList } from 'react-native';
import CharacterCell from '~/components/cells/character/CharacterCell';

const Home: () => React$Node = () => {
    const [loading, setLoading] = useState(false);
    const [nextPage, setNextPage] = useState('');
    const [listCharacter, setListCharacter] = useState([]);

    useEffect(() => {
        getListCharacter();
    }, [])

    /**
     * Request Service 
     */
    const getListCharacter = () => {
        setLoading(!loading);
        GetListCharacter(nextPage)
            .then(response => response.data)
            .then(response => {
                let list = [...listCharacter, ...response.results];
                setListCharacter(list);
                setNextPage(response.info.next);
                setLoading(!loading);
            })
            .catch(error => {
                setLoading(!loading);
                console.warn(error);
            });
    }

    const showDetails = (_id) => {
        // const navigation = useContext(NavigationContext);
        console.warn(props);
        // console.warn(navigation);
        navigation.navigate('DetailCharacter')
        // navigate('DetailCharacter', { id: _id });
        // navigation.navigate('DetailCharacter', { id: _id });

    }

    //----------------- Render View --------------------------

    const renderItem = ({ item }) => {
        return (
            <CharacterCell
                id={item.id}
                name={item.name}
                sourceImage={item.image}
                onPress={showDetails}
            />
        );
    }

    const keyExtractor = (item, index) => `${index}`;

    const renderFooter = () => { return (<LoadingFooter loading={loading} />) };

    return (
        <Container>
            <FlatList
                style={styles.list}
                onEndReached={getListCharacter}
                onEndReachedThreshold={0.1}
                data={listCharacter}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                ListFooterComponent={renderFooter}
            />
        </Container>
    );
};

/**
 * @author Paulo Braga de Assis Junior
 * @name Home propTypes
 * @type {propTypes}
 * @memberof Home
 */

export default Home;
