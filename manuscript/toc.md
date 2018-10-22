<a name="top"></a>
## [Functional-Light JavaScript](#middle)
***[You Dont Konw JS]** --- **[Functional Light JS]** --- **[Understanding ES6]** --- **[Javascript Allongé-6th]***     
*[Foreword](foreword.md/#foreword) / [Preface](preface.md/#preface) - Nov 27, 2017(388p) [By Kyle Simpson](https://github.com/getify)*
* [Chapter 1: Why Functional Programming?](ch1.md)
    * At a Glance -- Confidence -- Communication -- Readability
    * Perspective -- How to Find Balance -- Resources -- Summary
* [Chapter 2: The Nature Of Functions](ch2.md)
    * What Is A Function? -- Function Input -- Named Arguments -- Function Output
    * Functions Of Functions -- Syntax -- What's This? -- Summary
* [Chapter 3: Managing Function Inputs](ch3.md)
    * All For One -- Adapting Arguments to Parameters -- Some Now, Some Later
    * One At A Time -- Order Matters -- No Points -- Summary
* [Chapter 4: Composing Functions](ch4.md)
    * Output To Input -- General Composition -- Reordered Composition -- Abstraction -- Revisiting Points -- Summary
* [Chapter 5: Reducing Side Effects](ch5.md)
    * Effects On The Side, Please -- Once Is Enough, Thanks -- Pure Bliss -- There Or Not -- Purifying -- Summary
* [Chapter 6: Value Immutability](ch6.md)
    * Primitive Immutability -- Value To Value -- Reassignment -- Performance -- Treatment -- Summary
* [Chapter 7: Closure vs Object](ch7.md)
    * The Same Page -- Look Alike -- Two Roads Diverged In A Wood... -- Summary
* [Chapter 8: Recursion](ch8.md)
    * Definition -- Declarative Recursion -- Stack -- Rearranging Recursion -- Summary
* [Chapter 9: List Operations](ch9.md)
    * Non-FP List Processing -- Map -- Filter -- Reduce -- Advanced List Operations
    * Method vs. Standalone -- Looking For Lists -- Fusion -- Beyond Lists -- Summary
* [Chapter 10: Functional Async](ch10.md)
    * Time As State -- Eager vs Lazy -- Reactive FP -- Summary
* [Chapter 11: Putting It All Together](ch11.md)
    * Setup -- Stock Events -- Stock Ticker UI -- Summary
* [Appendix A: Transducing](apA.md)
    * Why, First -- How, Next -- What, Finally
* [Appendix B: The Humble Monad](apB.md)
    * Type -- Loose Interface -- Just a Monad -- Maybe -- Humble
* [Appendix C: FP Libraries](apC.md) / [FL-helper.js](FL-helper.js) / [FK-helper.js](FK-helper.js)
    * Stuff to Investigate -- Ramda -- Lodash/fp -- Mori -- Bonus: FPO --  Bonus #2: fasy

<a name="middle"></a>
## [Functional-Light JavaScript](#top) *- detail*
***[You Dont Konw JS][det_1]** --- **[Functional Light JS][det_2]** --- **[Understanding ES6][det_3]** --- **[Javascript Allongé-6th][det_4]***  
*[Foreword](foreword.md/#foreword) / [Preface](preface.md/#preface) - Nov 27, 2017(388p) [By Kyle Simpson](https://github.com/getify)*
* [Chapter 1: Why Functional Programming?](ch1.md)
    * At a Glance -- Confidence -- Communication -- Readability
    * Perspective -- How to Find Balance -- Resources -- Summary
* [Chapter 2: The Nature Of Functions](ch2.md)
    * [What Is A Function?](ch2.md/#what-is-a-function)
    * [Function Input](ch2.md/#function-input) -- [Named Arguments](ch2.md/#named-arguments) -- [Function Output](ch2.md/#function-output)
    * [Functions Of Functions](ch2.md/#functions-of-functions) : higher-order function & Closure
    * [Syntax](ch2.md/#syntax) -- [What's This?](ch2.md/#whats-this) -- [Summary](ch2.md/#summary)
* [Chapter 3: Managing Function Inputs](ch3.md)
    * [All For One](ch3.md/#all-for-one) : unary / identity / constant
    * [Adapting Arguments to Parameters](ch3.md/#adapting-arguments-to-parameters) : spreadArgs / gatherArgs
    * [Some Now, Some Later](ch3.md/#some-now-some-later) : partial / partialRight / reverseArgs
    * [One At A Time](ch3.md/#one-at-a-time) : curry / looseCurry / uncurry
    * [Order Matters](ch3.md/#order-matters) : partialProps / curryProps / spreadArgProps
    * [No Points(point-free style)](ch3.md/#no-points) : unary / not / when
    * [Summary](ch3.md/#summary)
* [Chapter 4: Composing Functions](ch4.md)
    * [Output To Input](ch4.md/#output-to-input) : Candy Factory
    * [General Composition](ch4.md/#general-composition): compose with loop / reduce / reduce(lazy) / recursion
    * [Reordered Composition](ch4.md/#reordered-composition) : pipe
    * [Abstraction](ch4.md/#abstraction)
        * Separation Enables Focus : What / How
        * Composition as Abstraction : What / How
    * [Revisiting Points](ch4.md/#revisiting-points) : Point-free-style
    * [Summary](ch4.md/#summary)
* [Chapter 5: Reducing Side Effects](ch5.md)
    * Func_1 - no side causes/effects : [Effects On The Side, Please](ch5.md/#effects-on-the-side-please)
    * Func_2 - Idempotent : [Once Is Enough, Thanks](ch5.md/#once-is-enough-thanks) -- [Pure Bliss](ch5.md/#pure-bliss)
    * Func_3 - Referential transparency : [There Or Not](ch5.md/#there-or-not)
        * [cache : Performance Effects](ch5.md/#performance-effects)
    * [Purifying](ch5.md/#purifying) -- [Summary](ch5.md/#summary)
* [Chapter 6: Value Immutability](ch6.md)
    * [Primitive Immutability](ch6.md/#primitive-immutability) -- [Value To Value](ch6.md/#value-to-value) -- [Reassignment](ch6.md/#reassignment) : const/constant
    * [Performance](ch6.md/#performance) -- [Treatment](ch6.md/#treatment) -- [Summary](ch6.md/#summary)
* [Chapter 7: Closure vs Object](ch7.md) --> :boom:[Main-2: Composition and Extension][det_4]
    * [The Same Page](ch7.md/#the-same-page)
    * [Look Alike](ch7.md/#look-alike)
        * State -- Behavior,Too! -- (Im)mutability -- Isomorphic -- Under the Hood
    * [Two Roads Diverged In A Wood...](ch7.md/#two-roads-diverged-in-a-wood)   
        * Structural Mutability -- Privacy -- [Cloning State](ch7.md#cloning-state) -- Performance
    * [Summary](ch7.md/#summary)
* [Chapter 8: Recursion](ch8.md)
    * [Definition](ch8.md/#definition) -- [Declarative Recursion](ch8.md/#declarative-recursion)
    * [Stack](ch8.md/#stack) -- [Rearranging Recursion](ch8.md/#rearranging-recursion)
        * Replacing the Stack -- Continuation Passing Style(CPS) -- Trampolines
    * [Summary](ch8.md/#summary)
* [Chapter 9: List Operations](ch9.md)
    * [Non-FP List Processing](ch9.md/#non-fp-list-processing) : forEach, some, every
    * Key List operations : [Map](ch9.md/#map)( [Functor](ch9.md#a-word-functors) ) -- [Filter](ch9.md/#filter)( [Predicate](ch9.md#filtering-confusion) ) -- [Reduce](ch9.md/#reduce)
    * [Advanced List Operations](ch9.md/#advanced-list-operations) : Unique -- Flatten -- Zip -- Merge
    * [Method vs. Standalone](ch9.md/#method-vs-standalone)
        * Composing Method Chains -- Composing Standalone Utilities
        * Adapting Methods to Standalones -- Adapting Standalones to Methods
    * [Looking For Lists](ch9.md/#looking-for-lists) -- [Fusion](ch9.md/#fusion)
    * [Beyond Lists](ch9.md/#beyond-lists) -- [Summary](ch9.md/#summary)
* [Chapter 10: Functional Async](ch10.md)
    * [Time As State](ch10.md/#time-as-state)
    * [Eager vs Lazy](ch10.md/#eager-vs-lazy)
    * [Reactive FP](ch10.md/#reactive-fp)
    * [Summary](ch10.md/#summary)
* [Chapter 11: Putting It All Together](ch11.md)
    * [Setup](ch11.md/#setup)
    * [Stock Events](ch11.md/#stock-events)
    * [Stock Ticker UI](ch11.md/#stock-ticker-ui)
    * [Summary](ch11.md/#summary)
* [Appendix A: Transducing](apA.md)
    * Why, First -- How, Next -- What, Finally
* [Appendix B: The Humble Monad](apB.md)
    * Type -- Loose Interface -- Just a Monad -- Maybe -- Humble
* [Appendix C: FP Libraries](apC.md/#appendix-c-fp-libraries) / [FL-helper.js](FL-helper.js) / [FK-helper.js](FK-helper.js)
    * Stuff to Investigate -- Ramda -- Lodash/fp -- Mori -- Bonus #1: FPO -- Bonus #2: fasy
    
[You Dont Konw JS]: https://github.com/kiyounglee/You-Dont-Know-JS/blob/master/toc.md#top
[Functional Light JS]: https://github.com/kiyounglee/Functional-Light-JS/blob/master/manuscript/toc.md#top
[Understanding ES6]: https://github.com/kiyounglee/understandinges6/blob/master/manuscript/toc.md#top
[Javascript Allongé-6th]: https://github.com/kiyounglee/javascript-allonge-six/blob/master/myAllonge/markdown/toc.md#top

[det_1]: https://github.com/kiyounglee/You-Dont-Know-JS/blob/master/toc.md#middle
[det_2]: https://github.com/kiyounglee/Functional-Light-JS/blob/master/manuscript/toc.md#middle
[det_3]: https://github.com/kiyounglee/understandinges6/blob/master/manuscript/toc.md#middle
[det_4]: https://github.com/kiyounglee/javascript-allonge-six/blob/master/myAllonge/markdown/toc.md#middle
