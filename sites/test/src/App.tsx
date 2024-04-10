import { Button, PresetSize, View } from "r-styled";

import "./assets/global.less";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./debug";
function App() {
  return (
    <>
      <View mainAlign="center" flex="row" gap={PresetSize.LARGE}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </View>
      <View mainAlign="center">Styled React Components</View>

      <View mainAlign="center" flex="row" gap={PresetSize.MEDIUM} margin={PresetSize.MEDIUM}>
        <Button radius="medium">Themes</Button>
        <Button>Hooks</Button>
        <Button>Components</Button>
      </View>
    </>
  );
}

export default App;
