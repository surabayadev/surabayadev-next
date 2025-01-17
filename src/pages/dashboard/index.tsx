import Head from 'next/head';

import DashboardLayout from '@/components/layout/DashboardLayout';
import PageContainer from '@/components/layout/PageContainer';

export default function Dashboard() {
  return (
    <DashboardLayout defaultOpen={true}>
      <Head>
        <title>Dashboard | SurabayaDev</title>
      </Head>

      <PageContainer scrollable={false}>
        <div className='flex flex-1 flex-col space-y-4'>
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Dashboard</h1>
        </div>
      </PageContainer>
    </DashboardLayout>
  );
}
