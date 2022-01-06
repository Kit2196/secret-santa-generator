import { createTheme } from "@mui/material";

export const logo =
  "https://1.bp.blogspot.com/-NtTQSOUkR9o/XVKfuVfLHcI/AAAAAAABUEA/1JsyRnHO9-8SxPb_OYm-HKAQ10dV2C45QCLcBGAs/s1600/christmas_black_santa.png";

export const PAGE = {
  START: 0,
  EDIT: 1,
  RESULT: 2,
};

export const theme = createTheme({
  palette: {
    black: {
      main: "#000",
      contrastText: "#fff",
    },
  },
});
