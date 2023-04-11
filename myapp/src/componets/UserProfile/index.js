import "./index.css"

const UserProfile = props => {
    const {UserDetails} = props
    console.log("UserDetails", UserDetails)
    const {imageUrl, name, role} = UserDetails
    return (
    <div>
        <h1> {name} </h1>
        <h2> {role} </h2>
        <img className="image" src={imageUrl} alt=""/>
    </div>
    )
}

export default UserProfile;