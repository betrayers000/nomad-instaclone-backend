import client from "../client"
import bcrypt from "bcrypt"

export default {
    Mutation: {
        createAccount: async (
            _,
            { firstName, lastName, userName, email, password }
        ) => {
            try {

                // check if username or email are already on DB
                const existingUser = await client.user.findFirst({
                    where: {
                        OR: [
                            {
                                userName,
                            },
                            {
                                email,
                            }
                        ]
                    }
                })
                console.log(existingUser)
                if (existingUser) {
                    throw new Error("This username/password is already taken.")
                }
                const hashedPassword = await bcrypt.hash(password, 10)
                return client.user.create({
                    data: {
                        userName,
                        email,
                        firstName,
                        lastName,
                        password: hashedPassword
                    }
                })
            } catch (e) {
                return e;
            }
        }
    }
}