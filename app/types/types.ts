export interface User {
  username: string
  name: string
  avatarUrl: string
}

export interface Task {
    id: number
    title: string
}

export interface Project {
    id: number
    name: string
    todo: Task[]
    inProgress: Task[]
    done: Task[]
}