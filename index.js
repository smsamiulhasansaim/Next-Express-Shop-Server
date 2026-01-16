const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

// Mock Database
let items = [
    { id: 1, name: "Premium Wireless Headset", description: "Noise cancelling, 20h battery life.", price: 199, image: "https://techlink.com.bd/wp-content/uploads/2024/11/Asus-ROG-Strix-XG27UCG-27-inch-4K-Dual-Mode-Gaming-Monitor.jpg" },
    { id: 2, name: "Ergonomic Office Chair", description: "Lumbar support, breathable mesh.", price: 250, image: "https://techlink.com.bd/wp-content/uploads/2024/11/Asus-ROG-Strix-XG27UCG-27-inch-4K-Dual-Mode-Gaming-Monitor.jpg" },
    { id: 3, name: "Mechanical Keyboard", description: "RGB Backlit, Blue switches.", price: 85, image: "https://techlink.com.bd/wp-content/uploads/2024/11/Asus-ROG-Strix-XG27UCG-27-inch-4K-Dual-Mode-Gaming-Monitor.jpg" },
    { id: 4, name: "4K Monitor 27-inch", description: "IPS Panel, 144Hz refresh rate.", price: 320, image: "https://techlink.com.bd/wp-content/uploads/2024/11/Asus-ROG-Strix-XG27UCG-27-inch-4K-Dual-Mode-Gaming-Monitor.jpg" },
];

// Routes
// 1. Get All Items
app.get('/api/items', (req, res) => {
    res.json(items);
});

// 2. Get Single Item
app.get('/api/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
});

// 3. Add Item
app.post('/api/items', (req, res) => {
    const newItem = {
        id: items.length + 1,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: "https://placehold.co/600x400/png" // Default image
    };
    items.push(newItem);
    res.status(201).json(newItem);
});

app.listen(PORT, () => {
    console.log(`Backend Server running at http://localhost:${PORT}`);
});