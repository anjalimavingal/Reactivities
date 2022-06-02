import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
//import { Activity } from "../../../models/activity";
import { useStore } from "../../../stores/Store";

const ActivityForm = () => {
    const { activityStore } = useStore();
    const {
        selectedActivity,
        closeForm,
        createActivity,
        updateActivity,
        loading,
    } = activityStore;
    const initialState = selectedActivity
        ? selectedActivity
        : {
              id: "",
              title: "",
              activityDate: "",
              description: "",
              categoty: "",
              city: "",
              venue: "",
          };

    const [activity, setActivity] = useState(initialState);

    const handleSubmit = () => {
        activity.id ? updateActivity(activity) : createActivity(activity);
        //createOrEdit(activity);
    };

    const handleInputChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        console.log(event.target);
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value });
    };

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete="off">
                <Form.Input
                    placeholder="Title"
                    value={activity.title}
                    name="title"
                    onChange={handleInputChange}
                />
                <Form.TextArea
                    placeholder="Description"
                    value={activity.description}
                    name="description"
                    onChange={handleInputChange}
                />
                <Form.Input
                    placeholder="Category"
                    value={activity.categoty}
                    name="categoty"
                    onChange={handleInputChange}
                />
                <Form.Input
                    type="date"
                    placeholder="Date"
                    value={activity.activityDate}
                    name="activityDate"
                    onChange={handleInputChange}
                />
                <Form.Input
                    placeholder="City"
                    value={activity.city}
                    name="city"
                    onChange={handleInputChange}
                />
                <Form.Input
                    placeholder="Venue"
                    value={activity.venue}
                    name="venue"
                    onChange={handleInputChange}
                />
                <Button
                    floated="right"
                    positive
                    type="submit"
                    content="Submit"
                    loading={loading}
                />
                <Button
                    floated="right"
                    type="button"
                    content="Cancel"
                    onClick={closeForm}
                />
            </Form>
        </Segment>
    );
};

export default observer(ActivityForm);
