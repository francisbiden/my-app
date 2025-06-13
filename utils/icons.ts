// utils/icons.ts
export const skillIcons = {
  Sass: '/icons/sass.svg',
  JavaScript: '/icons/javascript.svg',
  React: '/icons/react.svg',
  Nextjs: '/icons/nextjs.svg',
  Nodejs: '/icons/nodejs.svg',
  Express: '/icons/express.svg',
  PostgreSQL: '/icons/postgresql.svg',
  Prisma: '/icons/prisma.svg',
  MySQL: '/icons/mysql.svg',
  MongoDB: '/icons/mongodb.svg',
  
} as const;

export const serviceIcons = {
  figma: '/icons/figma.svg',
  nextjs: '/icons/nextjs.svg',
  nodejs: '/icons/nodejs.svg',
  javascript: '/icons/javascript.svg',
  graphql: '/icons/graphql.svg',
  database: '/icons/database.svg',
  react: '/icons/react.svg',
  solidity: '/icons/solidity.svg',
  
} as const;

export const ProjectImages ={
  ecommerce: '/images/ecommerce.jpg',
  schoolSystem: '/images/school-system.jpg',
  hospitalSystem: '/images/hospital-system.jpg',
  trafficSystem: '/images/traffic-system.jpg',
  fitnessApp: '/images/fitness-app.jpg',
  recipePlatform: '/images/recipe-platform.jpg',
  
} as const;

export type SkillIconName = keyof typeof skillIcons;
export type ServiceIconName = keyof typeof serviceIcons;
export type ProjectImageName = keyof typeof ProjectImages;