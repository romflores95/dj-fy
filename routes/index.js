// dependencies
var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");

// models
const Party = require('../models/party');

// homepage where people input their preferences
router.get('/', function(req, res){
  res.render('index', {title: 'homepage'});
});

// results page
//TODO: can this be integrated with savePreference? Is this route necessary?
router.get('/results', function(req, res){
  res.render('results', {title: 'results'});
});

// save preference
router.post('/savePreference', function(req, res){
  console.log(req.body);

  Party.findOne({}, {}, { sort: {'date' : -1 } }, function(err, doc) {
    //TODO smelly code. Update to generalize genres
    if (req.body.genre === 'Pop'){
      doc.pop += 1;
    }

    if (req.body.genre === 'Hip-Hop/Rap'){
      doc.hipHop += 1;
    }

    if (req.body.genre === 'Latin'){
      doc.latin += 1;
    }

    if (req.body.genre === 'EDM'){
      doc.edm += 1;
    }

    if (req.body.genre === 'Throwbacks'){
      doc.throwbacks += 1;
    }

    doc.songs.push(req.body.song);

    doc.save( function (err, doc){
      if (err) console.log(err)
    })

  });

  res.render('results', {title: 'results'});
});

// save new party
router.post('/saveParty', function(req, res){
  console.log("saving party");

  const party = new Party({
    'name' : req.body.name
  });

  party.save(function(err) {
    if (err) console.log(err);
  })
  res.render('results', {title: 'results'});
})

router.get('/party', function(req, res){
  console.log("getting party data")


  Party.findOne({}, {}, { sort: {'date' : -1 } }, function(err, doc) {
    if (err) console.log(err);
    res.send(doc);
    }
  )
}


)


module.exports = router;
