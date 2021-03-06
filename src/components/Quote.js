import React from 'react';

const Quote = () => (
  <div data-testid="quote-container">
    <h1>Quote</h1>
    <p data-testid="quote">
      Somehow it’s okay for people to chuckle about not being good at math. Yet,
      if I said “I never learned to read,” they’d say I was an illiterate dolt.
    </p>
    <p data-testid="quote-author">
      <em>— Neil deGrasse Tyson, American astrophysicist and author —</em>
    </p>
  </div>
);

export default Quote;
