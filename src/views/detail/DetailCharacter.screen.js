/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

/**
 * @author Paulo Braga de Assis Junior
 * @name DetailCharacter propTypes
 * @type {propTypes}
 * @memberof DetailCharacter
 */

import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from './DetailCharacter.styles';
import { GetCharacter } from '~/services/DetailCharacterService';
import Container from '~/components/ui/container/Container';

export default class DetailCharacter extends Component {

    static navigationOptions = { header: null };

    constructor(props) {
        super(props);
        this.state = {
            character: '',
            isLoading: true,
        };
        this.getCharacter(this.props.navigation.state.params.id);
    }

    getCharacter = id => {
        GetCharacter(id)
            .then(response => response.data)
            .then(response => {
                this.setState({
                    character: response,
                    isLoading: false,
                });
            })
            .catch(error => {
                this.setState({ isLoading: false });
            });
    }

    getData(data) {
        var returnData = '';
        var returnData = data.split('T');
        return returnData[0];
    }

    /**
     * @param {string} title 
     * @param {string} description 
     */
    renderForms(title, description) {
        const { textInfo, textDescription, viewDescription } = styles;
        return (
            <View style={viewDescription}>
                <Text style={textInfo}>{title}</Text>
                <Text style={textDescription}>{description}</Text>
            </View>
        );
    }

    render() {
        const { container, image, textName, containerTransparent } = styles;
        const { character } = this.state;

        return (
            <Container>
                <View>
                    {character && (
                        <View style={container}>
                            <ScrollView>
                                <View style={containerTransparent}>
                                    <Image
                                        source={{ uri: character.image }}
                                        resizeMode='contain'
                                        style={image}

                                    />
                                    <Text style={textName}>{character.name}</Text>

                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }}>
                                        {this.renderForms('Status:', character.status)}
                                        {this.renderForms('Specie:', character.species)}
                                    </View>

                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }}>
                                        {this.renderForms('Created:', this.getData(character.created))}
                                        {this.renderForms('Gender:', character.gender)}
                                    </View>
                                    {this.renderForms('Origin:', character.origin.name)}
                                    {this.renderForms('Location:', character.location.name)}
                                </View>
                            </ScrollView>
                        </View>
                    )}
                </View >
            </Container>
        );
    }
}