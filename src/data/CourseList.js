import { getCourseData } from "./getData";

export default class CourseList {
    constructor() {
        this.courses = [];
    }

    addCourseObject(course) {
        if (course.id) {
            this.courses[course.id] = course;
            return true;
        }

        return false;
    }

    addCourseById(courseId) {
        if (courseId) {
            const match = getCourseData(courseId);

            if (match) {
                this.courses[courseId] = match;
                return match;
            }
        }
        return false;
    }

    removeCourseById(courseId) {
        if (this.courses[courseId]) {
            this.courses[courseId] = null;
            return true;
        }
        return false;
    }

    has(id) {
        if (this.courses[id]) return true;
        return false;
    }

    get(id) {
        if (this.courses[id]) {
            return this.courses[id];
        }
        return false;
    }
}