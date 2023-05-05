interface PersonListProps {
    nameList:
        {
            first:string
            last:string
        }[]
    
}
export const PersonList = ({nameList}:PersonListProps)=>{
    // const {first,last} = nameList;
    return <div>
        {nameList.map(nme=><h3>{nme.first} {nme.last}</h3>)}
        {/* <h2>Swadesh karmokar</h2>
        <h2>Shahinul Islam</h2>
        <h2>Rokibul Islam</h2> */}
    </div>
}