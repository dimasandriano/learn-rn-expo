import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function index() {
  return (
    <View>
      <SafeAreaView>
        <Text className="text-center font-bold text-red-600">About</Text>
        <Link href="/">Home</Link>
      </SafeAreaView>
    </View>
  );
}
