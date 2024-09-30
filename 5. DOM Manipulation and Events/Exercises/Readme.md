**Exercise DOM Events**

## Sections

You will receive an **array** of strings. For each string, create a
**div** with a **paragraph** with the **string** in it. Each paragraph
is initially **hidden (display:none)**. Add a **click** **event**
**listener** to **each div** that **displays** the **hidden** paragraph.
Finally, you should **append** all divs to the element with an **id**
"**content**".

### Example

<img src="media/image1.png" style="width:3.12105in;height:3.14961in"
alt="beforeClick" /> 🡪
<img src="media/image2.png" style="width:3.18783in;height:3.14961in"
alt="C:\Users\v\AppData\Local\Microsoft\Windows\INetCache\Content.Word\afterClick.png" />

## Time Converter

Create a program that **converts** different time units. Your task is to
add a **click** event listener to **all** \[**CONVERT**\] **buttons**.
When a button is **clicked**, read the **corresponding** input field,
**convert** the value to the **three other** time units and **display**
it in the input fields.

### Example

<img src="media/image3.png" style="width:5.32765in;height:3.68491in" />

<img src="media/image4.png" style="width:5.32708in;height:4.13171in" />

One day is equal to 24 hours/1440 minutes/86400 seconds. Whichever
button we **click,** the input fields should **change** depending on the
added value on the left. (For example, if we write 48 hours and click
convert the days, the field value should change to 2).

## Locked Profile

In this problem, you should **create a JS functionality** that **shows**
and **hides** the additional information about users.

<img src="media/image5.png" style="width:6.01292in;height:2.52041in" />

When one of the \[**Show more**\] **buttons** is clicked, the **hidden
information** inside the div should

be shown, only if **the profile is not locked**! If the current profile
is **locked,** nothing should happen.

<img src="media/image6.png" style="width:5.90382in;height:3.15022in" />

If the **hidden information is displayed** and we **lock** **the profile
again**, the \[**Hide it**\] button should **not be working**!

Otherwise, when the profile is **unlocked** and we click on the \[**Hide
it**\] button, the new fields must hide again.

## Fill Dropdown

Your task is to take values from **input** fields with **ids
"newItemText"** and **"newItemValue"**. Then you should create and
append an **\<option\>** to the **\<select\>** with **id** **"menu".**

### Example

<img src="media/image7.png" style="width:7.1954in;height:1.64in" />

## Encode and Decode Messages

In this problem, you should **create a JS functionality** that **encodes
and decodes some messages which travel to**

**the network.**

<img src="media/image8.png" style="width:5.45844in;height:3.60252in" />

This program should contain **two functionalities**.

The first one is to **encode the given message** and **send it** to the
**receiver**.

The second one is to **decode the received message** and **read it
(display it)**.

When the \[**Encode and send it**\] **button** is clicked, you should
get the given message from the first **textarea**. When you get the
current message, you should encode it as follows:

- **Change** the **ASCII CODE** on **every single character** in that
  message when you **add 1** to the current **ASCII NUMBER**, that
  represents the current character in that message

- **Clear** the **sender** **textarea** and **add** the encoded message
  to the **receiver textarea**

<img src="media/image9.png" style="width:5.13271in;height:3.29212in" />

<u>After clicking the \[**Encode and send it**\] **button** the result
should be:</u>

<img src="media/image10.png" style="width:5.17058in;height:3.31195in" />

After that, when the \[**Decode and read it**\] **button** is clicked.
You need to get the **encoded message** from **the receiver textarea**
and do the **opposite logic** from encoding:

- **Subtract 1** from the current **ASCII NUMBER**, that represents the
  current character in that message

- Replace the **encoded message** with the already **decoded message**
  in the receiver **textarea**, to make it readable

<img src="media/image11.png" style="width:5.6125in;height:3.53531in" />

## Furniture

You will be given some furniture as an **array of objects**. Each object
will have a **name**, a **price,** and a **decoration factor**.

When the \[**"Generate"**\] **button is clicked**, add a **new row to
the table** for each piece of furniture with **image, name, price,** and
**decoration factor** (code example below).

When the \[**"Buy"**\] button is clicked, get all **checkboxes that are
marked** and show in the **result textbox** the **names** of the piece
of furniture that **were checked**, separated by a **comma** and
**single** **space** (**", "**) in the following format: **"Bought
furniture: {furniture1}, {furniture2}…"**.

