# Syntax, Functions and Statements

## Echo Function

Write a JS function that takes **one string parameter** and **prints**
on two lines the **length** of the parameter and then the **unchanged
parameter** itself.

### Examples

<table>
<colgroup>
<col style="width: 57%" />
<col style="width: 42%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>'Hello, JavaScript!'</td>
<td><p>18</p>
<p>Hello, JavaScript!</p></td>
</tr>
<tr class="even">
<td>'strings are easy'</td>
<td><p>16</p>
<p>strings are easy</p></td>
</tr>
</tbody>
</table>

## String Length

Write a JS function that takes **three** **string arguments** as an
input. Calculate the **sum** of the **length** of the **strings** and
the **average length** of the strings **rounded** **down** to the
nearest integer.

The **input** comes as **three string arguments** passed to your
function.

The **output** should be printed on the console in two lines.

### Examples

<table>
<colgroup>
<col style="width: 64%" />
<col style="width: 35%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>'chocolate', 'ice cream', 'cake'</td>
<td><p>22</p>
<p>7</p></td>
</tr>
<tr class="even">
<td>'pasta', '5', '22.3'</td>
<td><p>10</p>
<p>3</p></td>
</tr>
</tbody>
</table>

## Largest Number

Write a function that takes **three number arguments** as input and
finds the **largest** of them. Print the following text on the console:
**\`The largest number is {number}.\`**.

The **input** comes as **three number arguments** passed to your
function.

The **output** should be printed to the console.

### Example

| **Input**     | **Output**                |
|---------------|---------------------------|
| 5, -3, 16     | The largest number is 16. |
| -3, -5, -22.5 | The largest number is -3. |

## Circle Area

Write a function that takes **a single argument** as an input. **Check
the type** of input argument. If it is a **number**, assume it is the
radius of a circle and **calculate the circle area**. Print the **area**
**rounded** to **two decimal places**.

If the argument type is **NOT** a number, print the following text on
the console:  
**\`We can not calculate the circle area, because we receive a {type of
argument}.\`**

The **input** comes as a **single argument** passed to your function.

The **output** should be printed on the console.

### Example

| **Input** | **Output** |
|----|----|
| 5 | 78.54 |
| 'name' | We can not calculate the circle area, because we receive a string. |

## Math Operations

Write a JS function that takes **two** **numbers** and **a string** as
an input.

The string may be one of the following: '**+**', '**-**', '**\***',
'**/**', '**%**', '**\*\***'.

Print on the console the result of the mathematical **operation**
between **both numbers** and the **operator** you receive as a string.

The **input** comes as **two numbers** and **a string argument** passed
to your function.

The **output** should be printed on the console.

### Examples

| **Input**    | **Output** |
|--------------|------------|
| 5, 6, '+'    | 11         |
| 3, 5.5, '\*' | 16.5       |

## Sum of Numbers N…M

Write a JS function that takes two numbers **n** and **m** as an input
and **prints the sum** of all numbers from **n** to **m**.

The **input** comes as **two string elements** that need to be
**parsed** as numbers.

The **output** should **return** the **sum**.

### Examples

| **Input**  | **Output** |
|------------|------------|
| '1', '5'   | 15         |
| '-8', '20' | 174        |

## Day of Week

Write a function that prints a number between 1 and 7 when a **day of
the week** is passed to it as a string and an **error message** if the
string is **not recognized**.

The **input** comes as a single-string argument.

The **output** should be returned as a result.

### Examples

| **Input** | **Output** |
|-----------|------------|
| 'Monday'  | 1          |
| 'Friday'  | 5          |
| 'Invalid' | error      |

## Days in a month

Write a JavaScript function to get the number of days in a month.

The input comes as two numeric parameters. The first element is the
month, the second is the year.

The output must return the number of days in a month for a given year.

### Examples

| **Input** | **Output** |
|-----------|------------|
| 1, 2012   | 31         |
| 2, 2021   | 28         |

## Square of Stars

Write a function that **prints a rectangle** made of **stars** with
variable **size**, depending on an input parameter. If there is **no
parameter** specified, the rectangle should **always** be of **size 5**.
Look at the examples to get an idea.

The **input** comes as a single **number** argument.

The **output** is a series of lines printed on the console, forming a
rectangle of variable size.

### Examples

<table>
<colgroup>
<col style="width: 7%" />
<col style="width: 9%" />
<col style="width: 2%" />
<col style="width: 7%" />
<col style="width: 9%" />
<col style="width: 3%" />
<col style="width: 7%" />
<col style="width: 16%" />
<col style="width: 2%" />
<col style="width: 8%" />
<col style="width: 24%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th rowspan="2"></th>
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th rowspan="2"></th>
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th rowspan="2"></th>
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
<tr class="odd">
<th><strong>1</strong></th>
<th><strong>*</strong></th>
<th><strong>2</strong></th>
<th><p><strong>* *</strong></p>
<p><strong>* *</strong></p></th>
<th><strong>5</strong></th>
<th><p><strong>* * * * *</strong></p>
<p><strong>* * * * *</strong></p>
<p><strong>* * * * *</strong></p>
<p><strong>* * * * *</strong></p>
<p><strong>* * * * *</strong></p></th>
<th><strong>7</strong></th>
<th><p><strong>* * * * * * *</strong></p>
<p><strong>* * * * * * *</strong></p>
<p><strong>* * * * * * *</strong></p>
<p><strong>* * * * * * *</strong></p>
<p><strong>* * * * * * *</strong></p>
<p><strong>* * * * * * *</strong></p>
<p><strong>* * * * * * *</strong></p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## Aggregate Elements

Write a program that performs different operations on an array of
elements. Implement the following operations:

- **Sum(a<sub>i</sub>)** - calculates the sum of all elements from the
  input array

- **Sum(1/a<sub>i</sub>)** - calculates the sum of the inverse values
  (1/a<sub>i</sub>) of all elements from the array

- **Concat(a<sub>i</sub>)** - concatenates the string representations of
  all elements from the array

The **input** comes as an array of number elements.

The **output** should be printed on the console on a new line for each
of the operations.

### Examples

<table>
<colgroup>
<col style="width: 23%" />
<col style="width: 25%" />
<col style="width: 7%" />
<col style="width: 22%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th rowspan="2"></th>
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
<tr class="odd">
<th>[1, 2, 3]</th>
<th><p>6</p>
<p>1.8333333333333333</p>
<p>123</p></th>
<th>[2, 4, 8, 16]</th>
<th><p>30</p>
<p>0.9375</p>
<p>24816</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>
