useRef
1. mutual values
useref is react hook used for reference as like DOM in Vanilla js.
import {useRef} from "react"
const ref=useRef(iniitialValues);
here the useRef return the object with current as one of the key.

here, const reference= ref.current;
gives the current value and can be updated using as:
    ref.current=newvalues;

Two import things to notes:
the value of reference doesn`t change/ is persistance after each renders of the components.
updates of the reference doesn`t rerender the compoent.

use case 1
 [src/pages/useRef]
 outcomes:
 ref doesn't rerender so their is difference on state and reference.

 ref/state?
 no rerender.
 ref is sync (provide right away after updates) and state is async ( doesn`t provide right away and always provide afte rerender is complete)
  