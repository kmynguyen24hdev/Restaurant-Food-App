import { fetchUser } from "../utils/fetchLocalStorageData"


// get user {} saved in localStorage
const userInfo = fetchUser()

export const initialStore = {
    user: userInfo,
    foodItems: null,
}