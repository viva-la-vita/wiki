import { createStyles, makeStyles } from "@material-ui/styles";


const useStyles = makeStyles(({ spacing, zIndex, palette }) =>
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
    phoneHidden: {
      flexGrow: 1,
    },
    flowButton: {
      marginLeft: spacing(-2),
      color: "#ef476f"
    },
    titleLink: {
      textDecoration: 'none',
      "&:visited":{
        color: palette.primary.main,
      },
      "&:hover": {
        color: "green"
      }
    },
    hide: {
      display: 'none',
    },
  }),
);

export default useStyles;
