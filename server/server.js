import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/db.js'
import { serve } from 'inngest/express'
import { functions, inngest } from './ingest/index.js'

const app = express()

await connectDB()

app.use(express.json())
app.use('/api/inngest', serve({ client: inngest, functions }))
app.use(cors())

app.get('/', (req, res) => res.send('Server is running'))

const PORT = process.env.PORT || 4000

app.listen(PORT, () =>
	console.log(`server is running on PORT: http://localhost:${PORT}/`),
)
