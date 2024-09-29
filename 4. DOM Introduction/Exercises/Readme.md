# Exercise DOM Introduction

## Subtraction

An HTML page holds **two text fields** with ids "**firstNumber**" and
"**secondNumber**". Write a function to **subtract** the values from
these text fields and display the result in the **div** named
"**result**".

### HTML and JavaScript Code

Implement the above to provide the following functionality:

- Your function should take the values of "**firstNumber**" and
  "**secondNumber**", **convert** them to numbers, **subtract** the
  second number from the first one and then append the result to the
  **\<div\>** with **id="result"**.

- Your function should be able to work with **any 2 numbers** in the
  inputs, not only the ones given in the example.

### Example

<img src="media/image1.png" style="width:3.81591in;height:2.19in" />

## Pascal or Camel Case

An **HTML** file is given and your task is to write a function that
takes **two string parameters** as an input and transforms the **first
parameter** to the type required by the **second parameter**.

- **The first parameter** will be the text that you need to modify
  depending on the second parameter. The words in it will **always** be
  **separated by space**.

- **The second parameter** will be either "**Camel Case**" or "**Pascal
  Case**". In case of different input, your **output** should be
  **"Error!"**

When the button is clicked the function should convert the first string
to either of the cases. The **output** should consist of only **one
word** - the string you have modified. Once your **output** is done, you
should set it as HTML to the **\<span\>** **element**. For more
information, see the examples below:

### Example

| **Input**                          | **Output**      |
|------------------------------------|-----------------|
| "this is an example", "Camel Case" | thisIsAnExample |
| "secOND eXamPLE", "Pascal Case"    | SecondExample   |
| "Invalid Input", "Another Case"    | Error!          |

## Accordion

