'use strict'
const request = require('request')

//https://hackernoon.com/create-a-serverless-rest-api-with-node-js-aws-lambda-dynamodb-api-gateway-f08e7111fd16
exports.handler = async event => {
  // TODO implement
  const email = event.email && event.email
  const password = event.password && event.password
  if (email && password)
    request.post(
      {
        url: 'http://URL_API/',
        form: {
          usermane: email,
          password: password
        }
      },
      function(err, httpResponse, body) {
        if (!err && httpResponse.statusCode == 200) {
          var dataResp = JSON.parse(body)
          return {
            data: dataResp,
            message: 'Login successfully.',
            result: 1
          }
        } else {
          return {
            result: 0,
            message: 'The User Profile Service failed the logon'
          }
        }
      }
    )
  else
    return {
      result: 0,
      message: 'Incorrect Email or Password, Please try again.'
    }
}
