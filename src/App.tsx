// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import ChangeTheme from './components/ChangeTheme';
import Layout from './pages/Layout';


export default function App() {
    return (
        <MantineProvider>
          <Layout />
          {/*   <ChangeTheme /> */}
        </MantineProvider>
    );
}
