import React from 'react';
import { TouchableHighlight } from 'react-native';
import { ContainerCell, SubContainer, CharacterImage, Name } from './CharacterCell.styles';
import PropTypes from 'prop-types';

const CharacterCell: () => React$Node = (props) => {

    const { sourceImage, name, onPress, id } = props;

    return (
        <ContainerCell>
            <TouchableHighlight underlayColor={'transparent'} onPress={() => onPress(id)}>
                <SubContainer>
                    <CharacterImage source={{ uri: sourceImage }} />
                    <Name>{name}</Name>
                </SubContainer>
            </TouchableHighlight>
        </ContainerCell>
    );
}
export default CharacterCell;

/**
 * @author Paulo Braga de Assis Junior
 * @name CharacterCell propTypes
 * @type {propTypes}
 * @memberof CharacterCell
 * @static
 * @example
 * <CharacterCell onPress={onPress} name= {name} sourceImage={sourceImage} id={id} />
 */

CharacterCell.propTypes = {
    onPress: PropTypes.func,
    name: PropTypes.string,
    sourceImage: PropTypes.string,
    id: PropTypes.number,
};

CharacterCell.defaultProps = {
    onPress: () => { },
    name: '',
    sourceImage: '',
    id: 0,
};