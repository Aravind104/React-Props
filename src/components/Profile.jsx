
export function Profile(){
    const user={
        name:"react-logo",
        src:"../public/logo192.png",
        alt:"logo"
    }
    return(
        <div>
            <h1>{user.name}</h1>
            <img 
            src={user.src}
            alt={user.alt}
            />
        </div>
    )
}