# Exercise Arrays and Nested Arrays

## Print an Array with a Given Delimiter

The **input** comes as two parameters – an **array of strings** and a
**string**. The second parameter is the delimiter.

The **output** is the elements of the array, printed on the console,
each element **separated** from the others by the **given delimiter**.

### Examples

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 25%" />
<col style="width: 3%" />
<col style="width: 22%" />
<col style="width: 37%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th></th>
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>['One',</p>
<p>'Two',</p>
<p>'Three',</p>
<p>'Four',</p>
<p>'Five'],</p>
<p>'-'</p></td>
<td>One-Two-Three-Four-Five</td>
<td></td>
<td><p>['How about no?',</p>
<p>'I',</p>
<p>'will',</p>
<p>'not',</p>
<p>'do',</p>
<p>'it!'],</p>
<p>'_'</p></td>
<td>How about no?_I_will_not_do_it!</td>
</tr>
</tbody>
</table>

## Print Every N-th Element from an Array 

The **input** comes as two parameters – an **array of strings** and a
**number**. The second parameter is **N** – **the step**.

The **output** is every element on the **N-th** step **starting from the
first one**. If the step is **3**, you need to return the **1-st**, the
**4-th**, the **7-th** … and so on, until you reach the end of the
array.

The **output** is the **return** value of your function and must be an
**array**.

### Example

<table>
<colgroup>
<col style="width: 15%" />
<col style="width: 15%" />
<col style="width: 3%" />
<col style="width: 14%" />
<col style="width: 14%" />
<col style="width: 3%" />
<col style="width: 17%" />
<col style="width: 16%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th></th>
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th rowspan="2"></th>
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
<tr class="odd">
<th><p>['5',</p>
<p>'20',</p>
<p>'31',</p>
<p>'4',</p>
<p>'20'],</p>
<p>2</p></th>
<th>['5', '31', '20']</th>
<th></th>
<th><p>['dsa',</p>
<p>'asd',</p>
<p>'test',</p>
<p>'tset'],</p>
<p>2</p></th>
<th>['dsa', 'test']</th>
<th><p>['1',</p>
<p>'2',</p>
<p>'3',</p>
<p>'4',</p>
<p>'5'],</p>
<p>6</p></th>
<th>['1']</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## Add and Remove Elements 

Write a JS function that **adds** and **removes** numbers **to/from** an
array. You will receive a command which can either be "**add**" or
"**remove**".

The **initial number** is **1**.

Upon receiving an "**add**" command you should add the current number to
your array.  
Upon receiving the "**remove**" command you should remove the last
entered number, currently existent in the array.

Each input command should **increase that number**, regardless of what
it is.

The **input** comes as an **array of strings**. Each element holds a
**command**.

The **output** is the element of the array, each printed on a new line.
In case of an empty array, just print "**Empty**".

### Examples

<table>
<colgroup>
<col style="width: 15%" />
<col style="width: 15%" />
<col style="width: 3%" />
<col style="width: 14%" />
<col style="width: 14%" />
<col style="width: 3%" />
<col style="width: 17%" />
<col style="width: 16%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th></th>
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th rowspan="2"></th>
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
<tr class="odd">
<th><p>['add',</p>
<p>'add',</p>
<p>'add',</p>
<p>'add']</p></th>
<th><p>1</p>
<p>2</p>
<p>3</p>
<p>4</p></th>
<th></th>
<th><p>['add',</p>
<p>'add',</p>
<p>'remove',</p>
<p>'add',</p>
<p>'add']</p></th>
<th><p>1</p>
<p>4</p>
<p>5</p></th>
<th><p>['remove',</p>
<p>'remove',</p>
<p>'remove']</p></th>
<th>Empty</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## Rotate Array

Write a JS function that rotates an array. The array should be rotated
**to the right side**, meaning that the last element should become the
first, upon rotation.

The **input** comes as two parameters – an **array of strings** and a
**number**. The **second parameter** is the amount of rotation you need
to perform.

The **output** is the resulting array after the rotations. The elements
should be printed on one line, separated by a **single space**.

### Examples

<table>
<colgroup>
<col style="width: 18%" />
<col style="width: 18%" />
<col style="width: 4%" />
<col style="width: 17%" />
<col style="width: 41%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th></th>
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>['1',</p>
<p>'2',</p>
<p>'3',</p>
<p>'4'],</p>
<p>2</p></td>
<td>3 4 1 2</td>
<td></td>
<td><p>['Banana',</p>
<p>'Orange',</p>
<p>'Coconut',</p>
<p>'Apple'],</p>
<p>15</p></td>
<td>Orange Coconut Apple Banana</td>
</tr>
</tbody>
</table>

