import React, {useRef, useState, useEffect} from 'react';
import { View, StyleSheet, Animated, Button} from 'react-native';
import Constants from 'expo-constants';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}


const LoadingBar = () => {
  let animation = useRef(new Animated.Value(0));
  const [progress, setProgress] = useState(0);

  useInterval(() => {
    if(progress < 100) {
      setProgress(progress + 5);
    } else {
        // TODO go to next screen.
    }
  }, 1000);

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: progress,
      duration: 100
    }).start();
  },[progress])

  const width = animation.current.interpolate({
    inputRange: [0, 50],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp"
  })

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <Animated.View style={[StyleSheet.absoluteFill, {backgroundColor: "#01875F", width }]} />
      </View>
    </View>
  );
}

export default LoadingBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    padding: 8,
  },
  progressBar: {
    flexDirection: 'row',
    height: 20,
    width: '60%',
    backgroundColor: 'white',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 6
  }
});
