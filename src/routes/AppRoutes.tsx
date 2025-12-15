import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";

const Home = lazy(() => import("../pages/Home/Home"));
const FilmDetails = lazy(() => import("../pages/FilmDetails/FilmDetails"));

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/films/:id" element={<FilmDetails />} />
                </Route>
            </Routes>
        </>
    );
}
