import { from, fromEvent, interval, of, range, timer } from "rxjs";

export const creationOperators = () => {

    /**
     * The of operator
     */

    const source$ = of(1, 2, 3, 4, 5);
    const range$ = range(1, 5);     // Creates observable for 1 to 5 values

    source$.subscribe(
        val => console.log(val)
    );


    /**
     * The from operator
     */

    const observer = {
        next: (val: any) => console.log(val),
        error: (error: any) => console.log(error),
        complete: () => console.log('Complete!')
    };

    function * generator() {
        yield 'Hello';
        yield 'World';
    };

    const from1$ = from([1,2,3,4,5]);
    const from2$ = from(fetch('example.com/users'));
    const from3$ = from(generator());

    from1$.subscribe(observer);
    from2$.subscribe(observer);
    from3$.subscribe(observer);


    /**
     * The fromEvent operator
     */

    const click$ = fromEvent(document, 'click');

    click$.subscribe(
      val => console.log(val)  
    );


    /**
     * The interval operator
     */

    const interval$ = interval(1000);
    const timer$ = timer(5000, 100);       // Used to set delay for the first value to emit.

    interval$.subscribe(
        val => console.log(val)
    );
};
