export const List=()=> {
    const arr=["Android","Blockberry","iphone","WindowsPhone"];
    const arr1=["Samsung","HTC","Micromax","Apple"];
    return( <div>
        <h2>Mobile Operating System</h2>
        {arr.map((e)=>(
            <li>{e}</li>
        ))}
        <h2>Mobile Manufacture </h2>
        {arr1.map((e)=>(
            <li className={`${e == "Apple" ? "list" : null}`}>{e}</li>
        ))}
    </div>)
}