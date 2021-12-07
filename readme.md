# 2N® Access Commander — SignalR API Integration Examples

Examples for integration with [2N® Access Commander](https://www.2n.cz/en_GB/products/access-control/2n-access-commander) via realtime SignalR API.

> 💡 These examples are not production grade code. So use it as inspiration.

## Documentation

SignalR is supported by 2N® Access Commander version 2.2. This documentation regarding use of SignalR for third party integration is not yet publicly available as the API structure may change slightly over the next few versions whilst our support of SignalR continues to take shape.

We expect to have a stable API for SignalR and public integration documentation by the end of 2022. Until then, feel free to join our early adopters so we can inform you of any significant changes. Just drop a message to accesscommander@2n.com.

## Examples

Examples are written with official JS SignalR library and run as *node.js* application. Every example is in dedicated directory. 

If you want to run it: 

- Go to appropriate directory
- Modify server address and credentials at beginning of `index.js` 
- Install dependencies and run it:

```
npm install
node index.js
```

### Uptime example

Example will subscribe to `uptime` topic, and will print server uptime every second. 

This example will not provide you that useful data, it there to show bare minimum what need to be done if you want to consume messages.

### Access log example

Example will subscribe to `accesslog` topic, and will print new line everytime somebode get access granted (print user name and device name).
