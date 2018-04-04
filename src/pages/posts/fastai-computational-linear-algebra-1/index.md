---
title: "Takeaways from fast.ai Computational Linear Algebra course: Lecture 1"
date: "2018-04-04T01:00:00.000Z"
image: "./cover.jpg"
twitterId: "981518682835755011"
draft: false
---

I started watching [fast.ai's Computational Linear Algebra course](http://www.fast.ai/2017/07/17/num-lin-alg/). Here's some (very) quick takeaways from lecture 1.

<post-separator></post-separator>

<div><responsive-iframe width="560" height="315" src="https://www.youtube.com/embed/8iGzBMboA0I" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></responsive-iframe></div>

**Read this first:** [jupyter notebook for the lecture](https://github.com/fastai/numerical-linear-algebra/blob/master/nbs/1.%20Why%20are%20we%20here.ipynb)

The very first example on HIV/AIDS example is a bit hard to understand from the video. Recall that the first **column** of the matrix shows where the unit vector `(1, 0, ..., 0)` lands on the linear transformation.

Since `[1, 0, 0, 0]` lands at `[0.90, 0.07, 0.02, 0.01]` in 1 year, we need to use `A.T`.

**Convolutions:** A great [intro here](http://nbviewer.jupyter.org/github/fastai/numerical-linear-algebra/blob/master/nbs/convolution-intro.ipynb). Edge detection is done by element-wise multiplication of matrices like this:

```python
top=[[-1,-1,-1],
     [ 1, 1, 1],
     [ 0, 0, 0]]

from scipy.ndimage.filters import correlate
correlate(images[0], top)
```

**Cool link**: [Matrix factorization jungle](https://sites.google.com/site/igorcarron2/matrixfactorizations).

**`numpy` Tips**:

- Use `@` for matrix multiplication.
- Show less digits and avoid scientific notations on small numbers (`e+..`) using `set_printoptions`.

```python
np.set_printoptions(suppress=True, precision=4)
```
