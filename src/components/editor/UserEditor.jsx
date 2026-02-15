function UserEditor({ profile, setProfile }) {
  const update = (field, value) => {
    setProfile(prev => ({
      ...prev,
      user: { ...prev.user, [field]: value }
    }));
  };

  return (
    <div className="section">
      <h3>User</h3>

      <input
        value={profile.user.username}
        onChange={e => update("username", e.target.value)}
        placeholder="Username"
      />

      <input
        value={profile.user.displayName}
        onChange={e => update("displayName", e.target.value)}
        placeholder="Display Name"
      />

      <input
        value={profile.user.avatarUrl}
        onChange={e => update("avatarUrl", e.target.value)}
        placeholder="Avatar URL"
      />

      <textarea
        value={profile.user.bio}
        onChange={e => update("bio", e.target.value)}
        placeholder="Bio"
      />
    </div>
  );
}

export default UserEditor;
