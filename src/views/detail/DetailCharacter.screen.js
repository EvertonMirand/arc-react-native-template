/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

/**
 * @author Paulo Braga de Assis Junior
 * @name DetailCharacter propTypes
 * @type {propTypes}
 * @memberof DetailCharacter
 */

import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {styles} from './DetailCharacter.styles';
import {GetCharacter} from '~/services/DetailCharacterService';
import Container from '~/components/ui/container/Container';

const DetailCharacter = ({navigation}) => {
  const {
    container,
    image,
    textName,
    containerTransparent,
    textInfo,
    textDescription,
    viewDescription,
  } = styles;

  const [character, setCharacter] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCharacter(navigation.state.params.id);
  }, []);

  const getCharacter = id => {
    GetCharacter(id)
      .then(response => response.data)
      .then(response => {
        setCharacter(response);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
      });
  };

  const getData = data => {
    var returnData = '';
    var returnData = data.split('T');
    return returnData[0];
  };

  /**
   * @param {string} title
   * @param {string} description
   */
  const renderForms = (title, description) => {
    return (
      <View style={viewDescription}>
        <Text style={textInfo}>{title}</Text>
        <Text style={textDescription}>{description}</Text>
      </View>
    );
  };

  return (
    <Container>
      <View>
        {character && (
          <View style={container}>
            <ScrollView>
              <View style={containerTransparent}>
                <Image
                  source={{uri: character.image}}
                  resizeMode="contain"
                  style={image}
                />
                <Text style={textName}>{character.name}</Text>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  {renderForms('Status:', character.status)}
                  {renderForms('Specie:', character.species)}
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  {renderForms('Created:', getData(character.created))}
                  {renderForms('Gender:', character.gender)}
                </View>
                {renderForms('Origin:', character.origin.name)}
                {renderForms('Location:', character.location.name)}
              </View>
            </ScrollView>
          </View>
        )}
      </View>
    </Container>
  );
};

DetailCharacter.navigationOptions = {
  header: null,
};

export default DetailCharacter;
