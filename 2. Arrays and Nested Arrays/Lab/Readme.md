# Arrays and Nested Arrays

# Arrays

## Even Position Element

Write a function that finds the elements at even positions in an array.

The **input** comes as an **array of string** elements.

The **output** is printed on the console. Collect all elements in a
string, separated by space.

### Examples

| **Input**                        | **Output** |     | **Input**     | **Output** |
|----------------------------------|------------|-----|---------------|------------|
| \['20', '30', '40', '50', '60'\] | 20 40 60   |     | \['5', '10'\] | 5          |

## Last K Numbers Sequence

You are given two integers **n** and **k**. Write a JS function that
generates and **return** the following sequence:

- The first element is 1

- Every following element equals the **sum** of the previous **k**
  elements

- The length of the sequence is **n** elements

The **input** comes as **two number arguments**. The first element
represents the number **n**, and the second – the number **k**.

The **output** is the **return** value of your function and should be an
**array of numbers**.

### Example

| **Input** | **Output**            |     | **Input** | **Output**                   |
|-----------|-----------------------|-----|-----------|------------------------------|
| 6, 3      | \[1, 1, 2, 4, 7, 13\] |     | 8, 2      | \[1, 1, 2, 3, 5, 8, 13, 21\] |

#### Explanation

The 2<sup>nd</sup> element (1) is the sum of the 3 elements before it,
but there is only 1, so we take that. The third element is the sum of
the first 2 (1 and 1) and the 4<sup>th</sup> – the sum of 1, 1, and 2.
The 5<sup>th</sup> element is the sum of the 2<sup>nd</sup>,
3<sup>rd,</sup> and 4<sup>th</sup> (1, 2, and 4) and so on.

## Sum First Last

Write a function that calculates and returns the sum of the first and
the last elements in an array.

The **input** comes **as an array of string elements** holding numbers.

The **output** is the **return** value of your function and should be a
**number**.

### Example

| **Input**            | **Output** |     | **Input**     | **Output** |
|----------------------|------------|-----|---------------|------------|
| \['20', '30', '40'\] | 60         |     | \['5', '10'\] | 15         |

## Negative / Positive Numbers

Write a JS function that processes the elements in an array one by one
and produces a new array. If the current element is a **negative**
number you must add it to the **front** of the array (**as** the **first
element** of the array). Otherwise, if the current element is a
**positive** number (**or 0**), you must add it to the **end** of the
array (as the **last element** of the array).

The **input** comes as an **array of number elements**.

The **output** is printed on the console, each element on a new line.

### Example

<table>
<colgroup>
<col style="width: 34%" />
<col style="width: 13%" />
<col style="width: 4%" />
<col style="width: 34%" />
<col style="width: 13%" />
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
<th>[7, -2, 8, 9]</th>
<th><p>-2</p>
<p>7</p>
<p>8</p>
<p>9</p></th>
<th>[3, -2, 0, -1]</th>
<th><p>-1</p>
<p>-2</p>
<p>3</p>
<p>0</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## Smallest Two Numbers

Write a function that prints the two smallest elements from an array of
numbers.

The **input** comes as an **array of number elements**.

The **output** is printed on the console on a single line, separated by
space.

### Example

| **Input**         | **Output** |     | **Input**             | **Output** |
|-------------------|------------|-----|-----------------------|------------|
| \[30, 15, 50, 5\] | 5 15       |     | \[3, 0, 10, 4, 7, 3\] | 0 3        |

## Bigger Half

You are given an array of numbers. Write a JS function that **sorts**
the array in **ascending order** and returns a new array, containing
only the **second half** of the input. If there is an odd number of
elements in the input, always take the bigger half. For example, if the
input array contains 4 elements, the output should be 2, and if the
input is 5 – the output is 3.

The **input** comes as an **array of number elements**.

The **output** is the **return** value of the function and should be an
**array of numbers**.

### Example

| **Input**                  | **Output**        |
|----------------------------|-------------------|
| \[4, 7, 2, 5\]             | \[5, 7\]          |
| \[3, 19, 14, 7, 2, 19, 6\] | \[7, 14, 19, 19\] |

## Piece of Pie

Write a function that receives **three parameters** – an **array** of
pie flavors as **strings,** two target flavors as **strings**. The
result of the function should be a **new array**, containing a section
of the original array, **starting** at the first flavor parameter, and
**ending** at (and **including**) the second flavor parameter.

The **input** comes as **three arguments**:

