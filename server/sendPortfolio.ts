"use server"

import { TformData } from "@/constants/types"
import axios from "axios"

export const sendPortfolio =  async (formData : TformData | undefined) => {

    axios.post(`${process.env.NEXT_PUBLIC_BASE_URL_API}/portfolios` , formData)

}