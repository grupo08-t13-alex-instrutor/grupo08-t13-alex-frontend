import { Navigate, Route, Routes } from 'react-router-dom';
import { Homepage } from '../pages';
import { AdDetailsPage } from '../pages/AdDetailsPage';

export const RoutesMain = () => (
    <Routes>
        <Route path="/adDetails" element={<AdDetailsPage />} />
        <Route path="/homepage" element={<Homepage />} />

        <Route path="*" element={<Navigate to="/homepage" />} />
    </Routes>
);
