import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '@src/theme';
import { UserDashboardView } from '@src/views/user/UserDashboardView';
import renderer from 'react-test-renderer';

// Unfortunately, I haven't been able to properly implement this test

it('if dom manipulation view snapshot matches', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={lightTheme}>
        <UserDashboardView />
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
