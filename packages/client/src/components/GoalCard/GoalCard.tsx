import {CardHeader, CardContent, Card, CardActions, FormControlLabel, Checkbox} from '@mui/material'
import {JSX} from "react";
import {Goal} from "../../types/goal";

interface GoalCardProps {
    goal:Goal,
    id:number
}

function GoalCard(props:GoalCardProps):JSX.Element {
    const {goal} = props;
    return (<Card >
<CardHeader title={goal.title} subheader={goal.category}/>
        <CardContent><div>{goal.description}</div></CardContent>
        <CardActions>
            <FormControlLabel
                required
                control={
                            <Checkbox
                                checked={goal.isDone}
                                onChange={()=>{}}
                            />
                }
                label="Is Done"
            />
        </CardActions>
    </Card>)
}

export default GoalCard;