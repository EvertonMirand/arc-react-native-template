/* eslint-disable prettier/prettier */
import Axios from 'axios';
import { CONFIG } from './Config';

/**
 * @author Paulo Braga de Assis Junior
 * @param {*} nextpage 
 */
export const GetListCharacter = async (nextpage) => {
    let link = `${CONFIG.baseLink}${CONFIG.contextApi}/`;
    if (nextpage !== '') {
        link = nextpage;
    }
    return Axios.get(link);
};
