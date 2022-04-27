import { getCourseData } from "./getData";

export default class Requirement {
    constructor(reqJson) {
        if (reqJson) {
            this.id = reqJson.id;
            this.target = reqJson.target;
            this.progress = 0;
        }
    }

    update(course, isAdding = true) {
        if (course && course.majorReqs.includes(this.id)) {
            if (isAdding) this.progress++;
            else if (!isAdding) this.progress--;

            if (this.progress > this.target || this.progress < 0) return false;

            return true;
        }

        return false;
    }

    // toJSON() {
    //     return {
    //         id: this.id,
    //         progress: this.progress,
    //         target: this.target,
    //     };
    // }

    clone() {
        return new Requirement(this.getStatus());
    }
}
