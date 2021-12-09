// I => how much annuity? => fn P(I) => P
// P => how much I? => fn I(P) => I

// fixed interest rate, this can be overridden
export const i = () => i_in;
export const term = () => term_in;
export const P$ = () => P$_in;
export const I$ = () => I$_in;

// I = P*a, i

export const P = () => (P$() ? P$() : I() / a()); // P(P$_in, I$_in)
export const I = () => (I$() ? I$() : P() * a());

export const a = () => (1 - Math.pow(v(), term())) / i(); // fut: this should be a PV to work for variable i esp.
export const v = () => 1 / (1 + i());
