import React, { useState, useEffect } from 'react';

// Sample data for clubs
const clubsData = {
    dance: {
        name: "Dance Club",
        description: "Promotes dance and creative movement.",
        image: "path_to_dance_image.jpg", // Replace with actual image URL or path
        testimonials: [
            "Being part of the Dance Club has changed my life! – Alice",
            "I love the community and creativity in our performances. – Bob",
        ],
        upcomingEvents: [
            { title: "Annual Dance Competition", date: "2024-12-01", winners: ["Alice", "Bob"] },
        ],
        pastEvents: [
            { title: "Spring Dance Festival", date: "2024-05-15", winners: ["Charlie", "Diana"] },
        ],
    },
    art: {
        name: "Art Club",
        description: "Encourages artistic expression and creativity.",
        image: "path_to_art_image.jpg", // Replace with actual image URL or path
        testimonials: [
            "The Art Club provided me a platform to express my creativity! – Eva",
            "I've learned so much and met amazing people! – Frank",
        ],
        upcomingEvents: [
            { title: "Art Exhibition", date: "2024-11-20", winners: ["Eva", "Frank"] },
        ],
        pastEvents: [
            { title: "Painting Contest", date: "2024-04-10", winners: ["Grace", "Henry"] },
        ],
    },
    // Add more clubs as needed
};

const ClubCard = ({ club }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [countdown, setCountdown] = useState('');

    useEffect(() => {
        const calculateCountdown = () => {
            const nextEvent = new Date(club.upcomingEvents[0]?.date);
            const now = new Date();
            const timeDiff = nextEvent - now;

            if (timeDiff > 0) {
                const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                setCountdown(`${days} days until the next event!`);
            } else {
                setCountdown('No upcoming events.');
            }
        };

        calculateCountdown();
        const interval = setInterval(calculateCountdown, 60000); // Update every minute

        return () => clearInterval(interval);
    }, [club.upcomingEvents]);

    return (
        <div style={{
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            margin: '20px',
            textAlign: 'center',
            maxWidth: '300px',
            backgroundColor: '#ffffff',
            transition: 'box-shadow 0.3s, transform 0.3s',
            cursor: 'pointer',
        }}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)';
                e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.transform = 'scale(1)';
            }}>
            <img src={club.image} alt={`${club.name}`} style={{ width: '100%', borderRadius: '8px', height: '180px', objectFit: 'cover' }} />
            <h3 style={{ color: '#333', marginBottom: '10px' }}>{club.name}</h3>
            <p style={{ color: '#666', marginBottom: '15px' }}>{club.description}</p>
            <p style={{ fontWeight: 'bold', color: '#007bff' }}>{countdown}</p>
            <button
                style={{
                    backgroundColor: '#007bff',
                    color: '#fff',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    transition: 'background-color 0.3s'
                }}
                onClick={() => setShowDetails(!showDetails)}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
            >
                {showDetails ? "Hide Details" : "Show Details"}
            </button>

            {showDetails && (
                <div style={{ marginTop: '20px', textAlign: 'left' }}>
                    <h4>Testimonials</h4>
                    {club.testimonials.map((test, index) => (
                        <p key={index} style={{ fontStyle: 'italic' }}>{test}</p>
                    ))}

                    <h4>Upcoming Events</h4>
                    {club.upcomingEvents.length === 0 ? (
                        <p>No upcoming events.</p>
                    ) : (
                        club.upcomingEvents.map((event, index) => (
                            <div key={index} style={{ marginBottom: '10px' }}>
                                <strong>{event.title}</strong>
                                <p>Date: {event.date}</p>
                            </div>
                        ))
                    )}

                    <h4>Past Events</h4>
                    {club.pastEvents.length === 0 ? (
                        <p>No past events.</p>
                    ) : (
                        club.pastEvents.map((event, index) => (
                            <div key={index} style={{ marginBottom: '10px' }}>
                                <strong>{event.title}</strong>
                                <p>Date: {event.date}</p>
                                <p>Winners: {event.winners.join(', ')}</p>
                            </div>
                        ))
                    )}

                    <h4>Follow Us</h4>
                    <a href={`https://www.instagram.com/${club.name}`} target="_blank" rel="noopener noreferrer">Instagram</a>
                    <br />
                    <a href={`https://www.facebook.com/${club.name}`} target="_blank" rel="noopener noreferrer">Facebook</a>
                </div>
            )}
        </div>
    );
};

const ClubActivity = () => {
    return (
        <div style={{ padding: '40px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
            <h1 style={{ textAlign: 'center', color: '#333' }}>Club Activities</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {Object.keys(clubsData).map((clubKey) => (
                    <ClubCard key={clubKey} club={clubsData[clubKey]} />
                ))}
            </div>
        </div>
    );
};

export default ClubActivity;
