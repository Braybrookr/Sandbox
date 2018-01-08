interface inspection {
    id: number,
    workOrderId: number,
    taskId: number,
    categories: Category[] | null,
}

interface Category {
    id: number,
    name: string,
    extendedText: string,
    sequence: number,
    tasks: Task[] | null
}

interface Task {
    id: number,
    name: number
    status: number | 0,
    sequence: number
}