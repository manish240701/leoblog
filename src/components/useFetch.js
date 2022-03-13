import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data,setData]=useState(null);
    const [isPending,setIsPending]=useState(true);
    const [error,setError]=useState(false);
    
    useEffect(()=>{
        const blogAbort=new AbortController();
        fetch(url,{signal: blogAbort.signal})
        .then((res)=>{
            if(!res.ok)
            {
                throw Error("Could not fetch data");
            }
            else{
                return res.json();
            }
        })
        .then((data)=>{
            setIsPending(false);
            setError(false);
            setData(data);
        })
        .catch((error)=>{
            if(error.name==="AbortError")
            {
                console.log('fetch aborted');
            }
            else{
                setIsPending(false)
                setError(error.message);
            }
        })
        return()=> blogAbort.abort();
    },[url])

    return {data,isPending,error}
}
 
export default useFetch;