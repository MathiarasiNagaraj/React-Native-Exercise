import axios from 'axios';
import { routes } from '../constants/routeConstants';

export const getProductsByCategory = async (category: string) => {
    try {
      const productLink = routes[category].productLink.trim();
      console.log(productLink);
      console.log(category);
  
      const response = await fetch(productLink);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data, 'response');
  
      return data;
    } catch (error) {
      console.error('Error fetching data:', error.message);
      throw error;
    }
  };
  
  
export const getOffersByCategory = async (category: string) => {
    const response = await axios.get(routes[category].offerLink);
    return response.data;
    
}