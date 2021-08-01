import { createStyles, makeStyles } from "@material-ui/styles";

const drawerWidth = 240;

const useStyles = makeStyles(({ palette, breakpoints, mixins }) =>
    createStyles({
        sidebarBase: {
            textDecoration: "none",
            color: "black",
        },
        sidebarSectionNormal: {
            fontSize: "1.5em",
            fontWeight: "bold",
        },
        sidebarSectionHighlight: {
            fontSize: "1.5em",
            fontWeight: "bold",
            color: palette.primary.main,
        },
        sidebarItemNormal: {
            fontSize: "1.2em",
        },
        sidebarItemHighlight: {
            fontSize: "1.2em",
            color: palette.primary.main,
        },

        drawer: {
            [breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerContainer: {
            overflow: 'auto',
        },
        toolbar: mixins.toolbar,
    }),
);

export default useStyles;
