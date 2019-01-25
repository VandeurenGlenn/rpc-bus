import { rpc, rpc_process } from 'carlo/rpc';
import EventEmitter from 'events';

class Emitter extends EventEmitter {
	constructor() {
		super();
	}
  on(event, func) {
    super.on(event, func);
  }

  emit(event, value) {
    super.emit(event, value);
  }
}

rpc_process.init(() => rpc.handle(new Emitter()));
