import { Box, Button, Heading, Text } from '@chakra-ui/react';

import DashboardShell from './dashboard-shell';

const FreePlanEmptyState = () => {
  return (
    <DashboardShell>
      <Box w="100%" bgColor="gray.700" borderRadius="8px" p={8}>
        <Heading size="md">get feedback on your site instanly</Heading>
        <Text>Start today, then grow with us 🍃</Text>
        <Button variant="solid" size="md">
          Upgrade to Starter
        </Button>
      </Box>
    </DashboardShell>
  );
};

export default FreePlanEmptyState;
