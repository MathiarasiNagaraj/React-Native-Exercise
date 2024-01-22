import axios from 'axios';
import { routes } from '../constants/routeConstants';

export const getProductsByCategory = async (category:string) => {
    const response = await axios.get(routes[category].productLink);
    return response.data;
};
  
export const getOffersByCategory = async (category: string) => {
    const response = await axios.get(routes[category].offerLink);
    return response.data;
    
}