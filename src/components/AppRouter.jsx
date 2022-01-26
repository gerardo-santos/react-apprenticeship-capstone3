import { Route, Routes } from 'react-router-dom';
import LogIn from '../pages/LogIn';
import Notes from '../pages/private/Notes';
import Archives from '../pages/private/Archives';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Notes />
          </PrivateRoute>
        }
      />
      <Route
        path="archives"
        element={
          <PrivateRoute>
            <Archives />
          </PrivateRoute>
        }
      />
      <Route path="log-in" element={<LogIn />} />
    </Routes>
  );
};

export default AppRouter;
