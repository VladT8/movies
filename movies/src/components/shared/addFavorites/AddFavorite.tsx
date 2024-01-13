import React, { FC } from "react";
import "./AddFavorite.scss";

export interface AddFavoriteProps {
  onClick?: () => void;
}
export const AddFavorite: React.FC<AddFavoriteProps> = ({ onClick }) => {
  return (
    <button className="button-favorite" onClick={onClick}>
      add to favorites
    </button>
  );
};
