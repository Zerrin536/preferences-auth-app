import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { useAuth } from '../context/AuthContext';

export default function SettingsScreen() {
  const { theme, toggleTheme, isThemeLoading } = useTheme();
  const { logout } = useAuth();

  if (isThemeLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading settings...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <Text style={styles.text}>
        Current theme: <Text style={styles.bold}>{theme}</Text>
      </Text>

      <Pressable style={styles.button} onPress={toggleTheme}>
        <Text style={styles.buttonText}>Toggle Theme</Text>
      </Pressable>

      <Pressable style={[styles.button, styles.logout]} onPress={logout}>
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    marginBottom: 12,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  bold: {
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#222',
    padding: 12,
    borderRadius: 6,
    marginBottom: 12,
  },
  logout: {
    backgroundColor: '#c0392b',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});
