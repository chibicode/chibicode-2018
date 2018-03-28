---
title: '“Reverse linked list” coding puzzle for Python and JavaScript beginners'
date: "2018-03-27T01:00:00.000Z"
image: "./cover.jpg"
twitterId: "978627527382990848"
draft: false
---

Reversing a linked list is a popular coding interview question.

**Think different:** People have asked this question using pointers (for C programming languages) or classes (for Java and most object-oriented languages).

But for higher level languages like Python, JavaScript, and others, there's an easier way of asking this question, which makes it a great exercise for people who are learning to code.

<post-separator></post-separator>

**A linked list** is a linear data structure where each element is a separate object. Each element is comprising of two items - the data and a reference to the next element.

**Idea:** You can create linked lists using **dictionaries** (Python) or **objects** (JavaScript).

## Python Version

Here's the code to create two linked lists in Python using dictionaries:

```python
linked_list_1 = {"text": "A", "next": {"text": "B", "next": None}}

linked_list_2 = {
    "text": "A",
    "next": {
        "text": "B",
        "next": {
            "text": "C",
            "next": {
                "text": "D",
                "next": None
            }
        }
    }
}
```

**Diagrams:** You can visualize above two dictionaries like this:

```
linked_list_1: A -> B -> None
linked_list_2: A -> B -> C -> D -> None
```

**Question:** Write a function to reverse the order. Dictionaries would look like this after reversing:

```python
reversed_linked_list_1 = {"text": "B", "next": {"text": "A", "next": None}}

reversed_linked_list_2 = {
    "text": "D",
    "next": {
        "text": "C",
        "next": {
            "text": "B",
            "next": {
                "text": "A",
                "next": None
            }
        }
    }
}
```

**Diagrams:** After reversing...

```
linked_list_1: B -> A -> None
linked_list_2: D -> C -> B -> A
```

## Python Code

Implement `reverse_linked_list` below.

**Restrictions:**

* Do not create a new dictionary.
* Do not create a new list.
* Do not add additional keys.

```python
# Do not create a new dictionary
# Do not create a new list
# Do not add additional keys
def reverse_linked_list(linked_list):
    pass


if __name__ == "__main__":
    linked_list_1 = {"text": "A", "next": {"text": "B", "next": None}}

    linked_list_2 = {
        "text": "A",
        "next": {
            "text": "B",
            "next": {
                "text": "C",
                "next": {
                    "text": "D",
                    "next": None
                }
            }
        }
    }

    # {'text': 'B', 'next': {'text': 'A', 'next': None}}
    print(reverse_linked_list(linked_list_1))

    # {'text': 'D', 'next': {'text': 'C', 'next': {'text': 'B', 'next': {'text': 'A', 'next': None}}}}
    print(reverse_linked_list(linked_list_2))
```

`print` statements should output:

```python
{'text': 'B', 'next': {'text': 'A', 'next': None}}
{'text': 'D', 'next': {'text': 'C', 'next': {'text': 'B', 'next': {'text': 'A', 'next': None}}}}
```

## JavaScript Version

Here's the code to create two linked lists in JavaScript using objects:

```javascript
var linkedList1 = {
  text: 'A',
  next: { text: 'B', next: null },
}

var linkedList2 = {
  text: 'A',
  next: {
    text: 'B',
    next: {
      text: 'C',
      next: {
        text: 'D',
        next: null,
      },
    },
  },
}
```

**Diagrams:** You can visualize above two dictionaries like this:

```
linkedList1: A -> B -> None
linkedList2: A -> B -> C -> D -> None
```

**Question:** Write a function to reverse the order. Dictionaries would look like this after reversing:

```js
var reversedLinkedList1 = {
  text: 'B',
  next: { text: 'A', next: null },
}

var reversedLinkedList2 = {
  text: 'D',
  next: {
    text: 'C',
    next: {
      text: 'B',
      next: {
        text: 'A',
        next: null,
      },
    },
  },
}
```

**Diagrams:** After reversing...

```
reversedLinkedList1: B -> A -> None
reversedLinkedList2: D -> C -> B -> A
```

## JavaScript Code

Implement `reverseLinkedList` below.

**Restrictions:**

* Do not create a new object.
* Do not create a new array.
* Do not add additional keys.

```js
// Do not create a new object
// Do not create a new array
// Do not add additional keys
function reverseLinkedList(linkedList) {}

var linkedList1 = {
  text: 'A',
  next: { text: 'B', next: null },
}

var linkedList2 = {
  text: 'A',
  next: {
    text: 'B',
    next: {
      text: 'C',
      next: {
        text: 'D',
        next: null,
      },
    },
  },
}

// {"text":"B","next":{"text":"A","next":null}}
console.log(JSON.stringify(reverseLinkedList(linkedList1)))

// {"text":"D","next":{"text":"C","next":{"text":"B","next":{"text":"A","next":null}}}}
console.log(JSON.stringify(reverseLinkedList(linkedList2)))
```

`console.log` statements should output:

```js
{"text":"B","next":{"text":"A","next":null}}
{"text":"D","next":{"text":"C","next":{"text":"B","next":{"text":"A","next":null}}}}
```

## Solutions

[Available on GitHub](https://github.com/chibicode/chibicode-code-samples/tree/master/reverse-linked-list-python-js).
