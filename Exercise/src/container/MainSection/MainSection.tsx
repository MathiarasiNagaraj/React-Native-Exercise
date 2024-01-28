import React, {useEffect, useState} from 'react';
import {ScrollView, Text} from 'react-native';
import {CATEGORY} from '../../constants/routeConstants';
import {Product, Offer} from '../../interface/Products';
import {
  getProductsByCategory,
  getOffersByCategory,
} from '../../services/ProductApi';
import OfferSection from '../OfferSection/OfferSection';
import ProductSection from '../ProductSection/ProductSection';

interface MainSectionProps {
  category: string;
}
const MainSection: React.FC<MainSectionProps> = ({category}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product[]>([]);
  const [selectedOffers, setSelectedOffers] = useState<Offer[]>([]);
  useEffect(() => {
    const getMethod = async () => {
      const data = await getProductsByCategory(category);
      setSelectedProduct(data);

      const offers = await getOffersByCategory(category);
      setSelectedOffers(offers);
    };

    getMethod();
  }, [category]);

  return (
    <ScrollView>
      <OfferSection offers={selectedOffers} />
      <ProductSection selectedProduct={selectedProduct} />
    </ScrollView>
  );
};

export default MainSection;
