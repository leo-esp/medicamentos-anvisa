var mongoose = require('mongoose');
mongoose.connect('mongodb://leoesp:esposito12@tatooine.mongodb.umbler.com:53419/testekeystone');

var medicamentosSchema = new mongoose.Schema({
    'principioAtivo': String,
    'cnpj': String,
    'laboratorio': String,
    'codigoGgrem': String,
    'registro': String,
    'ean': String,
    'produto': String,
    'apresentacao': String,
    'classeTerapeutica': String,
    'tipoDeProdutoStatusDoProduto': String,
    'pf_0': String,
    'pf_12': String,
    'pf_17': String,
    'pf_17Alc': String,
    'pf_17_5': String,
    'pf_17_5Alc': String,
    'pf_18': String,
    'pf_18Alc': String,
    'pf_20': String,
    'pmc_0': String,
    'pmc_12': String,
    'pmc_17': String,
    'pmc_17Alc': String,
    'pmc_17_5': String,
    'pmc_17_5Alc': String,
    'pmc_18': String,
    'pmc_18Alc': String,
    'pmc_20': String,
    'restricaoHospitalar': String,
    'cap': String,
    'confaz_87': String,
    'analiseRecursal': String,
    'listaDeConcessaoDeCreditoTributarioPisCofins': String,
    'comercializacao_2016': String,
    'tarja': String
}, { collection: 'medicamentos' }
);

module.exports = { Mongoose: mongoose, MedicamentosSchema: medicamentosSchema }