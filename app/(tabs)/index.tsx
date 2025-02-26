import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { View } from '@/components/Themed';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { ReactElement } from 'react';
 
export default function TabOneScreen(): ReactElement {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
Tab One
      </Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      <Box className="bg-blue-500">
        <Text>
Tab One
        </Text>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
