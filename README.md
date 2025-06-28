📝 YapSpace
YapSpace is a modern, lightweight blogging platform that allows users to write, publish, and share blog posts effortlessly. Built with Node.js, Express, MongoDB, and EJS, YapSpace offers a clean user interface and scalable backend—perfect for personal blogs, tech articles, or creative storytelling.

🚀 Features
🖊️ Create and publish blog posts

🖼️ Upload and store images using Cloudinary

📄 Render dynamic pages using EJS templating

🔐 Secure content management with API key integration

🐳 Fully Dockerized for easy deployment

📦 Fast, flexible storage powered by MongoDB

🎨 Styled using HTML & CSS

🛠️ Tech Stack
Backend: Node.js, Express.js

Database: MongoDB

Templating Engine: EJS

Frontend: HTML, CSS

Media Management: Cloudinary with Cloud API

Containerization: Docker

📁 Project Structure
bash
Copy
Edit
YapSpace/
├── public/             # Static assets
├── views/              # EJS templates
├── routes/             # Express route definitions
├── models/             # Mongoose schemas
├── controllers/        # Route logic
├── .env                # Environment variables (not committed)
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── app.js              # Main app file
└── README.md
⚙️ Setup Instructions
1. Clone the Repo
bash
Copy
Edit
git clone https://github.com/your-username/YapSpace.git
cd YapSpace
2. Install Dependencies
bash
Copy
Edit
npm install
3. Create .env File
Create a .env file in the root directory and add the following:

ini
Copy
Edit
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
MONGODB_URI=your_mongodb_connection_string

4. Run the App
bash
Copy
Edit
npm start
Or, with Docker:

bash
Copy
Edit
docker-compose up --build
📦 Deployment
You can deploy YapSpace on platforms like:

Render

Railway

Heroku (with Docker)

AWS / GCP / DigitalOcean (manual or via container registry)

🛣️ Roadmap
Planned features include:

✅ Blog creation and image uploads

🔜 User authentication

🔜 Comments and likes

🔜 Tagging and blog search

🔜 Dark mode support

🔜 Rich text editor

🤝 Contributing
Pull requests are welcome! If you'd like to contribute:

Fork the repo

Create a new branch

Make your changes

Submit a PR


💬 Let's Yap
Feel free to reach out if you have suggestions or feature requests!

