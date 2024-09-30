# Lab Advanced Functions

## Area and Volume Calculator

Write a function that **calculates** the **area** and the **volume** of
a figure, which is **defined** by its **coordinates**  
(**x**, **y**, **z**).

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>area()</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>function area() {</p>
<p>    return Math.abs(this.x * this.y);</p>
<p>};</p></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>vol()</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>function vol() {</p>
<p>    return Math.abs(this.x * this.y * this.z);</p>
<p>};</p></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>solve()</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>function solve(area, vol, input) {</p>
<p>    //ToDo....</p>
<p>}</p></td>
</tr>
</tbody>
</table>

### Input

You will receive **3** parameters - the **functions** **area** and
**vol** and a **string**, which contains the figures' coordinates.

**<u>For more information check the examples.</u>**

### Output

The output should be **returned** as an **array** **of objects**. Each
object has **two** **properties**: the figure's **area** and **volume**.

**\[**

**{ area: \${area1}, volume: \${volume1} },**

**{ area: \${area2}, volume: \${volume2} },**

**. . .**

**\]**

### Note:

**<u>Submit only the solve function.</u>**

### Examples

<table>
<colgroup>
<col style="width: 49%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Sample Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>area, vol, `[</p>
<p>{"x":"1","y":"2","z":"10"},</p>
<p>{"x":"7","y":"7","z":"10"},</p>
<p>{"x":"5","y":"2","z":"10"}</p>
<p>]`</p></td>
<td><p>[</p>
<p>{ area: 2, volume: 20 },</p>
<p>{ area: 49, volume: 490 },</p>
<p>{ area: 10, volume: 100 }</p>
<p>]</p></td>
</tr>
<tr class="even">
<td><p>area, vol, `[</p>
<p>{"x":"10","y":"-22","z":"10"},</p>
<p>{"x":"47","y":"7","z":"-5"},</p>
<p>{"x":"55","y":"8","z":"0"},</p>
<p>{"x":"100","y":"100","z":"100"},</p>
<p>{"x":"55","y":"80","z":"250"}</p>
<p>]`</p></td>
<td><p>[</p>
<p>{ area: 220, volume: 2200 },</p>
<p>{ area: 329, volume: 1645 },</p>
<p>{ area: 440, volume: 0 },</p>
<p>{ area: 10000, volume: 1000000 },</p>
<p>{ area: 4400, volume: 1100000 }</p>
<p>]</p></td>
</tr>
</tbody>
</table>

## Add

Write a program that keeps a number **inside its context** and
**returns** a new function that **adds** a **given** number to the
previous one.

### Input

Check the **examples** **below** to see how your code will be executed.

### Output

Your function should **return** the final result.

### Examples

<table>
<colgroup>
<col style="width: 49%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Sample Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>let add5 = solution(5);</p>
<p>console.log(add5(2));</p>
<p>console.log(add5(3));</p></td>
<td><p>7</p>
<p>8</p></td>
</tr>
<tr class="even">
<td><p>let add7 = solution(7);</p>
<p>console.log(add7(2));</p>
<p>console.log(add7(3));</p></td>
<td><p>9</p>
<p>10</p></td>
</tr>
</tbody>
</table>

## Currency Format

Write a **higher-order** function **createFormatter** that fixes some of
the parameters of another function. Your program will **receive four
parameters**: **three values** and a **function** that **takes 4
parameters** and **returns a formatted string** (a monetary value with
currency symbol).

Your task is to **return a partially applied function**, based on the
input function that has its **first three** parameters fixed and only
**takes one parameter**.

You will receive the following function:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>currencyFormatter</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>function currencyFormatter(separator, symbol, symbolFirst, value)
{</p>
<p>let result = Math.trunc(value) + separator;</p>
<p>result += value.toFixed(2).substr(-2,2);</p>
<p>if (symbolFirst) return symbol + ' ' + result;</p>
<p>else return result + ' ' + symbol;</p>
<p>}</p></td>
</tr>
</tbody>
</table>

Receive and set the following parameters to fixed values:

separator

symbol

symbolFirst

The final parameter **value** is the one that the returned function must
receive.

### Input

You will receive four parameters:

- **separator** (string)

- **symbol** (string)

- **symbolFirst** (Boolean)

- **formatter** (function)

### Output

You need to **return a function** that takes one parameter - **value**

### Examples

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>Sample Input</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>let dollarFormatter = createFormatter(',', '$', true,
currencyFormatter);</p>
<p>console.log(dollarFormatter(5345)); <em>// $ 5345,00</em></p>
<p>console.log(dollarFormatter(3.1429)); <em>// $ 3,14</em></p>
<p>console.log(dollarFormatter(2.709)); <em>// $ 2,71</em></p></td>
</tr>
</tbody>
</table>

## Filter Employees

Write a program that filters the employees of your company. You should
print the result in a specific format. You will receive **2** parameters
(**data**, **criteria**). You should **parse** the input, find all
employees that fulfill the criteria, and print them.

### Input

You will receive a **string** with all the employees, and **criteria**
by which you should sort the employees. If the criteria are **"all"**
print all the employees in the given format.

### Output

The output should be **printed** on the console.

For more information check the examples.

### Examples

<table>
<colgroup>
<col style="width: 49%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Sample Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>`[{</p>
<p>"id": "1",</p>
<p>"first_name": "Ardine",</p>
<p>"last_name": "Bassam",</p>
<p>"email": "abassam0@cnn.com",</p>
<p>"gender": "Female"</p>
<p>}, {</p>
<p>"id": "2",</p>
<p>"first_name": "Kizzee",</p>
<p>"last_name": "Jost",</p>
<p>"email": "kjost1@forbes.com",</p>
<p>"gender": "Female"</p>
<p>},</p>
<p>{</p>
<p>"id": "3",</p>
<p>"first_name": "Evanne",</p>
<p>"last_name": "Maldin",</p>
<p>"email": "emaldin2@hostgator.com",</p>
<p>"gender": "Male"</p>
<p>}]`,</p>
<p>'gender-Female'</p></td>
<td><p>0. Ardine Bassam - abassam0@cnn.com</p>
<p>1. Kizzee Jost - kjost1@forbes.com</p></td>
</tr>
<tr class="even">
<td><p>`[{</p>
<p>"id": "1",</p>
<p>"first_name": "Kaylee",</p>
<p>"last_name": "Johnson",</p>
<p>"email": "k0@cnn.com",</p>
<p>"gender": "Female"</p>
<p>}, {</p>
<p>"id": "2",</p>
<p>"first_name": "Kizzee",</p>
<p>"last_name": "Johnson",</p>
<p>"email": "kjost1@forbes.com",</p>
<p>"gender": "Female"</p>
<p>}, {</p>
<p>"id": "3",</p>
<p>"first_name": "Evanne",</p>
<p>"last_name": "Maldin",</p>
<p>"email": "emaldin2@hostgator.com",</p>
<p>"gender": "Male"</p>
<p>}, {</p>
<p>"id": "4",</p>
<p>"first_name": "Evanne",</p>
<p>"last_name": "Johnson",</p>
<p>"email": "ev2@hostgator.com",</p>
<p>"gender": "Male"</p>
<p>}]`,</p>
<p>'last_name-Johnson'</p></td>
<td><p>0. Kaylee Johnson - k0@cnn.com</p>
<p>1. Kizzee Johnson - kjost1@forbes.com</p>
<p>2. Evanne Johnson - ev2@hostgator.com</p></td>
</tr>
</tbody>
</table>

## Command Processor

Write a program that keeps a string **inside its context** and can
execute different **commands** that modify or print the string on the
console.

**append(string)** - append the given **string** at the end of the
internal string

**removeStart(n)** - **remove** the **first** **n** characters from the
string, **n** is an integer

**removeEnd(n)** - **remove** the **last n** characters from the string,
**n** is an integer

**print** - **print** the stored string on the **console**

### Input

Check the examples below to see how your code will be executed.

### Output

Whenever you receive the command **print**, the output should be
**printed** on the console.

### Examples

<table>
<colgroup>
<col style="width: 49%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Sample Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>let firstZeroTest = solution();</p>
<p>firstZeroTest.append('hello');</p>
<p>firstZeroTest.append('again');</p>
<p>firstZeroTest.removeStart(3);</p>
<p>firstZeroTest.removeEnd(4);</p>
<p>firstZeroTest.print();</p></td>
<td>loa</td>
</tr>
<tr class="even">
<td><p>let secondZeroTest = solution();</p>
<p>secondZeroTest.append('123');</p>
<p>secondZeroTest.append('45');</p>
<p>secondZeroTest.removeStart(2);</p>
<p>secondZeroTest.removeEnd(1);</p>
<p>secondZeroTest.print();</p></td>
<td>34</td>
</tr>
</tbody>
</table>

## List Processor

Using a closure, create an inner object to process list commands. The
commands supported should be the following:

- **add** **\<string\>** - adds the following string in an inner
  collection.

- **remove** **\<string\>** - removes all occurrences of the supplied
  **\<string\>** from the inner collection.

- **print** - prints all elements of the inner collection joined by
  **","**.

### Input

The **input** will come as an **array of strings** - each string
represents a **command** to be executed from the command execution
engine.

### Output

For every print command - you should print on the console the inner
collection joined by **","**.

### Examples

| Input | Output |
|----|----|
| \['add hello', 'add again', 'remove hello', 'add again', 'print'\] | again,again |
| \['add pesho', 'add george', 'add peter', 'remove peter','print'\] | pesho,george |

## Cars

Write a closure that can create and modify objects. All created objects
should be **kept** and be accessible by **name**. You should support the
following functionality:

- **create \<name\>** - creates an object with the supplied **\<name\>**

- **create \<name\> inherits \<parentName\>** - creates an object with
  the given **\<name\>**, that inherits from the parent object with the
  **\<parentName\>**

- **set \<name\> \<key\> \<value\>** - sets the property with key equal
  to **\<key\>** to **\<value\>** in the object with the supplied
  **\<name\>**.

- **print \<name\>** - prints the object with the supplied **\<name\>**
  in the format **"\<key1\>:\<value1\>,\<key2\>:\<value2\>…"** - the
  printing should also print all **inherited properties** from parent
  objects. Inherited properties should come after own properties.

### Input

The **input** will come as an **array of strings** - each string
represents a **command** to be executed from your closure.

### Output

For every **print** command - you should print on the console all
properties of the object in the above-mentioned format.

### Constraints

- **All commands will always be valid, there will be no nonexistent or
  incorrect input.**

### Examples

<table>
<colgroup>
<col style="width: 49%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>['create c1',</p>
<p>'create c2 inherit c1',</p>
<p>'set c1 color red',</p>
<p>'set c2 model new',</p>
<p>'print c1',</p>
<p>'print c2']</p></td>
<td><p>color:red</p>
<p>model:new,color:red</p></td>
</tr>
</tbody>
</table>
