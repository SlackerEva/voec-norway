import { Drawer, List, ListItem, ListItemText } from "@mui/material";

function Filters(props) {
  const {filtersOpen, filtersClose = Function.prototype} = props;
  return (
    <Drawer
      anchor="left"
      open={filtersOpen}
      onClose={filtersClose}
    >
      <List>
        <ListItem>
          <ListItemText primary="Filters"/>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default Filters;