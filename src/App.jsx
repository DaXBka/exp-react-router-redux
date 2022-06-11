import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AboutPage from './pages/AboutPage';
import AboutPostPage from './pages/AboutPostPage';
import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import FaqPage from './pages/FaqPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
    return (
        <Routes>
            <Route path="" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="about/:id" element={<AboutPostPage />} />
                <Route path="contacts" element={<ContactsPage />} />
                <Route path="faq" element={<FaqPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}

export default App;
