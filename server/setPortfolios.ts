import { TformData } from "@/constants/types"
import axios from "axios"

export const setPortfolio =  async (portfolios : TformData[]) => {
    

    try {
        const response = axios.post(`${process.env.NEXT_PUBLIC_BASE_URL_API}/portfolios` , portfolios)

        return response
    } catch (error) {
        return error.message
    }
}