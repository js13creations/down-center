import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import CareerPaths from '../pages/CareerPaths';
import UAEInitiative from '../pages/UAEInitiative';
import Contact from '../pages/Contact';
import DDSC from '../pages/DDSC';
import FAQ from '../pages/FAQ';
import ServiceDetails from '../pages/ServiceDetails';
import Survey from '../pages/Survey';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/down-center" element={<Home />} />
      <Route path="/career-paths" element={<CareerPaths />} />
      <Route path="/uae-initiative" element={<UAEInitiative />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/ddsc" element={<DDSC />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/services/:code" element={<ServiceDetails />} />
      <Route path="/:code/survey" element={<Survey />} />
    </Routes>
  );
}

export default AppRoutes;
