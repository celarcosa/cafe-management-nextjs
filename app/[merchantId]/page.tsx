import { redirect } from 'next/navigation';

export default function Page({ params }: any) {
    redirect(`/${params.merchantId}/dashboard`);
}