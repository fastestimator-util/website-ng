## argmax<span class="tag">function</span><a class="sourcelink" href=https://github.com/fastestimator/fastestimator/blob/r1.0/fastestimator/backend/argmax.py/#L24-L65>View source on Github</a>
```python
argmax(
	tensor: ~Tensor,
	axis: int=0
)
-> ~Tensor
```
Compute the index of the maximum value along a given axis of a tensor.

This method can be used with Numpy data:
```python
n = np.array([[2,7,5],[9,1,3],[4,8,2]])
b = fe.backend.argmax(n, axis=0)  # [1, 2, 0]
b = fe.backend.argmax(n, axis=1)  # [1, 0, 1]
```

This method can be used with TensorFlow tensors:
```python
t = tf.constant([[2,7,5],[9,1,3],[4,8,2]])
b = fe.backend.argmax(t, axis=0)  # [1, 2, 0]
b = fe.backend.argmax(t, axis=1)  # [1, 0, 1]
```

This method can be used with PyTorch tensors:
```python
p = torch.tensor([[2,7,5],[9,1,3],[4,8,2]])
b = fe.backend.argmax(p, axis=0)  # [1, 2, 0]
b = fe.backend.argmax(p, axis=1)  # [1, 0, 1]
```


<h3>Args:</h3>


* **tensor**: The input value.

* **axis**: Which axis to compute the index along. 

<h3>Raises:</h3>


* **ValueError**: If `tensor` is an unacceptable data type.

<h3>Returns:</h3>

<ul class="return-block"><li>    The indices corresponding to the maximum values within <code>tensor</code> along <code>axis</code>.

</li></ul>

