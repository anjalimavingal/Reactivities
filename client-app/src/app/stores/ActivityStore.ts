import {
    action,
    makeAutoObservable,
    makeObservable,
    observable,
    runInAction,
} from "mobx";
import Agent from "../api/Agent";
import { Activity } from "../models/activity";
import { v4 as uuid } from "uuid";
export default class ActivityStore {
    //title = "Hello from Mobx!";
    //activities: Activity[] = [];
    activityRegistry = new Map<string, Activity>();
    selectedActivity: Activity | undefined = undefined;
    editMode: boolean = false;
    loading: boolean = false;
    loadingInitial = true;
    constructor() {
        // makeObservable(this, {
        //     title: observable,
        //     setTitle: action,
        // });
        makeAutoObservable(this);
    }

    // setTitle = () => {
    //     this.title = this.title + "!";
    // };
    get activitiesByDate() {
        return Array.from(this.activityRegistry.values()).sort(
            (a, b) => Date.parse(a.activityDate) - Date.parse(b.activityDate)
        );
    }

    loadActivities = async () => {
        //this.loadingInitial = true;
        //this.setLoadngInitial(true);
        try {
            const activities = await Agent.Activities.list();
            runInAction(() => {
                activities.forEach((activity) => {
                    activity.activityDate = activity.activityDate.split("T")[0];
                    //this.activities.push(activity); //instead of this use below map function
                    this.activityRegistry.set(activity.id, activity);
                    //this.loadingInitial = false;
                    this.setLoadngInitial(false);
                    //console.log(this.activities);
                });
            });
        } catch (error) {
            console.log(error);
            runInAction(() => {
                //this.loadingInitial = false;
                this.setLoadngInitial(false);
            });
        }
    };

    setLoadngInitial = (status: boolean) => {
        this.loadingInitial = status;
    };

    selectActivity = (id: string) => {
        //this.selectedActivity = this.activities.find((item) => (item.id = id));
        this.selectedActivity = this.activityRegistry.get(id);
    };

    cancelSelectedActivity = () => {
        this.selectedActivity = undefined;
    };

    openForm = (id?: string) => {
        id ? this.selectActivity(id) : this.cancelSelectedActivity();
        this.editMode = true;
    };

    closeForm = () => {
        this.editMode = false;
    };

    createActivity = async (activity: Activity) => {
        this.loading = true;
        activity.id = uuid();
        try {
            await Agent.Activities.create(activity);
            runInAction(() => {
                //this.activities.push(activity);
                this.activityRegistry.set(activity.id, activity);
                this.selectedActivity = activity;
                this.editMode = false;
                this.loading = false;
            });
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            });
        }
    };

    updateActivity = async (activity: Activity) => {
        this.loading = true;
        try {
            await Agent.Activities.update(activity);
            runInAction(() => {
                // //this.activities.filter((item) => item.id !== activity.id);
                // //this.activities.push(activity);

                // this.activities = [
                //     ...this.activities.filter(
                //         (item) => item.id !== activity.id
                //     ),
                //     activity,
                // ];

                this.activityRegistry.set(activity.id, activity);
                this.selectedActivity = activity;
                this.editMode = false;
                this.loading = false;
            });
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            });
        }
    };

    deleteActivity = async (id: string) => {
        this.loading = true;
        try {
            await Agent.Activities.delete(id);
            runInAction(() => {
                // this.activities = [
                //     ...this.activities.filter((item) => item.id !== id),
                // ];
                this.activityRegistry.delete(id);
                if (
                    this.selectedActivity != null &&
                    this.selectedActivity.id === id
                )
                    this.cancelSelectedActivity();
                this.loading = false;
            });
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            });
        }
    };
}
