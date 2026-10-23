/* Copy this file to bank.js and replace the examples with your own questions.
   q: question text. o: answer choices. a: index of the correct choice in o.
   f: 1 keeps the choices in the order given (use for True/False), 0 shuffles them.
   k: a unique id for the question, used to remember progress (any short unique string). */
window.BANK={
  baseball:{
    rules:[
      {q:"Example: how many strikes make a strikeout?",o:["Two","Three","Four","Five"],a:1,f:0,k:"ex-b-1"},
      {q:"Example: a batter hit by a pitch is awarded first base.",o:["True","False"],a:0,f:1,k:"ex-b-2"}
    ],
    nj:[{q:"Example state-handbook question?",o:["Yes","No"],a:0,f:1,k:"ex-b-nj1"}]
  },
  softball:{
    rules:[{q:"Example: how many players are on the field on defense?",o:["Eight","Nine","Ten","Eleven"],a:1,f:0,k:"ex-s-1"}],
    nj:[{q:"Example state-handbook question?",o:["Yes","No"],a:0,f:1,k:"ex-s-nj1"}]
  }
};
