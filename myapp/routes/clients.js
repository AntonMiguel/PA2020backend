var express = require('express');
var router = express.Router();


const clients = { status: 'ok',
                  response: [
      {fname: 'juan', lname: 'perez'},
      {fname: 'jeremias', lname: 'boulet'},
      {fname: 'augusto', lname: 'lopez'}
                            ]
                }

const unClient = { status: 'ok',
                  response: [
      {fname: 'juan', lname: 'perez'}      
                            ]
                }

const clienteCreado = { status: 'ok',
                response: [
    {fname: 'juan', lname: 'perez'}         //devuelvo los datos con que lo cree o mejor devuelvo vacío?
                          ]
              }

const clienteActualizado = { status: 'ok',
                response: [
    {fname: 'juan', lname: 'perez'}
                          ]
              }

const clienteEliminado = { status: 'ok',
                response: [
    
                          ]
              }

const contratos = { status: 'ok',
              response: [
  {nombreContrato: 'abc123', tipoContrato: 'alquiler de flow'}         //devuelvo los datos con que lo cree o mejor devuelvo vacío?
  {nombreContrato: 'qwe456', tipoContrato: 'servicio'}
                        ]
            }

const unContrato = { status: 'ok',
              response: [
  {nombreContrato: 'abc123', tipoContrato: 'alquiler de flow'}
                        ]
            }

const contratoCreado = { status: 'ok',
              response: [
  {nombreContrato: 'abc123', tipoContrato: 'alquiler de flow'}
                        ]
            }

const contratoActualizado = { status: 'ok',
              response: [
 {nombreContrato: 'abc123', tipoContrato: 'alquiler de flow'}
                        ]
            }

const contratoEliminado = { status: 'ok',
              response: [

                        ]
            }



router.get('/', function(req, res, next) {
  //res.send('mostrando clientes');
  res.json(clients);
});

router.get('/:id', function(req, res, next) {
  //res.send('mostrando cliente '+req.params.id);
  res.json(unClient);
});

router.post('/', function(req, res, next) {
  //res.send('creando cliente con datos ' +JSON.stringify(req.body));
  res.json(clienteCreado);
});

router.put('/:id', function(req, res, next) {
  //res.send('actualizando cliente '+req.params.id+" con datos "+JSON.stringify(req.body));
  res.json(clienteActualizado);
});

router.patch('/:id', function(req, res, next) {
  //res.send('actualizando cliente '+req.params.id+" con datos "+JSON.stringify(req.body));
  res.json(clienteActualizado);
});

router.delete('/:id', function(req, res, next) {
  //res.send('caducando cliente '+req.params.id);
  res.jason(clienteEliminado);
});



router.get('/:id/contracts', function(req, res, next) {
  //res.send("mostrando contratos del cliente "+ req.params.id);
  res.jason(contratos);
});

router.get('/:id/contracts/:num', function(req, res, next) {
  //res.send("mostrando contrato "+req.params.num+" del cliente "+req.params.id);
  res.jason(unContrato);
});

router.post('/:id/contracts', function(req, res, next) {
  //res.send("creando contrato del cliente "+ req.params.id);
  res.jason(contratoCreado);
});

router.put('/:id/contracts/:num', function(req, res, next) {
  //res.send("actualizando contrato "+req.params.num+" del cliente "+req.params.id);
  res.jason(contratoActualizado);
});

router.patch('/:id/contracts/:num', function(req, res, next) {
  //res.send("actualizando contrato "+req.params.num+" del cliente "+req.params.id);
  res.jason(contratoActualizado);
});

router.delete('/:id/contracts/:num', function(req, res, next) {
  //res.send("eliminando contrato "+req.params.num+" del cliente "+req.params.id);
  res.jason(contratoEliminado);
});

module.exports = router;