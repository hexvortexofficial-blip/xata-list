import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from './theme';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark,
  },
  containerPadding: {
    flex: 1,
    backgroundColor: COLORS.dark,
    padding: SIZES.md,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.dark,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.textLight,
    marginBottom: SIZES.md,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.textLight,
  },
  body: {
    fontSize: 16,
    color: COLORS.textLight,
    lineHeight: 24,
  },
  caption: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  button: {
    paddingVertical: SIZES.md,
    paddingHorizontal: SIZES.lg,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPrimary: {
    backgroundColor: COLORS.red,
  },
  buttonSecondary: {
    backgroundColor: COLORS.blue,
  },
  buttonText: {
    color: COLORS.textLight,
    fontWeight: '600',
    fontSize: 16,
  },
  card: {
    backgroundColor: COLORS.darkSecondary,
    borderRadius: 12,
    padding: SIZES.md,
    marginBottom: SIZES.md,
  },
  cardBorder: {
    borderWidth: 1,
    borderColor: COLORS.darkTertiary,
  },
  input: {
    backgroundColor: COLORS.darkSecondary,
    borderWidth: 1,
    borderColor: COLORS.darkTertiary,
    borderRadius: 8,
    paddingVertical: SIZES.md,
    paddingHorizontal: SIZES.md,
    color: COLORS.textLight,
    marginBottom: SIZES.md,
    fontSize: 16,
  },
  inputFocus: {
    borderColor: COLORS.red,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.darkTertiary,
    marginVertical: SIZES.md,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});