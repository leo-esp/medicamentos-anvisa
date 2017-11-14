var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var http = require('http');
var fs = require('fs');

// var file = fs.createWriteStream("file.xls");
// var request = http.get("http://portal.anvisa.gov.br/documents/374947/2829072/xls_conformidade_2017_10_20.xls", function(response) {
//   response.pipe(file);
// });
var xlstojson = require("xls-to-json-lc");
var file = require('./file.xls');
try {
    xlstojson({
        input: 'file.xls',
        output: 'output.js', //since we don't need output.json
        lowerCaseHeaders:true
    }, function(err,result){
        if(err) {
            console.log(1, err);
        } 
        console.log(2, result);
    });
} catch (e){
    console.log(3, e);
}

// var db = require("./db");
// var Medicamentos = db.Mongoose.model('medicamentos', db.MedicamentosSchema, 'medicamentos');

// var medObj = {
//     'principioAtivo': 'ABATACEPTE',
//     'cnpj': '56.998.982/0001-07',
//     'laboratorio': 'BRISTOL-MYERS SQUIBB FARMACÊUTICA LTDA',
//     'codigoGgrem': '505107701157215',
//     'registro': '1018003900019',
//     'ean': '7896016806469',
//     'produto': 'ORENCIA',
//     'apresentacao': '250 MG PO LIOF INJ CT FA + SER DESC',
//     'classeTerapeutica': 'M01C0 - AGENTES ANTI-REUMÁTICOS ESPECÍFICOS',
//     'tipoDeProdutoStatusDoProduto': 'Biológicos',
//     'pf_0': '1402,19',
//     'pf_12': '1593,4',
//     'pf_17': '1689,39',
//     'pf_17Alc': '1689,39',
//     'pf_17_5': '1699,63',
//     'pf_17_5Alc': '1699,63',
//     'pf_18': '1709,99',
//     'pf_18Alc': '1709,99',
//     'pf_20': '1752,74',
//     'pmc_0': '',
//     'pmc_12': '',
//     'pmc_17': '',
//     'pmc_17Alc': '',
//     'pmc_17_5': '',
//     'pmc_17_5Alc': '',
//     'pmc_18': '',
//     'pmc_18Alc': '',
//     'pmc_20': '',
//     'restricaoHospitalar': 'Sim',
//     'cap': 'Não',
//     'confaz_87': 'Sim',
//     'analiseRecursal': '',
//     'listaDeConcessaoDeCreditoTributarioPisCofins': 'POSITIVA',
//     'comercializacao_2016': 'SIM',
//     'tarja': 'Tarja Vermelha'
// }

// var medicamento = new Medicamentos(medObj);
// medicamento.save(function (err) {
//     if (err) {
//         console.log("Error! " + err.message);
//         return err;
//     }
//     else {
//         console.log("Post saved");
//     }
// });

// Medicamentos.find({}).lean().exec(
//    function (e, docs) {
//       console.log(docs);
// });

module.exports = app;
