const express = require('express');
const app = express(); 
require("./config");  
const employees = require("./employees");  
 

app.use(express.json());

// post or send Data
app.post('/create', async(req, res) => {
    const data =new employees(req.body);
    let result = await data.save();
        console.log(result);
    res.send(result);
});


// Get Data
app.get('/data', async (req, res) => {
    try {
        let data = await employees.find();
        res.send(data);
    } catch (error) {
        console.log('Error while fetching employees:', error);
        res.status(500).send({ error: 'Error while fetching employees' });
    }
});


// Delete  Data
app.delete('/delete/:id', async (req, res) => {
    try {
        const deletedItem = await employees.findByIdAndDelete(req.params.id);
        if (!deletedItem)
         return res.status(404).json({ message: 'Item not found' });

        res.json({ message: 'Item deleted' });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
  

// update data
app.put('/items/:id', async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
        res.json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});



    
      
      

app.listen(5000);







