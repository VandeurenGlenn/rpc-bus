rpc-bus
==
> Event bus for Carlo's remote procedure call

## install
```sh
npm install --save rpc-bus
```

## usage

```js
import { launch } from 'carlo';
import { rpc, rpc_process } from 'carlo/rpc';

const app = await launch(
    {
      bgcolor: '#eee',
      width: 1400,
      height: 840,
      userDataDir,
      title: 'title',
      args: process.env.DEV === 'true' ? ['--auto-open-devtools-for-tabs'] : []
    });

const bus = await rpc_process.spawn('node_modules/rpc-bus/dist/index.js');

await app.mainWindow().load('index.html', rpc.handle(app), bus);
```
