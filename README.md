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

### View available endpoints below.
| Operation |    API Endpoint   |      Response     |
|:---------:|:-----------------:|:-----------------:|
| Simplify  | /simplify/2^2+2(2) | 8                 |
| Factor    | /factor/x^2 + 2x  | x (x + 2)         |
| Derive    | /derive/x^2+2x    | 2 x + 2           |
| Integrate | /integrate/x^2+2x | 1/3 x^3 + x^2 + C |



Built using Algebrite.
Licensed under the MIT License

Copyright (c) 2016 Gerald Nash

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
