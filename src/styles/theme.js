import { createMuiTheme } from "@material-ui/core/styles";
import { purple, pink, deepOrange } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: { main: purple[300] },
    secondary: { main: deepOrange[300] }
  },
  status: {
    // My business variables
    danger: pink[500]
  }
});

export default theme;
