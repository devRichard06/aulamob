import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
        </View>

        <Text style={styles.boasvindas}>Richard</Text>


      </View>

      <View style={styles.body}>
        <Text style={styles.boasvindas}>bem-vindo</Text>

      </View>

      <View style={styles.footer}>
        <Text style={styles.boasvindas}>Copyright 2024</Text>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boasvindas: {
    color: '#fff',
    fontSize: 25
  },
  header: {
    flex: 1,
    backgroundColor: '#272644',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row'


  },

  body: {
    flex: 3,
    backgroundColor: '#893644',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'


  },

  footer: {
    flex: 1,
    backgroundColor: '#367644',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'


  },

  avatar: {
    width: 50,
    heigth: 50,
    borderRadius: '50',
    marginHorizontal: 10

  }
});
