import axios from "axios"

// "use server"
export const updateUsersInDB = async (userId : number) => {
    try {
        const response = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL_API}/allUserMessage/${userId}`)
        console.log(response)
        return response
    } catch (err) {
        console.log(err)
        return err
    }
}