export const SECTION_TYPES = {
  LANDING: "LANDING",
  HISTORY: "HISTORY",
  ABOUT: "ABOUT",
  SKILLS: "SKILLS",
  TIMELINE: "TIMELINE",
  PROJECTS: "PROJECTS",
  CONTACT: "CONTACT",
  PUBLICATIONS: "PUBLICATIONS",
};

export const SECTION_ORDER = [
  SECTION_TYPES.LANDING,
  SECTION_TYPES.HISTORY,
  SECTION_TYPES.ABOUT,
  SECTION_TYPES.PUBLICATIONS,
  SECTION_TYPES.SKILLS,
  SECTION_TYPES.TIMELINE,
  SECTION_TYPES.PROJECTS,
  SECTION_TYPES.CONTACT,
];

export const SECTION_TYPE_VS_NAME = {
  [SECTION_TYPES.ABOUT]: "About",
  [SECTION_TYPES.SKILLS]: "Skills",
  [SECTION_TYPES.TIMELINE]: "Experience",
  [SECTION_TYPES.PROJECTS]: "Projects",
  [SECTION_TYPES.CONTACT]: "Contact",
  [SECTION_TYPES.PUBLICATIONS]: "Publications",
};
