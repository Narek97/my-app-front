const UserCard = ({ user }: { user: { name: string; email: string } }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h1>Home</h1>
      <h2 className="text-gray-700 font-bold">{user.name}</h2>
      <p className="text-gray-700">{user.email}</p>
    </div>
  );
};

export default UserCard;