On the next line, print the total price in the format: **"Total price:
{totalPrice}"** (formatted to the second decimal point). Finally, print
the average decoration factor in the format: **"Average decoration
factor: {decFactor}"**

### Input Example

> **\[{"name": "Sofa", "img":
> "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg",
> "price": 150, "decFactor": 1.2}\]**

### Examples

<img src="media/image12.png" style="width:6.54808in;height:4.86562in" />

<img src="media/image13.png" style="width:6.54792in;height:3.08978in" />

## Distance Converter \*

Your task is to convert from **one** distance unit to **another** by
adding a **click** event listener to a button. When it is clicked,
**read** the value from the input field and **get** the **selected**
option from the **input** and **output** units dropdowns. Then
**calculate** and **display** the converted value in the **disabled**
output field.

### Example

<img src="media/image14.png" style="width:6.35889in;height:1.94in" />

### Hints

- Multiply the incoming distance by the following conversion rates to
  convert to meter

- Divide to convert from meters to the required output unit

- To see which option is selected, read the properties of its parent:
  **value** gives you the value of the selected option (as displayed in
  the HTML), **selectedIndex** gives you the 0-based index of the
  selected option. For example, if miles are selected,
  **inputUnits.value** is "**mi**", **inputUnits.selectedIndex** is
  **4**. Option text is irrelevant

- Use the following table information to do that:

| **1 km**  | **1000 m**    |
|-----------|---------------|
| **1 m**   | **1 m**       |
| **1 cm**  | **0.01 m**    |
| **1 mm**  | **0.001 m**   |
| **1 mi**  | **1609.34 m** |
| **1 yrd** | **0.9144 m**  |
| **1 ft**  | **0.3048 m**  |
| **1 in**  | **0.0254 m**  |

## Sudomu \*

Write a function that implements **SUDOMU** (**Sudoku inside the DOM**).

<img src="media/image15.png" style="width:6.48249in;height:2.51944in" />

The rules are simple and they are **the same** as the **typical sudoku
game** (for more information, click
[here](https://sudoku.com/how-to-play/sudoku-rules-for-complete%20beginners/)).

If the table is filled with the **right numbers**, and the \["**Quick
Check**"\] button is **clicked**, the expected result should

be:

<img src="media/image16.png" style="width:6.45991in;height:2.88068in" />

The table borer should be changed to: "**2px solid green".** The **text
content** of the **paragraph**

inside the **div** with an **id** "**check**" must be "**You solve it!
Congratulations!**"

The text color of that paragraph must be **green.**

Otherwise, when the filled table **does not solve** **the sudomu,** the
result should be:

<img src="media/image17.png" style="width:6.17308in;height:2.63147in" />

The table border should be changed to: "**2px solid red**". The **text
content** of the **paragraph** inside the **div**

with an **id** "**check**" must be: "**NOP! You are not done yet...**"

The text color of that paragraph must be **red!**

The \["**Clear**"\] button **clears the whole** **SUDOMU (removes all
numbers)** and the **paragraph**

**which contains the messages. It also removes the table border.**

<img src="media/image15.png" style="width:6.17292in;height:2.39913in" />

## JavaScript Quizz \*

Write a function that has the functionality of a quiz.

<img src="media/image18.png" style="width:6.42341in;height:2.51146in" />

Three sections contain **one question** **and 2 possible answers.**

**The right answer is only one!**

When one of the **list elements is clicked,** the next section **must
appear (if any…)**.

After all three questions have been answered, the **results ul** must
**appear,** (Use **'none'** and **'block**' to hide and show the
question sections), and the **results** must be added in the **h1**.

If all questions are answered correctly, you should print the following
message:  
"**You are recognized as top JavaScript fan!**"

Otherwise, just print "**You have {rightAnswers} right answers**".

The right answers are:

- **onclick**

- **JSON.stringify()**

- **A programming API for HTML and XML documents**

<img src="media/image18.png" style="width:6.53194in;height:2.55389in" />

<img src="media/image19.png" style="width:6.53194in;height:2.49812in" />

<img src="media/image20.png" style="width:6.53194in;height:2.51922in" />

<img src="media/image21.png" style="width:6.53194in;height:2.39597in" />

<img src="media/image22.png" style="width:6.53194in;height:2.31644in" />
