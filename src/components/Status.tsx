interface StatusInt {
    status:"success" | "loading" | "error"
}


export const Status = (props:StatusInt) =>{
    let message;
    if(props.status ==="success"){
        message = "Data is fetched successfully"
    }
    if(props.status ==="loading"){
        message="Loading..."
    }if(props.status==="error"){
        message="Error! fetching data"
    }
    return (
        <div>
            <h2>{message}</h2>
           
        </div>
    )
}