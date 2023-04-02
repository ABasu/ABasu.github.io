---
layout: post
title: "Python Programming: The Bare Essentials"
image: "assets/2022-01-12-python-basics/img001.jpg"
excerpt: "The minimum amount of Python you need to know to get started."
categories: [python, programming]
tags: [featured, sticky]
---
I created these Python notes to get students started on the absolute basics of Python within a 4 week time period. 

One of the great joys of teaching NLP/text-analysis/corpus-linguistics in a humanities setting is the wide range of students you tend to recruit – from CS majors who come into the class with fairly advanced coding chops, to people who have deep critical reading skills and domain knowledge but almost no technical expertise. This makes for great cross-disciplinary conversations. I absolutely love to observe the dynamic that forms over the semester – maybe a humanities grad student learning coding skills from a computer-science sophomore and, in turn, helping the undergrads formulate sophisticated, interesting problems and projects to leverage their budding data-skills. 

But managing and catering to this astonishing range of skills presents challenges. One gets to spend very little time on the nuts and bolts fundamentals before being thrown into the deep end, as it were, of language processing, statistical analysis, even tidbits of machine learning. Partly, this is a handicap to overcome and perhaps not the "right way" to teach programming - students often end up doing comparatively advanced stuff while their fundamentals are still quite shaky. But on the other hand, I believe it is the most practical way to engage humanities students many of whom take these classes to figure out whether 1) they have an aptitude for programming, and 2) whether computational methods might be relevant to their research concerns. They can’t afford to spend multiple semesters learning programming the right way before they get to advanced string processing and text-analysis and then to finally figure out whether they can use it in their work. They need to get to the interesting stuff and, if its relevant, they'll stick around and hone up their fundamentals. Many have gone on to engage with computing deeply in their research resulting in papers, dissertation chapters etc that marry quantitative perspectives and tools with qualitative questions.

