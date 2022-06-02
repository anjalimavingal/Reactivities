import React, { useEffect } from "react";
// import "./App.css";
// import axios from "axios";
import { Container } from "semantic-ui-react";
//import { Activity } from "../models/activity";
import NavBar from "./NavBar";
import ActivityDashboard from "../components/activities/dashboard/ActivityDashboard";
//import Agent from "../api/Agent";
import LoaderComponent from "./LoaderComponent";
import { useStore } from "../stores/Store";
import { observer } from "mobx-react-lite";
function App() {
    const { activityStore } = useStore();
    //const [activities, setActivities] = useState<Activity[]>([]);
    // const [selectedActivity, setSelectedActivity] = useState<
    //     Activity | undefined
    // >(undefined);
    //const [editMode, setEditMode] = useState(false);
    //const [loading, setLoading] = useState(true);
    //const [submitting, setSubmitting] = useState(false);

    // const handleSelectActivity = (id: string) => {
    //     setSelectedActivity(activities.find((item) => item.id === id));
    // };

    // const handleCancelSelectActivity = () => {
    //     setSelectedActivity(undefined);
    // };

    // const handleFormOpen = (id: string) => {
    //     id ? handleSelectActivity(id) : handleCancelSelectActivity();
    //     setEditMode(true);
    // };
    // const handleFormClose = () => {
    //     setEditMode(false);
    // };
    // const handleEditOrCreateActivity = (activity: Activity) => {
    //     setSubmitting(true);
    //     if (activity.id) {
    //         Agent.Activities.update(activity).then(() => {
    //             setActivities([
    //                 ...activities.filter((item) => item.id !== activity.id),
    //                 activity,
    //             ]);
    //             //setSelectedActivity(activity);
    //             //setEditMode(false);
    //             setSubmitting(false);
    //         });
    //     } else {
    //         activity.id = uuid();
    //         Agent.Activities.create(activity).then(() => {
    //             setActivities([...activities, { ...activity }]);
    //             //setSelectedActivity(activity);
    //             //setEditMode(false);
    //             setSubmitting(false);
    //         });
    //     }
    //     // activity.id
    //     //     ? setActivities([
    //     //           ...activities.filter((item) => item.id !== activity.id),
    //     //           activity,
    //     //       ])
    //     //     : setActivities([...activities, { ...activity, id: uuid() }]);
    // };

    // const handleDeleteActivity = (id: string) => {
    //     setSubmitting(true);
    //     Agent.Activities.delete(id).then(() => {
    //         setActivities([...activities.filter((item) => item.id !== id)]);
    //         setSubmitting(false);
    //     });
    // };

    // useEffect(() => {
    //     // axios
    //     //     .get<Activity[]>("http://localhost:5000/api/activities")
    //     //     .then((response) => {
    //     //         //console.log(response);
    //     //         setActivities(response.data);
    //     //     });
    //     Agent.Activities.list().then((response) => {
    //         let activities: Activity[] = [];
    //         response.forEach((activity) => {
    //             activity.activityDate = activity.activityDate.split("T")[0];
    //             activities.push(activity);
    //         });
    //         setActivities(activities);
    //         setLoading(false);
    //     });
    // }, []);

    useEffect(() => {
        activityStore.loadActivities();
    }, [activityStore]);

    if (activityStore.loadingInitial)
        return <LoaderComponent content="Loading app"></LoaderComponent>;
    return (
        <>
            {/* <Header as="h2" icon="users" content="Reactivities" /> */}
            <NavBar />
            <Container style={{ marginTop: "7em" }}>
                {/* <h2>{activityStore.title}</h2> */}
                {/* <Button
                    content="Add exclamation"
                    positive
                    onClick={activityStore.setTitle}
                /> */}
                <ActivityDashboard />
            </Container>
        </>
    );
}

export default observer(App);
