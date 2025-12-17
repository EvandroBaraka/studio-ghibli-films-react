import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Suspense } from "react";
import { Loading } from "../Loading/Loading";

export const Layout = () => {
    return (
        <>
            <Header />
            <main className="mx-auto max-w-7xl px-6 min-h-[calc(100vh-96px)]">
                <Suspense fallback={<Loading />}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    );
};
