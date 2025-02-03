import type { IEventToastService, IEvent, IEventsIndex } from "../types/event-toast";
import EventToastError from "./EventToastError";
export default class implements IEventToastService {
  #events = reactive(new Map<IEvent["event_id"], IEventsIndex>());

  get events(): IEventsIndex[] {
    return Array.from(this.#events.values());
  }

  alert(evt: IEvent): void {
    const duplicate = this.#events.has(evt.event_id);

    if (!duplicate) {
      this.#addEvent(evt);
    }
    this.#incrementCount(evt);
  }

  #setCount(evt: IEvent, count: number) {
    const evt_id = evt.event_id;
    this.#events.set(evt_id, [evt, count]);
  }

  #incrementCount({ event_id }: IEvent): void {
    let [evt, count] = this.#events.get(event_id) as [IEvent, number];
    count++;
    this.#setCount(evt, count);
  }

  #decrementEvent({ event_id }: IEvent): number {
    let [evt, count] = this.#events.get(event_id) as [IEvent, number];
    count--;
    this.#setCount(evt, count);
    return count;
  }

  #addEvent(evt: IEvent): void {
    this.#events.set(evt.event_id, [evt, 0]);
  }

  #hasEvent({ event_id }: IEvent) {
    return this.#events.has(event_id);
  }

  #removeEvent({ event_id }: IEvent) {
    this.#events.delete(event_id);
  }

  #eventExists({ event_id }: Pick<IEvent, "event_id">): boolean {
    const eventExists = Boolean(this.#events.has(event_id));
    if (!eventExists) {
      throw new EventToastError("event does not exist!", event_id);
    } else {
      return eventExists;
    }
  }

  dismiss(event: IEvent | IEvent["event_id"]) {
    if (typeof event === "string") event = this.getEvent(event);
    if (!this.#hasEvent(event)) return;
    const num = this.#decrementEvent(event);
    if (num <= 0) {
      this.#removeEvent(event);
    }
  }

  deleteEvent(event: IEvent) {
    if (!this.#hasEvent(event)) return;
    this.#removeEvent(event);
  }

  getEvent(event_id: IEvent["event_id"]): IEvent {
    const exists = this.#eventExists({event_id});
    if (exists) {
      return this.#events.get(event_id)![0];
    } else {
      throw new EventToastError("event not found!", event_id);
    }
  }

  getEventCount(event_id: IEvent["event_id"]): number {
    const exists = this.#eventExists({event_id});
    if (exists) {
      return this.#events.get(event_id)![1];
    } else {
      throw new EventToastError("event not found!", event_id);
    }
  }
}
