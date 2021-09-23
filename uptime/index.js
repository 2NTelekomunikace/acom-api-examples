import { AComConnection } from './acom-connection-helper.js';

// This line will ignore TLS (self-sign) certificate issues.
// Note: Never use this on production, please set proper certificate.
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = '0';

const server = "https://my-server/";
const user = "userName";
const password = "Passw0rd";

async function main()
{
	const acom = new AComConnection(server, user, password);

	await acom.connect();

    await acom.subscribe("uptime", (data) => console.log(data))
}

await main();
