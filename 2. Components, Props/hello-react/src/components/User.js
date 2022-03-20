function User({name, surname, age, isLoggedIn}) {
    return (
        <h1> 
            {
                isLoggedIn 
                    ? `Salam, ${surname} ${name} : ${age}` 
                    : "Giriş edilmədi"
            } 
        </h1>
    )
}

export default User;