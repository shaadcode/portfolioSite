"use server"

import { APIs } from "@/services/API"
import axios from "axios"

const SetUserMessage = async (e : FormData) => {
    const userName = e.get("userName")?.toString()
    const userTell = e.get("userTell")?.toString()
    const userText = e.get("userMessage")?.toString()

        axios.post(`${process.env.NEXT_PUBLIC_BASE_URL_API}${APIs.customAPIs.usersMessage}` , {
            userName,
            userTell,
            userText,
            time: `${Date().slice(0, 24)}`
        })
}

export default SetUserMessage