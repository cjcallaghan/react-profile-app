import { useState, useEffect } from "react";

const useProfile = (id) => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        if (!id) return;

        fetch(`https://web.ics.purdue.edu/~ccallag/profile-app/fetch-data-with-id.php/?id=${id}`)
            .then((res) => res.json())
            .then((data) => setProfile(data))
            .catch((error) => console.error("Error fetching profile:", error));
    }, [id]);

    return profile;
};

export default useProfile;