## Extract Increasing Subset from Array

Write a function that extracts only those numbers that **form a**
**non-decreasing subset**. In other words, you start from the **first
element** and continue to **the end** of the **given array of numbers**.
Any number which is **LESS THAN** the **current biggest one** is
**ignored**, alternatively if it’s equal or higher than the **current
biggest one** you set it as the **current biggest one** and you continue
to the next number.

The **input** comes as an **array of numbers**.

The **output** is the processed array after the filtration, which should
be a non-decreasing subset. Return the **array of numbers**.

### Examples

<table>
<colgroup>
<col style="width: 15%" />
<col style="width: 15%" />
<col style="width: 3%" />
<col style="width: 14%" />
<col style="width: 14%" />
<col style="width: 3%" />
<col style="width: 17%" />
<col style="width: 16%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th></th>
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th rowspan="2"></th>
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
<tr class="odd">
<th><p>[1,</p>
<p>3,</p>
<p>8,</p>
<p>4,</p>
<p>10,</p>
<p>12,</p>
<p>3,</p>
<p>2,</p>
<p>24]</p></th>
<th>[1, 3, 8, 10, 12, 24]</th>
<th></th>
<th><p>[1,</p>
<p>2,</p>
<p>3,</p>
<p>4]</p></th>
<th>[1, 2, 3, 4]</th>
<th><p>[20,</p>
<p>3,</p>
<p>2,</p>
<p>15,</p>
<p>6,</p>
<p>1]</p></th>
<th>[20]</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## List of Names

You will receive an **array of names**. Sort them **alphabetically in
ascending order** and print a numbered list of all the names, each on a
new line.

**Example**

<table>
<colgroup>
<col style="width: 51%" />
<col style="width: 48%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>["John", "Bob", "Christina", "Ema"]</strong></td>
<td><p><strong>1.Bob</strong></p>
<p><strong>2.Christina</strong></p>
<p><strong>3.Ema</strong></p>
<p><strong>4.John</strong></p></td>
</tr>
</tbody>
</table>

## Sorting Numbers

Write a function that sorts an **array of numbers** so that the first
element is the **smallest** one, the second is the **biggest** one, the
third is the **second** **smallest** one, the fourth is the **second**
**biggest** one, and so on.

**Return** the resulting array.

**Example**

| **Input** | **Output** |
|----|----|
| **\[1, 65, 3, 52, 48, 63, 31, -3, 18, 56\]** | **\[-3, 65, 1, 63, 3, 56, 18, 52, 31, 48\]** |
| **\[22, 9, 63, 3, 2, 19, 54, 11, 21, 18\]** | **\[2, 63, 3, 54, 9, 22, 11, 21, 18, 19\]** |

## Sort an Array by 2 Criteria

Write a function that orders a **given array of strings**, by a
**length** in **ascending order** as **primary criteria**, and by
**alphabetical value** in **ascending order** as **second criteria**.
The comparison should be **case-insensitive**.

The **input** comes as an **array of strings**.

The **output** is the elements of the ordered array of strings, printed
each on a new line.

### Examples

<table>
<colgroup>
<col style="width: 15%" />
<col style="width: 15%" />
<col style="width: 3%" />
<col style="width: 17%" />
<col style="width: 11%" />
<col style="width: 3%" />
<col style="width: 17%" />
<col style="width: 16%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th></th>
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th rowspan="2"></th>
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
<tr class="odd">
<th><p>['alpha',</p>
<p>'beta',</p>
<p>'gamma']</p></th>
<th><p>beta</p>
<p>alpha</p>
<p>gamma</p></th>
<th></th>
<th><p>['Isacc',</p>
<p>'Theodor',</p>
<p>'Jack',</p>
<p>'Harrison',</p>
<p>'George']</p></th>
<th><p>Jack</p>
<p>Isacc</p>
<p>George</p>
<p>Theodor</p>
<p>Harrison</p></th>
<th><p>['test',</p>
<p>'Deny',</p>
<p>'omen',</p>
<p>'Default']</p></th>
<th><p>Deny</p>
<p>omen</p>
<p>test</p>
<p>Default</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

# Multidimensional Arrays (Matrices)

We will mainly work with 2-dimensional arrays. The concept is as simple
as working with a simple 1-dimensional array. It is just an array of
arrays.

## Magic Matrices

Write a function that checks if a given matrix of numbers is
**magical**. A matrix is magical if the **sums of the cells** of **every
row** and **every column** are **equal**.

