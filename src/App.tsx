import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import Home from "@/pages/Home";

// public pages
const Spaces = lazy(() => import("@/pages/Spaces"));
const SpaceDetail = lazy(() => import("@/pages/SpaceDetail"));
const About = lazy(() => import("@/pages/About"));
const Services = lazy(() => import("@/pages/Services"));
const ServiceDetail = lazy(() => import("@/pages/ServiceDetail"));
const Insights = lazy(() => import("@/pages/Insights"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const Careers = lazy(() => import("@/pages/Careers"));
const Contact = lazy(() => import("@/pages/Contact"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const NotFound = lazy(() => import("@/pages/NotFound"));

// admin
const AdminLayout = lazy(() => import("@/components/admin/AdminLayout").then((m) => ({ default: m.AdminLayout })));
const AdminDashboard = lazy(() => import("@/pages/admin/AdminDashboard"));
const AdminCandidates = lazy(() => import("@/pages/admin/AdminCandidates"));
const AdminCandidateDetail = lazy(() => import("@/pages/admin/AdminCandidateDetail"));
const AdminSpaces = lazy(() => import("@/pages/admin/AdminSpaces"));
const AdminSpaceNew = lazy(() => import("@/pages/admin/AdminSpaceNew"));
const AdminSettings = lazy(() => import("@/pages/admin/AdminSettings"));

function PageFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-brass" />
    </div>
  );
}

function L({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<PageFallback />}>{children}</Suspense>;
}

function App() {
  return (
    <Routes>
      {/* public marketing site */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/spaces" element={<L><Spaces /></L>} />
        <Route path="/spaces/:id" element={<L><SpaceDetail /></L>} />
        <Route path="/about" element={<L><About /></L>} />
        <Route path="/services" element={<L><Services /></L>} />
        <Route path="/services/:slug" element={<L><ServiceDetail /></L>} />
        <Route path="/insights" element={<L><Insights /></L>} />
        <Route path="/insights/:slug" element={<L><BlogPost /></L>} />
        <Route path="/careers" element={<L><Careers /></L>} />
        <Route path="/contact" element={<L><Contact /></L>} />
        <Route path="/privacy-policy" element={<L><PrivacyPolicy /></L>} />
        <Route path="*" element={<L><NotFound /></L>} />
      </Route>

      {/* admin platform */}
      <Route path="/admin" element={<L><AdminLayout /></L>}>
        <Route index element={<L><AdminDashboard /></L>} />
        <Route path="candidates" element={<L><AdminCandidates /></L>} />
        <Route path="candidates/:id" element={<L><AdminCandidateDetail /></L>} />
        <Route path="spaces" element={<L><AdminSpaces /></L>} />
        <Route path="spaces/new" element={<L><AdminSpaceNew /></L>} />
        <Route path="settings" element={<L><AdminSettings /></L>} />
      </Route>
    </Routes>
  );
}

export default App;
