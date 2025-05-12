import {JSX} from "react";
import {Goal} from "../../types/goal";
import GoalCard from "../GoalCard/GoalCard";
import {useQuery, UseQueryOptions} from "@tanstack/react-query";
import type {QueryKey} from "@tanstack/query-core";


interface GoalsListProps {
    goals: Goal[]
}


function GoalsList(props:GoalsListProps):JSX.Element {
    const qKey=["moshe"] as const;
    type Ktype=typeof qKey
    const options:UseQueryOptions<Goal[],Error,Goal,Ktype>={queryKey:"moshe" as string,queryFn:fetchGoalsList}
    const query=useQuery(options)
    const {goals} = props;
    return (
        <div>
            {goals.map((goal:Goal,index)=><GoalCard goal={goal} id={goal.id}/>)}
        </div>
    )


}

export default GoalsList;