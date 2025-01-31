import type { IEvent } from "../types/event-toast";

export default class extends Error {
  constructor(message: string, event_id: IEvent['event_id']) {
    super(message);
    this.event_id = event_id;
  }
  event_id: IEvent['event_id'];
}
