import { Button, useColorMode } from "@chakra-ui/react";

function ThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
      </Button>
    </header>
  );
}

export default ThemeButton;
