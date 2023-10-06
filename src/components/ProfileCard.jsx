import '../App.css'
import User from "./User";

const ProfileCard = ({user,onClick}) => (

    <div>

        <User
            key={user.id}
            name={user.name}
            avatar={user.avatar}
            onClick={() => onClick({name: user.name,avatar: user.avatar,id:user.id})}

            
        />
{/* pour add des features dans la profile ^^^^^^^^ */}
    </div>
);
export default ProfileCard;