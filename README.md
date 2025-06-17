🏗️ Francis Biden's Portfolio (my-app)
A full-stack, Docker-ready Next.js portfolio site using Prisma to fetch data (Projects, Services, Skills) from a remote Neon/Postgres database.

🚀 Quick Start
Clone the repo

bash
Copy
Edit
git clone https://github.com/francisbiden/my-app.git
cd my-app
Create .env file
Copy .env.example to .env and fill in your connection string:

bash
Copy
Edit
cp .env.example .env
Update .env:

php-template
Copy
Edit
DATABASE_URL=postgresql://<USER>:<PASSWORD>@<HOST>:<PORT>/<DBNAME>?sslmode=require
Build and start with Docker Compose

bash
Copy
Edit
docker-compose up --build
Your app will be available at http://localhost:3000.

Stop and clean up containers

bash
Copy
Edit
docker-compose down --volumes
📁 Project Structure
text
Copy
Edit
/
├── app/                  # Next.js routing & components
│   ├── projects/
│   ├── services/
│   └── skills/
├── prisma/               # Prisma schema & client config
├── public/               # Static assets
├── utils/                # Shared utilities (e.g. icons)
├── Dockerfile            # Multi-stage production build
├── docker-compose.yml    # Service definition with env support
├── .dockerignore         # Exclude files during Docker build
├── .env.example          # Example environment variables
└── package.json
🎯 How It Works
Next.js v15 leverages both server (SSG/SSR) and client components.

Data is fetched via custom functions (fetchProjects, fetchServices, fetchSkills) using Prisma and a remote database.

Docker setup supports multi-stage builds:

Builder stage installs dependencies, generates Prisma client, builds app.

Final stage installs only production dependencies, runs next start.

docker-compose.yml uses .env for runtime DATABASE_URL, avoiding exposing secrets in image build.

🛠️ Useful Commands
Command	Description
docker-compose up --build	Build image & start container
docker-compose down --volumes	Stop and clean up
docker image prune -a	Remove unused Docker images
docker-compose logs -f	Follow container logs
docker-compose exec nextjs-portfolio sh	Open shell inside container

✅ Environment Variables
Make sure to create .env (never commit this file) from .env.example:

perl
Copy
Edit
DATABASE_URL=postgresql://user:password@host:port/dbname?sslmode=require
🔧 Development vs Production
Development
Use npm run dev inside containers or locally

Supports Hot Module Replacement (HMR)

Production (Docker)
Image uses npm start, which runs the optimized server build

No live reloading—changes require rebuild + restart

🧪 Troubleshooting
Blank project/service/skills pages?

Ensure DATABASE_URL is set correctly in .env

Rebuild container after updating .env

Docker build fails at npm run build?

Make sure getStaticProps() or fetch*() functions do not run database queries at build time—unless DATABASE_URL is present (use dynamic SSR or guards).

📦 Building Without Docker
npm install

npx prisma generate

npm run build

npm run start

.env must include DATABASE_URL.

⚙️ Deployment
This Docker setup works out of the box with any VPS or container hosting like:

DigitalOcean

AWS EC2

Railway.app

Render.com

You can also add GitHub Actions or use docker push to deploy to your own registry.

🤝 Contributing
Fork the repo

Make changes in a new branch

Run npm test, format and lint code

Submit a pull request!

See CONTRIBUTING.md for more details (create one accordingly).

📜 License
This project is licensed under the MIT License. See LICENSE for full details.

👍 Next Steps
Add README screenshots or live demo badges

Set up CI/CD with GitHub Actions or other tools

Harden Docker image (multi-stage, minimal root usage)

Automate DB migrations with Prisma migrate deploy



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
