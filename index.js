const express = require('express')
const app = express()
const cors = require('cors')
const { MongoClient } = require('mongodb');
require('dotenv').config()
const port = process.env.PORT || 5000

//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vo35w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

console.log(uri);


async function run() {
    try {
        await client.connect();
        // console.log('database connected successfully');
        const databse = client.db('studentFacultyPortal');
        const enrollmentCollection = database.collection('enrollment');

        app.post('/enrollment', async (req, res) => {
            const enrollment = req.body;
            const result = await enrollmentCollection.insertOne(enrollment);
            console.log(result);
            res.json({ result })

        })
    }
    finally {
        //await client close
    }
}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`listening at ${port}`)
})

// shb user k pete hole
// app.get('/users')

// ekta  user k post korte
// app.post('/users')

// shb user theke ekjon k nite
// app.get('/users/:id')

// users update korte
// app.put('/users/:id')

// kono user k delete korte
// app.delete('/users/:id')