The **input** comes as an **array of arrays**, containing numbers
(number 2D matrix). The input numbers will **always be positive**.

The **output** is a Boolean result indicating whether the matrix is
magical or not.

### Examples

<table>
<colgroup>
<col style="width: 18%" />
<col style="width: 12%" />
<col style="width: 2%" />
<col style="width: 22%" />
<col style="width: 10%" />
<col style="width: 3%" />
<col style="width: 18%" />
<col style="width: 12%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th></th>
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th rowspan="2"></th>
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
<tr class="odd">
<th><p>[[4, 5, 6],</p>
<p>[6, 5, 4],</p>
<p>[5, 5, 5]]</p></th>
<th>true</th>
<th></th>
<th><p>[[11, 32, 45],</p>
<p>[21, 0, 1],</p>
<p>[21, 1, 1]]</p></th>
<th>false</th>
<th><p>[[1, 0, 0],</p>
<p>[0, 0, 1],</p>
<p>[0, 1, 0]]</p></th>
<th><strong>true</strong></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## \*Tic-Tac-Toe

Make a tic-tac-toe console application.

You will receive an array of arrays. As you know there are two players
in this game, so the first element of the input will be the first
player's chosen coordinates, the second element will be the second
player's turn coordinates, and so on.

The initial state of the dashboard is

**\[\[false, false, false\],**

**\[false, false, false\],**

**\[false, false, false\]\]**

The first player's mark is X and the second player's mark is O.

### Input

One parameter:

- An array - **the moves** in a row that players make

### Output

- There are two players - X and O

- If a player tries to make his turn on already taken place, he should
  take his turn again and you should print the following message:

**"This place is already taken. Please choose another!"**

- If there are no free spaces on the dashboard and nobody wins the game
  should end and you should print the following message:

> **"The game ended! Nobody wins :("**

- If someone wins you should print the following message and the
  **current** **state** of the **dashboard**:

**"Player {x} wins!"**

> **Note:** When printing the state of the dashboard the elements of
> each row of the dashboard should be separated by **"\t"** and each row
> should be on a new line.

### Constraints

The elements in the input array will always be enough to end the game.

### Examples

