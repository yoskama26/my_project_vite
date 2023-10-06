import User from "./User";

const UserList = ({users,onClick}) => (

    <div>
        {users.map((user) => 
            <User
                key={user.id}
                name={user.name}
                avatar={user.avatar}
                onClick={() => onClick({name: user.name,avatar: user.avatar,id:user.id})}
            />
        )}
    </div>
);
export default UserList;