

### sign
```python
sign(tensor:~Tensor) -> ~Tensor
```
Compute the sign of a tensor.

This method can be used with Numpy data:
```python
n = np.array([-2, 7, -19])
b = fe.backend.sign(n)  # [-1, 1, -1]
```

This method can be used with TensorFlow tensors:
```python
t = tf.constant([-2, 7, -19])
b = fe.backend.sign(t)  # [-1, 1, -1]
```

This method can be used with PyTorch tensors:
```python
p = torch.tensor([-2, 7, -19])
b = fe.backend.sign(p)  # [-1, 1, -1]
```


#### Args:

* **tensor** :  The input value.

#### Returns:
    The sign of each value of the `tensor`.

#### Raises:

* **ValueError** :  If `tensor` is an unacceptable data type.