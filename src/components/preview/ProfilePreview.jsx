import ProfileHeader from "./ProfileHeader";
import LinksList from "./LinksList";
import HighlightsGrid from "./HighlightsGrid";

function ProfilePreview({ profile }) {
  return (
    <div
      className={`profile ${profile.theme.mode}`}
      style={{ "--accent": profile.theme.accentColor }}
    >
      <ProfileHeader user={profile.user} />
      <LinksList links={profile.links} />
      <HighlightsGrid highlights={profile.highlights} />
    </div>
  );
}

export default ProfilePreview;
