import { Injectable, Query } from '@angular/core';
import { Event, UserAccount } from '../Services/data_models';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class Services {

  event: Event;
  events: Observable<Event[]>
  private eventDoc: AngularFirestoreDocument<Event>
  private eventCollection: AngularFirestoreCollection<Event>
  fEvent: Observable<Event[]>

  userAccount= new BehaviorSubject<UserAccount>({username: '', password: ''});
  currentUserAccount = this.userAccount.asObservable();

  constructor(private angular: AngularFirestore) {
    this.eventCollection = angular.collection<Event>('events', ref => ref.orderBy('id', 'asc'))
    this.events = this.eventCollection.snapshotChanges().pipe(
      map(action => action.map(a => {
        const data = a.payload.doc.data() as Event
        const id = a.payload.doc.data().id
        return { id, ...data }
      }))
    )
  }

  getEvents() {
    return this.events;
  }

  async getEvent(id: number): Promise<Event>{
    let event:Event
    await this.eventCollection.ref.where('id', '==', Number(id))
    .get().then(querySnapshot => {
      querySnapshot.forEach(doc =>{
        event= doc.data() as Event;
      })
    });
    return event;

  }

  updateEvent(event: Event) {
    this.eventCollection.ref.where('id', '==', event.id).get()
      .then(res => {
        res.forEach(doc => {
          this.eventDoc = this.angular.doc<Event>('events/' + doc.id)
          this.eventDoc.update(event)
        });
      })
  }

  addEvent(event: Event) {
    this.eventCollection.ref.get().then(res => {
      event.id = res.size;
      return this.eventCollection.add(event)
    })
  }

  updateCurrentUser(userAccount: UserAccount){
    this.userAccount.next(userAccount);
  }
}

