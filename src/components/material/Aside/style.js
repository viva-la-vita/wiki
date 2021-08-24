import { createStyles, makeStyles } from "@material-ui/styles";

const drawerWidth = 240;

const useStyles = makeStyles(({ palette, breakpoints, mixins }) =>
    createStyles({
        sidebarBase: {
            display: "inline-box",
            textDecoration: "none",
            color: "black",
            width: "100%",
        },
        sidebarSectionNormal: {
            fontSize: "1.5em",
            fontWeight: "bold",
        },
        sidebarSectionHighlight: {
            fontSize: "1.5em",
            fontWeight: "bold",
            color: palette.primary.main,
            borderLeft: "0.25rem solid"
        },
        sidebarItemNormal: {
            fontSize: "1.2em",
        },
        sidebarItemHighlight: {
            fontSize: "1.2em",
            color: palette.primary.main,
            borderLeft: "0.25rem solid"
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
        titleLink: {
            textDecoration: 'none',
            "&:visited": {
                color: palette.primary.main,
            },
            "&:hover": {
                color: "green"
            }
        }

    }),
);

export default useStyles;
