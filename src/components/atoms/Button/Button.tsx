import { IButtonProps } from '@/Data/Interfaces/Button';
import styles from './Button.module.css';
const Button = ({type, classList, text, disabled, href, onclick, selfRef}:IButtonProps) => {
    const Tag = href ? "a" : "button";
    return (
        <Tag
            ref={selfRef as React.RefObject<HTMLButtonElement & HTMLAnchorElement>}
            type={type}
            onClick={onclick}
            className={`${classList} btn ${styles.button}`}
            {...(disabled && { disabled: true })}
            {...(href && { href })}
        >
            {text}
        </Tag>
    );
}
export default Button;