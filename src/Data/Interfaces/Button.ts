export interface IButtonProps {
  classList?: string;
  disabled?: boolean;
  href?: string;
  text: string;
  selfRef?: React.RefObject<HTMLButtonElement | HTMLAnchorElement>;
  onclick?: () => void;
  type?: "button" | "reset" | "submit";
}
