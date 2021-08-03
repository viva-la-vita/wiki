import { createStyles, makeStyles } from "@material-ui/styles";


const useStyles = makeStyles(({ spacing, zIndex}) =>
  createStyles({
    appbar: {
      backgroundColor: "white",
      zIndex: zIndex.drawer + 1,
    },
    menuButton: {
      marginRight: spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    hide: {
      display: 'none',
    },
  }),
);

export default useStyles;
