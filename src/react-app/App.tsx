import { BrowserRouter as Router, Routes, Route } from "react-router";
import Layout from "@/react-app/components/Layout";
import HomePage from "@/react-app/pages/Home";
import AboutPage from "@/react-app/pages/About";
import CoursesPage from "@/react-app/pages/Courses";
import FacilitiesPage from "@/react-app/pages/Facilities";
import PoliciesPage from "@/react-app/pages/Policies";
import FAQPage from "@/react-app/pages/FAQ";
import ContactPage from "@/react-app/pages/Contact";
import AchievementsPage from "@/react-app/pages/Achievements";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/policies" element={<PoliciesPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
