import React, { FC } from "react";
import "./removie.scss";

export interface RemoveFavoriteProps {
  onClick?: () => void;
}

export const RemoveFavorites: React.FC<RemoveFavoriteProps> = ({ onClick }) => {
  return (
    <button className="button-remove" onClick={onClick}>
      remove from favorites
    </button>
  );
};
