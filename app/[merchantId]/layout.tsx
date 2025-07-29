import Sidemenu from "@/components/common/sidemenu";

export default async function Layout({ children, params }: any) {
    let fullYear = new Date().getFullYear();
    const { merchantId } = await params;
    return (
        <div className="grid lg:grid-cols-[250px_1fr] grid-cols-1 min-h-screen lg:gap-2">
            <div className="col-start-1 lg:block hidden fixed top-0 left-0 bottom-0">
                <Sidemenu merchantId={merchantId}></Sidemenu>
            </div>
            <div className="col-start-2">
                <div
                    className="font-sans text-xs grid grid-rows-[1fr_20px] justify-items-center min-h-screen gap-5 bg-gray-50 lg:rounded-2xl lg:mt-3 lg:mb-3 pt-2 lg:pb-6 lg:pr-6 lg:pl-6 pb-2 pr-2 pl-2 bg-gray-50 shadow-xl">
                    <main className="gap-[32px] row-start-1 min-h-full w-full lg:mt-0 mt-[50px]">
                        <div className="flex lg:flex-row flex-col w-full">
                            {children}
                        </div>
                    </main>
                    <footer className="row-start-2 flex gap-[24px] flex-wrap items-center justify-center">
                        <div>© Copyright {fullYear}. Cafe Management System. All Rights Reserved.</div>
                        <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                           target="_blank"
                           rel="noopener noreferrer">
                            Terms of Service
                        </a>
                        <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                           target="_blank"
                           rel="noopener noreferrer">
                            Privacy Policy
                        </a>
                    </footer>
                </div>
            </div>
        </div>
    );
}