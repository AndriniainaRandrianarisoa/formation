import { User } from "./user";

export interface Posts {
    id  : number,
  title : string,
  content? : string,
  published: boolean,
  authorId : number, 
  author : User
}

