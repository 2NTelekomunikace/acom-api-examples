# 2N® Access Commander — SignalR API Integration Examples

Examples for integration with [2N® Access Commander](https://www.2n.cz/en_GB/products/access-control/2n-access-commander) via realtime SignalR API.

> 💡 These examples are not production grade code. So use it as inspiration.

## Documentation

*TODO*

## Examples

Examples are written with official JS SignalR library and run as *node.js* application.

Every example is in dedicated directory. To run, got there, modify server address and ceredtial at beginig of `index.js` and run:

```
npm install
node index.js
```

### Uptime example

Example will subscribe to `uptime` topic, and will print server uptime every second. 

This example will not provide you that useful data, it there to show bare minimum what need to be done if you want to consume data.

### Access log example

Example will subscribe to `accesslog` topic, and will print new line everytime somebode get access granted (print user name and device name).
