import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MainSection from '../../container/MainSection/MainSection';
import {CATEGORY} from '../../constants/commonConstants';
import {colors} from '../../styles/colors';

/**
 * @description Top bar component using React Navigation material top bar
 * @returns Top Bar component
 */
export const TabBar = () => {
  const Tab = createMaterialTopTabNavigator();

  const tabItems = CATEGORY.map(category => (
    <Tab.Screen
      name={category}
      key={category}
      children={() => <MainSection category={category} />}
    />
  ));

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 18,
          fontWeight: '500',
          fontFamily: 'Poppins-Medium',
          textAlign: 'left',
          textTransform: 'capitalize',
        },
        tabBarActiveTintColor: colors.black,
        tabBarIndicatorStyle: {
          borderBottomWidth: 4,
          borderBottomColor: colors.black,
        },
      }}>
      {tabItems}
    </Tab.Navigator>
  );
};
