import { Typography } from "@material-ui/core";
import React, { memo } from "react";


const Header = memo(({ title }) => {

  return (
    <>
      <Typography variant="h2">
        {title}
      </Typography>
    </>
  )

})

export default Header
