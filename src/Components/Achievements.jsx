import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import AchievementForm from './AchievementForm';

const Achievements = () => {
    const initialAchievements = [
        { type: 'Symposium', title: 'Symposium', details: [] },
        { type: 'Hackathon', title: 'Hackathons', details: [] },
        { type: 'Paper', title: 'Paper Published', details: [] },
        { type: 'Patent', title: 'Patent', details: [] },
    ];

    const [achievements, setAchievements] = useState(initialAchievements);

    const handleAddAchievement = (newAchievement) => {
        setAchievements((prevAchievements) => [...prevAchievements, newAchievement]);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', color: '#333' }}>
            <h2>My Achievements and Certifications</h2>

            <Link to="upload" style={{ marginBottom: '20px', padding: '10px 15px', backgroundColor: '#4a90e2', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>
                Upload Achievement
            </Link>

            <Routes>
                <Route path="upload" element={<AchievementForm onAddAchievement={handleAddAchievement} />} />
            </Routes>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginTop: '30px' }}>
                {achievements.map((achievement, index) => (
                    <div key={index} style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px', border: '1px solid #e0e0e0' }}>
                        <h3>{achievement.title}</h3>
                        <p>Click for details</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Achievements;
