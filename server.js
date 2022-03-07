const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log("[APP -> listen()] SERVER ON PORT 3000");
});