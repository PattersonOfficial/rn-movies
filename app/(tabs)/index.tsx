import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-2xl font-bold text-emerald-600'>Welcome</Text>

      <Link href='/profile' className='text-emerald-600 mt-3'>
        Profile
      </Link>
    </View>
  );
}
