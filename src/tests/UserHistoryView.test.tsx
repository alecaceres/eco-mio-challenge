import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '@src/theme';
import { UserHistoryView } from '@src/views/user/UserHistoryView';
import renderer from 'react-test-renderer';

it('if dom manipulation view snapshot matches', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={lightTheme}>
        <UserHistoryView />
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
