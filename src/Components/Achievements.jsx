import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import AchievementForm from './AchievementForm';

const Achievements = () => {
    const initialAchievements = [
        { type: 'Symposium', title: 'Symposium', details: ['Presented on AI trends'] },
        { type: 'Hackathon', title: 'Hackathons', details: ['Won 1st place in CodeFest'] },
        { type: 'Paper', title: 'Paper Published', details: ['Published in IEEE Journal'] },
        { type: 'Patent', title: 'Patent', details: ['Patent on Data Processing'] },
    ];

    const [achievements, setAchievements] = useState(initialAchievements);
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleAddAchievement = (newAchievement) => {
        setAchievements((prevAchievements) => [...prevAchievements, newAchievement]);
    };

    const toggleDetails = (index) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    return (
        <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', color: '#333', backgroundColor: '#f5f7fa', minHeight: '100vh' }}>
            <h2 style={{ color: '#2c3e50', textAlign: 'center', marginBottom: '30px' }}>My Achievements and Certifications</h2>

            <Link to="upload" style={{
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: '#3498db',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '5px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                transition: 'background-color 0.3s',
                textAlign: 'center'
            }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2980b9'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3498db'}>
                Upload Achievement
            </Link>

            <Routes>
                <Route path="upload" element={<AchievementForm onAddAchievement={handleAddAchievement} />} />
            </Routes>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginTop: '30px' }}>
                {achievements.map((achievement, index) => (
                    <div key={index} 
                         onClick={() => toggleDetails(index)}
                         style={{
                            backgroundColor: '#fff',
                            borderRadius: '10px',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                            padding: '20px',
                            border: '1px solid #e0e0e0',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            cursor: 'pointer',
                            textAlign: 'center'
                         }}
                         onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
                            e.currentTarget.style.transform = 'scale(1.05)';
                         }}
                         onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                            e.currentTarget.style.transform = 'scale(1)';
                         }}
                    >
                        <h3 style={{ color: '#34495e', marginBottom: '10px' }}>{achievement.title}</h3>
                        <p style={{ color: '#7f8c8d' }}>Click for details</p>
                        
                        {expandedIndex === index && (
                            <div style={{
                                marginTop: '10px',
                                color: '#2c3e50',
                                fontSize: '14px',
                                overflow: 'hidden',
                                animation: 'fadeIn 0.3s'
                            }}>
                                <h4 style={{ fontWeight: 'bold', color: '#3498db', marginBottom: '5px' }}>Details:</h4>
                                {achievement.details.length > 0 ? (
                                    <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                                        {achievement.details.map((detail, i) => (
                                            <li key={i} style={{ paddingBottom: '5px' }}>{detail}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>No additional details available.</p>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Achievements;
