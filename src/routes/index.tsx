import { Navigate, Route, Routes } from 'react-router-dom';
import { AdDetailsPage } from '../pages/AdDetailsPage';
import { Homepage } from '../pages/Homepage';

export const RoutesMain = () => (
    <Routes>
        <Route path="/ad" element={<AdDetailsPage />} />
        <Route path="/homepage" element={<Homepage />} />

        <Route path="*" element={<Navigate to="/homepage" />} />
    </Routes>
);
