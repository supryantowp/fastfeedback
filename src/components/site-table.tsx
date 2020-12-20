import { Flex, Link, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';

import { Site } from '@/utils/types';

interface SiteTableProps {
  sites: Site[];
}

const SiteTable = ({ sites }: SiteTableProps) => {
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
          {sites.map((site) => (
            <Tr key={`${site.name}-${site.createdAt}`}>
              <Td fontWeight="medium">{site.name}</Td>
              <Td>{site.link}</Td>
              <Td>
                <Link
                  fontWeight="medium"
                  color="cyan.300"
                  href={site.link}
                  isExternal
                >
                  View Feedback
                </Link>
              </Td>
              <Td>{format(parseISO(site.createdAt), 'PP')}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Flex>
  );
};

export default SiteTable;