<table>
<colgroup>
<col style="width: 46%" />
<col style="width: 53%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>["0 1",</p>
<p>"0 0",</p>
<p>"0 2",</p>
<p>"2 0",</p>
<p>"1 0",</p>
<p>"1 1",</p>
<p>"1 2",</p>
<p>"2 2",</p>
<p>"2 1",</p>
<p>"0 0"]</p></td>
<td><p>Player O wins!</p>
<p>O X X</p>
<p>X O X</p>
<p>O false O</p></td>
</tr>
<tr class="even">
<td><p>["0 0",</p>
<p>"0 0",</p>
<p>"1 1",</p>
<p>"0 1",</p>
<p>"1 2",</p>
<p>"0 2",</p>
<p>"2 2",</p>
<p>"1 2",</p>
<p>"2 2",</p>
<p>"2 1"]</p></td>
<td><p>This place is already taken. Please choose another!</p>
<p>Player X wins!</p>
<p>X X X</p>
<p>false O O</p>
<p>false false false</p></td>
</tr>
<tr class="odd">
<td><p>["0 1",</p>
<p>"0 0",</p>
<p>"0 2",</p>
<p>"2 0",</p>
<p>"1 0",</p>
<p>"1 2",</p>
<p>"1 1",</p>
<p>"2 1",</p>
<p>"2 2",</p>
<p>"0 0"]</p></td>
<td><p>The game ended! Nobody wins :(</p>
<p>O X X</p>
<p>X X O</p>
<p>O O X</p></td>
</tr>
</tbody>
</table>

## \*\*Diagonal Attack

Write a JS function that reads a given matrix of numbers and checks if
both **main diagonals** have **equal sums**. If they do, set every
element that is **NOT** part of **the main diagonals** to that sum,
alternatively just print the matrix unchanged.

The **input** comes as an **array of strings**. Each element represents
a **string of numbers**, with **spaces** between them. Parse it into a
**matrix of numbers**, so you can work with it.

The **output** is either the new matrix, with all cells not belonging to
a main diagonal are changed to the diagonal sum, or the original matrix
if the two diagonals have different sums. You need to print **every row
on a new line**, with cells **separated by a space**. Check the examples
below.

### Example

<table>
<colgroup>
<col style="width: 27%" />
<col style="width: 24%" />
<col style="width: 2%" />
<col style="width: 23%" />
<col style="width: 21%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th></th>
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>['5 3 12 3 1',</p>
<p>'11 4 23 2 5',</p>
<p>'101 12 3 21 10',</p>
<p>'1 4 5 2 2',</p>
<p>'5 22 33 11 1']</p></td>
<td><p>5 15 15 15 1</p>
<p>15 4 15 2 15</p>
<p>15 15 3 15 15</p>
<p>15 4 15 2 15</p>
<p>5 15 15 15 1</p></td>
<td></td>
<td><p>['1 1 1',</p>
<p>'1 1 1',</p>
<p>'1 1 0']</p></td>
<td><p>1 1 1</p>
<p>1 1 1</p>
<p>1 1 0</p></td>
</tr>
</tbody>
</table>

## \*Orbit

You will be given an empty rectangular space of cells. Then you will be
given the position of a star. You need to build the orbits around it.

You will be given a coordinate of a cell, which will **always be**
**inside the matrix**, on which you will put the value - **1**. Then you
must set the values of the cells **directly surrounding that cell**,
including the **diagonals**, **to 2**. After which you must set the
values of the next surrounding cells to 3 and so on. Check the pictures
for more information.

For example, we are given a matrix that has 5 rows and 5 columns, and
the star is at coordinates - **0, 0**. Then the following should happen:

| <span class="mark">1</span> |  |  |  |  |  |  | 1 | 2 |  |  |  |  |  | 1 | 2 | 3 | 4 | 5 |
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
|  |  |  |  |  |  |  | 2 | 2 |  |  |  |  |  | 2 | 2 | 3 | 4 | 5 |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  | 3 | 3 | 3 | 4 | 5 |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  | 4 | 4 | 4 | 4 | 5 |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  | 5 | 5 | 5 | 5 | 5 |

If the coordinates of the star are somewhere in the middle of the matrix
for example - **2, 2**, then it should look like this:

|     |     |     |     |     |     |     |     |     |     |     |     |     |     | 3   | 3   | 3   | 3   | 3   |
|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
|     |     |     |     |     |     |     |     | 2   | 2   | 2   |     |     |     | 3   | 2   | 2   | 2   | 3   |
|     |     | 1   |     |     |     |     |     | 2   | 1   | 2   |     |     |     | 3   | 2   | 1   | 2   | 3   |
|     |     |     |     |     |     |     |     | 2   | 2   | 2   |     |     |     | 3   | 2   | 2   | 2   | 3   |
|     |     |     |     |     |     |     |     |     |     |     |     |     |     | 3   | 3   | 3   | 3   | 3   |

The **input** comes as an **array of 4 numbers** **\[width, height, x,
y\]** which represents the **dimensions of the matrix** and the
**coordinates of the star.**

The **output** is the filled matrix, with the cells **separated by a
space**, each **row on a new line**.

### Examples

<table>
<colgroup>
<col style="width: 18%" />
<col style="width: 11%" />
<col style="width: 3%" />
<col style="width: 18%" />
<col style="width: 13%" />
<col style="width: 2%" />
<col style="width: 17%" />
<col style="width: 13%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th></th>
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th rowspan="2"></th>
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
<tr class="odd">
<th>[4, 4, 0, 0]</th>
<th><p>1 2 3 4</p>
<p>2 2 3 4</p>
<p>3 3 3 4</p>
<p>4 4 4 4</p></th>
<th></th>
<th>[5, 5, 2, 2]</th>
<th><p>3 3 3 3 3</p>
<p>3 2 2 2 3</p>
<p>3 2 1 2 3</p>
<p>3 2 2 2 3</p>
<p>3 3 3 3 3</p></th>
<th>[3, 3, 2, 2]</th>
<th><p>3 3 3</p>
<p>3 2 2</p>
<p>3 2 1</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## \*Spiral Matrix

Write a JS function that generates a **Spirally-filled** matrix with
numbers, with given dimensions.

The **input** comes as **2 numbers** that represent the **dimension of
the matrix**.

The **output** is the matrix filled spirally starting from **1**. You
need to print **every row on a new line**, with the cells **separated by
a space**. Check the examples below.

### Examples

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 27%" />
<col style="width: 5%" />
<col style="width: 22%" />
<col style="width: 24%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th></th>
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>5, 5</td>
<td><p>1 2 3 4 5</p>
<p>16 17 18 19 6</p>
<p>15 24 25 20 7</p>
<p>14 23 22 21 8</p>
<p>13 12 11 10 9</p></td>
<td></td>
<td>3, 3</td>
<td><p>1 2 3</p>
<p>8 9 4</p>
<p>7 6 5</p></td>
</tr>
</tbody>
</table>
