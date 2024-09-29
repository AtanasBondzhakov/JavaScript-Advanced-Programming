**Lab DOM Events**

## List of Items

Write a function that **reads** the text inside an input field and
**appends** the specified text to a list inside an HTML page.

### Examples

<img src="media/image1.png" style="width:2.27083in;height:1.89375in" />🡪
<img src="media/image2.png" style="width:2.24007in;height:1.9325in" />🡪
<img src="media/image3.png" style="width:2.24681in;height:1.92524in" />

## Delete from Table

Write a program that **takes** an **email** from an **input field** and
**deletes** the matching row from a table.

- If entry is found, the **textContent** in the element with
  **id="result**" must be set to **"Deleted."**

- Otherwise, an **error** should be displayed in a **\<div\>** with
  **id="result"**. The error should be **"Not found."**

Submit **only** the **deleteByEmail()** function in Judge.

### Input / Output

There will be no Input / Output, your program should instead **modify**
the DOM of the given HTML document.

### Examples

<img src="media/image4.png" style="width:4.39583in;height:2.40333in" />

<img src="media/image5.png" style="width:4.4125in;height:2.18288in" />

## Add / Delete

Extend the previous problem to display **a \[Delete\] link** after each
list item. **Clicking** it should **delete** the item with no
confirmation. You have to add **href="#"** to the link element.

### Examples

<img src="media/image6.png" style="width:2.81911in;height:2.34325in"
alt="Graphical user interface, text, application, chat or text message Description automatically generated" />🡪
<img src="media/image7.png" style="width:3.59894in;height:2.34753in"
alt="Graphical user interface Description automatically generated" />

## Mouse Gradient

Write a program that **detects** and **displays** how far along a
gradient the user has **moved** their **mouse**. The result should be
**rounded down** and displayed as a **percentage** inside the
**\<div\>** with id "**result**".

Submit **only** the **attachGradientEvents()** function in Judge.

### Input / Output

There will be no Input / Output, your program should instead **modify**
the DOM of the given HTML document.

### Examples

<img src="media/image8.png" style="width:3.31296in;height:0.51049in"
alt="Screenshot_2.png" />

## Highlight Active

Write a **function** that **highlights** the **currently active**
section of a document. There will be **multiple** divs with **input
fields** inside them. Set the **class** of the **div** that contains the
**currently focused** input field to "**focused**". When the focus is
lost (**blurred**), **remove the class** from the element.

Submit only the **focused()** function in Judge.

### Input / Output

There will be no Input / Output, your program should instead **modify**
the DOM of the given HTML document.

### Example

<img src="media/image9.png" style="width:2.53816in;height:2.29207in" />
🡪
<img src="media/image10.png" style="width:2.47917in;height:2.29695in" />

## Dynamic Validation

Write a **function** that **dynamically validates** an **email** input
field when it is **changed**. If the input is **invalid**, apply the
class "**error**". Do **not** validate on every keystroke, as it is
annoying for the user, consider only **change** events.

A valid email is considered to be in the format:
**\<name\>@\<domain\>.\<extension\>**

Only **lowercase Latin characters** are allowed for any of the parts of
the email. If the input is valid, **clear** the style. Submit **only**
the **validate()** function in Judge.

### Input / Output

There will be no Input / Output, your program should instead **modify**
the DOM of the given HTML document.

### Example

<img src="media/image11.png" style="width:3.1882in;height:0.63618in" />🡪
<img src="media/image12.png" style="width:2.98753in;height:0.64306in" />

## Shopping Cart

You will be given some products that you should be able to add to your
cart. Each product will have a **name, picture,** and **price**.

When the **"Add"** button is clicked, append the current product to the
**textarea** in the following format: **"Added {name} for {money} to the
cart.\n"**. The price must be fixed to the second digit.

When the button **"Checkout"** is clicked, calculate the **total money**
that you need to pay for the products that are currently in your cart.
Append the result to the **textarea** in the following format:

**"You bought {list} for {totalPrice}."**

The list should contain only the **unique products**, separated by **",
"**. The total price should be rounded to the second decimal point.

Also, after clicking over "**Checkout**" and every from above is done
you should **disable** **all** **buttons**. (You **can't** add products
or checkout again if once the checkout button is clicked).

### Examples

<img src="media/image13.png" style="width:6.70712in;height:3.35577in" />
