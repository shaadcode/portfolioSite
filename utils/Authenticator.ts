const accessKey : string = "hello"
// const accessKey : string = process.env.NEXT_PUBLIC_ADMIN_PASSWORD
export const getKey = () => {
    if(localStorage !== undefined){
        return localStorage.getItem("accessKey")
    }
}
export const setKey = () => { 
    if(localStorage !== undefined){
        return localStorage.setItem('accessKey' , accessKey)
    }
} 