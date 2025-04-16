import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <>
    <ThemedView style={styles.container}>
    <ThemedText type='title' style={styles.text}>
      Hello React-Native Developer
    </ThemedText>
    </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'black',
    gap: 8,
  },
  text:{
    color:'white',
    fontSize:27
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  container:{
    width:'100%',
    height:'100%',
    backgroundColor:'black',
    color:'white',
    display:"flex",
    justifyContent:'center',
    alignItems:'center'
  }
});
