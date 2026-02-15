import UserEditor from "./UserEditor";
import ThemeEditor from "./ThemeEditor";
import LinksEditor from "./LinksEditor";
import HighlightsEditor from "./HighlightsEditor";

function EditorPanel({ profile, setProfile }) {
  return (
    <>
      <h2>Profile Editor</h2>
      <UserEditor profile={profile} setProfile={setProfile} />
      <ThemeEditor profile={profile} setProfile={setProfile} />
      <LinksEditor profile={profile} setProfile={setProfile} />
      <HighlightsEditor profile={profile} setProfile={setProfile} />
    </>
  );
}

export default EditorPanel;
