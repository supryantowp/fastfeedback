import { Avatar, Flex, Image, Link, Stack } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';

export function Navbar() {
  const auth = useAuth();

  return (
    <Flex
      borderTop="5px solid #0AF5F4"
      bgColor="gray.700"
      py={4}
      px={{ base: 5, md: 20 }}
      justifyContent="space-between"
    >
      <Stack
        spacing={4}
        isInline
        justifyContent="flex-start"
        alignItems="center"
      >
        <Image src="/logo.svg" boxSize="44px" />
        <Link>Sites</Link>
        <Link>Feedback</Link>
      </Stack>
      <Stack spacing={4} isInline alignItems="center">
        <Avatar size="sm" src={auth?.user?.photoUrl} />
      </Stack>
    </Flex>
  );
}
export default Navbar;
