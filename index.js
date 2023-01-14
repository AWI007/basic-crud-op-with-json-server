import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('<h2>Welcome to my CRUD app</h2>');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
