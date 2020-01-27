import React from 'react';
import { TpButton, TextButton } from './styles';
import PropTypes from 'prop-types';

const TemplateButton: () => React$Node = (props) => {

    const {
        primary,
        title,
        onPress
    } = props;

    return (
        <TpButton onPress={onPress} primary={primary}>
            <TextButton primary={primary}>{title}</TextButton>
        </TpButton>
    );
};


TemplateButton.propTypes = {
    onPress: PropTypes.func,
    title: PropTypes.string,
    primary: PropTypes.bool,
};

TemplateButton.defaultProps = {
    onPress: () => null,
    title: '',
    primary: false
};

/**
 * @author Paulo Braga de Assis Junior
 * @name TemplateButton propTypes
 * @type {propTypes}
 * @memberof TemplateButton
 * @static
 * @example
 * <TemplateButton onPress={onPress} title={title} primary={primary} />
 */

export default TemplateButton;
