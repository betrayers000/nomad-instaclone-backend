import client from "../client"

export default {
    Query: {
        seeProfile: (_, { userName }) => client.user.findFirst({
            where: {
                userName
            }
        })
    }
}