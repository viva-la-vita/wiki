import { createStyles, makeStyles } from "@material-ui/styles";

const drawerWidth = 240;

const useStyles = makeStyles(({ breakpoints }) =>
  createStyles({
    drawer: {
      [breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    }
  }),
);

export default useStyles;
