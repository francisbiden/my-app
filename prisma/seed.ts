import { PrismaClient, Prisma } from "../app/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // Seed Skills with proper icon URLs
  await prisma.skill.createMany({
    data: [
      {
        title: 'Sass',
        description: 'Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. It extends CSS with variables, nesting, mixins, and more, making stylesheets easier to maintain and organize.',
        icon:'Sass',
      },
      {
        title: 'JavaScript',
        description: 'JavaScript is a programming language that enables interactive web pages. It is a core technology of the World Wide Web alongside HTML and CSS, allowing for dynamic content updates and interactive elements.',
        icon:  'JavaScript',
      },
      {
        title: 'React',
        description: 'React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of developers, enabling efficient UI updates and rendering.',
        icon:'React',
      },
      {
        title: 'Next.js',
        description: 'Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites. It offers hybrid static & server rendering and API routes.',
        icon: 'Nextjs',
      },
      {
        title: 'Node.js',
        description: 'Node.js is a cross-platform, open-source server environment that runs on the V8 engine and executes JavaScript code outside a web browser. It allows developers to use JavaScript for server-side scripting.',
        icon: 'Nodejs',
      },
      {
        title: 'Express',
        description: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies the process of building server-side applications with Node.js.',
        icon: 'Express',
      },
      {
        title: 'PostgreSQL',
        description: 'PostgreSQL is a powerful, open-source object-relational database system with over 30 years of active development. It has earned a strong reputation for reliability, feature robustness, and performance.',
        icon: 'PostgreSQL',
      },
      {
        title: 'Prisma ORM',
        description: 'Prisma is an open-source next-generation ORM for Node.js and TypeScript. It provides a type-safe database client, migrations system, and a visual data browser to work with databases more efficiently.',
        icon: 'Prisma',
      },
      {
        title: 'MySQL',
        description: 'MySQL is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius\'s daughter, and "SQL", the abbreviation for Structured Query Language.',
        icon: 'MySQL',
      },
      {
        title: 'MongoDB',
        description: 'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database, MongoDB uses JSON-like documents with optional schemas, making data integration easier.',
        icon:'MongoDB',
      },
    ],
    skipDuplicates: true,
  });

  // Seed Projects (unchanged)
  await prisma.project.createMany({
    data: [
      {
        title: 'E-commerce Platform',
        description: 'A full-featured online store with product listings, shopping cart, user authentication, and payment processing. Built with React for the frontend, Node.js for the backend, and MongoDB for the database.',
        image: 'ecommerce',
      },
      {
        title: 'School Management System',
        description: 'Comprehensive system for managing student records, class schedules, grades, and teacher assignments. Features include attendance tracking, report generation, and parent portal access.',
        image: 'schoolSystem',
      },
      {
        title: 'Hospital Management System',
        description: 'Digital solution for patient records management, appointment scheduling, and inventory tracking. Includes modules for doctors, nurses, and administrative staff with role-based access control.',
        image: 'hospitalSystem',
      },
      {
        title: 'Traffic Management System',
        description: 'Real-time monitoring and analysis of traffic patterns with predictive modeling. Integrates with traffic lights and provides analytics dashboards for city planners to optimize traffic flow.',
        image: 'trafficSystem',
      },
      {
        title: 'Fitness Tracking App',
        description: 'Mobile application for tracking workouts, nutrition, and progress. Includes social features for sharing achievements and challenges with friends. Built with React Native for cross-platform compatibility.',
        image: 'fitnessApp',
      },
      {
        title: 'Recipe Sharing Platform',
        description: 'Community-driven platform for sharing and discovering recipes. Features include ingredient search, meal planning tools, and user ratings. Developed with Next.js for SEO benefits and fast performance.',
        image: 'recipePlatform',
      },
    ],
    skipDuplicates: true,
  });

  // Seed Services with proper icon URLs
  await prisma.service.createMany({
    data: [
      {
        title: 'Web Design',
        description: 'Creating visually appealing and user-friendly website designs that align with your brand identity. Focus on responsive layouts, intuitive navigation, and modern aesthetics to enhance user experience and engagement.',
        icon: 'figma',
      },
      {
        title: 'Frontend Development',
        description: 'Building interactive and performant user interfaces using modern JavaScript frameworks like React and Next.js. Implementing responsive designs, animations, and state management for seamless user experiences.',
        icon: 'html5',
      },
      {
        title: 'Backend Development',
        description: 'Developing robust server-side applications with Node.js, Express, and various databases. Creating RESTful APIs, authentication systems, and database architectures to power your web applications.',
        icon: 'nodejs',
      },
      {
        title: 'Full Stack Development (JavaScript)',
        description: 'End-to-end web application development using JavaScript technologies across the stack. From UI components to database queries, delivering complete solutions with consistent architecture and best practices.',
        icon: 'javascript',
      },
      {
        title: 'API Integration',
        description: 'Connecting your application with third-party services and APIs. Implementing secure authentication, data transformation, and error handling to ensure reliable communication between systems.',
        icon: 'graphql',
      },
      {
        title: 'Database Management',
        description: 'Designing and optimizing database schemas for performance and scalability. Implementing CRUD operations, complex queries, and data migration strategies for both SQL and NoSQL databases.',
        icon: 'mysql',
      },
      {
        title: 'Mobile App Development (React Native)',
        description: 'Building cross-platform mobile applications that work on both iOS and Android. Leveraging React Native for native-like performance while maintaining a single codebase for efficient development.',
        icon: 'react',
      },
      {
        title: 'Blockchain Development',
        description: 'Exploring blockchain technologies and smart contract development. Building decentralized applications (DApps) and integrating blockchain features into existing systems for enhanced security and transparency.',
        icon: 'solidity'
      },
    ],
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });