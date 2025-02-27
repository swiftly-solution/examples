/**

    http.Listen(ip_addr, port, callback)

    You have to be sure that the port is not already in use by another application and have to be opened.


    Arguments:
    * @param {string} ip_addr - The IP address to listen on.
    * @param {number} port - The port to listen on.
    * @param {function} callback - The function to be called when a request is received.


*/
http.Listen("0.0.0.0", 1337, function(req, res){
/**
        HTTP Request Object

        The HTTP Request object is passed to the callback function when a request is received.

        Properties:
            httprequest.path - string - The path of the request.
            httprequest.method - string - The method of the request.
            httprequest.body - string - The body of the request.
            httprequest.files - Object - The files of the request.
            httprequest.headers - Object - The headers of the request.
            httprequest.params - Object - The params of the request.


            HTTPResponse Object

            The HTTP Response object is passed to the callback function when a request is received.
            
            Functions
                httpresponse.WriteBody(content) - Write the body of the response.
                httpresponse.GetHeaders() - Get the headers of the response.
                httpresponse.GetHeader(key) - Get the header of the response.
                httpresponse.SetHeader(key, params) - Set the header of the response.
                httpresponse.Send(response_code) - Send the response.
                httpresponse.IsCompleted() - Check if the response is completed.
    */
    print(req.path)
    
    res.WriteBody(req.path)
    res.SetHeader("Content-Type", "text/plain")
    res.Send(200)
})


/**
    PerformHTTPRequest(url, callback, method, data, headers, files)
    
    Perform an HTTP request to the specified URL.
    
    Arguments:

        * @param {string} url - The URL to send the request to.
        * @param {function} callback - The function to be called when the request is completed.
        * @param {string} method - The method of the request. (GET, POST, PUT, DELETE etc.)
        * @param {string} [data] - The data to send in the request.
        * @param {Object} [headers] - The headers to send in the request.
        * @param {Object} [files] - The files to send in the request.
*/


commands.Register("testhttp", function(playerId, args, argc, silent, prefix) {
    PerformHTTPRequest("https://api.restful-api.dev/objects", function(status, body, headers, err) {
        if (status === 200) {
            console.log(body);
        } else {
            console.log("Error: " + err);
        }
    }, "GET");
})

/*
    Core Functions
*/
function GetPluginAuthor() {
    return "Swiftly Solution";
}

function GetPluginVersion() {
    return "1.0.0";
}

function GetPluginName() {
    return "[Javascript] Commands Examples";
}

function GetPluginWebsite() {
    return "https://github.com/swiftly-solution/examples";
}