import React from 'react';
import { ImageContainer } from './sryles';
import SafeAreaView from 'react-native-safe-area-view';

const Container: () => React$Node = (props) => {

    const { children } = props;

    return (
        <SafeAreaView>
            <ImageContainer>
                {children}
            </ImageContainer>
        </SafeAreaView>
    );
};

/**
 * @author Paulo Braga de Assis Junior
 * @name Container propTypes
 * @type {propTypes}
 * @memberof Container
 * @description Componente que agrupa tudo que for de importante
 * @static
 * @example
 * <Container/>
 */

export default Container;
