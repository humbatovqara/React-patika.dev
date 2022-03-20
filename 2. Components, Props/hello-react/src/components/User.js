import PropTypes from "prop-types";

function User({name, surname, age, isLoggedIn, friends}) {
    return (
        <>
            <h1> 
                {
                    isLoggedIn 
                        ? `Salam, ${surname} ${name} : ${age}` 
                        : "Giriş edilmədi"
                } 
            </h1>

            {/* {
                friends.map((friend) => {
                    const x = friend.id + 2;

                    return <div key={friend.id}>{friend.name}</div>;
                })
            } */}

            {
                friends && friends.map((friend) => (
                    <div key={friend.id}>{friend.name}</div>
                ))
            }
        </>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    friends: PropTypes.array
}

export default User;