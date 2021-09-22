import signalR from '@microsoft/signalr';
import urljoin from 'url-join';

/**
 * Helper class that can login and subscribe to 2N® Access Commander SignalR API
 */
export class AComConnection
{
    #address
    #username
    #password
    #httpClient
    #connection

    constructor (address, username, password)
    {
        this.#address = address;
        this.#username = username;
        this.#password = password;
    }

    /**
     * Connect to AC server, including login
     */
    async connect ()
    {
        var logger = {
            log: console.log
        };
    
        // because we need to perform login first and remember cookie
        // we need our own HTTP client that will be used by SignalR library later
        this.httpClient = new signalR.DefaultHttpClient(logger);
    
        await this.login();
    
        const options = {
            httpClient: this.httpClient,
            withCredentials: true
        };
    
        const hubUrl = urljoin(this.#address, "/mainhub");
        this.connection = new signalR.HubConnectionBuilder()
            .withUrl(hubUrl, options)
            .configureLogging(signalR.LogLevel.Warning)
            .build();
    
        await this.connection.start();
    }

    async login ()
    {
        try
        {
            const data = { 
                login: this.#username, 
                password: this.#password, 
                longTimeLogin: true 
            };
            const loginUrl = urljoin(this.#address, "/api/v2/login");

            await this.httpClient.send({
                method: "PUT",
                url: loginUrl,
                content: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                }
            });

            console.log("Login OK");
        }
        catch (error) 
        {
            console.log(error);
            throw Error("Unable to login");
        }	
    }

    async subscribe (topic, callback, filter)
    {
        if (filter === undefined) {
            // Subscribe command need to have 2 arguments, even if filter is not used (null must be send instead of undefined)
            filter = null;
        }

        this.connection.on(topic, callback);
        return await this.connection.invoke("Subscribe", topic, filter);
    }
}
