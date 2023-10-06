import { useState } from "react";
import { useMountEffect } from "./useMountEffect";
import { getProfile } from "../services/api";

export const useProfile = () => {
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState();

    useMountEffect (()=>{
        (async () => {
            const profileLoading = await getProfile();

            setProfile(profileLoading);
            setLoading(false);
        })();
    })

    return {profile, loading}
}