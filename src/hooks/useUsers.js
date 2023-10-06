import { useState } from "react";
import { useMountEffect } from "./useMountEffect";
import { getUsers } from "../services/api";

export const useUsers = () => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState();

    useMountEffect (()=>{
        (async () => {
            const nextUsers = await getUsers();

            setUsers(nextUsers);
            setLoading(false);
        })();
    })

    return {users, loading}
}