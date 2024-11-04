import React from 'react';
import StudentDashboard from './Components/DashboardStudent';

const App = () => {
    return (
        <div style={styles.appContainer}>
            <h1 style={styles.heading}>Welcome to Your Dashboard</h1>
            <StudentDashboard />
            {/* Other components can be added here */}
        </div>
    );
};

const styles = {
    appContainer: {
        padding: '20px',
        backgroundColor: '#f1f1f1',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
    },
    heading: {
        color: '#333',
        textAlign: 'center',
        marginBottom: '20px',
    },
};

export default App;
