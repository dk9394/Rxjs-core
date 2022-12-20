import { Observable } from "rxjs";

export const observablePolyfill = () => {

    // Basic Observable 
    const observer = {
        next: (value: any) => console.log(value),
        error: (error: any) => console.log(error),
        complete: () => console.log('complete')
    };

    const observable = new Observable(subscriber => {
        subscriber.next('Hello');
        subscriber.next('World');
        subscriber.complete();
        subscriber.next('next value that won\'t be emitted.');
    });
    observable.subscribe(observer);

    // Observable polyfill
    class MyObservable {
        private next: any;
        private error: any;
        private complete: boolean = false;

        constructor(private fn: Function) {
            
        }

        static create(fn: Function) {

        }

        subscribe(observer: any) {
            observer.next(this.next);
            observer.error(this.error);
            observer.complete();
        }
    }
}
