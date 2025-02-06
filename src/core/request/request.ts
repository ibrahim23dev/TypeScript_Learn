import axios from "axios";
import { AppError } from "../middlewares/appError";


//get request

export const getRequest=async(url: string)=>{
    try {
        const response=await axios.get(url);
        const data=response.data;
        return {code:response.status,data}
    } catch (error: any) {
        console.error("Error Calling API:", error.response.status);
        return {code: error.response.status, data:[]};
        
    }
};

//post request

export const postRequest=async(url: string, requestData:any)=>{
    try {
        const response=await axios.post(url, requestData);
        return response.data;
    } catch (error: any) {
        console.log({error});

        if(error.response){
            console.error("Status Code:", error.response.status, ", Error:", error.message)

            throw new AppError(
                error.response.status,
                ",From Api Calling Error:",
                error.message
            );
           
        }
        
    }
};

//sebar GetRequest

export const SebarGetRequest=async(Apiurl:string)=>{
    try {
        const token="T1RLAQJczC8UTQWpHARNjKOvhEDJbiuZetq52faciNdj2+AOihCayeHJRRfF/PepWF8BkelMAADQTCPn2BovSTUN9ULrGI5gKaHmG1ErpNYHiv+u/7iKd+BwAZTpjt3cEGchTir3mGUDBMA7Tya/BHID2BsbrrwdTcW2e9eWhTtDONu2Hf/hps5Q53wNwNJasG7rwiGJkgCG8JQkPc59D+VjteoA95Q8hlJA+7QfxFnZ1J+mVLCKU2hOoAKfK9jMcJ7Ej2i2Ap1VXH6mXgC900ocmI6fd4uCy/ZBEKWotuvE2splah4awoah19Za67y7vppRUlV/PCOvqT+aOUmPgEml56Lu00ZGug**";
        const headers={
            Authorization:`Bearer ${token}`,
            "Content-Type": "application/json",
        };
        const response=await axios.get(Apiurl, {headers});
        const data=response.data;
        return {code: response.status, data};
        
    } catch (error: any) {
        console.error("Error calling API:", error.response.status)
        return {code: error.response.status, data:[]};
    }
};

//sebar PostRequest
export const SebarPostrequest=async(Apiurl:string, requestData:any)=>{
    try {
        const token="T1RLAQJczC8UTQWpHARNjKOvhEDJbiuZetq52faciNdj2+AOihCayeHJRRfF/PepWF8BkelMAADQTCPn2BovSTUN9ULrGI5gKaHmG1ErpNYHiv+u/7iKd+BwAZTpjt3cEGchTir3mGUDBMA7Tya/BHID2BsbrrwdTcW2e9eWhTtDONu2Hf/hps5Q53wNwNJasG7rwiGJkgCG8JQkPc59D+VjteoA95Q8hlJA+7QfxFnZ1J+mVLCKU2hOoAKfK9jMcJ7Ej2i2Ap1VXH6mXgC900ocmI6fd4uCy/ZBEKWotuvE2splah4awoah19Za67y7vppRUlV/PCOvqT+aOUmPgEml56Lu00ZGug**";

        const headers={
            Authorization:`Bearer ${token}`,
            "Content-Type": "application/json",
        };
        const response=await axios.post(Apiurl, requestData, {headers});
       return response.data;

    } catch (error: any) {
        console.log({error});
        return false;
    }
};