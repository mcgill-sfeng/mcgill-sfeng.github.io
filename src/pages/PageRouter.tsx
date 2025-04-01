import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { RpgPage } from './rpg';
import { PageLayout } from './PageLayout';

export const PageRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<PageLayout />}>
        <Route index element={<></>} />
        <Route path='rpg' element={<RpgPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
