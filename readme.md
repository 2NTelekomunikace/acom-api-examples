# 2N® Access Commander — SignalR API Integration Examples

Examples for integration with [2N® Access Commander](https://www.2n.cz/en_GB/products/access-control/2n-access-commander) via realtime SignalR API.

> 💡 These examples are not production grade code. So use it as an inspiration for your own application.

## Documentation

SignalR is supported by 2N® Access Commander version 2.2. This documentation of SignalR usage for third party integration is not yet publicly available as the API structure may change slightly over the next few versions, whilst our support of SignalR continues to take shape.

We expect to have a stable API for SignalR and public integration documentation by the end of 2022. Until then, feel free to join our early adopters, so we can inform you of any significant changes. Just drop a message to accesscommander@2n.com.

## Examples

Examples use the official JS SignalR library and run as *node.js* application. For every example there is a dedicated directory. 

If you want to run the example: 

- Go to the appropriate directory
- Modify server address and credentials at the beginning of `index.js` file
- Install dependencies and execute the file:

```
npm install
node index.js
```

### Uptime example

Example will subscribe to `uptime` topic, and will print server uptime every second. 

This example does not provide useful data, it is meant to show the bare minimum of what is necessary to subscribe and consume SignalR messages.

### Access log example

Example will subscribe to `accesslog` topic, and will print a new line everytime an Access Granted event occurs. (prints user name and device name).
