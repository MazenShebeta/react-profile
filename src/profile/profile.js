//react profile component

function Profile(props) {
    const imgSrc = props.children;
    const FullName = props.FullName;
    const bio = props.bio;
    const profession = props.profession;
    function handleName() {
        alert(FullName);
    }
  return (
    <div style={{display:'flex',flexDirection:'column' ,justifyContent: "center", alignItems:"center", margin:'auto', color:'white'}}>
        <h2>Profile</h2>
        <img src={imgSrc} alt="profile" style={{width: "200px", height: "200px", borderRadius: "50%"}}/>
        <h3>{FullName}</h3>
        <p>Bio: {bio}</p>
        <p>Profession: {profession}</p>
        <button onClick={handleName}>Click Me</button>
    </div>
  );
}

export default Profile;

//default values for props
Profile.defaultProps = {
    children: "https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg",
    FullName: "John Doe",
    bio: "I am a web developer",
    profession: "Web Developer"
}