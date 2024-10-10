import { Contact } from "./contact";


export interface User {
  name: string,
  dateOfBirth: Date,
  contact?: Contact
}

export const DEFAULT_USER: User = {
  name: "Daril",
  dateOfBirth: new Date(),
  contact: {
    type: "email",
    value: "daril@gft.com"
  }
}