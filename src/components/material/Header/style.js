import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ spacing, mixins }) =>
  createStyles({
    content: {
      flexGrow: 1,
      padding: spacing(3),
    },
    // necessary for content to be below app bar
    toolbar: mixins.toolbar,
  }),
);

export default useStyles;
