import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import { Link } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import WorkoutPage from '../WorkoutPage/WorkoutPage';
import ExercisePage from '../ExercisePage/ExercisePage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <h1>Welcome to your workout app!</h1>
          <Routes>
            {/* Route components in here */}
            <Route path="/workouts" element={<WorkoutPage />} />
            <Route path="/exercise" element={<ExercisePage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