So, these notes below are my take on the bare minimum amount of Python students need to catch up on before we can start taking on somewhat conceptual problems. You can find a git repo [here](https://github.com/ABasu/python_intro/blob/master/python_notes.ipynb) with some additional class exercises, problems to solve etc to go with these notes.

---

<a id="installpython"></a>
## Install Python

We will use Python 3.x for this course. Download and install Python using [the Anaconda distribution](https://conda.io/docs/user-guide/install/index.html)

## A Few Python Resources:

#### Websites:
* [The official Python documentation](http://docs.python.org/): The ultimate authority on all things Python. Has a [tutorial](http://docs.python.org/tutorial/), and some nice [beginner's guides](http://www.python.org/about/gettingstarted/). Can be terse and cryptic and times, but is always thorough and exhaustive. Bookmark-worthy!
* [Dive into Python](https://diveintopython3.problemsolving.io/) is an excellent online book on Python.
* [Learn Python the Hard Way](http://learnpythonthehardway.org/book/) is another good online book.

#### Books:

If you'd like to buy a paper book consider the following (in addition to print editions of the above ones):

* [Think Python](http://www.amazon.com/Think-Python-Allen-B-Downey/dp/144933072X/ref=sr_1_1?s=books&ie=UTF8&qid=1349325141&sr=1-1&keywords=think+python): Nicely organized introduction, also available as [PDF](http://www.greenteapress.com/thinkpython/thinkpython.pdf)
* [Python Programming for the Absolute Beginner](http://www.amazon.com/Python-Programming-Absolute-Beginner-Edition/dp/1435455002/ref=pd_sim_b_12)
* [Python Programming: An Introduction to Computer Science](http://www.amazon.com/Python-Programming-Introduction-Computer-Science/dp/1590282418/ref=sr_1_15?s=books&ie=UTF8&qid=1349324835&sr=1-15&keywords=python+programming): Covers a lot of ground, but a good first book as well.

Not introductory tutorials, but here are two great reference books on Python to have around:

* [Python Essential Reference](http://www.amazon.com/Python-Essential-Reference-4th-Edition/dp/0672329786/ref=pd_bxgy_b_img_z): I prefer this one.
* [Python in a Nutshell](http://www.amazon.com/Python-Nutshell-Second-Alex-Martelli/dp/0596100469/ref=sr_1_1?s=books&ie=UTF8&qid=1349325356&sr=1-1&keywords=python+nutshell)

## Navigating the terminal - files and folders

I'll expect you to familiarize yourself with basic navigation using the command line. Commands you should have a familiarity with include `pwd`, `cd`, `ls`, and `chmod`. Under Windows, Anaconda should start a Unix like shell.

## Running Python

We will use three major ways (with some variation) to run Python.

1. In the terminal, type `python` to start an interactive Python interpreter. You can type in python commands and hit enter to execute. Type `exit()` to get back to the shell.
2. Write a Python program using any plaintext editor (or IDE, like `Spyder`) and save it with a `.py` extension -- say `test.py`. Now from the commandline, run the program by typing `python test.py`. This will run the text file through the python interpreter. In Unix environments, you can do the following to mark the program as an executable and to have it automatically run through Python: Put the following on the first line of your program. `#!/usr/bin/env python3` and then after saving the program change its permissions to executable by typing `chmod 755 test.py`. Now just typing `./test.py` should run the program.
3. Start an interactive Python notebook by typing `jupyter notebook`. Type in python commands in the text box and hit shift-enter to execute.

<a id="whypython"></a>
## Why Python?

Now that we have IPython running, let's review of some basic concepts about the structure of Python and how it compares to other languages:

Python is an __interpreted language__ (often called "scripting" language) (like Ruby, PHP etc.) as opposed to compiled languages (C, C++, Java
etc).

* In other words, Python code is not translated into machine level instructions beforehand - it's interpreted on-the-fly while executing.
* This often results in easier-to-write code but slower execution times.
* But a lot of libraries that we use from within Python are written in highly optimized C as is Python itself. So, well-designed code that takes advantage of fast libraries can often run much faster than pure Python implementations.

Python is a __dynamically typed__ language as opposed to statically typed languages like C, C++, Java etc. 

* We don't have to declare variable types explicitly or reserve memory for all variables in advance.
* Python can infer the type of a variable and change it as necessary depending on the value we assign - we don't have to explicitly declare a variable as int, float etc. i.e. Python is __implicitly typed__.

For example, in the C language, if you wanted to store an integer in a variable, you'd have to declare the variable and its type explicitly. In the code snippet below, a is declared as an integer before it is used and cannot store any other data type:

    int a;
    a = 42;

In Python, we not have to declare the variable type ahead of using it. The interpreter will deduce the data type from the variable. In fact, we can assign another type of data to the same variable later and Python will change the data-type internally. Note also the use of the `type()` function to return the current data type and the `print()` function to print to the terminal.


```python
a = 42
print(type(a))

a = 4.0
print(type(a))

a = "Hello, World"
print(type(a))
```

    <class 'int'>
    <class 'float'>
    <class 'str'>


Python is __strongly typed__ - i.e. you can't mix unrelated data types.

* In other words, while you can add an int to a float to get a float as the result, you can't add an int and a string like JavaScript would allow.

For example, you can type the following bit of code which adds a number to a string into a JavaScript console and get an output.

    > "Hello" + 123
    > "Hello123"

Python on the other hand will throw an error.


```python
# Adding a 'float' to an 'int' works because both are numeric
print(4 + 2.5)

# Adding a 'string' to a number fails, though
print("Hello" + 123)
```

    6.5



    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    <ipython-input-2-e6243fa645f7> in <module>
          3 
          4 # Adding a 'string' to a number fails, though
    ----> 5 print("Hello" + 123)
    

    TypeError: can only concatenate str (not "int") to str


<a id="formatting"></a>
## Formatting Python Code

* Notice in the above example that comments can be put in the code preceded by a `#` sign. The interpreter will ignore anything that occurs after `#` in a line.
* Code blocks are designated by indentation in Python. Use tabs to indent code uniformly throughout. Some editors can be set to convert tabs into a given number of spaces - this is fine as well. Whichever convention you choose, use it consistently. Python does not use curly brackets, semi-colons etc like C, Java, JavaScript et al., so proper indentation is extremely important and can cause hard to detect bugs if not implemented correctly.

While we'll look at the concept of a Python "function" later, `print` is a basic function that we'll use right away. NOTE: If you don't want the cursor to move to a new line after print, supply the parameter `end=""`


```python
# This is a comment -- anything following a # sign isn't executed
print("Hello, world!")
print(42, end="")
print(" is the meaning of life, the universe and everything.")
```

<a id="components"></a>
## Language components

### Variables
Since python is dynamically typed, variable type is often inferred. Most often, variables are assigned using the `=` operator. e.g. `a = 2`

### Operators
Most of the common operators function as you would expect. Below are some of the odd ones you might need to pay more attention to:

    * == is the comparison operator. = is for assigning values to a variable
    * != is the "not equal to" operator
    * %, the modulo operator, returns the remainder of a division. (25 % 3 returns 1)
    * // returns the result of the division without the remainder. (25 // 3 returns 8)
    * x ** y raises x to the power of y.

Make sure to look through the [Python documentation](https://docs.python.org/2/reference/expressions.html#operator-precedence) and familiarize yourself with operator precedence - the order in which the Python interpreter will execute them. For example multiplication and division take precedence over addition and subtraction. Use brackets to avoid confusion in long expressions.

### Expressions

A Python expression is anything that resolves to a value (numeric, boolean, string etc.) 

### Statements

A Python statement is anything that does something with one or more expressions.

<a id="numdatatypes"></a>
## Numeric Data-Types

Although, we are mainly interested in working with strings, we need to familiarize ourselves with some numeric Python data-types.

* Numeric types - Python will mostly take care of conversion between these numeric data types internally.
    * Boolean - True or False (evaluates to 1 and 0)
    * Integers - 2 bytes
    * Long integers - 4 bytes
    * Floating point numbers (numbers with decimal points) - usually takes 64 bits, or 8 bytes in memory.

<a id="castingnum"></a>
## Casting Numeric Data Types

Casting involves changing one data-type into another. In general, for numeric operations involving multiple numeric types, Python will cast up. In other words, it will return results in the broader type. So boolean values (which can be written as `True` or `False`) will be cast into integers, which in turn will be cast into floating point numbers when necessary.

Make sure you understand how the following operations work and experiment with similar examples of your own:


```python
# The first two produce boolean outputs. The third casts them into integers before adding.
print(True)
print(False)
print(True + False)

# The first produces an 'int', the second a 'float'
print(True + 20)
print(False + 20.0)

print(25 + 3)
print(25.0 + 3) 
print(24 / 3)    # Notice that this casts the result UP to a float
print(24 / 3.0)
print(25.0 / 3)
```

    True
    False
    1
    21
    20.0
    28
    28.0
    8.0
    8.0
    8.333333333333334


Casting can also be done explicitly if you want to switch between data-types. Compare the outputs of the following operations to the ones above:


```python
print(int(True))
print(float(False))
print(True + float(False))

print(True + float(20))
print(False + int(20.0))

print(int(bool(25)))
print(bool(0.0001))
print(bool(0))

print(25 + float(3))
print(25 + bool(3))
print(25 / float(3))
print(float(100/3))
print(bool(100-100.001))
print(bool(100-100.00))
```

    1
    0.0
    1.0
    21.0
    20
    1
    True
    False
    28.0
    26
    8.333333333333334
    33.333333333333336
    True
    False


<a id="conditionals"></a>
## Conditionals
### Conditionals: if
If-then-else statements are the basic way to control the logical flow of a program. The basic syntax is as follows:

		if [condition]:
			# execute this code block if 
			# condition evaluates to True
		elif [another condition]:
			# execute this code block if the 
			# first condition is False and 
			# the second condition is True
		elif [yet another condition]:
			# execute this code block if the
			# previous conditions are False
			# and this condition is True
		else:
			# if none of the above
			# conditions are True

* Only the first `if` is necessary. All the other tests are optional.
* You can have as many `elif` (for else-if) tests as you want (or none, of course).
* Only one `else` block as the default if none of the conditions are met (but you can leave out the `else` block entirely as well if you want to take no default action.)
* As soon as _one_ condition is met, no further conditions are tested. So, only the code-block of the first true condition gets executed.


```python
a = 40
if a==42:
    print("A is 42")
    
if a > 42:
    print("A is greater than 42")
else:
    print("A is not greater than 42")
    
if a > 42:
    print("A is greater than 42")
elif a < 42:
    print("A is lesser than 42")
else:
    print("A is equal to 42")
```

    A is not greater than 42
    A is lesser than 42


<a id="loops"></a>
## Loops:
### Loops: `for`

The basic form of the `for` loop is:

		for [variable] in [list]:
			# execute this code block

* Each element in the `[list]` is assigned to the `[variable]` in turn and supplied to the code block. 
* The list can be any list of objects, but if you simply want a list of numbers, you can generate one on the fly with the `range` function.
	* `range` can be called with 1, 2, or 3 values (called _arguments_). A few examples will make their uses clear:
		* `range(5)` returns `[0, 1, 2, 3, 4]`
		* `range(5, 8)` returns `[5, 6, 7]`
		* `range(5, 20, 3)` returns `[5, 8, 11, 14, 17]` 

Note that you don't necessarily have to use the `[variable]` in the code block, but it is available and reset at every iteration of the loop.


```python
for a in [0,1,2,3,4]:
    print(a, end=' ')

print()
for a in range(100, 1001, 50):
    print(a, end=' ')

range(20)
```

    0 1 2 3 4 
    100 150 200 250 300 350 400 450 500 550 600 650 700 750 800 850 900 950 1000 




    range(0, 20)



### Loops: `while` 

The basic format of the while loop is:

		while [condition]:
			# execute code block

As long as the `condition` evaluates to `True`, the code block will keep getting executed. Note that you are responsible for making sure that some value in the condition is updated in the code block so that it eventually evaluates to `False` and exits. Otherwise you will enter and "infinite loop" - a computational black hole so strong that it sucks in every variable in sight.


```python
q=0
while q!=10:
    print(q, end=' ')
    q+=1
```

### Interrupting Loops: `break` and `continue`

It is good programming practice to design loops such that they end only when the main condition is met. i.e. when the `for` statement has parsed through every element in the `[list]` or when the `while` condition finally evaluates to `False`. However, there might be cases where it is necessary to interrupt the loop from within its code block.

* The `break` statement exits the loop and jumps to whatever is outside the loop's code block.
* The `continue` statement only exits the _current_ iteration of the loop. It will continue with the next value in the list is a `for` loop or go back to evaluating the `[condition]` in a `while` loop.

In case you enter an infinite loop, you can save the universe by typing ^C (Control-C) to forcefully exit the program. 


```python
for a in range(10):
    if a == 5:
        break
    else:
        print(a, end=' ')
        
print()
for a in range(10):
    if a == 5:
        continue
    print(a, end=' ')
```

    0 1 2 3 4 
    0 1 2 3 4 6 7 8 9 

<a id="list"></a>
## List

Lists consist of _ordered_ objects. Note that the different elements of a list do not need to be of the same dtatatype, in fact they can be other lists as well.

* Lists can be _indexed_ (numbering begins from `0`): `list[index]`
    * Note that negative values denote counting from the end of a list.
* Lists can be _sliced_: `list[start:end:stride]`
* The following functions can be used on lists:
	* `len()`
	* `min()`
	* `max()`
* the `del` operator can be used on lists: 
	* e.g. `del list[index]` or even `del list[slice]`


```python
l = list(range(10))
print(l)
print(l[0])
print(l[-1])
print(l[4:7])
print(l[0:8:2])
print(l[2:-2])
del l[2]
print(l)

l = [42, 3.14, "Hello", [1, 2, 2.5]]
print(l[1])
print(l[3])
print(l[3][2])
```

    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    0
    9
    [4, 5, 6]
    [0, 2, 4, 6]
    [2, 3, 4, 5, 6, 7]
    [0, 1, 3, 4, 5, 6, 7, 8, 9]
    3.14
    [1, 2, 2.5]
    2.5


Note that like all python datatypes, lists are also objects. So, every list object has several built in _"attributes"_ that can be invoked by the `.` operator.
	
* l.append(): Adds an element
* l.extend(): Adds a list
* l.index(x, [start, stop]): returns the index of the first occurence of x in the list or in the oprional range.
* l.insert(i, x) : inserts element x at position i
* l.pop([i]): returns the i-th element and removes it from the list. Removed last element by default.
* l.remove(x): Searches for x and removes it from the list
* l.reverse(): Reverses items in list
* l.sort(): sorts list

<a id="tuple"></a>
## Tuple

Tuples are also ordered objects that are very similar to lists but with the important difference that they _cannot be modified_.


```python
l = [1,2,3]
t = (1,2,3.12)
l[1] = 10
print(l)
print(t)
t[1] = 10  # Throws an error
```

    [1, 10, 3]
    (1, 2, 3.12)



    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    <ipython-input-1-120f9bad8820> in <module>
          4 print(l)
          5 print(t)
    ----> 6 t[1] = 10  # Throws an error
    

    TypeError: 'tuple' object does not support item assignment


As we might expect, the list attribute functions that modify the list don't exist for tuples. Tuples can be modified by overwriting the original, but can't be modified in place.

__Note__: A tuple with a single element can be indicated with a comma within the round brackets as below.


```python
t = t + (43, )
print(t)
t.append(43)   # Doesn't work
```

    (1, 2, 3.12, 43)



    ---------------------------------------------------------------------------

    AttributeError                            Traceback (most recent call last)

    <ipython-input-2-c6597680d388> in <module>
          1 t = t + (43, )
          2 print(t)
    ----> 3 t.append(43)   # Doesn't work
    

    AttributeError: 'tuple' object has no attribute 'append'


Use tuples for immutable data and lists for mutable data. Another key difference is that lists, being mutable, cannot be used as dictionary (see below) keys, while tuples can.


```python
a = [3,4,1,5]
a.sort() # Note sort modifies in place - doesn't return a value
print(a)

b = (3,4,1,5)
#b.sort()
sorted(b) # Returns a list
```

    [1, 3, 4, 5]





    [1, 3, 4, 5]



<a id="string"></a>
## String

Strings are sequences of characters that behave like tuples. _Indexing_ and _slicing_ work on strings. Strings are _immutable_ in Python - i.e. they can't be changed without creating a new string object. Strings, like tuples, can be joined with the `+` operator.


```python
s = "Hello, World!"
print(s[-1])
print(s[:4])
print(s[:5] + "world")
print(s[::-1])
s[1] = "Q" # Throws error
```

    !
    Hell
    Helloworld
    !dlroW ,olleH



    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    <ipython-input-8-dd942e82703b> in <module>
          4 print(s[:5] + "world")
          5 print(s[::-1])
    ----> 6 s[1] = "Q" # Throws error
    

    TypeError: 'str' object does not support item assignment



```python
s = "Hello World!"
print(s[1])  # prints 'e'

# List indexing and slicing work on strings.
print(s[:4]) # prints 'Hell'
    
# Strings can be joined with the + operator.
print("Hello" + "World")
```

    e
    Hell
    HelloWorld


We have seen that strings are sequences of characters that behave like tuples. i.e. they cannot be modified, and they can be indexed and sliced just like tuples. As we saw in the case of the list class, strings have several built in functions. Below are a few examples. A more detailed list of these functions can be [found in the Python documentation](https://docs.python.org/2/library/stdtypes.html#string-methods) and you should familiarize yourself with them.


```python
s = "Shall I compare thee to a summer's day?"
print(s.split())
print(s.split("e"))
print(s.upper())
print(s.lower())

# A literal string works just like any other string object. Instead of writing 
s = "   Hello?   "
print(s.strip())
# ... you can also write.
print("  Hello?   ".strip())
```

    ['Shall', 'I', 'compare', 'thee', 'to', 'a', "summer's", 'day?']
    ['Shall I compar', ' th', '', ' to a summ', "r's day?"]
    SHALL I COMPARE THEE TO A SUMMER'S DAY?
    shall i compare thee to a summer's day?
    Hello?
    Hello?


### Formatting strings

Python has a wide array of string formatting functions. Here we will look briefly at the `format()` method of the string class. More information can be found [here](https://pyformat.info/)

We can format numbers and spacing - d denotes int, f float, s strings. Formatting and alignment is denoted with the {:<} syntax. See examples below.


```python
# Insert variables into a string
print('This is a {} formatting {}'.format('string', 'example'))
# Insert numbers
print('Hello {},{},{}'.format(1,2,3.0))
# Alignment and padding of numbers
print('{:>08d}--{:>4.2f}--{:> 2.2f}'.format(123, 3.14, 3.14))
# Alignment and padding with strings
print('{:^20s}{:.>20s}'.format('Hello', 'World'))

```

    This is a string formatting example
    Hello 1,2,3.0
    00000123--3.14-- 3.14
           Hello        ...............World


<a id="list_comprehension"></a>
## List Comprehension

List comprehensions are a way of transforming one list into another, possibly with some condition based selection. They can replace loops that go over a list, perform some transformation on each element and append the results to a new list.


```python
# Using a for loop to compute squares of all numbers in a list
l = list(range(10))
s = []
for n in l:
    s.append(n**2)
print(s)
```

    [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]



```python
# The above can be written with a list comprehension
l = list(range(10))
s = [n**2 for n in l]
print(s)
```

    [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]



```python
# We may also apply a condition - to get squares of just the even numbers
l = list(range(10))
s = [n**2 for n in l if n%2==0]
print(s)
```

    [0, 4, 16, 36, 64]


## Dictionaries

Dictionaries are _mapping_ or _hash_ types. They are _indexed_ but _unordered_ collections of objects.

* Dictionaries are created in the form `d = {'key1': value1, 'key2': value2}` etc.
* You can access or assign elements by indexing with the key: 
	* e.g. `d['key1']` will return `value1`
* Keys can be deleted with `del` (same as in lists above)
* The `d.has_key(key)` attribute tests if a key is a member of the dictionary.
* The `d.keys()` attribute returns all the keys in the dictionary as a list.
* len() will give the number of keys in a dictionary

Lists and dictionaries are two of the most important and frequently encountered data-types, especially in text-processing. Please make sure that you are comfortable with both of them - adding or changing elements, extracting values, sorting etc. Also, the distinction between lists and dictionaries is important - "ordered" vs. "unordered" - this implies very different ways of retrieving elements - you must have a key (not an index) to refer to elements in a dictionary.

Finally, _both_ lists and dictionaries can contain __any combination of data-types and objects, including other lists and dictionaries__. 




```python
d = {'q': 1, 'w':3.14, 4:"Hello", (1,2):[1,2,3]}
print(d['q'])
print(d[(1,2)])
print(d[(1,2)][2])
```

    1
    [1, 2, 3]
    3


Note the following ways of iterating over elements in a dictionary. The order of the items is not guaranteed and should not be assumed to be repeatable.


```python
d = {'q':1, 'w':2, 'e':3}
for k in d:
    print(k, d[k])
    
for k, v in d.items():
    print(k, v)
```

    q 1
    w 2
    e 3
    q 1
    w 2
    e 3


##### On dictionary order in Python

Having stated before that Dictionaries are _unordered_ in Python, it is time to contradict myself. But we need to go into a bit of detail. Dictionaries are _insertion ordered_ starting in Python 3.7 (3.6 for the CPython implementation). This means that elements will be stored in the order that they are created -- allowing us to sort dictionaries using dictionary comprehensions(see below). However, the `OrderedDict` class remains the preferred way if true ordering of elements is required. We will look at that class later along with `DefaultDict`

#### Sorting dictionaries by key or value




```python
# We can sort by keys using a dictionary comprehension 
## -- this works because dictionaries in Python 3.7+ retain insertion order.
d = {'q':2, 'w': 1, 'e': 3}
print(sorted(d))
print({k:d[k] for k in sorted(d)})
list(d.keys())
```

    ['e', 'q', 'w']
    {'e': 3, 'q': 2, 'w': 1}





    ['q', 'w', 'e']




```python
# sort dictionary by value
print(d.__getitem__('e'))
print(d['e'])
print(sorted(d, key=d.__getitem__))
print({k:d[k] for k in sorted(d, key=d.__getitem__)})
```

    3
    3
    ['w', 'q', 'e']
    {'w': 1, 'q': 2, 'e': 3}



```python
print(d)
print(d.items())
print(sorted(d.items(), key=lambda x: x[0]))
print(sorted(d.items(), key=lambda x: x[1]))
#print({k:v for k, v in sorted(d.items(), key=lambda x: x[0])})
#print({k:v for k, v in sorted(d.items(), key=lambda x: x[1])})
```

    {'q': 2, 'w': 1, 'e': 3}
    dict_items([('q', 2), ('w', 1), ('e', 3)])
    [('e', 3), ('q', 2), ('w', 1)]
    [('w', 1), ('q', 2), ('e', 3)]


<a id="functions"></a>
## Functions

Functions help us break down programs into more modular and manageable units. They take a set of predefined arguments. 


```python
def add(a, b):
    """
    Parameters:
        a: Numerical. This is the gravity constant.
        b: Numerical. 
    Returns:
        Numerical. The sum of a and b
    
    Takes two arguments and prints the first and returns their sum.
    """
    print(a)
    return a+b

q = 40
w = 50
print(add(w, q))
```

    (50, 40)


You can define the default value of certain arguments. If a default value exists and the argument can be ommitted:


```python
def divide(a, b = 2):
    return a / b

print(divide(20))    # Prints 10, as default value of b is used
print(divide(20, 4)) # Prints 5
```

    10.0
    5.0


##### Passing by value or reference

Primitive datatypes are passed to functions by value, while sequence or mapping datatypes are passed by reference. i.e. If a numeric variable is passed as an argument to a function and is modified within it, the variable's value outside the function is not modified. However, for a list the value outside the function is modified as well. 

__Note:__ This is generally bad programming practice and you should avoid changing lists inside functions unless you have a very good reason to do it.


```python
a = 10

def test(x):
    x = 100
    return x

print(a)
print(test(a))
print(a)
```

    10
    100
    10



```python
l = [1,2,3]

def hocuspocus(x):
    #x[1] = 100
    print(x)
    x = 100
    return x

print(l)
print(hocuspocus(l))
print(l)
```

    [1, 2, 3]
    [1, 2, 3]
    100
    [1, 2, 3]



```python
a = 40
def test(a):
    print("Inside test: " + str(a))         # This will print 20, not 40.
    return a

print(test(20))
print(a)
```

    Inside test: 20
    20
    40


To exit a function without returning a value simply use the return keyword by itself.

Multiple values can be returned in a tuple. You can say, for example `return a, b` and receive the values in two variables.


```python
def test(x):
    return [x+2, x+4]

print(test(2))
x, y = test(10)
print(x, y)
```

    [4, 6]
    12 14


<a id="files"></a>
## Files

A file object can be created using the `open()` statement.

Files can be read one all together with `read()` or one line at a time with `readlines()`


```python
p = "/Users/anupam/Desktop/Corpora/author_collections/shakespeare/plaintext/1_king_henry_iv.txt"
f = open(p, 'r')
#print(f.read()[:100])

print(f.readlines()[:5])

```

    ['\t\n', ' \tSo shaken as we are, so wan with care,\n', '\n', '\tFind we a time for frighted peace to pant,\n', '\n']


<a id="modules"></a>
## Importing Modules and Packages

Large programs are often subdivided into _packages_ that are made up of individual _modules_. Modules and packages also contain Python's built in libraries and let us use the immense power of these ready-made functions. 

* Syntax examples: 

		import module
		from module import definition
		from module import * 

* Packages are collections of modules. Syntax:
        
        # loads the fill submodule
		import Graphics.Primitive.fill 
        # This is a better way to do it. 
        # You can refer to the fill submodule without the prefix
		from Graphics.Primitive.fill import floodfill
		
* In the Python documentation: explore the [string module](http://docs.python.org/library/string.html), its built in packages and functions.
	* Modules often have a lot of technical functions that can be confusing, but getting used to reading documentation to find the functions we need is a key part of using Python's built in libraries effectively.

`glob` is a library that we'll use to read multiple files from a directory using wildcards. Note that the library has a function also named `glob()` that expands wildcard directory listings into a list of strings.


```python
import glob

path = '/Users/anupam/Desktop/Corpora/author_collections/shakespeare/plaintext/*.txt'
filenames = glob.glob(path)
print(filenames)
```

### Basic Plotting in Python

We're going to use the [Matplotlib](https://matplotlib.org/) library for plotting in Python. Other options you might want to look into are Seaborn and Altair.


```python
import matplotlib.pyplot as plt

plt.figure(figsize=(8,5))

plt.plot([1,2,4,2])
plt.show()
```


    
![lineplot](/assets/2022-01-12-python-basics/output_70_0.png){:style="display:block; margin-left:auto; margin-right:auto"}
    



```python
x=[1,2,3]
y=[2,3,1]
labels = ['a','b','c']
plt.scatter(x, y)
for i, l in enumerate(labels):
    plt.text(x[i], y[i], l)
```


    
![scatterplot](/assets/2022-01-12-python-basics/output_71_0.png){:style="display:block; margin-left:auto; margin-right:auto"}
    


### Regular Expressions: https://docs.python.org/3/howto/regex.html


```python
import re

pattern = "[a-z.*]"
string = "hello world"

print(re.search(pattern, string))
print(re.match(pattern, string))
print(re.search("l.", string))
print(re.findall("l.", string))
```

    <re.Match object; span=(0, 1), match='h'>
    <re.Match object; span=(0, 1), match='h'>
    <re.Match object; span=(2, 4), match='ll'>
    ['ll', 'ld']



