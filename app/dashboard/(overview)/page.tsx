import CardWrapper, { Card } from '@/app/ui/dashboard/cards';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import {fetchRevenue, fetchCardData } from "@/app/lib/data";
import { Lusitana } from 'next/font/google';
import {Suspense} from "react";
import {CardsSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton} from "@/app/ui/skeletons";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";

const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});
export default async function Page() {
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<CardsSkeleton/>}>
                    <CardWrapper/>
                </Suspense>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<RevenueChartSkeleton/>}>
                    <RevenueChart lusitana={lusitana}/>
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton/>}>
                    <LatestInvoices lusitana={lusitana}/>
                </Suspense>
            </div>
        </main>
    );
}