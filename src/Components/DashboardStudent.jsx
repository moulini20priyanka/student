import React, { useState } from 'react';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('academic');
    const [isEditingProfile, setIsEditingProfile] = useState(false);
    const [isEditingAcademic, setIsEditingAcademic] = useState(false);

    const [userData, setUserData] = useState({
        username: 'Name',
        registrationNumber: 'ABC123',
        email: 'user@example.com',
        phone: '+1234567890',
        gender: 'Male',
        dob: 'January 1, 2000',
        tag: 'Example Tag',
        status: 'Approved', 
    });

    const [academicData, setAcademicData] = useState({
        tenth: '',
        twelfth: '',
        diploma: '',
        underGraduate: '',
        postGraduate: '',
        backlogsHistory: '',
        currentBacklogs: '',
        interestedInPlacement: '',
        workExperience: ''
    });

    const handleEditProfile = () => {
        setIsEditingProfile(true);
    };

    const handleSaveProfile = () => {
        setIsEditingProfile(false);
    };

    const handleEditAcademic = () => {
        setIsEditingAcademic(true);
    };

    const handleSaveAcademic = () => {
        setIsEditingAcademic(false);
    };

    const handleChangeProfile = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleChangeAcademic = (e) => {
        const { name, value } = e.target;
        setAcademicData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const renderContent = () => {
        if (activeTab === 'academic') {
            return (
                <div style={styles.card}>
                    <h2>Academic Information</h2>
                    <table style={styles.table}>
                        <tbody>
                            {Object.keys(academicData).map((key, index) => (
                                <tr key={index}>
                                    <td style={styles.tableCell}><strong>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:</strong></td>
                                    <td style={styles.tableCell}>
                                        {isEditingAcademic ? (
                                            <input
                                                type="text"
                                                name={key}
                                                value={academicData[key]}
                                                onChange={handleChangeAcademic}
                                                style={styles.input}
                                            />
                                        ) : (
                                            academicData[key] || 'N/A'
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div style={styles.buttonGroup}>
                        {isEditingAcademic ? (
                            <button onClick={handleSaveAcademic} style={styles.saveButton}>Save</button>
                        ) : (
                            <button onClick={handleEditAcademic} style={styles.editButton}>Edit</button>
                        )}
                    </div>
                </div>
            );
        } else if (activeTab === 'additional') {
            return (
                <div style={styles.card}>
                    <h2>Personal Information</h2>
                    <table style={styles.table}>
                        <tbody>
                            {Object.keys(userData).map((key, index) => (
                                <tr key={index}>
                                    <td style={styles.tableCell}><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong></td>
                                    <td style={styles.tableCell}>
                                        {isEditingProfile ? (
                                            <input
                                                type="text"
                                                name={key}
                                                value={userData[key]}
                                                onChange={handleChangeProfile}
                                                style={styles.input}
                                            />
                                        ) : (
                                            userData[key]
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div style={styles.buttonGroup}>
                        {isEditingProfile ? (
                            <button onClick={handleSaveProfile} style={styles.saveButton}>Save</button>
                        ) : (
                            <button onClick={handleEditProfile} style={styles.editButton}>Edit</button>
                        )}
                    </div>
                </div>
            );
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.sidebar}>
                <div style={styles.statusContainer}>
                    <div style={styles.lockIcon}>
                        <i className="fas fa-lock"></i> 
                    </div>
                    <h3 style={styles.username}>{userData.username}</h3>
                    <p style={styles.approvalStatus}>{userData.status}</p>
                </div>
                <p><strong>Registration Number:</strong> {userData.registrationNumber}</p>
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Phone:</strong> {userData.phone}</p>
                <p><strong>Gender:</strong> {userData.gender}</p>
                <p><strong>Date of Birth:</strong> {userData.dob}</p>
                <p><strong>Tag:</strong> {userData.tag}</p>
            </div>
            <div style={styles.mainContent}>
                <div style={styles.tabContainer}>
                    <button
                        onClick={() => setActiveTab('academic')}
                        style={activeTab === 'academic' ? styles.activeTab : styles.tab}
                    >
                        Academic Information
                    </button>
                    <button
                        onClick={() => setActiveTab('additional')}
                        style={activeTab === 'additional' ? styles.activeTab : styles.tab}
                    >
                        Additional Information
                    </button>
                </div>
                <div style={styles.content}>
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        minHeight: '100vh',
        backgroundColor: '#f9fafe',
    },
    sidebar: {
        width: '300px',
        padding: '20px',
        backgroundColor: '#ffffff',
        boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
        lineHeight: '1.6',
        flexShrink: 0,
        borderRadius: '10px',
        margin: '10px',
    },
    statusContainer: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    lockIcon: {
        fontSize: '40px',
        color: '#007bff',
        marginBottom: '10px',
    },
    username: {
        fontWeight: 'bold',
        fontSize: '20px',
        color: '#333',
        margin: '0',
    },
    approvalStatus: {
        color: '#28a745',
        margin: '0',
    },
    mainContent: {
        flex: 1,
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
    },
    tabContainer: {
        display: 'flex',
        marginBottom: '20px',
    },
    tab: {
        padding: '10px 20px',
        marginRight: '10px',
        border: '1px solid #ccc',
        cursor: 'pointer',
        backgroundColor: '#f1f1f1',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease',
    },
    activeTab: {
        padding: '10px 20px',
        marginRight: '10px',
        border: '1px solid #007bff',
        cursor: 'pointer',
        backgroundColor: '#007bff',
        color: '#fff',
        borderRadius: '5px',
    },
    content: {
        padding: '20px',
        flex: 1,
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        marginBottom: '20px',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    tableCell: {
        padding: '12px',
        borderBottom: '1px solid #ddd',
        textAlign: 'left',
        verticalAlign: 'top',
    },
    input: {
        width: '100%',
        padding: '8px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        boxSizing: 'border-box',
    },
    editButton: {
        marginRight: '10px',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    saveButton: {
        padding: '10px 20px',
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    buttonGroup: {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'flex-end',
    },
};

export default Dashboard;
