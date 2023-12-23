import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {useState,useEffect} from 'react'
const API_KEY="27da3223"
const Cont1=styled.div`
display:flex;

justify-content:center;
margin-left:20px;
margin-right:20px;
margin-bottom:20px;
margin-top:20px;
padding:5px;
border-bottom-style:solid;
border-bottom-color:antiquewhite;

`
const Cont2=styled.img`

height:352px;

object-fit:cover;
margin-right:20px;

`
const Cont3=styled.div`
display:flex;
flex-direction:column;

`
const Cont31=styled.div`
text-transform:capitalize;
font-weight:bold;`

const Cont32=styled.div`
  font-weight:bold;
  & span{
    opacity:0.5;
  }
  text-overflow:ellipsis;
  overflow:hidden;
  margin:2px;
`
const Cont4=styled.div`
   padding:10px;
   font-weight:bold;
`

export const MovieInfocomponent = (props) => {
  const [data,moviedata]=useState();
  const {selectedMovie}=props;
  useEffect(()=>{axios.get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`).then((response)=>{moviedata(response.data)})},[selectedMovie]);

  return (
           <Cont1>
            {data?<>
            <Cont2 src={data?.Poster} />
            <Cont3>
                <Cont31>
                  movie:{data?.Title}
                </Cont31>
                <Cont32>
                    IMDB Rating:<span>{data?.imdbRating}</span>  
                </Cont32>
                <Cont32>
                    Year:<span>{data?.Year}</span>  
                </Cont32>
                <Cont32>
                    Language:<span>{data?.Language}</span>  
                </Cont32>
                <Cont32>
                    Rated:<span>{data?.Rated}</span>  
                </Cont32>
                <Cont32>
                    Released:<span>{data?.Released}</span>  
                </Cont32>
                <Cont32>
                    Genre:<span>{data?.Genre}</span>  
                </Cont32>
                <Cont32>
                   Director:<span>{data?.Director}</span>  
                </Cont32>
                <Cont32>
                    Actors:<span>{data?.Actors}</span>  
                </Cont32>
                <Cont32>
                   Plot:<span>{data?.Plot}</span>  
                </Cont32>
            </Cont3>
            <Cont4 onClick={()=>props.onMovieselect()}>X</Cont4></>:"Loading..."}
           </Cont1>
    
  )
}

