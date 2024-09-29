# Lab DOM Introduction

## Edit Element 

Create function **edit()** that takes **three** parameters.

### Input / Output

**The first** parameter is a **reference** to an **HTML** element, the
other two parameters are string–**match** and **replacer.**

You have to **replace** all occurrences of the **match** inside the
**text content** of the given element with a **replacer.**

### Examples

<img src="media/image1.png" style="width:3.85216in;height:1.03143in" />

**↓**

<img src="media/image2.png" style="width:3.89259in;height:0.99115in" />

## Collect List Items

Write a JS function that scans a given **HTML list** and **appends** all
collected list items’ text to a **textarea** on the same page when the
user **clicks** on a button.

### Input / Output

There will be no Input / Output, your program should instead **modify**
the DOM of the given HTML document.

### Examples

<img src="media/image3.png" style="width:3.38118in;height:3.05492in" />
🡪
<img src="media/image4.png" style="width:3.40633in;height:3.07765in" />

1.  **Sum Numbers**

Write a JS function that **reads** two numbers from input fields in a
**web page** and puts their **sum in another field** when the user
**clicks** on a button.

**Input / Output**

There will be no Input / Output, your program should instead **modify**
the DOM of the given HTML document.

**Examples**

<img src="media/image5.png" style="width:3.88596in;height:2.26073in" />

## Show More

Write a JS function that **expands** a hidden section of text when a
link is **clicked**. The link should **disappear** as the rest of the
text shows up.

### Input / Output

There will be no Input / Output, your program should instead **modify**
the DOM of the given HTML document.

### Examples

<img src="media/image6.png" style="width:4.73342in;height:0.40009in" />

**↓**

<img src="media/image7.png" style="width:6.18456in;height:0.36746in" />

## Colorize Table

Write a JS function that **changes the color** of all **even** rows when
the user **clicks** a button. Apply the color "**Teal**" to the target
rows.

### Input / Output

There will be no Input / Output, your program should instead **modify**
the DOM of the given HTML document.

### Examples

<img src="media/image8.png" style="width:1.93869in;height:2.52194in" />
🡪 <img src="media/image9.png" style="width:1.90288in;height:2.5258in" />

## Sum Table

Write a JS function that finds the first table in a document and sums
the values in the last column. The result is then displayed in an
element with ID "**sum**".

### Input / Output

There will be no Input / Output, your program should instead **modify**
the DOM of the given HTML document.

### Examples

<img src="media/image10.png" style="width:1.70661in;height:2.30895in" />
**→**
<img src="media/image11.png" style="width:1.85122in;height:2.29806in" />

## Extract Parenthesis

Write a JS function that when **executed**, extracts all parenthesized
text from a target paragraph by given element ID. The result is a
string, joined by "; " (semicolon, space).

### Input

Your function will receive a **string parameter**, representing the
target element ID, from which text must be extracted. The text should be
extracted from the DOM.

### Output

**Return a string** with all matched text, separated by "; " (semicolon,
space).

### Examples

<img src="media/image12.png" style="width:5.40278in;height:2.45227in" />

| **Sample call**                         |
|-----------------------------------------|
| let text = extract("content");          |
| **Result (stored in variable text)**    |
| Bulgaria; Kazanlak; Rosa demascena Mill |
