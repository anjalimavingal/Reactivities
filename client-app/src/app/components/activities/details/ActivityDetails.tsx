import { observer } from "mobx-react-lite";
import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import LoaderComponent from "../../../layout/LoaderComponent";
import { useStore } from "../../../stores/Store";

const ActivityDetails = () => {
    const { activityStore } = useStore();
    const {
        selectedActivity: activity,
        openForm,
        cancelSelectedActivity,
    } = activityStore;
    if (!activity) return <LoaderComponent />;
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.categoty}.jpg`} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>{activity.activityDate}</Card.Meta>
                <Card.Description>{activity.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths="2">
                    <Button
                        onClick={() => {
                            openForm(activity.id);
                        }}
                        basic
                        color="blue"
                        content="Edit"
                    />
                    <Button
                        basic
                        color="grey"
                        content="Cancel"
                        onClick={cancelSelectedActivity}
                    />
                </Button.Group>
            </Card.Content>
        </Card>
    );
};

export default observer(ActivityDetails);
