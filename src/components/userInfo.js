import React from 'react';
import Button from './common/button';
import EditForm from './editProfile';


const UserInfo = ({ userProfile, isOwnProfile, isEditMode, onEditClick, onEditSubmit, onEditCancel, editedProfile, onProfileChange }) => {
    return (
        <div id="userInfo">
            <h1>Member Profile</h1>
            
            {isOwnProfile && (
                !isEditMode ? (
                    <>
                        <h3>Bio</h3>
                        <p>{userProfile.bio || "There is no bio for this user yet."}</p>
                        <Button className="btn" onClick={onEditClick}>Edit Profile</Button>
                    </>
                ) : (
                    <EditForm
                        editedProfile={editedProfile}
                        onEditSubmit={onEditSubmit}
                        onEditCancel={onEditCancel}
                        onProfileChange={onProfileChange}
                    />
                )
            )}
        </div>
    );
};

export default UserInfo;