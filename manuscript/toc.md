<a name="top"></a>
## [Functional-Light JavaScript](#middle)
***[You Dont Konw JS]** --- **[Functional Light JS]** --- **[Understanding ES6]** --- **[Javascript Allongé-6th]***     
*[Foreword](foreword.md/#foreword) / [Preface](preface.md/#preface) - Nov 27, 2017(388p) [By Kyle Simpson](https://github.com/getify)*
* 1 : [Why Functional Programming?](ch1.md#functional-light-javascript)
* 2 : [The Nature Of Functions](ch2.md#functional-light-javascript)
* 3 : [Managing Function Inputs](ch3.md#functional-light-javascript)
* 4 : [Composing Functions](ch4.md#functional-light-javascript)
* 5 : [Reducing Side Effects](ch5.md#functional-light-javascript)
* 6 : [Value Immutability](ch6.md#functional-light-javascript)
* 7 : [Closure vs Object](ch7.md#functional-light-javascript)
* 8 : [Recursion](ch8.md#functional-light-javascript)
* 9 : [List Operations](ch9.md#functional-light-javascript)
* 10 : [Functional Async](ch10.md#functional-light-javascript)
* 11 : [Putting It All Together](ch11.md#functional-light-javascript)
* Appendix A [Transducing](apA.md#functional-light-javascript)
* Appendix B [The Humble Monad](apB.md#functional-light-javascript)
* Appendix C [FP Libraries](apC.md#functional-light-javascript) / [FL-helper.js](FL-helper.js) / [FK-helper.js](FK-helper.js)

<a name="middle"></a>
## [Functional-Light JavaScript](#top) *- detail*
***[You Dont Konw JS][det_1]** --- **[Functional Light JS][det_2]** --- **[Understanding ES6][det_3]** --- **[Javascript Allongé-6th][det_4]***  
*[Foreword](foreword.md/#foreword) / [Preface](preface.md/#preface) - Nov 27, 2017(388p) [By Kyle Simpson](https://github.com/getify)*
* 1 : [Why Functional Programming?](ch1.md#functional-light-javascript)
    * At a Glance -- Confidence -- Communication -- Readability
    * Perspective -- How to Find Balance -- Resources -- Summary
* 2 : [The Nature Of Functions](ch2.md#functional-light-javascript)
    * What Is A Function?
    * Function Input
    * Named Arguments
    * Function Output
    * Functions Of Functions : higher-order function & Closure
    * Syntax 
    * What's This?
    * Summary
* 3 : [Managing Function Inputs](ch3.md#functional-light-javascript)
    * All For One : unary / identity / constant
    * Adapting Arguments to Parameters : spreadArgs / gatherArgs
    * Some Now, Some Later : partial / partialRight / reverseArgs
    * One At A Time : curry / looseCurry / uncurry
    * Order Matters : partialProps / curryProps / spreadArgProps
    * No Points(point-free style) : unary / not / when
    * Summary
* 4 : [Composing Functions](ch4.md#functional-light-javascript)
    * [Output To Input](ch4.md/#output-to-input) : Candy Factory
    * [General Composition](ch4.md/#general-composition): compose with loop / reduce / reduce(lazy) / recursion
    * [Reordered Composition](ch4.md/#reordered-composition) : pipe
    * [Abstraction](ch4.md/#abstraction)
        * Separation Enables Focus : What / How
        * Composition as Abstraction : What / How
    * [Revisiting Points](ch4.md/#revisiting-points) : Point-free-style
    * [Summary](ch4.md/#summary)
* 5 : [Reducing Side Effects](ch5.md#functional-light-javascript)
    * Func_1 - no side causes/effects : [Effects On The Side, Please](ch5.md/#effects-on-the-side-please)
    * Func_2 - Idempotent : [Once Is Enough, Thanks](ch5.md/#once-is-enough-thanks) -- [Pure Bliss](ch5.md/#pure-bliss)
    * Func_3 - Referential transparency : [There Or Not](ch5.md/#there-or-not)
        * [cache : Performance Effects](ch5.md/#performance-effects)
    * [Purifying](ch5.md/#purifying) -- [Summary](ch5.md/#summary)
* 6 : [Value Immutability](ch6.md#functional-light-javascript)
    * [Primitive Immutability](ch6.md/#primitive-immutability) -- [Value To Value](ch6.md/#value-to-value) -- [Reassignment](ch6.md/#reassignment) : const/constant
    * [Performance](ch6.md/#performance) -- [Treatment](ch6.md/#treatment) -- [Summary](ch6.md/#summary)
* 7 : [Closure vs Object](ch7.md#functional-light-javascript) --> :boom:[Main-2: Composition and Extension][det_4]
    * [The Same Page](ch7.md/#the-same-page)
    * [Look Alike](ch7.md/#look-alike)
        * State -- Behavior,Too! -- (Im)mutability -- Isomorphic -- Under the Hood
    * [Two Roads Diverged In A Wood...](ch7.md/#two-roads-diverged-in-a-wood)   
        * Structural Mutability -- Privacy -- [Cloning State](ch7.md#cloning-state) -- Performance
    * [Summary](ch7.md/#summary)
* 8 : [Recursion](ch8.md#functional-light-javascript)
    * [Definition](ch8.md/#definition) -- [Declarative Recursion](ch8.md/#declarative-recursion)
    * [Stack](ch8.md/#stack) -- [Rearranging Recursion](ch8.md/#rearranging-recursion)
        * Replacing the Stack -- Continuation Passing Style(CPS) -- Trampolines
    * [Summary](ch8.md/#summary)
* 9 : [List Operations](ch9.md#functional-light-javascript)
    * [Non-FP List Processing](ch9.md/#non-fp-list-processing) : forEach, some, every
    * Key List operations : [Map](ch9.md/#map)( [Functor](ch9.md#a-word-functors) ) -- [Filter](ch9.md/#filter)( [Predicate](ch9.md#filtering-confusion) ) -- [Reduce](ch9.md/#reduce)
    * [Advanced List Operations](ch9.md/#advanced-list-operations) : Unique -- Flatten -- Zip -- Merge
    * [Method vs. Standalone](ch9.md/#method-vs-standalone)
        * Composing Method Chains -- Composing Standalone Utilities
        * Adapting Methods to Standalones -- Adapting Standalones to Methods
    * [Looking For Lists](ch9.md/#looking-for-lists) -- [Fusion](ch9.md/#fusion)
    * [Beyond Lists](ch9.md/#beyond-lists) -- [Summary](ch9.md/#summary)
* 10 : [Functional Async](ch10.md#functional-light-javascript)
    * [Time As State](ch10.md/#time-as-state)
    * [Eager vs Lazy](ch10.md/#eager-vs-lazy)
    * [Reactive FP](ch10.md/#reactive-fp)
    * [Summary](ch10.md/#summary)
* 11 : [Putting It All Together](ch11.md#functional-light-javascript)
    * [Setup](ch11.md/#setup)
    * [Stock Events](ch11.md/#stock-events)
    * [Stock Ticker UI](ch11.md/#stock-ticker-ui)
    * [Summary](ch11.md/#summary)
* Appendix A [Transducing](apA.md#functional-light-javascript)
    * Why, First -- How, Next -- What, Finally
* Appendix B [The Humble Monad](apB.md#functional-light-javascript)
    * Type -- Loose Interface -- Just a Monad -- Maybe -- Humble
* Appendix C [FP Libraries](apC.md#functional-light-javascript) / [FL-helper.js](FL-helper.js) / [FK-helper.js](FK-helper.js)
    * Stuff to Investigate -- Ramda -- Lodash/fp -- Mori -- Bonus #1: FPO -- Bonus #2: fasy
    
[You Dont Konw JS]: https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/README.md
[Functional Light JS]: https://github.com/ky27100/Functional-Light-JS/blob/master/manuscript/toc.md#top
[Understanding ES6]: https://github.com/ky27100/understandinges6/blob/master/manuscript/toc.md#top
[Javascript Allongé-6th]: https://github.com/ky27100/javascript-allonge-six/blob/master/myAllonge/markdown/toc.md#top

[det_1]: https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/README.md
[det_2]: https://github.com/kiyounglee/Functional-Light-JS/blob/master/manuscript/toc.md#middle
[det_3]: https://github.com/kiyounglee/understandinges6/blob/master/manuscript/toc.md#middle
[det_4]: https://github.com/kiyounglee/javascript-allonge-six/blob/master/myAllonge/markdown/toc.md#middle
