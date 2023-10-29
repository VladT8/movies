import React, { FC } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./AddFavorite.scss";
export interface AddFavoriteProps {
  //   onClick: () => void;
}
export const AddFavorite: FC<AddFavoriteProps> = () => {
  return (
    <div className="favor">
      <svg fill="red">
        <FavoriteBorderIcon />
      </svg>
    </div>
  );
};
