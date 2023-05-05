
interface IData {
    myName:string;
    messages:number
    isLoggedin:boolean
  }
export const Greet = (props:IData)=>{
    // console.log(props);
    
    return (
    <>
        <h2>
            {
                props.isLoggedin?<>Welcome {props.myName}! You have {props.messages} unread messages</>:<>you are guest</>
            }
            
        </h2>
    </>
        )
}