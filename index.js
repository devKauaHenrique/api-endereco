const express = require('express');
const app = express();

const useRoutes = require('./routes/enderecos');

app.use(express.json());
app.use('/api/enderecos', useRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
})

