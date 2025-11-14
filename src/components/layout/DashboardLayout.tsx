import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import NextTopLoader from 'nextjs-toploader';
import { useEffect,useState } from 'react';

import KBar from '@/components/kbar/KBar';
import AppSidebar from '@/components/layout/AppSidebar';
import DashboardHeader from '@/components/layout/DashboardHeader';
// import { NuqsAdapter } from 'nuqs/adapters/next/app';
// import './globals.css';
// import { auth } from '@/lib/auth';
import Providers from '@/components/layout/Providers';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  title: 'SurabayaDev Dashboard',
  description: 'SurabayaDev Dashboard | A Dashboard for SurabayaDev Community',
};

// Server-side function to fetch the cookie
export async function getServerSideProps() {
  const cookieStore = cookies();
  const defaultOpen = cookieStore.get('sidebar:state')?.value === 'true';

  return {
    props: {
      defaultOpen,
    },
  };
}

export default function DashboardLayout({
  children,
  defaultOpen: initialDefaultOpen,
}: {
  children: React.ReactNode;
  defaultOpen: boolean;
}) {
  const [defaultOpen, setDefaultOpen] = useState(initialDefaultOpen);

  // Now we have the defaultOpen value as a prop and it doesn't need to be fetched on the client side
  useEffect(() => {
    // You can now safely access the state if needed (e.g., updating state on some other logic)
    setDefaultOpen(initialDefaultOpen);
  }, [initialDefaultOpen]);

  return (
    <>
    <NextTopLoader showSpinner={false} />
    {/* <NuqsAdapter> */}
      <Providers>
        <Toaster />
        <KBar>
          <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar />
            <SidebarInset>
              <DashboardHeader />
              {/* page main content */}
              {children}
              {/* page main content ends */}
            </SidebarInset>
          </SidebarProvider>
        </KBar>
      </Providers>
    {/* </NuqsAdapter> */}
    </>
  );
}
