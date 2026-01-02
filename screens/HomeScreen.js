import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function HomeScreen({ navigation }) {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Welcome, {user?.username}
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Settings')}
      >
        <Text style={styles.buttonText}>Go to Settings</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#222',
    padding: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
