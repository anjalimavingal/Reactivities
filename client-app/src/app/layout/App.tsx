import React, { useState, useEffect } from "react";
// import "./App.css";
import axios from "axios";
import { Container } from "semantic-ui-react";
import { Activity } from "../models/activity";
import NavBar from "./NavBar";
import ActivityDashboard from "../components/activities/dashboard/ActivityDashboard";
import { v4 as uuid } from "uuid";
function App() {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [selectedActivity, setSelectedActivity] = useState<
        Activity | undefined
    >(undefined);
    const [editMode, setEditMode] = useState(false);

    const handleSelectActivity = (id: string) => {
        setSelectedActivity(activities.find((item) => item.id === id));
    };

    const handleCancelSelectActivity = () => {
        setSelectedActivity(undefined);
    };

    const handleFormOpen = (id: string) => {
        id ? handleSelectActivity(id) : handleCancelSelectActivity();
        setEditMode(true);
    };
    const handleFormClose = () => {
        setEditMode(false);
    };
    const handleEditOrCreateActivity = (activity: Activity) => {
        activity.id
            ? setActivities([
                  ...activities.filter((item) => item.id !== activity.id),
                  activity,
              ])
            : setActivities([...activities, { ...activity, id: uuid() }]);
    };

    const handleDeleteActivity = (id: string) => {
        setActivities([...activities.filter((item) => item.id !== id)]);
    };

    useEffect(() => {
        axios
            .get<Activity[]>("http://localhost:5000/api/activities")
            .then((response) => {
                //console.log(response);
                setActivities(response.data);
            });
    }, []);

    return (
        <>
            {/* <Header as="h2" icon="users" content="Reactivities" /> */}
            <NavBar openForm={handleFormOpen} />
            <Container style={{ marginTop: "7em" }}>
                <ActivityDashboard
                    activities={activities}
                    selectedActivity={selectedActivity}
                    selectActivity={handleSelectActivity}
                    cancelSelectedActivity={handleCancelSelectActivity}
                    editMode={editMode}
                    openForm={handleFormOpen}
                    closeForm={handleFormClose}
                    createOrEdit={handleEditOrCreateActivity}
                    deleteActivity={handleDeleteActivity}
                />
            </Container>
        </>
    );
}

export default App;
