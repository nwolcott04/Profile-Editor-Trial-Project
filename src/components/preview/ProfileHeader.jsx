function ProfileHeader({ user }) {
  return (
    <div className="profile-header">
      <img src={user.avatarUrl} alt="avatar" />
      <h2>{user.displayName}</h2>
      <p className="username">@{user.username}</p>
      <p>{user.bio}</p>
    </div>
  );
}

export default ProfileHeader;
