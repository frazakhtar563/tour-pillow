import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import { Button, Grid, Typography } from "@mui/material";
import { fontWeight } from "@mui/system";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

export default function SimpleListMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <List
        component="nav"
        aria-label="Device settings"
      >
        <ListItem
          button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
          sx={{ background: '#fff',
          border: '1px solid #B0B2B5',
          width:'100%',
          borderRadius:'5px',
          padding:'10px 10px'
        }}
        
        >

          <Grid container>
            <Typography>
              1 Adults
            </Typography>
          </Grid>
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox"
        }}
      >
        {[
          {
            type: "Adult (13-99)",
            min: 1,
            max: 14
          },
          {
            type: "Child (3-12)",
            min: 0,
            max: 14
          },
          {
            type: "Infant (0-2)",
            min: 0,
            max: 14
          }
        ].map((option, index) => (
          <Grid
            container
            key={option.type}
            sx={{
              padding: '1rem', minWidth: '400px',
            }}
            onClick={(event) => handleMenuItemClick(event, index)}
            justifyContent='space-between'

          >
            <Grid item>
              <Grid container>{option.type}</Grid>
              <Grid container>
                <Typography sx={{
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#2a2d32'
                }}>
                  {`Minimum: ${option.min}, Maximum: ${option.max}`}
                </Typography>

              </Grid>
            </Grid>
            <Grid item style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
              <Grid container spacing={1}>
                <Grid item>
                  <RemoveCircleOutlineIcon />
                </Grid>
                <Grid item>
                  <Typography>0</Typography>
                </Grid>
                <Grid item>
                  <AddCircleOutlineIcon />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
        <Grid container sx={{ padding: '1rem' }}>
          <Button variant="contained" fullWidth sx={{
            background: '#186B6D',
            color: '#fff',
            "&.MuiButton-root:hover": {
              background: '#186B6D !important',
            }
          }}>
            Apply
          </Button>
        </Grid>
      </Menu>
    </>
  );
}
