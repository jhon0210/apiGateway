export enum RabbitMQ {
    UserQueue = 'users',
    TasksQueue = 'tasks',
}

export enum UserMSG{
    CREATE='CREATE_USER',
    FIND_ALL='FIND_USERS',
    UPDATE='UPDATE_USER',
    DELETE='DELETE_USER',
    VALID_USER='VALID_USER',
}

export enum TaskMSG{
    CREATE='CREATE_TASK',
    FIND_ALL='FIND_TASKS',
    UPDATE='UPDATE_TASK',
    DELETE='DELETE_TASK',
    VALID_USER='VALID_TASK',
}