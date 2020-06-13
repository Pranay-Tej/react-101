import EventEmitter from "eventemitter3";

// https://medium.com/@krzakmarek88/eventemitter-instead-of-lifting-state-up-f5f105054a5
// https://www.npmjs.com/package/eventemitter3

const eventEmitter = new EventEmitter();

const Emitter = {
    on: (event, fn) => eventEmitter.on(event.id, fn),
    once: (event, fn) => eventEmitter.once(event.id, fn),
    off: (event, fn) => eventEmitter.off(event.id, fn),
    emit: (event, payload) => eventEmitter.emit(event.id, payload),
};

Object.freeze(Emitter);

//  centralized place for all events

const events = {
    dataFromChild1ToChild2: {
        id: "dataFromChild1ToChild2",
        info: "user input from Child1",
    },
    confirmationFromChild2: {
        id: "confirmationFromChild2",
        info: "confirmation from Child1",
    },
};

Object.freeze(events);

export { events, Emitter };
