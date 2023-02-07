import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAction} from "../hooks/useAction";

const UserList: React.FC = () => {
    const {users, loading, error} = useTypedSelector(state => state.user)
    const {fetchUsers} = useAction();

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div>
            {loading && <p>Загрузка...</p>}
            {error && <p>{error}</p>}
            {users.map(user => <div key={user.id}>{user.name}</div>)}
        </div>
    );
};

export default UserList;