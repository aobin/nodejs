/**
 * Created by Administrator on 2017/7/18 0018.
 */

var dynamoose = require('dynamoose');

dynamoose.AWS.config.update({
                                accessKeyId: 'AKID',
                                secretAccessKey: 'SECRET',
                                region: 'us-east-1'
                            });
dynamoose.local();

// Create cat model with default options
var Cat = dynamoose.model('Cat', {id: Number, name: String});

// Create a new cat object
var garfield = new Cat({id: 666, name: 'Garfield'});

// Save to DynamoDB
garfield.save();

// Lookup in DynamoDB
Cat.get(666)
    .then(function (badCat) {
        console.log('Never trust a smiling cat. - ' + badCat.name+'   '+badCat.id);
    });



