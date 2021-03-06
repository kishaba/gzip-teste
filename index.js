const express = require('express');
const app = express();
const compression = require('compression');

const largeObject = [];
for (let i = 0; i < 50000; i++) {
  largeObject.push({
    name: 'Alexandre',
    address: 'Rua alameda dos anjos',
    anotherfield: 'lalalalla',
  });
}
app.use(compression());
app.get('/', (req, res) => {
  res.header('Cache-Control', 'public,max-age=3600');
  res.send(largeObject);
});

app.listen(3000, () => console.log('listening'));
