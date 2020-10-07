## clip_by_value<span class="tag">function</span><a class="sourcelink" href=https://github.com/fastestimator/fastestimator/blob/r1.0/fastestimator/backend/clip_by_value.py/#L24-L67>View source on Github</a>
```python
clip_by_value(
	tensor: ~Tensor,
	min_value: Union[int, float, ~Tensor],
	max_value: Union[int, float, ~Tensor]
)
-> ~Tensor
```
Clip a tensor such that `min_value` &lt;= tensor &lt;= `max_value`.

This method can be used with Numpy data:
```python
n = np.array([-5, 4, 2, 0, 9, -2])
b = fe.backend.clip_by_value(n, min_value=-2, max_value=3)  # [-2, 3, 2, 0, 3, -2]
```

This method can be used with TensorFlow tensors:
```python
t = tf.constant([-5, 4, 2, 0, 9, -2])
b = fe.backend.clip_by_value(t, min_value=-2, max_value=3)  # [-2, 3, 2, 0, 3, -2]
```

This method can be used with PyTorch tensors:
```python
p = torch.tensor([-5, 4, 2, 0, 9, -2])
b = fe.backend.clip_by_value(p, min_value=-2, max_value=3)  # [-2, 3, 2, 0, 3, -2]
```


<h3>Args:</h3>

* **tensor** :  The input value.
* **min_value** :  The minimum value to clip to.
* **max_value** :  The maximum value to clip to.

<h3>Returns:</h3>
    The `tensor`, with it's values clipped.

<h3>Raises:</h3>

* **ValueError** :  If `tensor` is an unacceptable data type.

