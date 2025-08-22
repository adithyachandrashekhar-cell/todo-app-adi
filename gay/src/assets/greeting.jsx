function Greeting(kundi){
    if(kundi.isLoggedIn){
        return(
            <h2>welcome {kundi.username}</h2>
        )
    }
    else {
        return <h2>Please log in</h2>;
    }
}
export default Greeting