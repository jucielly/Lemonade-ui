import Button from "./components/Button";
import Theme from "./Theme";

function App() {
  return (
    <Theme>
      <Button icon="arrow-right" onClick={() => alert("ouch!")}>
        Text
      </Button>
    </Theme>
  );
}

export default App;
