export interface IEventToast {
  #events: Map<IEvent['event_id'], IEventsIndex>
  events:  Array<IEventsIndex>;

  alert(msg: IEvent): void;

  dismiss(e_id: IEvent | IEvent["event_id"]): void;

  deleteEvent(e_id: IEvent): void;

  getEvent(e_id: IEvent["event_id"]): IEvent;

  getEventCount(e_id: IEvent["event_id"]): number;
  // Private methods (for reference, these can't be enforced directly in an interface)
  #hasEvent(e_id: IEvent['event_id']): boolean;
  #incrementCount(e_id: IEvent['event_id']): void;
  #decrementEvent(e_id: IEvent['event_id']): number;
  #addEvent(msg: IEventsIndex): void;
  #removeEvent(e_id: IEvent['event_id']): void;
  #eventExists(e_id: IEvent['event_id']): boolean;
}

export interface IEvent {
  event_id: string;
  message: string;
};

export type IEventsIndex = [IEvent, number]
