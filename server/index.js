import express from 'express';
import cors from 'cors';
import posts from './routers/posts.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const URI = "mongodb+srv://admin:cRM9OhAQA7JIwSYK@cluster0.jpzvwzk.mongodb.net/?retryWrites=true&w=majority"

//middleware express
//nếu có route phía trước ('/') thì sẽ chạy qua http://localhost:5000/
//nếu ko có route phía trước thì sẽ mặc định chạy qua cors
app.use(cors());

//giới hạn dung lượng client submit lên server
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));

app.use('/posts', posts);

mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to DB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log('err', err);
    });