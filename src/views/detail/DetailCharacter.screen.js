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
import {
  DetailContainer,
  ContainerTransparent,
  CharacterImage,
  TextName,
  TextDescription,
  TextInfo,
  ViewDescription,
  RowTextContainer,
} from './DetailCharacter.styles';
import {GetCharacter} from '~/services/DetailCharacterService';
import Container from '~/components/ui/container/Container';

const DetailCharacter = ({navigation}) => {
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
      <ViewDescription>
        <TextInfo>{title}</TextInfo>
        <TextDescription>{description}</TextDescription>
      </ViewDescription>
    );
  };

  return (
    <Container>
      <View>
        {character && (
          <DetailContainer>
            <ScrollView>
              <ContainerTransparent>
                <CharacterImage
                  source={{uri: character.image}}
                  resizeMode="contain"
                />
                <TextName>{character.name}</TextName>

                <RowTextContainer>
                  {renderForms('Status:', character.status)}
                  {renderForms('Specie:', character.species)}
                </RowTextContainer>

                <RowTextContainer>
                  {renderForms('Created:', getData(character.created))}
                  {renderForms('Gender:', character.gender)}
                </RowTextContainer>
                {renderForms('Origin:', character.origin.name)}
                {renderForms('Location:', character.location.name)}
              </ContainerTransparent>
            </ScrollView>
          </DetailContainer>
        )}
      </View>
    </Container>
  );
};

DetailCharacter.navigationOptions = {
  header: null,
};

export default DetailCharacter;
