---
title: 'Teach yapf and python-fire to Python beginners'
date: "2018-03-27T02:00:00.000Z"
image: "./cover.jpg"
twitterId: "978857238063443969"
draft: false
---

As of today, Google has released two popular Python tools:

* **[`yapf`](https://github.com/google/yapf)** (released [3 years ago](https://opensource.googleblog.com/2015/03/how-to-format-python-code-without.html))
* **[`python-fire`](https://github.com/google/python-fire)** (released [1 year ago](https://opensource.googleblog.com/2017/03/python-fire-command-line.html)).

I'm currently teaching Python to a beginner programmer, and I found that these tools work great for beginners. Here's why.

<post-separator></post-separator>

**First, some background:** Here's a quote from David Robinson, a Chief Data Scientist at DataCamp.

The title of the article is: **[Don't teach students the hard way first](http://varianceexplained.org/r/teach-hard-way/)**.

<div><twitter-embed id="910869810178936832"></twitter-embed></div>

> I talk to people about teaching a lot, and that phrase keeps popping up: “**I teach them X just to show them how much easier Y is**”. It’s a trap—a trap I’ve fallen into before when teaching, and one that I’d like to warn others against.

**Example** (in R programming):

> “I teach them `dplyr`’s `group_by`/`summarize` in the second lesson, but I teach them loops first just to show them how much easier `dplyr` is.”

**Why avoid this style of teaching?**:

> I worked in an object-oriented style in Python, then switched to thinking in data frames and functional operations. I wrote too many loops when I started R, then I grew accustomed to the apply family of functions.… But when I’m teaching someone how to use R… **they don’t care about any of that.**

**Why do teachers fall into this trap?**:

> … I think some teachers hope that by walking students through this “journey”, we can impart some of that experience. But it doesn’t work: feeding students two possible solutions in a row is nothing like the experience of them comparing solutions for themselves, and doesn’t grant them any of the same skills.
>
> … Students should absolutely learn multiple approaches (there’s usually advantages to each one). But **not in this order**, from hardest to easiest, and not because it happened to be the order we learned it ourselves.

**Your time is limited:**

> This comes down to what I sometimes call **educational bandwidth**: the total amount of information you can communicate to students is limited, especially since you need to spend time reinforcing and revisiting each concept.… This means you should make sure every idea you get across is valuable. If you teach them a method they’ll never have to use, you’re wasting time and energy.

**Summary:**

> In conclusion: **teaching programming is hard, don’t make it harder.** Next time you’re teaching…, try teaching them your preferred method first, instead of meandering through subpar solutions. I think you’ll find that it’s worth it.

I agree completely. Now, back to `yapf` and `python-fire`.

## 1. What is `yapf`, and why is it good for beginners?

`yapf` is one of the newest code formatters for Python, made by Google.

**[Why Google made `yapf`](https://github.com/google/yapf):**

> The ultimate goal is that the code YAPF produces is as good as the code that a programmer would write if they were following the style guide. It takes away some of the drudgery of maintaining your code.

**Why it's good for beginners:** Don't waste students' time by forcing them to format Python code by hand.

Most coding beginners seem to spend significant cognitive energy in formatting code, as opposed to thinking about logic. Let `yapf` do formatting for them.

**Disclaimer:** I _do_ think it's important to make beginners type lots of code, as Zed Shaw of "[Learn to Code the Hard Way](https://learncodethehardway.org/)" says [on this article](https://zedshaw.com/2017/04/24/copying-repetition/). But typing != formatting.

**See `yapf` in action:** [`yapf`](https://github.com/google/yapf) can take this ugly code (from the [official README](https://github.com/google/yapf)):

```python
x = {  'a':37,'b':42,

'c':927}

y = 'hello ''world'
z = 'hello '+'world'
a = 'hello {}'.format('world')
class foo  (     object  ):
  def f    (self   ):
    return       37*-+2
  def g(self, x,y=42):
      return y
def f  (   a ) :
  return      37+-+a[42-x :  y**3]
```

and reformat it into:

```python
x = {'a': 37, 'b': 42, 'c': 927}

y = 'hello ' 'world'
z = 'hello ' + 'world'
a = 'hello {}'.format('world')


class foo(object):
    def f(self):
        return 37 * -+2

    def g(self, x, y=42):
        return y


def f(a):
    return 37 + -+a[42 - x:y**3]
```

**Editor support:**

* [Atom](http://atom.io/) support using [atom-beautify](https://github.com/Glavin001/atom-beautify) or [ide-python](https://github.com/lgeiger/ide-python).
* [Visual Studio Code](https://github.com/Microsoft/vscode-python) support using [vscode-python](https://github.com/Microsoft/vscode-python).
* [Sublime Text](https://www.sublimetext.com/) support using [PyYapf](https://github.com/jason-kane/PyYapf)

## 2. What is `python-fire`, and why is it good for beginners?

`python-fire` is a library for automatically generating command line interfaces (CLIs) from any Python object.

**[Why Google made `python-fire`](https://opensource.googleblog.com/2017/03/python-fire-command-line.html):**

> At Google, engineers use Python Fire to generate command line tools from Python libraries.… In Google Brain, we use an experiment management tool built with Fire, allowing us to manage experiments equally well from Python or from Bash.

**Why it's good for beginners:** Don't waste students' time by forcing them to learn confusing `argv` API. `python-fire` is a lot more intuitive and powerful.

**Example:** Suppose you want to write a command line program to add two or three numbers:

```
python calculator.py add_two 10 20
python calculator.py add_three 10 20 30
```

The first line should print 30, and the second line should print 60.

### Without `python-fire`

```python
from sys import argv


def add_two(x, y):
    return x + y


def add_three(x, y, z):
    return x + y + z


if __name__ == "__main__":
    if argv[1] == "add_2":
        print(add_two(int(argv[2]), int(argv[3])))
    elif argv[1] == "add_3":
        print(add_three(int(argv[2]), int(argv[3]), int(argv[4])))
```

**Reflections:** Inside `__name__ == "__main__":` can get ugly. Beginners need to remember:

* `argv[1]` contains the first argument
* `argv[...]` returns strings, so they need to be converted to `int`

And if argument length can vary, the code will become more complicated.

### With `python-fire`

**Get Started:** First, install `python-fire` (notice the package name is `fire`). We should encourage beginners to install packages, because they'll be doing that often later.

```
pip install fire
```

Then, the code is easy:

```python
import fire


def add_two(x, y):
    return x + y


def add_three(x, y, z):
    return x + y + z


if __name__ == '__main__':
    fire.Fire()
```

**That's it!** You pretty much don't need to write anything under `__name__ == "__main__":`.

And that's the simplest possible case - for more complex cases, it'd be much easier to build on top of [`python-fire`](https://github.com/google/python-fire/). I think there's no reason to teach beginners the subpar `sys.argv` API at this point.

## Code sample

[Available on GitHub](https://github.com/chibicode/chibicode-code-samples/tree/master/yapf-python-fire).
