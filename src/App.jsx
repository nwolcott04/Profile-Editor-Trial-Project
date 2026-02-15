import { useState } from "react";
import { defaultProfile } from "./data/defaultProfile";
import EditorPanel from "./components/Editor/EditorPanel";
import ProfilePreview from "./components/Preview/ProfilePreview";

function App() {
  const [profile, setProfile] = useState(defaultProfile);

  return (
    <div className="app">
      <div className="editor">
        <EditorPanel profile={profile} setProfile={setProfile} />
      </div>

      <div className="preview-container">
        <ProfilePreview profile={profile} />
      </div>
    </div>
  );
}

export default App;
