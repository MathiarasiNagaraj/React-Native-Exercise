import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProductGallery from '../../screens/ProductGallery/ProductGallery';
import MyCart from '../../screens/MyCart/MyCart';
import {SCREEN} from '../../constants/commonConstants';

import { Button, Text } from 'react-native';
import { Drawer } from 'react-native-drawer-layout';
const DrawerNavigator = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Drawer
      open={open}
      style={{
        height: '100%',
        zIndex:9
      }}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={() => {
        return <Text>Drawer content</Text>;
      }}
    >
      <Button
        onPress={() => setOpen((prevOpen) => !prevOpen)}
        title={`${open ? 'Close' : 'Open'} drawer`}
      />
    </Drawer>)
};

export default DrawerNavigator;
