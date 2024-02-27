import { Card, Text, YStack } from 'tamagui';
import { Link } from 'expo-router';

export default function HomePage() {
  return (
    <YStack space="$4" padding="$4">
      <Link href="/Home   ">
        <Card padding="$4" shadowRadius="$2">
          <Text>Home</Text>
        </Card>
      </Link>
      <Link href="/Office">
        <Card padding="$4" shadowRadius="$2">
          <Text>Office</Text>
        </Card>
      </Link>
    </YStack>
  );
}
