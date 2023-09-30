import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function index() {
  return (
    <View>
      <SafeAreaView>
        <Text>Home</Text>
        <Link href="/about">About</Link>
      </SafeAreaView>
    </View>
  );
}
