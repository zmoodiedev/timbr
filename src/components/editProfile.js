import React from 'react';
import Button from './common/button';

import '../styles/editProfile.css';

const EditForm = ({ editedProfile, onEditSubmit, onEditCancel, onProfileChange }) => {

    
    return (

        <form onSubmit={onEditSubmit} className="profile-edit-form">

            <div className="form-group split">
                <div className="form-half">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        onChange={onProfileChange}
                        className="form-control"
                        value={editedProfile.username || ''}
                    />
                </div>

                <div className="form-half">
                    <label htmlFor="profilePic">Profile Picture</label>
                    <input
                        type="file"
                        name="profilePic"
                        onChange={onProfileChange}
                        className="form-control"
                    />
                </div>
            </div>

            <div className="form-group split">
                <div className="form-third">
                    <label htmlFor="birthdate">Birthdate</label>
                    <input
                        type="date"
                        name="birthdate"
                        value={editedProfile.birthdate || ''}
                        onChange={onProfileChange}
                        className="form-control"
                    />
                </div>

                <div className="form-third">
                    <label htmlFor="gender">Gender</label>
                    <select
                        id="gender"
                        name="gender"
                        value={editedProfile.gender || ''}
                        onChange={onProfileChange}
                        className="form-control"
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                            <option value="personal">Prefer not to say</option>
                    </select>
                </div>
                <div className="form-third">
                    <label htmlFor="location">Location</label>
                    <input
                        type="input"
                        name="location"
                        value={editedProfile.location || ''}
                        onChange={onProfileChange}
                        className="form-control"
                    />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="bio">Bio</label>
                <textarea
                    name="bio"
                    value={editedProfile.bio || ''}
                    onChange={onProfileChange}
                    className="form-control"
                />
            </div>

            <div className="form-btn-group">
                <Button className="btn" type="submit">Save Changes</Button>
                <Button className="btn" onClick={onEditCancel}>Cancel</Button>
            </div>
        </form>
    );
};

export default EditForm;