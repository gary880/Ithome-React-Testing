import axios from 'axios';
import { useState, useEffect } from 'react';

interface User {
    id: string;
    username: string;
}

function useFetchUsers() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchUsers = async () => {
        try {
            const result = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(result.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return {users, loading};
}

export default useFetchUsers;