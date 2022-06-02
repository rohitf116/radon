const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();
    //--------------------first Assignment-------------------------------//
router.get('/movies', function (req, res) {

    const movie=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    
    res.send(movie)
});
    //--------------------second and three Assignment-------------------------------//
router.get('/movies/:indexNumber', function (req, res) {

    const movie=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    let ind=(Number(req.params.indexNumber)-1)
    req.params.indexNumber >movie.length?res.send('use a valid index'): res.send(movie[ind] )
   
});


    //--------------------fourth Assignment-------------------------------//
    router.get('/films', function (req, res) {

        const film=[ {
            id:1,name:'The Shinning'
           },  {
            id:2,name:'Incendies'
           }, {
            id:3,name:'Rang de Basanti'
           }, {
            id:4,name:'Finding Nemo'
           }]
           
        res.send(film )
       
    });

    router.get('/films/:filmId', function (req, res) {

        const film=[ {
            id:1,name:'The Shinning'
           },  {
            id:2,name:'Incendies'
           }, {
            id:3,name:'Rang de Basanti'
           }, {
            id:4,name:'Finding Nemo'
           }]
           console.log(req.params.filmId)
        const num=req.params.filmId
        

        res.send(film[num].name)
       
    });




router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
   
    res.send('Hello there!')
});

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})


module.exports = router;
// adding this comment for no reason