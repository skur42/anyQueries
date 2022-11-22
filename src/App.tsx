import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./atoms/Header";
import { Loader } from "./atoms/Loader";
import { Sidebar } from "./atoms/Sidebar";
import { QueryManagementProvider } from "./contexts/QueryManagement";

const Home = lazy(() => import(/* webpackChunkName: 'Home' */ "./pages/Home"));
const Dashboards = lazy(
  () => import(/* webpackChunkName: 'Dashboards' */ "./pages/Dashboards")
);

function App() {
  return (
    <QueryManagementProvider>
      <div className="font-mono flex justify-items-center w-screen h-screen bg-white">
        <Sidebar />
        <div className="flex-1 h-screen overflow-y-scroll px-10 py-8">
          <Header />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboards" element={<Dashboards />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </QueryManagementProvider>
  );
}

export default App;
