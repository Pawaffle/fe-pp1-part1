import React from 'react'


const IdCard = (props) => { 
  
  console.log(props);
  return (
    <div class='card'>
        <img src={props.picture}/>

        <div class='info'>
            <ul><b>First Name:</b> {props.firstName}</ul>
            <ul><b>Last Name:</b> {props.lastName}</ul>
            <ul><b>Gender:</b> {props.gender}</ul>
            <ul><b>Height:</b> {props.height}</ul>
            <ul><b>Birth:</b> {props.birth.toDateString()}</ul>
        </div>
    </div>
  )
}

export default IdCard
