import {CardHeader, CardContent, Card, CardActions, FormControlLabel, Checkbox, IconButton} from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {JSX} from "react";
import {Goal} from "@shared";
import { styled } from '@mui/material/styles';
import {boolean} from "zod";
import {updateGoalFavorite} from "../../api/goalsApi";


interface GoalCardProps {
    goal:Goal,
    id:number
}


const StyledFavoriteIcon = styled(FavoriteBorderIcon)<{$active:boolean}>(({$active,theme}) => ({
    ...($active && {
        'color':"red"
    })
}));

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
            <IconButton color="secondary" aria-label="Favourite" onClick={(e)=>{updateGoalFavorite(goal.id,true)}} disabled={false} loading={false}>
                <StyledFavoriteIcon $active={goal.isFavourite}/>
            </IconButton>
        </CardActions>
    </Card>)
}

export default GoalCard;