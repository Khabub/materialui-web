import styled from "styled-components";
import FitbitIcon from "@mui/icons-material/Fitbit";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useState } from "react";
import { List, ListItem, ListItemButton, SwipeableDrawer } from "@mui/material";

interface Props {
  children?: React.ReactNode;
  menuList: string[];
}

const NavMobile = ({ menuList }: Props): JSX.Element => {
  const [openHam, setOpenHam] = useState<boolean>(false);

  const list = menuList.map((val, index) => (
    <List key={index}>
      <ListItem disablePadding>
        <ListItemButton>{val}</ListItemButton>
      </ListItem>
    </List>
  ));

  return (
    <Container>
      <div className="logo-name">
        <FitbitIcon sx={{ margin: "0 0.5rem" }} />
        <h1>CodeEnv</h1>
      </div>
      {openHam ? (
        <MenuOpenIcon
          sx={{ marginRight: "1rem" }}
          onClick={() => setOpenHam(true)}
        />
      ) : (
        <MenuIcon
          sx={{ marginRight: "1rem" }}
          onClick={() => setOpenHam(true)}
        />
      )}
      <SwipeableDrawer
        open={openHam}
        onClose={() => setOpenHam(false)}
        onOpen={() => setOpenHam(true)}
        // drawe používý Paper, takže nastavit sx v PaperProps
        PaperProps={{
          sx: {
            width: "40vw",
            display: "flex",
            alignItems: "center",
            paddingTop: "1rem",
          },
        }}
      >
        {list}
      </SwipeableDrawer>
    </Container>
  );
};

export default NavMobile;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo-name {
    display: flex;
    align-items: center;
  }

  h1 {
    font-size: 1rem;
    font-weight: 700;
  }
`;
