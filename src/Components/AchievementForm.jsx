import React, { useState } from 'react';

const AchievementForm = ({ onAddAchievement }) => {
    const [formData, setFormData] = useState({
        achievementType: '',
        serialNo: '',
        title: '',
        teamMembers: '',
        description: '',
        technologyUsed: '',
        conferenceDetails: '',
        startDate: '',
        endDate: '',
        outcomes: '',
        document: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, document: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add the new achievement to the list
        onAddAchievement(formData);
        // Reset the form
        setFormData({
            achievementType: '',
            serialNo: '',
            title: '',
            teamMembers: '',
            description: '',
            technologyUsed: '',
            conferenceDetails: '',
            startDate: '',
            endDate: '',
            outcomes: '',
            document: null,
        });
    };

    const renderConditionalFields = () => {
        switch (formData.achievementType) {
            case 'Project':
                return (
                    <>
                        <label style={styles.label}>Project Title</label>
                        <input type="text" name="title" onChange={handleChange} required style={styles.input} />

                        <label style={styles.label}>Project Team Members</label>
                        <input type="text" name="teamMembers" onChange={handleChange} required style={styles.input} />

                        <label style={styles.label}>Technology Used</label>
                        <input type="text" name="technologyUsed" onChange={handleChange} required style={styles.input} />

                        <label style={styles.label}>Conference/Publication Details</label>
                        <input type="text" name="conferenceDetails" onChange={handleChange} required style={styles.input} />
                    </>
                );
            case 'Patent':
                return (
                    <>
                        <label style={styles.label}>Patent Number</label>
                        <input type="text" name="serialNo" onChange={handleChange} required style={styles.input} />

                        <label style={styles.label}>Title of Invention</label>
                        <input type="text" name="title" onChange={handleChange} required style={styles.input} />

                        <label style={styles.label}>Inventors' Names</label>
                        <input type="text" name="teamMembers" onChange={handleChange} required style={styles.input} />

                        <label style={styles.label}>Patent Type</label>
                        <input type="text" name="paperType" onChange={handleChange} required style={styles.input} />
                    </>
                );
            case 'Paper Publication':
                return (
                    <>
                        <label style={styles.label}>S.No</label>
                        <input type="number" name="serialNo" onChange={handleChange} required style={styles.input} />

                        <label style={styles.label}>Paper Title</label>
                        <input type="text" name="title" onChange={handleChange} required style={styles.input} />

                        <label style={styles.label}>Authors Name</label>
                        <input type="text" name="teamMembers" onChange={handleChange} required style={styles.input} />

                        <label style={styles.label}>Journal Name</label>
                        <input type="text" name="conferenceDetails" onChange={handleChange} required style={styles.input} />
                    </>
                );
            case 'Hackathon':
                return (
                    <>
                        <label style={styles.label}>Project Title</label>
                        <input type="text" name="title" onChange={handleChange} required style={styles.input} />

                        <label style={styles.label}>Project Team Members</label>
                        <input type="text" name="teamMembers" onChange={handleChange} required style={styles.input} />

                        <label style={styles.label}>Technology Used</label>
                        <input type="text" name="technologyUsed" onChange={handleChange} required style={styles.input} />
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div style={styles.formContainer}>
            <h2 style={styles.formTitle}>Achievement Form</h2>
            <form onSubmit={handleSubmit}>
                <label style={styles.label}>Select Achievement Type</label>
                <select name="achievementType" value={formData.achievementType} onChange={handleChange} required style={styles.input}>
                    <option value="">Select...</option>
                    <option value="Project">Symposium</option>
                    <option value="Patent">Patent</option>
                    <option value="Paper Publication">Paper Publication</option>
                    <option value="Hackathon">Hackathon</option>
                </select>

                {renderConditionalFields()}

                <label style={styles.label}>Start Date</label>
                <input type="date" name="startDate" onChange={handleChange} required style={styles.input} />

                <label style={styles.label}>End Date</label>
                <input type="date" name="endDate" onChange={handleChange} required style={styles.input} />

                <label style={styles.label}>Outcomes</label>
                <input type="text" name="outcomes" onChange={handleChange} required style={styles.input} />

                <label style={styles.label}>Upload Document</label>
                <input type="file" onChange={handleFileChange} required style={styles.input} />

                <button type="submit" style={styles.button}>Submit</button>
            </form>
        </div>
    );
};

const styles = {
    formContainer: {
        width: '400px',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: 'white',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    },
    formTitle: {
        textAlign: 'center',
        color: '#003366',
    },
    label: {
        display: 'block',
        margin: '10px 0',
    },
    input: {
        width: '100%',
        padding: '10px',
        marginTop: '5px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    button: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default AchievementForm;
