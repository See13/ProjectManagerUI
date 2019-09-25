export class Task {
    taskId: number;
    taskName: string;
    parent: Parent = new Parent();
    priority: number = 0;
    startDate: string;
    endDate: string;
    project: Project = new Project();
    user: User = new User();
    status: string;
}

export class Project {
    projectId: number;
    projectName: string;
    priority: number;
    startDate: Date;
    endDate: Date;
    status: number;
    user: User = new User();
    noOfTask: number;
    nofCompTask: number;
}

export class Parent {
    parentId: number;
    parentTask: string = '';

}

export class User {
    userId: number;
    firstName: string = '';
    lastName: string = '';
    employeeId: string = '';
}
