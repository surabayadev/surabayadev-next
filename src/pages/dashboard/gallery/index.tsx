import Head from 'next/head';

import DashboardLayout from '@/components/layout/DashboardLayout';
import PageContainer from '@/components/layout/PageContainer';

export default function Gallery() {
  return (
    <DashboardLayout defaultOpen={true}>
      <Head>
        <title>Gallery | SurabayaDev</title>
      </Head>

      <PageContainer scrollable={false}>
        <div className='flex flex-1 flex-col space-y-4'>
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Gallery</h1>
        </div>
      </PageContainer>
    </DashboardLayout>
  );
}
