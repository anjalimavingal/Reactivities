import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import { Activity } from "../../../models/activity";
interface Props {
    activity: Activity;
    cancelSelectedActivity: () => void;
    openForm: (id: string) => void;
}
const ActivityDetails = ({
    activity,
    cancelSelectedActivity,
    openForm,
}: Props) => {
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

export default ActivityDetails;
