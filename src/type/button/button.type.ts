export interface ButtonProps {
  type?: "submit" | "button"
  onClick?: () => void | 0;
  disabled?: boolean;
}