import PropTypes from "prop-types";

function User({name, surname, age, isLoggedIn, friends, address}) {
    if(!isLoggedIn) {
        return <div>Giriş edilmədi</div>
    }
    
    return (
        <>
            <h1> {`Salam, ${surname} ${name} : ${age}`}</h1>

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
            <hr />
            {address.title} {address.zip}
        </>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    friends: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    })
}

User.defaultProps = {
    name: "No name",
    isLoggedIn: false
}

export default User;