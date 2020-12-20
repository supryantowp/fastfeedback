import {
  Box,
  Flex,
  Skeleton,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react';

interface SkeletonRowProps {
  width: string | number;
}

const SkeletonRow = ({ width }: SkeletonRowProps) => {
  return (
    <Box as="tr">
      <Td>
        <Skeleton height="10px" w={width} my={4} />
      </Td>
      <Td>
        <Skeleton height="10px" w={width} my={4} />
      </Td>
      <Td>
        <Skeleton height="10px" w={width} my={4} />
      </Td>
      <Td>
        <Skeleton height="10px" w={width} my={4} />
      </Td>
    </Box>
  );
};

const SiteTableSkeleton = () => {
  return (
    <Flex w="100%" bgColor="gray.700" borderRadius="md">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Site Link</Th>
            <Th>Feedback Link</Th>
            <Th>Date Added</Th>
            <Th>{''}</Th>
          </Tr>
        </Thead>
        <Tbody>
          <SkeletonRow width="75px" />
          <SkeletonRow width="125px" />
        </Tbody>
      </Table>
    </Flex>
  );
};

export default SiteTableSkeleton;
