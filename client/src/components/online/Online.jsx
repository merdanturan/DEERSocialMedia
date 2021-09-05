import "./online.css";
import { Link } from "react-router-dom";

export default function Online({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src={
          user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <Link to={`/profile/${user.username}`}>
      <span className="rightbarUsername">{user.username}</span>
      </Link>
    </li>
  );
}
