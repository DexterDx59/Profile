import React from "react"
export default function Button(props){
    return(
        (props.profil.profileLink!=="")? <button onClick={props.gofb}>{props.children} </button>:(<p></p>)
    )
}