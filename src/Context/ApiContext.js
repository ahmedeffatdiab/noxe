import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ApiContext=createContext(0);
function  ApiContextProvider(props){
    const [dataApi,setDataApi]=useState([])
    const [pageCount,setPageCount]=useState(0);
    async function getDataApi(){
        let res=await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar');
        setDataApi(res.data.results);
        if(res.data.total_pages >=500){
            setPageCount(500);
        }else{
            setPageCount(res.data.total_pages);
        }
    }
    const searchByQuery=async(word)=>{
        if(word==""){
            getDataApi();
        }else{
            let res=await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`)
            setDataApi(res.data.results);
            setPageCount(res.data.page)
    
        }
    }
    const getPage=async(pageNum)=>{
        const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${pageNum}`)
        setDataApi(res.data.results);
        if(res.data.total_pages >=500){
            setPageCount(500);
        }else{
            setPageCount(res.data.total_pages);
        }
    }
    useEffect(()=>{
        getDataApi();

    },[])
    return <ApiContext.Provider value={{dataApi,pageCount,getPage,searchByQuery}}>
        {props.children}
    </ApiContext.Provider>
}
export default ApiContextProvider;