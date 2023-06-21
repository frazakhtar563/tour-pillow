import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

export function NestedItem({ header, items, isBold,opened }) {
  const [open, setOpen] = React.useState(opened?true:false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      disablePadding
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText>
          <Typography
            sx={{
              fontWeight: isBold ? "bold" : "normal",
              fontSize: "0.875rem",
            }}
          >
            {header}
          </Typography>{" "}
        </ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit sx={{ px: 4 }}>
        {items}
      </Collapse>
    </List>
  );
}
export default function CityTours() {
  return (
    <NestedItem
      header={"New York City Tours"}
      isBold={true}
      opened={true}
      items={
        <List component="div" disablePadding>
          <ListItemButton>
            <ListItemText>
              <Typography sx={{ fontSize: "0.875rem" }}>
                All New York City Tours
              </Typography>
            </ListItemText>
          </ListItemButton>
          <NestedItem
            header={"Art & Culture"}
            items={
              <>
                <NestedItem
                  header={"Art & Culture Classes"}
                  items={
                    <>
                      <ListItemButton>
                        <ListItemText>
                          <Typography sx={{ fontSize: "0.875rem" }}>
                            Art Classes
                          </Typography>
                        </ListItemText>
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemText>
                          <Typography sx={{ fontSize: "0.875rem" }}>
                            Craft Classes
                          </Typography>
                        </ListItemText>
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemText>
                          <Typography sx={{ fontSize: "0.875rem" }}>
                            Dance Lessons
                          </Typography>
                        </ListItemText>
                      </ListItemButton>{" "}
                      <ListItemButton>
                        <ListItemText>
                          <Typography sx={{ fontSize: "0.875rem" }}>
                            Music Classes
                          </Typography>
                        </ListItemText>
                      </ListItemButton>{" "}
                      <ListItemButton>
                        <ListItemText>
                          <Typography sx={{ fontSize: "0.875rem" }}>
                            Painting Classes
                          </Typography>
                        </ListItemText>
                      </ListItemButton>
                    </>
                  }
                />
                <NestedItem
                  header={"Arts & Design"}
                  items={
                    <>
                      <ListItemButton>
                        <ListItemText>
                          <Typography sx={{ fontSize: "0.875rem" }}>
                            Architecture Tours
                          </Typography>
                        </ListItemText>
                      </ListItemButton>{" "}
                      <ListItemButton>
                        <ListItemText>
                          <Typography sx={{ fontSize: "0.875rem" }}>
                            Art Galleries
                          </Typography>
                        </ListItemText>
                      </ListItemButton>{" "}
                      <ListItemButton>
                        <ListItemText>
                          <Typography sx={{ fontSize: "0.875rem" }}>
                            Art Tours
                          </Typography>
                        </ListItemText>
                      </ListItemButton>{" "}
                      <ListItemButton>
                        <ListItemText>
                          <Typography sx={{ fontSize: "0.875rem" }}>
                            Museums{" "}
                          </Typography>
                        </ListItemText>
                      </ListItemButton>
                    </>
                  }
                />
                <NestedItem header={"Culture"} items={<></>} />
                <NestedItem header={"Pop Culture"} items={<></>} />
                <NestedItem header={"Shows & Performances"} items={<></>} />
                <NestedItem header={"Traditional Wellness"} items={<></>} />
              </>
            }
          />
          <ListItemButton>
            <ListItemText>
              <Typography sx={{ fontSize: "0.875rem" }}>
                Audio Guides
              </Typography>
            </ListItemText>
          </ListItemButton>
          <NestedItem
            header={"Classes & Workshops"}
            items={
              <>
                <NestedItem header={"Active & Outdoor Classes"} items={<></>} />
                <NestedItem header={"Art & Culture Classes"} items={<></>} />
                <NestedItem header={"Food & Drink Classes"} items={<></>} />
                <NestedItem header={"Wellness Classes"} items={<></>} />
              </>
            }
          />
          <NestedItem
            header={"Food & Drink"}
            items={
              <>
                <NestedItem header={"Coffee & Tea"} items={<></>} />
                <NestedItem header={"Desserts & Sweets"} items={<></>} />
                <NestedItem header={"Dining Experiences"} items={<></>} />
                <NestedItem header={"Food & Drink Classes"} items={<></>} />
                <NestedItem header={"Food Tours"} items={<></>} />
                <NestedItem header={"Wine, Beer & Spirits"} items={<></>} />
              </>
            }
          />
          <ListItemButton>
            <ListItemText>
              <Typography sx={{ fontSize: "0.875rem" }}>
                Kid Friendly
              </Typography>
            </ListItemText>
          </ListItemButton>{" "}
          <ListItemButton>
            <ListItemText>
              <Typography sx={{ fontSize: "0.875rem" }}>
                Likely To Sell Out
              </Typography>
            </ListItemText>
          </ListItemButton>
          <NestedItem header={"Outdoor Activities"} items={<></>} />
          <NestedItem header={"Seasonal & Special Occasions"} items={<></>} />
          <NestedItem header={"Tickets & Passes"} items={<></>} />
          <NestedItem header={"Tours, Sightseeing & Cruises"} items={<></>} />
          <NestedItem
            header={"Travel & Transportation Services"}
            items={<></>}
          />
          <NestedItem header={"Unique Experiences"} items={<></>} />
        </List>
      }
    />
  );
}
