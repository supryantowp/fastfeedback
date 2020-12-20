import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading
} from '@chakra-ui/react';

import AddSiteModal from './add-site-modal';

const DashboardShell = ({ children }) => {
  return (
    <Flex p={8}>
      <Box maxW="1000px" w="100%" mx="auto">
        <Breadcrumb color="gray.500">
          <BreadcrumbItem>
            <BreadcrumbLink>Sites</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Flex justify="space-between">
          <Heading mb={4}>Site</Heading>
          <AddSiteModal>+ Add Site</AddSiteModal>
        </Flex>

        {children}
      </Box>
    </Flex>
  );
};

export default DashboardShell;
