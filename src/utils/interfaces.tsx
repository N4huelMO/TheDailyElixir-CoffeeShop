import { Dispatch, SetStateAction } from "react";

export interface MenuMobileProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
