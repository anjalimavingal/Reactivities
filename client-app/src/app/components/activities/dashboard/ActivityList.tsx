import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
//import { Activity } from "../../../models/activity";
import { useStore } from "../../../stores/Store";

const ActivityList = () => {
    const { activityStore } = useStore();
    const {
        selectActivity,
        loading,
        deleteActivity,
        activitiesByDate,
    } = activityStore;
    const [target, setTarget] = useState("");
    const handleActivityDelete = (
        e: SyntheticEvent<HTMLButtonElement>,
        id: string
    ) => {
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    };

    return (
        <Segment>
            <Item.Group divided>
                {activitiesByDate.map((activity) => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as="a">{activity.title}</Item.Header>
                            <Item.Meta>{activity.activityDate}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>
                                    {activity.city},{activity.venue}
                                </div>
                            </Item.Description>
                            <Item.Extra>
                                <Button
                                    floated="right"
                                    color="blue"
                                    content="View"
                                    onClick={() => selectActivity(activity.id)}
                                />
                                <Button
                                    floated="right"
                                    color="red"
                                    content="Delete"
                                    onClick={(e) =>
                                        handleActivityDelete(e, activity.id)
                                    }
                                    loading={loading && target === activity.id}
                                    name={activity.id}
                                />
                                <Label basic content={activity.categoty} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    );
};

export default observer(ActivityList);
