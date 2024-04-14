import hljs from "highlight.js";
import "highlight.js/styles/a11y-light.css";
import { Button, PresetSize, ScopeProvider, Text, View } from "r-styled";
import "./assets/global.less";
import reactLogo from "./assets/react.svg";
import storyLogo from "./assets/story.svg";
import styledLogo from "./assets/styled.svg";
import viteLogo from "/vite.svg";
import { useEffect } from "react";
import "./debug";
function App() {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <View padding={PresetSize.LARGE}>
      <View mainAlign="end" flex="row" gap={PresetSize.LARGE}>
        <a className="logo-link" href="https://styled-components.com" target="_blank">
          <img src={styledLogo} className="logo styled" alt="styled-components logo" />
        </a>
        <a className="logo-link" href="https://storybook.js.org/" target="_blank">
          <img src={storyLogo} className="logo story" alt="styled-components logo" />
        </a>
        <a className="logo-link" href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
        </a>
        <a className="logo-link" href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </View>
      <Text role="title" level={1}>
        Styled React Components
      </Text>
      <View>A library for building React components with styled-components and styled-system.Includes Themes, Hooks & Components.</View>

      <View title="Install" titleLevel="2" type="block" marginBlock={[48, 0]} padding={[24, 48]}>
        <View type="code" lang="bash">
          {`// npm
npm i @jeffchi/react-hooks
// yarn
yarn add @jeffchi/react-hooks
`}
        </View>
      </View>

      <View mainAlign="center" flex="row" gap={PresetSize.MEDIUM} margin={PresetSize.MEDIUM}>
        <Button radius="medium" type="link">
          Themes
        </Button>

        <ScopeProvider
          token={{
            colorText: "red",
          }}
        >
          <Button>Hooks</Button>
        </ScopeProvider>

        <ScopeProvider
          token={{
            colorText: "yellow",
          }}
        >
          <Button color={"blue"}>Components</Button>
        </ScopeProvider>
      </View>
    </View>
  );
}

export default App;
