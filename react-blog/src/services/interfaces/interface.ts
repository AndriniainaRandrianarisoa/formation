export interface messageInterface {
  content: string,
  subject: string
}


export interface propsInterfaces  {
  prout: (message :messageInterface) => void
}


