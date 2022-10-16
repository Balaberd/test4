import React from "react";
import { ReactComponent as IconSun } from "./sun.svg";
import { ReactComponent as IconFilter } from "./filter.svg";
import { ReactComponent as IconLocked } from "./locked.svg";
import { ReactComponent as IconMoon } from "./moon.svg";
import { ReactComponent as IconRefresh } from "./refresh.svg";
import { ReactComponent as IconXLarge } from "./x-large.svg";
import { ReactComponent as IconXMedium } from "./x-medium.svg";
import { ReactComponent as IconArrow } from "./v_arrow.svg";
import { ReactComponent as IconSearch } from "./search.svg";

const ICON_MAP = {
  sun: IconSun,
  moon: IconMoon,
  filter: IconFilter,
  locked: IconLocked,
  refresh: IconRefresh,
  "x-large": IconXLarge,
  "x-medium": IconXMedium,
  arrow: IconArrow,
  search: IconSearch,
};

function Icon({ type, className, ...props }) {
  const Component = ICON_MAP[type];
  return Component ? (
    <Component
      className={className}
      width="1rem"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  ) : null;
}

export default Icon;
