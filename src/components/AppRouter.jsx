import { Route, Routes } from 'react-router-dom';
import LogIn from '../pages/LogIn';
import Notes from '../pages/private/Notes';
import Archives from '../pages/private/Archives';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Notes />} />
      <Route path="archives" element={<Archives />} />
      <Route path="log-in" element={<LogIn />} />
    </Routes>
  );
};

export default AppRouter;
