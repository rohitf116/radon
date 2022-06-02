const express = require('express');
const myHelper = require('../util/helper')
const _ = require("lodash");

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

    //--------------------fifth Assignment-------------------------------//

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
        const num=Number(req.params.filmId)-1
        
        req.params.filmId > film.length || req.params.filmId<0  ?res.send('No movie exists with this id'):res.send(film[num].name)
        
       
    });

   

     //--------------------sixth Assignment-------------------------------//

     router.get('/sol1', function (req, res) {
        const valueOfFirstSeven=7*(7+1)/2

        const sumOfArray = [1, 2, 3,5,6,7].reduce((partialSum, a) => partialSum + a, 0)
        const missingNumber =valueOfFirstSeven-sumOfArray
        console.log(missingNumber)
        res.send(`${missingNumber}`)
       
    });

    //--------------------seven Assignment-------------------------------//

    router.get('/sol2', function (req, res) {
        const valueOfNumber=(6*(33+38)/2)
        const arr=[33,34,35,37,38]
        const sumOfArray=arr.reduce((acc,el)=>acc+el,0)
        const missingNumber=valueOfNumber-sumOfArray
        res.send(`${missingNumber}`)
       
    });

    //--------------------day1 assignment 4-------------------------------//

    router.get('/hello', function (req, res) {
        const montOfYear=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const quarter=_.chunk(montOfYear, 4)
        console.log(`-----------4 assignment----------------`)
        console.log(quarter)
        const collectionOfOdd=[1,3,5,7,9,11,13,15,17,19]
        const allButFirst=_.tail(collectionOfOdd)
        console.log(allButFirst)
        console.log(`-----------5 assignment----------------`)
        const firstArr=[1,2,3]
        const secondfirstArr=[3,4,5]
        const thirdArr=[4,5,6]
        const fourthArr=[6,7,8]
        const fiveArr=[7,8,9]
        const unionOfArr=_.union(firstArr,secondfirstArr,thirdArr,fourthArr,fiveArr)
        console.log(unionOfArr)
        console.log(`-----------6 assignment----------------`)
        const categoryOfMovies=_.fromPairs([ ['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']])
        console.log(categoryOfMovies)
        res.send()
       
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