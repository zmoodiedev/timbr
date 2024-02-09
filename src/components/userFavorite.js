import React from 'react';
import Button from './common/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as fullHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as emptyHeart} from '@fortawesome/free-regular-svg-icons';
import { getAuth } from 'firebase/auth';

const UserFavorite = () => {

    const auth = getAuth();
    const loggedInUser = auth.currentUser;

    return (
        <Button className="favorite">
            { loggedInUser ? (
                <FontAwesomeIcon title="Favorite" icon={fullHeart} />
            ) : (
                <FontAwesomeIcon title="Favorite" icon={emptyHeart} />
            )}
        </Button>
        
    )
}

export default UserFavorite;