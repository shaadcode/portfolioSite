

import axios from "axios";

export const updatePortsInDB = async (userId: number) => {
    try {
        const response = await axios.delete(
            `${process.env.NEXT_PUBLIC_BASE_URL_API}/portfolios/${userId}`
        );
        console.log(response);
        return response;
    } catch (err) {
        console.error(err);
        return err;
    }
};
