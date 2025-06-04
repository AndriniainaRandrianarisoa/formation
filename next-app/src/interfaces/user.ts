import { Posts } from "./posts"

export interface User {
    id  : number,
  email : string,
  name? : string
  posts: Posts[]
}