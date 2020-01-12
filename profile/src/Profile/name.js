import React from "react"
export default function NameLastname(props){
    return(<p>{props.profil.Name.firstName} {props.profil.Name.lastName}</p>)
}