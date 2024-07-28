import { Button, useMantineColorScheme } from "@mantine/core";


const ChangeTheme = () => {
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  const toggleColorScheme = () => {
      setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
  };
  return (
    <Button  onClick={toggleColorScheme}>
    Button
</Button>
  )
}

export default ChangeTheme
