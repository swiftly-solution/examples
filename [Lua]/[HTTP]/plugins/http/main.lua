--[[

    http:Listen(ip_addr, port, callback)

    You have to be sure that the port is not already in use by another application and have to be opened.


    Arguments:
        ip_addr - string - The IP address to listen on.
        port - number - The port to listen on.
        callback - function - The function to be called when a request is received.


--- @param ip_addr string
--- @param port number
--- @param callback fun(req:HTTPRequest,res:HTTPResponse)
--- @return nil

]]
http:Listen("0.0.0.0", 1337, function(req, res)
--[[
        HTTP Request Object

        The HTTP Request object is passed to the callback function when a request is received.

        Properties:
            httprequest.path - string - The path of the request.
            httprequest.method - string - The method of the request.
            httprequest.body - string - The body of the request.
            httprequest.files - table - The files of the request.
            httprequest.headers - table - The headers of the request.
            httprequest.params - table - The params of the request.


            HTTPResponse Object

            The HTTP Response object is passed to the callback function when a request is received.
            
            Functions
                httpresponse:WriteBody(content) - Write the body of the response.
                httpresponse:GetHeaders() - Get the headers of the response.
                httpresponse:GetHeader(key) - Get the header of the response.
                httpresponse:SetHeader(key, params) - Set the header of the response.
                httpresponse:Send(response_code) - Send the response.
                httpresponse:IsCompleted() - Check if the response is completed.
    ]]
    print(req.path)
    
    res:WriteBody(req.path)
    res:SetHeader("Content-Type", "text/plain")
    res:Send(200)
end)

--[[
    PerformHTTPRequest(url, callback, method, data, headers, files)
    
    Perform an HTTP request to the specified URL.
    
    Arguments:
        url - string  - The URL to send the request to.
        callback - function - The function to be called when the request is completed.
        method - string - The method of the request.
        data - string -  The data to send in the request.
        headers - table - The headers to send in the request.
        files - table - The files to send in the request.
]]

commands:Register("testhttp", function (playerid, args, argc, silent, prefix)
    PerformHTTPRequest("https://api.restful-api.dev/objects", function (status, body, headers, err)
        if status == 200 then
            print(body)
        else
            print("Error: " .. err)
        end
    end, "GET")
end)
--[[
    Core Functions
]]
function GetPluginAuthor()
    return "Swiftly Solution"
end

function GetPluginVersion()
    return "1.0.0"
end

function GetPluginName()
    return "[Lua] HTTP Examples"
end

function GetPluginWebsite()
    return "https://github.com/swiftly-solution/examples"
end