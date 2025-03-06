import {useEffect, useReducer} from "react";
import {initialState, homeReducer} from "../reducers/homeReducer"

function useHomepageAPI() {

    const [state, dispatch] = useReducer(homeReducer, initialState);
    const {title, search, page} = state

    useEffect(() => {
        fetch("https://web.ics.purdue.edu/~ccallag/profile-app/get-titles.php")
            .then(res => res.json())
            .then((data) => {
                // setTitles(data.titles)
                dispatch({ type: "SET_TITLES", payload: data.titles })
            });
    }, [])

    useEffect(() => {
        fetch(`https://web.ics.purdue.edu/~ccallag/profile-app/fetch-data-with-filter.php?title=${title}&name=${search}&page=${page}&limit=10`)
            .then(res => res.json())
            .then((data) => {
                // setProfiles(data.profiles)
                // setCount(data.count)
                // setPage(data.page)
                dispatch({ type: "FETCH_DATA", payload: data })
            });
    }, [title, search, page])

    return {dispatch, state};
}
export default useHomepageAPI;