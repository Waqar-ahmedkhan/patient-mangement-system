 import { z } from "zod"

export const UserValidationForm  = z.object({
  username: z.string().min(2, { message: "Username must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  number: z.number({ message: "Invalid phone number." }),

})