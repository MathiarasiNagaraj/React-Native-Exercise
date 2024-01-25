import BottomSheet from '@gorhom/bottom-sheet'
import React, { useCallback, useMemo, useRef } from 'react';
import { Text, View } from 'react-native'

const BottomNavigator = () => {
    const bottomSheetRef = useRef<BottomSheet>(null);

    // variables

    const snapPoints = useMemo(() => ['25%', '50%'], []);
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
      }, []);
  return (
      <View>
           <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View >
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
</View>
  )
}

export default BottomNavigator