An **HTML** file is given and your task is to show **more**/**less**
information. By clicking the **\[More\] button**, it should **reveal**
the content of a **hidden** div and **changes** the text of the button
to **\[Less\]**. When the same link is clicked **again** (now reading
**Less**), **hide** the div and **change** the text of the link to
**More**. Link action should be **toggleable** (you should be able to
click the button an infinite amount of times).

### Example

<img src="media/image2.png" style="width:6.27in;height:0.74566in" />

<img src="media/image3.png" style="width:6.24616in;height:2.8in" />

## Search in List

An HTML page holds a **list** of towns, a **search** box, and a
**\[Search\]** button. Implement the **search** function to **bold** and
**underline** the items from the list which include the text from the
**search** box. Also, print the number of items the current search
**matches** in the format **\`\${matches} matches found\`**.

***Note:*** It is necessary to clear the results of the previous search.

Write your **JavaScript** code in this file:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>search.js</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>function</strong> <em>search</em>() {<br />
<em>// <strong>TODO<br />
</strong></em>}</td>
</tr>
</tbody>
</table>

### Screenshots

<img src="media/image4.png" style="width:2.4691in;height:4.00056in"
alt="Screenshot_2.png" /><img src="media/image5.png" style="width:2.4415in;height:4.03367in"
alt="Screenshot_3.png" />

## Table - Search Engine

Write a function that **searches** in a **table** by given input.

<img src="media/image6.png" style="width:6.53194in;height:2.43163in" />

When the "**Search**" **button** is **clicked**, go through all cells in
the table except for the first row (Student name, Student email, and
Student course) and check if the given input has a match (check for both
**full words** and **single letters**).

If any of the rows contain the submitted string, add a **class select**
to that row. Note that more than one row may contain the given string.

Оtherwise, if there is no match, **<u>nothing should happen</u>**.

**Note:** After every search ("**Search**" button is clicked), **clear**
**the input field** and **remove** **all already selected classes** (if
any) from the previous search, for the **new search** to contain only
the **new result**.

For instance, if we try to find **eva:**

<img src="media/image7.png" style="width:6.53194in;height:2.42948in" />

The result should be:

<img src="media/image8.png" style="width:6.53194in;height:2.31612in" />

If we try to find all students who have email addresses in **softuni**
domain, the expected result should be:

<img src="media/image9.png" style="width:6.53194in;height:2.52371in" />

## Format the Text

**Create a functionality** that gets a text from **textarea**, formats
the given **text** - you need to find out how many **sentences** there
are in the text, simply **split** the whole text by **'.'**  
Also, every sentence must have at **least 1 character**.

<img src="media/image10.png" style="width:6.26806in;height:1.57292in" />

Generate HTML paragraphs as a string (Use interpolation **string** to
create paragraph element: **\`\<p\> {text} \</p\>\`**) and append it to
the div with an **id =** **"output"**.

<img src="media/image11.png" style="width:6.26806in;height:2.49236in" />

<img src="media/image12.png" style="width:6.26806in;height:3.04514in" />

When the \[**Format**\] button is **clicked**, get the text inside the
**textarea** with an **id**="**input**" and **format it**. The
formatting is **done** as **follows:**

- Create a **new paragraph element** that holds no more than **3
  sentences** from the given input**.**

- **Hint: Use interpolation string to create paragraph element. (\`\<p\>
  {text} \</p\>\`)**

- If the given input contains **less** or **3 sentences**, you need to
  create only 1 paragraph, fill it with these sentences and append this
  paragraph to the div with an **id=**"**output**".

Otherwise, when you have more than 3 sentences**,** create enough
paragraphs to get all sentences from the **textarea.**

Just remember to **restrict** the **sentences** in **each paragraph to
3.**

### Example:

- If the input textarea **contains 2 sentences**, create only **1
  paragraph** with these 2 sentences

<img src="media/image13.png" style="width:6.26806in;height:3.19931in" />

- If the input textarea **contains 7 sentences,** create **3
  paragraphs**  
  - The **first paragraph** must contain **the first 3 sentences**  
  - The **second paragraph** must contain **the other three sentences**
  of the whole text  
  - The **third paragraph** will contain **only the last sentence**

<img src="media/image14.png" style="width:6.26806in;height:3.16667in" />

### Input / Output

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
<td>JavaScript, often abbreviated as JS, is a high-level, interpreted
programming language. It is a language which is also characterized as
dynamic, weakly typed, prototype-based and multi-paradigm.</td>
<td><mark>&lt;p&gt;</mark>JavaScript, often abbreviated as JS, is a
high-level, interpreted programming language. It is a language which is
also characterized as dynamic, weakly typed, prototype-based and
multi-paradigm.<mark>&lt;/p&gt;</mark></td>
</tr>
<tr class="even">
<td>JavaScript, often abbreviated as JS, is a high-level, interpreted
programming language. It is a language which is also characterized as
dynamic, weakly typed, prototype-based and multi-paradigm. Alongside
HTML and CSS, JavaScript is one of the three core technologies of the
World Wide Web. JavaScript enables interactive web pages and thus is an
essential part of web applications. The vast majority of websites use
it, and all major web browsers have a dedicated JavaScript engine to
execute it. As a multi-paradigm language, JavaScript supports
event-driven, functional, and imperative (including object-oriented and
prototype-based) programming styles. It has an API for working with
text, arrays, dates, regular expressions, and basic manipulation of the
DOM, but the language itself does not include any I/O, such as
networking, storage, or graphics facilities, relying for these upon the
host environment in which it is embedded.</td>
<td><p><mark>&lt;p&gt;</mark>JavaScript, often abbreviated as JS, is a
high-level, interpreted programming language.It is a</p>
<p>language which is also characterized as dynamic, weakly typed,
prototype-based and multi-paradigm.Alongside</p>
<p>HTML and CSS, JavaScript is one of the three core technologies of the
World Wide Web.<mark>&lt;/p&gt;</mark><br />
<mark>&lt;p&gt;</mark>JavaScript enables</p>
<p>interactive web pages and thus is an essential part of web
applications.The vast majority of websites use it,</p>
<p>and all major web browsers have a dedicated JavaScript engine to
execute it.As a multi-paradigm language,</p>
<p>JavaScript supports event-driven, functional, and imperative
(including object-oriented and prototype-based)</p>
<p>programming styles.<mark>&lt;/p&gt;</mark></p>
<p><mark>&lt;p&gt;</mark>It has an API for working with text, arrays,
dates, regular expressions, and basic</p>
<p>manipulation of the DOM, but the language itself does not include any
I/O, such as networking, storage, or</p>
<p>graphics facilities, relying for these upon the host environment in
which it is embedded.<mark>&lt;/p&gt;</mark></p></td>
</tr>
</tbody>
</table>

# Hell's Kitchen

You will be given an **array of strings**, which represents a **list**
of **all** the **restaurants** with their workers.

<img src="media/image15.png" style="width:6.62159in;height:3.03762in" />

When the \[**Send**\] button is clicked:

- Display the **best** **restaurant** of all the **added**
  **restaurants** with its **average** **salary** and **best**
  **salary**.

- If there is a restaurant in the input array that is added more than
  once, you need to add new workers to the old ones and **update** the
  values of the **average salary** and the **best** **salary**.

- The best restaurant is the restaurant with the **highest** **average**
  salary. If two restaurants have the **same** average salary the best
  restaurant is the **first** one added.

- Display **all** workers in the **best** **restaurant** with their
  **salaries**.

The best restaurant's workers should be **sorted** by their **salaries**
in **descending** order.

<img src="media/image16.png" style="width:5.63636in;height:2.63588in" />

### Input

> The input will be received from the given **textarea** in the form of
> an **array** of **strings**. Each string represents a **restaurant**
> with its **workers**: **\["Mikes - Steve 1000, Ivan 200, Paul 800",
> "Fleet - Maria 850, Janet 650"\]**

<img src="media/image17.png" style="width:4.10716in;height:1.11777in" />

<img src="media/image18.png" style="width:5.63246in;height:2.64809in" />

### Output

- The output contains **two strings**

  - The first one is **the best restaurant** in the format:

> **\`Name: {restaurant name} Average Salary: {restaurant avgSalary}
> Best Salary: {restaurant bestSalary}\`**
>
> **avgSalary** and **bestSalary** must be formatted to the **second
> decimal point.**

- The second one is all the workers in that restaurant in the following
  format:

> **\`Name: {worker name} With Salary: {worker salary} Name: {worker2
> name} With Salary: {worker2 salary} Name: {worker3 name} With Salary:
> {worker3 salary}…\`**

Output strings must be set like **text content** in the following
elements:

<img src="media/image19.png" style="width:5.78556in;height:2.92632in" />

### Constraints

- The workers will be always **unique**

### Examples

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 35%" />
<col style="width: 38%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th><strong>Comment</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>["<mark>PizzaHut</mark> - Peter 500, George 300, Mark 800",</p>
<p>"<mark>TheLake</mark> - Bob 1300, Joe 780, Jane 660"]</p></td>
<td>Name: TheLake Average Salary: 913.33 Best Salary: 1300.00<br />
Name: Bob With Salary: 1300 Name: Joe With Salary: 780 Name: Jane With
Salary: 660</td>
<td>The added restaurants are: <mark>TheLake</mark> and
<mark>PizzaHut</mark>.<br />
TheLake has average salary:<br />
(1300+780+660)/3= 913.33,<br />
and PizzaHub has average salary:<br />
(500+300+800)/2=533.33.<br />
So the best restaurant is TheLake.</td>
</tr>
<tr class="even">
<td>["Mikes - Steve 1000, Ivan 200, Paul 800","Fleet - Maria 850, Janet
650"]</td>
<td>Name: Fleet Average Salary: 750.00 Best Salary: 850.00<br />
Name: Maria With Salary: 850 Name: Janet With Salary: 650</td>
<td></td>
</tr>
</tbody>
</table>

## Generate Report

You will be given a **web page**, containing a **table** and **output
area**.

<img src="media/image20.png" style="width:5.20344in;height:4.59735in" />

When the **"Generate Report"** button is **pressed**:

- You must generate a **JSON** **report** from the data inside the
  table, by **only taking the columns**, which are **selected**.

Each table header has a **checkbox**. If the checkbox is **checked**,
then the data from this column must be included in the **report**.
**Unchecked** columns must be **omitted**.

<img src="media/image21.png" style="width:4.09091in;height:0.92502in" />

For **every row** (excluding the header):

- Create an **object** with **properties for each** of its columns.

- The name of each property is the name attribute of the column’s
  header, and the value is the text content of the cell.

- Store the result in an array and output it as a JSON string display it
  inside the **\<textarea\>** with **id** "**output**". See the example
  for details.

<img src="media/image22.png" style="width:4.85208in;height:2.23472in" />

### Input / Output

There will be input, your program must execute based on the page
content. The output must be a **JSON string**, displayed in the
**\<textarea\>** with **id** "**output**".

<img src="media/image23.png" style="width:3.76866in;height:0.69287in" />

### Example

<img src="media/image24.png" style="width:4.9185in;height:4.41127in" />

## \*Number Convertor

Write a function that **converts** a **decimal** **number** to
**binary** and **hexadecimal**.

<img src="media/image25.png" style="width:7.07292in;height:2.97171in" />

The given number will always be in **decimal format.** The "**From**"
select menu will only have a **Decimal** option,

but the "**To"** select menu will have **two options**: **Binary** and
**Hexadecimal**.

This means that our program should have the functionality to **convert**
**decimal** to **binary** and **decimal** to **hexadecimal**. When you
convert to **hexadecimal** it must be **upper case**.

Note that the "**To" select menu** by default is empty. You have to
insert the two options (**'Binary'** and **'Hexadecimal'**) inside
before continuing. Also, they should have **values** ('**binary**' and
'**hexadecimal**').

- When the \[**Convert it**\] button is **clicked**, the expected result
  should appear in the \[**Result**\] input field.

<img src="media/image26.png" style="width:7.21389in;height:3.83171in" />

<img src="media/image27.png" style="width:7.19299in;height:3.84583in" />

##  
