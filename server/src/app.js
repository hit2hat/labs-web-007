const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const database = require('./database');

const app = express();
const db = new database();

const config = require('./config');
const errorGenerator = require('./errors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

/*
    Get all items
 */
app.get('/guide', (req, res) => {
    return res.json(db.getAll());
});

/*
    Get single item by id
 */
app.get('/guide/:id', (req, res) => {
    const id = !!req.params.id ? String(req.params.id) : null;
    if (id === null) {
        return res.json({
            error: errorGenerator(-1),
        });
    }

    return res.json(db.get(Number(id)));
});

/*
    Add item
 */
app.post('/guide', (req, res) => {
    const name = req.body.name || null;
    const phone = req.body.phone || null;
    const age = req.body.age || null;

    if (!name || !(/^[a-zA-Zа-яА-Я\-_\s]+$/.test(name))) {
        return res.json({
            error: errorGenerator(-2, 'name'),
        });
    }

    if (!phone || (new RegExp("^\\+[0-9]*$")).test(phone)) {
        return res.json({
            error: errorGenerator(-2, 'phone'),
        });
    }

    if (!age || !Number(age) || Number(age) < 3 || Number(age) > 150) {
        return res.json({
            error: errorGenerator(-2, 'age'),
        });
    }

    return res.json(db.add({
        name,
        phone: Number(phone),
        age: Number(age),
    }));
})

/*
    Delete item by id
 */
app.delete('/guide/:id', (req, res) => {
    const id = !!req.params.id ? String(req.params.id) : null;
    if (id === null) {
        return res.json({
            error: errorGenerator(-1),
        });
    }

    return res.json(db.remove(Number(id)));
})

/*
    Update field by id
 */
app.put('/guide/:id', (req, res) => {
    const id = !!req.params.id ? String(req.params.id) : null;
    if (id === null) {
        return res.json({
            error: errorGenerator(-1),
        });
    }

    const name = req.body.name || null;
    const phone = req.body.phone || null;
    const age = req.body.age || null;

    if (!name || !(/^[a-zA-Zа-яА-Я\-_\s]+$/.test(name))) {
        return res.json({
            error: errorGenerator(-2, 'name'),
        });
    }

    if (!phone || (new RegExp("^\\+[0-9]*$")).test(phone)) {
        return res.json({
            error: errorGenerator(-2, 'phone'),
        });
    }

    if (!age || !Number(age) || Number(age) < 3 || Number(age) > 150) {
        return res.json({
            error: errorGenerator(-2, 'age'),
        });
    }

    return res.json(db.update(Number(id), {
        name,
        phone,
        age,
    }));
})


app.listen(config.app.port, () => {
    console.log(`[Core]: Server was started on ${config.app.port}`);
});