import express from 'express'
import './config/dotenv.js';
import cors from 'cors'
import buttonsRouter from './routes/buttons.js'

const app = express()

app.use(express.json());
app.use(cors());

app.use('/buttons', buttonsRouter)

const PORT = process.env.PORT || 3001
    
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})