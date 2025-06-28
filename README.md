# YapSpace 🗨️

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

> **A modern, lightweight blogging platform designed for effortless content creation and sharing.**

YapSpace is a full-stack blogging application that empowers users to create, publish, and share their thoughts with the world. Built with modern web technologies, it provides a clean, intuitive interface backed by a robust and scalable architecture.

## ✨ Features

- 🖊️ **Rich Content Creation** - Create and publish blog posts with an intuitive interface
- 🖼️ **Media Management** - Upload and store images seamlessly using Cloudinary integration
- 📄 **Dynamic Rendering** - Server-side rendering with EJS templating for optimal performance
- 🔐 **Secure Architecture** - Protected content management with API key integration
- 🐳 **Containerized Deployment** - Fully Dockerized for consistent deployment across environments
- 📦 **Scalable Storage** - MongoDB integration for fast, flexible data management
- 🎨 **Responsive Design** - Clean, modern UI built with HTML & CSS
- ⚡ **Performance Optimized** - Lightweight and fast loading times

## 🛠️ Technology Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Templating**: EJS (Embedded JavaScript)

### Frontend
- **Markup**: Semantic HTML5
- **Styling**: Modern CSS3
- **Architecture**: Server-side rendered pages

### Cloud Services
- **Media Storage**: Cloudinary API
- **Database Hosting**: MongoDB Atlas (recommended)

### DevOps
- **Containerization**: Docker & Docker Compose
- **Version Control**: Git

## 📁 Project Structure

```
YapSpace/
├── public/             # Static assets (CSS, images, client-side JS)
├── views/              # EJS templates and layouts
├── routes/             # Express route definitions
├── models/             # Mongoose schemas and data models
├── controllers/        # Business logic and route handlers
├── middleware/         # Custom middleware functions
├── config/             # Configuration files
├── uploads/            # Temporary file storage
├── .env.example        # Environment variables template
├── .gitignore          # Git ignore rules
├── Dockerfile          # Docker container configuration
├── docker-compose.yml  # Multi-container setup
├── app.js              # Application entry point
├── package.json        # Dependencies and scripts
└── README.md           # Project documentation
```

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local installation or Atlas account)
- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/) (optional, for containerized deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ayush00git/YapSpace.git
   cd YapSpace
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   
   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```
   
   Configure your environment variables:
   ```env
   # Server Configuration
   PORT=3000
   NODE_ENV=development
   
   # Database
   MONGODB_URI=mongodb://localhost:27017/yapspace
   # Or use MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/yapspace
   
   # Cloudinary Configuration
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   
   # Security
   SESSION_SECRET=your_super_secret_key_here
   ```

4. **Database Setup**
   
   For local MongoDB:
   ```bash
   # Start MongoDB service
   sudo systemctl start mongod  # Linux
   brew services start mongodb-community  # macOS
   ```

5. **Start the application**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

6. **Access the application**
   
   Open your browser and navigate to `http://localhost:3000`

### 🐳 Docker Deployment

For a containerized setup:

```bash
# Build and run with Docker Compose
docker-compose up --build

# Run in detached mode
docker-compose up -d

# Stop the application
docker-compose down
```

## 📖 Usage

### Creating Your First Blog Post

1. Navigate to the homepage
2. Click on "Create New Post"
3. Fill in the title and content
4. Upload images using the built-in media uploader
5. Publish your post to share with the world

### Managing Content

- **Edit Posts**: Click on any post to edit its content
- **Delete Posts**: Remove posts you no longer want to share
- **Media Management**: Upload, organize, and manage your images through Cloudinary

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `PORT` | Server port number | No | 3000 |
| `NODE_ENV` | Environment mode | No | development |
| `MONGODB_URI` | MongoDB connection string | Yes | - |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | Yes | - |
| `CLOUDINARY_API_KEY` | Cloudinary API key | Yes | - |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | Yes | - |
| `SESSION_SECRET` | Session encryption key | Yes | - |

### Cloudinary Setup

1. Create a free account at [Cloudinary](https://cloudinary.com/)
2. Navigate to your dashboard
3. Copy your Cloud Name, API Key, and API Secret
4. Add these credentials to your `.env` file

## 🚀 Deployment

### Platform Options

YapSpace can be deployed on various platforms:

#### Render
1. Fork this repository
2. Connect your GitHub account to Render
3. Create a new Web Service
4. Set environment variables in the Render dashboard

#### Railway
1. Install Railway CLI: `npm install -g @railway/cli`
2. Login: `railway login`
3. Deploy: `railway up`

#### Heroku (with Docker)
1. Install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create your-app-name`
4. Set stack: `heroku stack:set container`
5. Deploy: `git push heroku main`

#### DigitalOcean/AWS/GCP
Use the provided Dockerfile for deployment on any cloud platform supporting containers.

## 🛣️ Roadmap

### Completed Features
- ✅ Blog creation and publishing
- ✅ Image upload and management
- ✅ Responsive design
- ✅ Docker containerization

### Upcoming Features
- 🔜 **User Authentication** - Secure login and user management
- 🔜 **Comment System** - Reader engagement with comments and replies
- 🔜 **Social Features** - Like, share, and follow functionality
- 🔜 **Search & Tags** - Discover content with advanced search and tagging
- 🔜 **Rich Text Editor** - Enhanced writing experience with formatting options
- 🔜 **Dark Mode** - Eye-friendly dark theme
- 🔜 **SEO Optimization** - Better search engine visibility
- 🔜 **Analytics Dashboard** - Track post performance and reader engagement
- 🔜 **Mobile App** - Native mobile applications
- 🔜 **Multi-language Support** - Internationalization capabilities

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Getting Started

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style and conventions
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure your code passes all existing tests

### Areas for Contribution

- Bug fixes and improvements
- New features from the roadmap
- Documentation enhancements
- Performance optimizations
- UI/UX improvements
- Test coverage expansion

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 📝 API Documentation

### Blog Posts

- `GET /` - Homepage with recent posts
- `GET /posts` - All blog posts
- `GET /posts/:id` - Specific blog post
- `POST /posts` - Create new post
- `PUT /posts/:id` - Update existing post
- `DELETE /posts/:id` - Delete post

### Media

- `POST /upload` - Upload image to Cloudinary
- `GET /images` - List uploaded images

## 🔒 Security

- Environment variables for sensitive data
- Input validation and sanitization
- Secure session management
- Image upload restrictions


## 🙏 Acknowledgments

- [Express.js](https://expressjs.com/) - Web application framework
- [MongoDB](https://www.mongodb.com/) - Database solution
- [Cloudinary](https://cloudinary.com/) - Media management
- [EJS](https://ejs.co/) - Templating engine
- All contributors who help improve YapSpace