- An **array of strings**, representing pie flavors

- **Two more strings**, representing the start and end of the section,
  respectively

The **output** is the **return** value of the function and should be an
**array of strings**.

### Example

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 49%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>['Pumpkin Pie',</p>
<p>'Key Lime Pie',</p>
<p>'Cherry Pie',</p>
<p>'Lemon Meringue Pie',</p>
<p>'Sugar Cream Pie'],</p>
<p>'Key Lime Pie',</p>
<p>'Lemon Meringue Pie'</p></td>
<td><p>['Key Lime Pie',</p>
<p>'Cherry Pie',</p>
<p>'Lemon Meringue Pie']</p></td>
</tr>
<tr class="even">
<td><p>['Apple Crisp',</p>
<p>'Mississippi Mud Pie',</p>
<p>'Pot Pie',</p>
<p>'Steak and Cheese Pie',</p>
<p>'Butter Chicken Pie',</p>
<p>'Smoked Fish Pie'],</p>
<p>'Pot Pie',</p>
<p>'Smoked Fish Pie'</p></td>
<td><p>['Pot Pie',</p>
<p>'Steak and Cheese Pie',</p>
<p>'Butter Chicken Pie',</p>
<p>'Smoked Fish Pie']</p></td>
</tr>
</tbody>
</table>

## Process Odd Positions

You are given an array of numbers. Write a JS function that **returns**
the elements at **odd** **positions** from the array, **doubled** and in
**reverse** order.

The **input** comes as an **array of number elements**.

The **output** is the **return** on the console on a single line,
separated by space.

### Example

| **Input**          | **Output** |     | **Input**             | **Output** |
|--------------------|------------|-----|-----------------------|------------|
| \[10, 15, 20, 25\] | 50 30      |     | \[3, 0, 10, 4, 7, 3\] | 6 8 0      |

# Nested Arrays

## Biggest Element

Write a function that finds the biggest element inside a matrix.

The **input** comes as an **array of arrays**, containing number
elements (2D matrix of numbers).

The **output** is the **return** value of your function. Find the
biggest element and return it.

### Examples

<table style="width:100%;">
<colgroup>
<col style="width: 26%" />
<col style="width: 20%" />
<col style="width: 4%" />
<col style="width: 28%" />
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
<th><p>[[20, 50, 10],</p>
<p>[8, 33, 145]]</p></th>
<th>145</th>
<th><p>[[3, 5, 7, 12],</p>
<p>[-1, 4, 33, 2],</p>
<p>[8, 3, 0, 4]]</p></th>
<th>33</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## Diagonal Sums

A square matrix of numbers comes as an array of **arrays**, each array
holding numbers. Write a function that finds the sum at the main and the
secondary diagonals.

The **input** comes as an **array of arrays**, containing number
elements (2D matrix of numbers).

The **output** is **printed** on the console, on a single line separated
by space. First print the sum at the main diagonal, then the sum at the
secondary diagonal.

### Example

<table>
<colgroup>
<col style="width: 27%" />
<col style="width: 20%" />
<col style="width: 4%" />
<col style="width: 27%" />
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
<th><p>[[20, 40],</p>
<p>[10, 60]]</p></th>
<th>80 50</th>
<th><p>[[3, 5, 17],</p>
<p>[-1, 7, 14],</p>
<p>[1, -8, 89]]</p></th>
<th>99 25</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## Equal Neighbors

Write a function that finds the number of **equal** **neighbor** pairs
inside a **matrix** of variable size and type (numbers or strings).

The **input** comes as an **array of arrays**, containing string
elements (2D matrix of strings).

The **output** is the **return** value of your function. Save the number
of equal pairs you find and return it.

### Example

<table style="width:100%;">
<colgroup>
<col style="width: 39%" />
<col style="width: 9%" />
<col style="width: 2%" />
<col style="width: 40%" />
<col style="width: 9%" />
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
<th><p>[['2', '3', '4', '7', '0'],</p>
<p>['4', '0', '5', '3', '4'],</p>
<p>['2', '3', '5', '4', '2'],</p>
<p>['9', '8', '7', '5', '4']]</p></th>
<th>1</th>
<th><p>[['test', 'yes', 'yo', 'ho'],</p>
<p>['well', 'done', 'yo', '6'],</p>
<p>['not', 'done', 'yet', '5']]</p></th>
<th>2</th>
</tr>
</thead>
<tbody>
</tbody>
</table>
