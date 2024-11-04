import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import StudentDashboard from './Components/DashboardStudent';
import Achievements from './Components/Achievements';
import ClubActivity from './Components/ClubActivity';

const App = () => {
    return (
        <div style={styles.appContainer}>
            <div style={styles.sidebar}>
                <h2 style={styles.sidebarTitle}>My Dashboard</h2>
                <Link to="/" style={styles.navButton}>Dashboard</Link>
                <Link to="/achievements" style={styles.navButton}>Achievements</Link>
                <Link to="/club-activity" style={styles.navButton}>Club Activities</Link>
            </div>
            <div style={styles.contentContainer}>
                <h1 style={styles.heading}>PRAGATI MITRA</h1>
                <Routes>
                    <Route path="/" element={<StudentDashboard />} />
                    <Route path="/achievements/*" element={<Achievements />} />
                    <Route path="/club-activity/*" element={<ClubActivity />} />
                </Routes>
            </div>
        </div>
    );
};

const styles = {
    appContainer: { display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5' },
    sidebar: { width: '200px', backgroundColor: '#333', color: '#fff', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' },
    sidebarTitle: { fontSize: '1.2em', marginBottom: '20px', color: '#fff' },
    navButton: { padding: '10px', margin: '5px 0', width: '100%', backgroundColor: '#444', color: '#fff', textDecoration: 'none', borderRadius: '5px', textAlign: 'center', transition: 'background-color 0.3s' },
    contentContainer: { flex: 1, padding: '20px', backgroundColor: '#fff' },
    heading: { color: '#333', textAlign: 'center', marginBottom: '20px' },
};

export default App;
