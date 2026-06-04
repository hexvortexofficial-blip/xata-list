import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { COLORS, SIZES } from '../styles/theme';
import { globalStyles } from '../styles/global';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Email dan password harus diisi');
      return;
    }
    Alert.alert('Success', 'Login berhasil!');
    navigation.replace('Home');
  };

  return (
    <ScrollView style={globalStyles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.logoSmall}>
            <Text style={styles.logoSmallText}>XF</Text>
          </View>
          <Text style={styles.headerTitle}>
            {isLogin ? 'Login' : 'Register'}
          </Text>
          <Text style={styles.headerSubtitle}>
            {isLogin
              ? 'Masuk ke akun Xata Film Anda'
              : 'Buat akun baru untuk melanjutkan'}
          </Text>
        </View>

        <View style={styles.formContainer}>
          <View>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Masukkan email"
              placeholderTextColor={COLORS.textMuted}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Masukkan password"
              placeholderTextColor={COLORS.textMuted}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          {isLogin && (
            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Lupa password?</Text>
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity
          style={[globalStyles.button, globalStyles.buttonPrimary, styles.submitButton]}
          onPress={handleLogin}
        >
          <Text style={globalStyles.buttonText}>
            {isLogin ? 'Login' : 'Register'}
          </Text>
        </TouchableOpacity>

        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Atau lanjutkan dengan</Text>
          <View style={styles.dividerLine} />
        </View>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
            <Text style={styles.socialButtonText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
            <Text style={styles.socialButtonText}>Facebook</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={[styles.socialButton, styles.phoneButton]}>
          <Text style={styles.socialButtonText}>Phone Number</Text>
        </TouchableOpacity>

        <View style={styles.toggleContainer}>
          <Text style={styles.toggleText}>
            {isLogin ? 'Belum punya akun? ' : 'Sudah punya akun? '}
          </Text>
          <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
            <Text style={styles.toggleLink}>
              {isLogin ? 'Register' : 'Login'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.md,
    justifyContent: 'space-between',
    minHeight: '100%',
  },
  header: {
    alignItems: 'center',
    marginVertical: SIZES.xl,
  },
  logoSmall: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.red,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SIZES.md,
  },
  logoSmallText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.textLight,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.textLight,
    marginBottom: SIZES.sm,
  },
  headerSubtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
  formContainer: {
    marginVertical: SIZES.lg,
  },
  label: {
    color: COLORS.textLight,
    fontWeight: '600',
    marginBottom: SIZES.sm,
    fontSize: 14,
  },
  forgotPassword: {
    alignItems: 'flex-end',
    marginTop: -SIZES.md,
    marginBottom: SIZES.md,
  },
  forgotPasswordText: {
    color: COLORS.red,
    fontWeight: '600',
    fontSize: 14,
  },
  submitButton: {
    marginVertical: SIZES.md,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SIZES.lg,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.darkTertiary,
  },
  dividerText: {
    color: COLORS.textSecondary,
    paddingHorizontal: SIZES.md,
    fontSize: 12,
  },
  socialContainer: {
    flexDirection: 'row',
    gap: SIZES.md,
    marginBottom: SIZES.md,
  },
  socialButton: {
    flex: 1,
    paddingVertical: SIZES.md,
    borderRadius: 8,
    alignItems: 'center',
  },
  googleButton: {
    backgroundColor: COLORS.darkSecondary,
    borderWidth: 1,
    borderColor: COLORS.darkTertiary,
  },
  facebookButton: {
    backgroundColor: '#1877F2',
  },
  phoneButton: {
    backgroundColor: COLORS.blue,
    paddingVertical: SIZES.md,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: SIZES.lg,
  },
  socialButtonText: {
    color: COLORS.textLight,
    fontWeight: '600',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: SIZES.lg,
  },
  toggleText: {
    color: COLORS.textSecondary,
  },
  toggleLink: {
    color: COLORS.red,
    fontWeight: 'bold',
  },
});

export default LoginScreen;