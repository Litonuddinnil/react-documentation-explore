const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
    borderRadius:'50%'
  };
export default function Profile(){

    return(
        <>
        <h1>displaying data</h1>
        <img src={user.imageUrl} alt={user.name}
         style={
            {
                width:user.imageSize,
                hight:user.imageSize,
                borderRadius:user.borderRadius,
                margin:'16px'
            }
        }
         />
         <p>UserName:{user.name}</p>
       
        </>
    )
}