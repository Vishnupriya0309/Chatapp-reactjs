import ContactListComponent from "./components/ContactListComponents";
import ConversationComponent from "./components/ConversationComponents";

function App() {
  return (
    <div className="flex flex-row h-screen w-full bg-gray-100">
      <ContactListComponent />
      <ConversationComponent />
    </div>
  );
}

export default App;
