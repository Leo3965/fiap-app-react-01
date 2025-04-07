import style from "./Avatar.module.css";

export function Avatar({ hasBorder = true, ...props }) {
  return <img className={hasBorder ? style.avatarWithBorder : style.avatar} />;
}
