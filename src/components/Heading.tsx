
interface ChildrenProps {
    children:string
}
export const Heading = (props:ChildrenProps)=>{
    return (
        <>
            <h2>{props.children}</h2>
        </>
    )
}