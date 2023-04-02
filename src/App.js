import "./App.scss";
import { EventObject } from "./components/EventObject/EventObject";
import { Event } from "./components/Events/Events";
import { Forms } from "./components/Forms/Forms";
import { FormsAdventure } from "./components/FormsAdventure/FormsAdventure";
import { FormsAdventure2 } from "./components/FormsAdventure2/FormsAdventure2";
import { PostByIP } from "./components/PostByIP/PostByIP";
import { UsuallyForm } from "./components/UsuallyForm/UsuallyForm";

function App() {
  return (
    <div className='App'>
      <Event />
      <EventObject />
      <Forms />
      <FormsAdventure />
      <FormsAdventure2 />
      <UsuallyForm />
      <PostByIP />
    </div>
  );
}

export default App;
