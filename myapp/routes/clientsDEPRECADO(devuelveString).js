var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('mostrando clientes');
});

router.get('/:id', function(req, res, next) {
  res.send('mostrando cliente '+req.params.id);
});

router.post('/', function(req, res, next) {
  res.send('creando cliente con datos ' +JSON.stringify(req.body));
});

router.put('/:id', function(req, res, next) {
  res.send('actualizando cliente '+req.params.id+" con datos "+JSON.stringify(req.body));
});

router.patch('/:id', function(req, res, next) {
  res.send('actualizando cliente '+req.params.id+" con datos "+JSON.stringify(req.body));
});

router.delete('/:id', function(req, res, next) {
  res.send('caducando cliente '+req.params.id);
});



router.get('/:id/contracts', function(req, res, next) {
  res.send("mostrando contratos del cliente "+ req.params.id);
});

router.get('/:id/contracts/:num', function(req, res, next) {
  res.send("mostrando contrato "+req.params.num+" del cliente "+req.params.id);
});

router.post('/:id/contracts', function(req, res, next) {
  res.send("creando contrato del cliente "+ req.params.id);
});

router.put('/:id/contracts/:num', function(req, res, next) {
  res.send("actualizando contrato "+req.params.num+" del cliente "+req.params.id);
});

router.patch('/:id/contracts/:num', function(req, res, next) {
  res.send("actualizando contrato "+req.params.num+" del cliente "+req.params.id);
});

router.delete('/:id/contracts/:num', function(req, res, next) {
  res.send("eliminando contrato "+req.params.num+" del cliente "+req.params.id);
});


module.exports = router;