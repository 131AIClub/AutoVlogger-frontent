export {}

declare global {
  type User = {
    userId: number
    username: string
    point: number
    superUser: boolean
  }

  type ClipRequirement = {
    videoType: number
    clipStyle: number
    clipLength: number
    clipNum: number
    otherRequirement: string
  }

  type Task = {
    taskId: number
    taskStatus: number
    taskCreateTime: number
    clipRequirement: ClipRequirement
    videoId: number
  }
}
