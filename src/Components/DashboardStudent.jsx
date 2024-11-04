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
        status: 'Approved', // Added status field  
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
        // Logic to save user profile data  
    };  

    const handleEditAcademic = () => {  
        setIsEditingAcademic(true);  
    };  

    const handleSaveAcademic = () => {  
        setIsEditingAcademic(false);  
        // Logic to save academic data  
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
                <div>  
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
                <div>  
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
                        <i className="fas fa-lock"></i> {/* FontAwesome Lock Icon */}  
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
    },  
    sidebar: {  
        width: '250px',  
        padding: '20px',  
        backgroundColor: '#f0f4f8',  
        borderRight: '1px solid #ddd',  
        lineHeight: '1.6',  
        flexShrink: 0,  
    },  
    statusContainer: {  
        textAlign: 'center',  
        marginBottom: '20px',  
    },  
    lockIcon: {  
        fontSize: '40px',  
        marginBottom: '10px',  
    },  
    username: {  
        fontWeight: 'bold',  
        fontSize: '18px',  
        margin: '0',  
    },  
    approvalStatus: {  
        color: 'green',  
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
        backgroundColor: '#f9f9f9',  
        borderRadius: '5px',  
        transition: 'background-color 0.3s',  
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
        border: '1px solid #ccc',  
        borderRadius: '5px',  
        backgroundColor: '#fff',  
        flex: 1,  
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
        padding: '5px',  
        border: '1px solid #ccc',  
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
    },  
    saveButton: {  
        padding: '10px 20px',  
        backgroundColor: '#28a745',  
        color: '#fff',  
        border: 'none',  
        borderRadius: '5px',  
        cursor: 'pointer',  
    },  
    buttonGroup: {  
        marginTop: '15px',  
    },  
};  

// Export the Dashboard component  
export default Dashboard;