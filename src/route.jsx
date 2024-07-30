import React from 'react';
import { Route, Routes } from "react-router-dom";
import LoginPage from './pages/teduhPages/LoginPage';
import HalamanUtama from './pages/teduhPages/HalamanUtama';
import RegisterPage from './pages/teduhPages/RegisterPage';
import DashboardLayout from './layouts/DashboardLayout';
import DashboardResponden from './pages/teduhPages/DashboardResponden';
import MateriPsikoedukasi from './pages/teduhPages/MateriPsikoedukasi';
import DataDiri from './pages/teduhPages/DataDiri';
import PraKuisioner from './pages/teduhPages/PraKuisioner';
import PostKuisioner from './pages/teduhPages/PostKuisioner';
import RiwayatKuisioner from './pages/teduhPages/RiwayatKuisioner';
import DashboardAdmin from './pages/teduhPages/DashboardAdmin';
import DetailResponden from './pages/teduhPages/DetailResponden';
import Persetujuan from './pages/teduhPages/Persetujuan';
import TerimaKasih from './pages/teduhPages/TerimaKasih';
import MateriProgramHappy from './pages/teduhPages/MateriProgramHappy';
import MateriProgramEdukasi from './pages/teduhPages/MateriProgramEdukasi';

export default function route() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<HalamanUtama />}/>
            <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<DashboardResponden />} />
                <Route path="admin" element={<DashboardAdmin />} />
                <Route path="detail-responden" element={<DetailResponden />} />
                <Route path="persetujuan" element={<Persetujuan />} />
                <Route path="psikoedukasi" element={<MateriPsikoedukasi />} />
                <Route path="program-happy" element={<MateriProgramHappy />} />
                <Route path="program-edukasi" element={<MateriProgramEdukasi />} />
                <Route path="datadiri" element={<DataDiri />} />
                <Route path="pra-kuisioner" element={<PraKuisioner />} />
                <Route path="post-kuisioner" element={<PostKuisioner />} />
                <Route path="riwayat-kuisioner" element={<RiwayatKuisioner />} />
                <Route path="terima-kasih" element={<TerimaKasih />} />
            </Route>
            <Route path="*" element={<HalamanUtama />} />
        </Routes>
    )
}