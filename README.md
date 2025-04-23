# Fred Walyaula - Community Development Specialist Portfolio

A professional portfolio website for Fred Walyaula, showcasing his expertise in community development, agro-ecology, and sustainable development.

## Getting Started

These instructions will help you get the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v16 or later recommended)
- npm (comes with Node.js)

### Installation and Development

1. Clone the repository
```bash
git clone [repository URL]
cd [project folder]
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The website should now be running at http://localhost:5000

### Production Build

To create an optimized production build:

```bash
npm run build
```

This will create a production-ready build in the `dist` directory.

### Running in Production

After building the project, you can run it in production mode:

```bash
npm start
```

This starts the Express server which serves both the API and the static frontend files.

## Hosting Options

### Option 1: Traditional Web Hosting with Node.js Support

1. Create a production build as described above
2. Upload the entire project to your hosting provider that supports Node.js
3. Set up environment variables if needed
4. Install dependencies with `npm install --production`
5. Start the server with `npm start` or your hosting provider's mechanism

### Option 2: Deploying to a Cloud Platform

#### Deploying to Vercel

1. Sign up for a [Vercel](https://vercel.com/) account
2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Login to Vercel:
   ```bash
   vercel login
   ```
4. Deploy the project:
   ```bash
   vercel
   ```

#### Deploying to Netlify

1. Sign up for a [Netlify](https://www.netlify.com/) account
2. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
3. Login to Netlify:
   ```bash
   netlify login
   ```
4. Deploy the project:
   ```bash
   netlify deploy
   ```

#### Deploying to DigitalOcean App Platform

1. Create a DigitalOcean account
2. Create a new App
3. Connect to your GitHub repository
4. Configure build settings:
   - Build Command: `npm run build`
   - Run Command: `npm start`
5. Deploy the app

### Option 3: Using Docker

This project can also be containerized using Docker:

1. Create a Dockerfile in the project root:
```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build
EXPOSE 5000
CMD ["npm", "start"]
```

2. Build the Docker image:
```bash
docker build -t fred-portfolio .
```

3. Run the container:
```bash
docker run -p 5000:5000 fred-portfolio
```

Your website will be available at http://localhost:5000

### Custom Domain Setup

If you want to use a custom domain (e.g., www.fredwalyaula.com):

1. **Purchase a domain** from a registrar like Namecheap, GoDaddy, or Google Domains

2. **Configure DNS settings** at your domain registrar:
   - If using Vercel/Netlify: Add their nameservers or follow their domain configuration guides
   - If using traditional hosting: Set up A records pointing to your server's IP address

3. **SSL Certificate Setup** for HTTPS:
   - Most cloud platforms handle this automatically
   - For traditional hosting, you can use [Let's Encrypt](https://letsencrypt.org/) to get a free SSL certificate:
     ```bash
     sudo apt-get install certbot
     sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
     ```

4. **Update your hosting configuration** to recognize your domain

5. **Test your domain** to ensure it correctly resolves to your website

## Adding Your Own Content

### Replacing Images

The website uses local images stored in the `client/public/assets/images` directory. Here are the steps to replace these with your own images:

1. Navigate to the `client/public/assets/images` directory
2. Replace the following files with your own images (keeping the same filenames):
   - `fred_profile.jpg` - Main profile image in the About section
   - `project1.jpg` - Image for the Smart Village Solar Power Project
   - `project2.jpg` - Image for the Honey Value Chain Development project
   - `project3.jpg` - Image for the Agricultural Cooperative Development project
   
3. If you want to add more images, place them in the same directory and update the references in the code as needed.

### Replacing CV PDF

1. To replace the downloadable CV:
   - Place your CV PDF file in the `client/public/assets` directory
   - Name it `Fred_Walyaula_CV.pdf` to automatically replace the existing file
   - Alternatively, update the reference in the "Download CV" button in the `client/src/pages/Home.tsx` file

## Project Structure

- `/client` - Frontend React code
  - `/src` - React source files
    - `/components` - Reusable React components
    - `/pages` - Page components
    - `/lib` - Utility functions and data files
  - `/public` - Static assets
    - `/assets` - Images, PDFs, and other resources
- `/server` - Backend Express code
- `/shared` - Shared TypeScript interfaces and schemas

## Built With

* [React](https://reactjs.org/) - Frontend JavaScript library
* [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
* [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
* [Express](https://expressjs.com/) - Web application framework for Node.js
* [Vite](https://vitejs.dev/) - Frontend build tool

## Customization

The website is designed to be easily customizable. Here are some files you might want to modify:

- `client/src/lib/data.ts` - Contains project data and descriptions
- `client/src/pages/Home.tsx` - Main page component with all sections
- `client/src/index.css` - Custom CSS and theme colors

## Maintenance and Updates

### Regular Updates

To keep your website secure and functioning optimally:

1. **Update dependencies** periodically:
   ```bash
   npm update
   ```

2. **Check for security vulnerabilities**:
   ```bash
   npm audit
   ```
   
3. **Fix security issues** if found:
   ```bash
   npm audit fix
   ```

### Adding New Content

To add new projects or update your experience:

1. Edit the project data in `client/src/lib/data.ts`
2. Add new images to `client/public/assets/images/`
3. If adding new sections, modify the relevant components in `client/src/pages/Home.tsx`
4. Test changes locally before deploying

### Backup Recommendation

Regularly back up your website files and content:

1. Use version control (Git) to track changes
2. Keep a backup of your images and PDF files
3. Document any significant customizations you make