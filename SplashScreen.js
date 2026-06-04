import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../styles/theme';
import { globalStyles } from '../styles/global';

const SplashScreen = () => {
  return (
    <View style={[globalStyles.centerContainer, styles.container]}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>XF</Text>
        </View>
      </View>
      <Text style={styles.title}>Xata Film</Text>
      <Text style={styles.subtitle}>Jadwal Tayang Film Terlengkap</Text>
      <View style={styles.loadingDots}>
        <View style={[styles.dot, styles.dotActive]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.dark,
  },
  logoContainer: {
    marginBottom: SIZES.xl,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: COLORS.red,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: COLORS.redLight,
  },
  logoText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: COLORS.textLight,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.textLight,
    marginBottom: SIZES.sm,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
    marginBottom: SIZES.xl,
  },
  loadingDots: {
    flexDirection: 'row',
    marginTop: SIZES.xl,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.blueGray,
    marginHorizontal: SIZES.sm,
  },
  dotActive: {
    backgroundColor: COLORS.red,
  },
});

export default SplashScreen;