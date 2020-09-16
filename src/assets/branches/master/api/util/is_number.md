

### is_number
```python
is_number(arg:str) -> bool
```
Check if a given string can be converted into a number.

```python
x = fe.util.is_number("13.7")  # True
x = fe.util.is_number("ae13.7")  # False
```


#### Args:

* **arg** :  A potentially numeric input string.

#### Returns:
    True iff `arg` represents a number.