/// <reference path='fourslash.ts' />

//// function Foo (a: (() => number) | (() => undefined) ) { a() }
//// Foo(() => { 1 })

verify.codeFixAvailable([
    { description: 'Add a return statement' },
    { description: 'Remove block body braces' }
]);
