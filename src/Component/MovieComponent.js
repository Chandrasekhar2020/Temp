import React from 'react'
import styled from 'styled-components'
const Cont1=styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
margin:15px;
border-bottom-color: antiquewhite;
    border-bottom-style: solid;
    cursor:pointer;
`

const Cont2=styled.img`

object-fit:cover;
height:300px;
width:300px;
`
const Cont3=styled.div`
 text-transform:capitalize;
 font-weight:bold;
 padding:5px;
 text-overflow:ellipsis;
overflow:hidden;


`
const Cont4=styled.div`
display:flex;
justify-content:space-between;
padding:5px;

`
const Cont41=styled.div`
text-transform:capitalize;
 font-weight:bold;
`
const Cont42=styled.div`
text-transform:capitalize;
 font-weight:bold;
`



function MovieComponent(props) {
 const {Title ,Year,Type,Poster}=props.movie;

  return (
    <Cont1 onClick={()=>props.onMovieselect(props.movie.imdbID)}>
       
            <Cont2 src=
           {Poster}/>
            <Cont3>
                Name:{Title}
            </Cont3>
            <Cont4>
                <Cont41>
                   Year:{Year}
                </Cont41>
                <Cont42>
                  Type:{Type}
                </Cont42>
            </Cont4>
       
    </Cont1>
  )
}

export default  MovieComponent;
