/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Svg, G, Circle, Text as SvgText} from 'react-native-svg';
import {useInterval} from './UseInterval';

const App: () => React$Node = () => {
  const [timer, setTimer] = useState(10);

  useInterval(() => {
    if (timer <= 0) {
      setTimer(10);
    } else {
      setTimer(timer - 1);
    }
  }, 1000);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Svg width={128} height={128} viewBox="-1 -1 34 34">
                <G>
                  <Circle
                    cx="16"
                    cy="16"
                    r="16"
                    fill="none"
                    fillOpacity="0.2"
                    stroke="#22F4AE"
                    strokeWidth="1.8"
                  />
                  <Circle
                    transform="rotate(-90, 16, 16)"
                    cx="16"
                    cy="16"
                    r="16"
                    fill="none"
                    stroke="#ff5a5f"
                    strokeWidth="1.8"
                    strokeDasharray="100 100"
                    strokeDashoffset={(timer / 10) * 100}
                    strokeLinecap="round"
                    transition="stroke-dashoffset 1s ease-in-out"
                  />
                  <SvgText
                    x="16"
                    y="22"
                    textAnchor="middle"
                    fontSize="18"
                    fill={timer < 4 ? '#ff5a5f' : '#22F4AE'}>
                    {timer}
                  </SvgText>
                </G>
              </Svg>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
