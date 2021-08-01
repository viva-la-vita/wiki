import { Typography } from "@material-ui/core";
import React, { memo } from "react";


const Header = memo(({ frontmatter }) => {

  return (
    <>
      <Typography variant="h2">
        {frontmatter.title_cn}
      </Typography>
    </>
  )

})

export default Header
