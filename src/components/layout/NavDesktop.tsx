import styled from "styled-components";
import FitbitIcon from "@mui/icons-material/Fitbit";
import { Button, Tab, Tabs } from "@mui/material";
import { useState } from "react";

interface Props {
  children?: React.ReactNode;
  menuList: string[];
}

const NavDesktop = ({ menuList }: Props): JSX.Element => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const list = menuList.map((val, index) => (
    <Tab key={index} label={val.toUpperCase()} />
  ));

  return (
    <Container>
      <div className="logo-list">
        <FitbitIcon sx={{ margin: "0 1.5rem" }} />
        <TabsSC value={value} onChange={handleChange}>
          {list}
        </TabsSC>
      </div>
      <div className="menu-buttons">
        <Button variant="outlined" sx={{ marginRight: "2rem" }}>
          TALK TO US
        </Button>
        <Button variant="contained" sx={{ marginRight: "2rem" }}>
          TRY FOR FREE
        </Button>
      </div>
    </Container>
  );
};

export default NavDesktop;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo-list {
    display: flex;
    align-items: center;
  }

  .menu-buttons {
    padding: 0 1rem;
  }
`;

const TabsSC = styled(Tabs)`
  && {
    .MuiTabs-indicator {
      background-color: #757575;
    }

    .MuiTab-textColorPrimary {
      color: #000000;
    }
  }
`;
