import useSWR from 'swr';

import DashboardShell from '@/components/dashboard-shell';
import EmptyState from '@/components/empty-state';
import SiteTable from '@/components/site-table';
import SiteTableSkeleton from '@/components/site-table-skeleton';
import { fetcher } from '@/utils/fetcher';

const Dashboard = () => {
  const { data } = useSWR('/api/sites', fetcher);

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  console.log(data.sites);

  return (
    <DashboardShell>
      {data.sites.length > 0 ? (
        <SiteTable sites={data.sites} />
      ) : (
        <EmptyState />
      )}
    </DashboardShell>
  );
};
export default Dashboard;
