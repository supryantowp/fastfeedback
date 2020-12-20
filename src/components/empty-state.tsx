import { Flex, Heading, Text } from '@chakra-ui/react';

import AddSiteModal from './add-site-modal';

const EmptyState = () => {
  return (
    <Flex
      w="100%"
      bgColor="gray.700"
      borderRadius="md"
      p={16}
      align="center"
      direction="column"
    >
      <Heading size="md">You havent added any sites.</Heading>
      <Text mb={4}>lets get started.</Text>
      <AddSiteModal>
        Create one
      </AddSiteModal>
    </Flex>
  );
};

export default EmptyState;
