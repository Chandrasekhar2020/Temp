import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import {useState,useEffect} from 'react'
import MovieComponent from './Component/MovieComponent';
import {MovieInfocomponent} from './Component/MovieInfocomponent' 
import axios from 'axios'
const API_KEY="27da3223";

const Container=styled.div`
display:flex;
flex-direction:column;
`
const Header=styled.div`
display:flex;
background-color:black;
color:white;
align-items:center;
justify-content:space-between;
height:100px;
`
const Cont1=styled.div`
display:flex;
flex-direction:row;
align-items:center;   
`
const Appname=styled.div`
display:flex;
font-weight:bold;
font-size:20px;   
`
const Img=styled.img`
display:flex;
   width:54px;
   height:54px;
   object-fit:cover;  
  `
  const Img1=styled.img`
  display:flex;
   width:30px;
   height:30px;
   object-fit:cover; 
  `
  const Cont2=styled.div`
    diplay:flex;
    border-radius:15px;
    width:30%;
    margin-right:30px;
    border-radius:10px;
  `
  const Search=styled.div`
  display:flex;
  text:black;
  background-color:white;
  height:35px;
  align-items:center;
  border-radius:5px; 
  border:none;
  `
  const Inpu=styled.input`
  display:flex;
  background-color:white;
  border-radius:15px;
  height:20px;
  border:none;
  outline:none; 
  `
  const MovieContainer=styled.div`
     display:flex;
     flex-direction:row;
     flex-wrap:wrap;
     padding:20px;
     margin:10px;
     justify-content:space-evenly;

  `
  const Emp=styled.img`
  display:flex;
  height:500px;
  width:500px;
  object-fit:cover;
  justify-content:center;
  
  `

  

  


function App() {
  const [searchQuery,updateQuery]=useState();
  const [movieList,updateList]=useState([]);
  const [timeeid,updatetimeid]=useState();
  const [selectedMovie,onMovieselect]=useState();
  const Getdata=async(search)=>{
    const response=await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`)
    updateList(response.data.Search);
  }
 const changeHandler=(e)=>{
    clearTimeout(timeeid);
    updateQuery(e.target.value);
    const timeid= setTimeout(()=>Getdata(e.target.value),500);
    updatetimeid(timeid);
 }
  return (
    <Container>
      <Header>
        <Cont1>
       <Img src="https://cdn-icons-png.flaticon.com/512/2503/2503508.png" />
      <Appname> 
        Movie Catalog
      </Appname>
      </Cont1>
      <Cont2>
      <Search>
        <Img1 src="https://th.bing.com/th?q=Search+Icon+32X32&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.2&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"/>
        <Inpu type="text" placeholder="SearchMovie" name="searchQuery" value={searchQuery} onChange={changeHandler}/>
      </Search>
      </Cont2>
      </Header>
      {selectedMovie && (<MovieInfocomponent selectedMovie={selectedMovie} onMovieselect={onMovieselect}/>)}
      <MovieContainer>
        {  movieList?.length?movieList.map((movie,index)=>(<MovieComponent key={index} movie={movie} onMovieselect={onMovieselect}/>)):<Emp src='https://th.bing.com/th/id/R.d096e6bb00a2b6a70bb6245aaf7a0192?rik=NFLzXImVzgdiLA&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2ffilm-clipart-transparent%2ffilm-clipart-transparent-18.png&ehk=HIwb9wYD8VKdjRGctAdxNRLJM1h2FXGergVEB0uWhu4%3d&risl=&pid=ImgRaw&r=0'/>

        }

      </MovieContainer>

    </Container>
   
  );
}

export default App;
