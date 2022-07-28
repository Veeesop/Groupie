import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteInstructorCard from "./FavoriteInstructorCard";


export default function FavoriteInstructor(){
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch({
            type:'FETCH_FAVORITE_INSTRUCTOR'
        })
    },[])

    const favoriteInstructor = useSelector((store)=> store.favoriteInstructor)

    if (favoriteInstructor) {
        console.log(favoriteInstructor);
    }

    return (
        <div>
            <div>
                <h3>Favorite Instructors:</h3>
                { favoriteInstructor && favoriteInstructor.map(instructor=>(
                    <FavoriteInstructorCard instructor={instructor} />
                ))}
            </div>

        </div>
    )
}