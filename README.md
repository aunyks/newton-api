# newton
## A really micro micro-service for advanced math.
Newton does anything from numerical calculation to symbolic math parsing.

### How does it work?
1. Send a GET request to newton with a url-encoded math expression and your preferred operation.
2. Get back a JSON response with your problem solved.


### Show me
Let's find the derivative of x^2.
So, we send a request to the newton url saying just that:

-> `https://newton.now.sh/derive/x%5E2` (Note the url-encoded '^')

Now, we get the following response:
```
{
  "operation":"derive",
  "expression":"x^2",
  "result":"2 x"
}
```
It's that simple!

### Get Started
1. Send a GET request to newton.
```
https://newton.now.sh/:operation/:expression
```
Note: `:operation` is the math operation that you want to perform. `:expression` is the *url-encoded* math expression on which you want to operate. **View available operation endpoints below!**

2. That's it! You'll be returned a JSON object with the operation you requested, the expression you provided, and the result of the operation performed on the expression.

### View available endpoints:
| Operation |    API Endpoint   |       Result      |
|:---------:|:-----------------:|:-----------------:|
| Simplify  | /simplify/2^2+2(2)| 8                 |
| Factor    | /factor/x^2 + 2x  | x (x + 2)         |
| Derive    | /derive/x^2+2x    | 2 x + 2           |
| Integrate | /integrate/x^2+2x | 1/3 x^3 + x^2 + C |
| Find 0's  | /zeroes/x^2+2x    | [-2, 0]           |
| Find Tangent| /tangent/2lx^3  | 12 x + -16        |
| Area Under Curve| /area/2:4lx^3| 60               |
| Cosine    | /cos/pi            | -1                 |
| Sine      | /sin/0            | 0                 |
| Tangent   | /tan/0            | 0                 |
| Inverse Cosine    | /arccos/1            | 0                 |
| Inverse Sine    | /arcsin/0            | 0                 |
| Inverse Tangent    | /arctan/0            | 0                 |
| Absolute Value    | /abs/-1            | 1                 |  

*Keep in mind:*
To find the tangent line of a function at a certain x value,
send the request as c|f(x) where c is the given x value and f(x) is the function expression, the separator is a vertical bar '|'. See the table above for an example request.

To find the area under a function, send the request as c:d|f(x) where c is the starting x value, d is the ending x value, and f(x) is the function under which you want the curve between the two x values.

-----------------------------------------------------------------
Built using [metadelta](https://github.com/aunyks/metadelta-js).
Licensed under the GNU GPLv3 License

Copyright (c) 2016-2017 Gerald Nash  

Like newton? [Donate Bitcoin](https://coinbase.com/aunyks) to support development!
