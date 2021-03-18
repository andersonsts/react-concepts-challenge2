import React from "react";

import ActionIcon from "./Icon/ActionIcon";
import ComedyIcon from "./Icon/ComedyIcon";
import DocumentaryIcon from "./Icon/DocumentaryIcon";
import DramaIcon from "./Icon/DramIcon";
import FamilyIcon from "./Icon/FamilyIcon";
import HorrorIcon from "./Icon/HorrorIcon";

interface IconProps {
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  color: string;
}

const Icons = {
  action: <ActionIcon />,
  comedy: <ComedyIcon />,
  documentary: <DocumentaryIcon />,
  drama: <DramaIcon />,
  horror: <HorrorIcon />,
  family: <FamilyIcon />,
  default: null
}

export const Icon = (props: IconProps) => Icons[props.name]