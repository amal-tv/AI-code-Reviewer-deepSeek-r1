# Code Review App - with DeepSeek-R1

This project is a **Code Review Application** built using React, Express, and LangChain's integration with Ollama. The app allows users to input code, which is then analyzed by an AI model to provide feedback on improvements, best practices, and potential optimizations.

## Features

- **Code Editor**: A built-in code editor using `@uiw/react-codemirror` for writing and editing JavaScript/JSX code.
- **AI-Powered Code Review**: Sends the user's code to an AI model via an Express backend, which returns a structured review with suggestions and improvements.
- **Markdown Preview**: Displays AI-generated reviews in a clean, readable markdown format.
- **Real-Time Feedback**: Provides feedback asynchronously while indicating a loading state.
- **Secure Processing**: Utilizes `DOMPurify` to sanitize AI-generated content to prevent security risks.

## Technologies Used

### Frontend:

- React.js
- TypeScript
- Tailwind CSS
- `@uiw/react-codemirror`
- `@uiw/react-markdown-preview`

### Backend:

- Node.js
- Express.js
- LangChain with Ollama
- DeepSeek-V1 (AI model for code analysis)
- dotenv (for environment variable management)
- CORS

## Installation and Setup

### Prerequisites:

- Node.js installed
- Ollama installed and configured with a suitable AI model

### Steps:

1. **Clone the Repository**

   ```sh
   git clone https://github.com/your-username/code-review-app.git
   cd code-review-app
   ```

2. **Install Dependencies**

   ```sh
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file inside the server folder and add:

   ```sh
   MODEL_NAME=your_model_name
   TEMPERATURE=0
   ```

4. **Run the Backend**

   ```sh
   cd server
   node index.js
   ```

5. **Run the Frontend**

   ```sh
   npm run dev
   ```

6. **Open in Browser**
   Navigate to `http://localhost:5173` (or the specified port) to use the application.

## API Endpoints

### `POST /api/v1/reviews`

- **Request Body:**
  ```json
  {
    "code": "// JavaScript code to be reviewed"
  }
  ```
- **Response:**
  ```json
  {
    "review": "AI-generated feedback on the code"
  }
  ```

## License

This project is licensed under the MIT License.

## Author

[Amal TV](https://github.com/amal-tv)
