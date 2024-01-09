import * as React from "react";
import { FC } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ButtonThemeToggler } from "../../themeToggle/themeButton";
import { Link } from "react-router-dom";
import { AuthDetails } from "../../auth/AuthDetails";
interface BasicMenuContainerProps {
  changeTheme: () => void;
  isActive: boolean;
}

export const BasicMenu: FC<BasicMenuContainerProps> = ({
  changeTheme,
  isActive,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <AuthDetails />
        </MenuItem>
        <MenuItem>
          <ButtonThemeToggler onClick={changeTheme} isActive={isActive} />
        </MenuItem>
      </Menu>
    </div>
  );
};
