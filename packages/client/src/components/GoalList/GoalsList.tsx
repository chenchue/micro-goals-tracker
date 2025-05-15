import {JSX} from "react";
import {useQuery} from "@tanstack/react-query";
import {getGoals} from "../../api/goalsApi";
import GoalCard from "../GoalCard/GoalCard";

const GoalsList=():JSX.Element=>{
    const { isLoading, isError,isSuccess, data:goals,refetch } = useQuery({
        queryKey: ['goals'],
        queryFn: getGoals})

    return (
        <div>
            {isLoading&&<div>Loading...</div>}
            {isError&&<div>Error...</div>}
        {isSuccess&&goals&&goals.map((goal)=><GoalCard goal={goal} id={goal.id}/>)}
        </div>
    )
}


export default GoalsList;