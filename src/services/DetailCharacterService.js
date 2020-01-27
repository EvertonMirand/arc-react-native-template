/* eslint-disable prettier/prettier */
import Axios from 'axios';
import { CONFIG } from './Config';

/**
 * @author Paulo Braga de Assis Junior
 * @param {*} ID 
 */
export const GetCharacter = async (ID) => {
    const link = `${CONFIG.baseLink}${CONFIG.contextApi}/${ID}`;
    return Axios.get(link);
}