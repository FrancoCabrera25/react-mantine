import { AppShell, Burger, Grid, Group, Skeleton } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import Toolbar from '../components/toolbar/Toolbar';

const Layout = () => {
    const [opened, { toggle }] = useDisclosure();
    const matches = useMediaQuery('(min-width:48em)');
    /*  const [disabled] = useDisclosure(); */
    return (
        <AppShell
            header={{ height: 65 }}
            navbar={{ width: 200, breakpoint: 'sm', collapsed: { mobile: !opened, desktop: true } }}
            padding='md'>
            <AppShell.Header >
                <Group h='100%' px='md'  hiddenFrom='sm'>
                    <Burger opened={opened} onClick={toggle} size='sm' />
                </Group>
                
                 <Grid>
                    <Grid.Col span={12} hidden={!matches} >
                        <Toolbar />
                    </Grid.Col>
                </Grid> 
            </AppShell.Header>
            <AppShell.Navbar p='sm'>
                Navbar
                {Array(15)
                    .fill(0)
                    .map((_, index) => (
                        <Skeleton key={index} h={28} mt='sm' animate={false} />
                    ))}
            </AppShell.Navbar>
            <AppShell.Main>{/*  <Button onClick={toggleDisabled}>Toggle disabled</Button> */}</AppShell.Main>
        </AppShell>
    );
};

export default Layout;
