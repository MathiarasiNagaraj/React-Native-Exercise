import React from 'react';

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
