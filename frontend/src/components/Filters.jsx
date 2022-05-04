import { Divider, Drawer, List, ListItem, ListItemText } from "@mui/material";
import Accordion from "./Accordion";

function Filters(props) {
  const {filtersOpen, filtersClose = Function.prototype} = props;
  return (
    <Drawer
      anchor="left"
      open={filtersOpen}
      onClose={filtersClose}
    >
      <List sx={{width: '400px'}}>
        <ListItem>
          <ListItemText primary="Filters"/>
        </ListItem>
        <Divider/>
        <Accordion />
      </List>
    </Drawer>

  )
}

export default Filters;