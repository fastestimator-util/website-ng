## Data<span class="tag">class</span><a class="sourcelink" href=https://github.com/fastestimator/fastestimator/blob/r1.1/fastestimator/util/data.py/#L18-L71>View source on Github</a>
```python
Data(
	batch_data: Union[MutableMapping[str, Any], NoneType]=None
)
-> None
```
A class which contains prediction and batch data.

This class is intentionally not @traceable.

Data objects can be interacted with as if they are regular dictionaries. They are however, actually a combination of
two dictionaries, a dictionary for trace communication and a dictionary of prediction+batch data. In general, data
written into the trace dictionary will be logged by the system, whereas data in the pred+batch dictionary will not.
We therefore provide helper methods to write entries into `Data` which are intended or not intended for logging.

```python
d = fe.util.Data({"a":0, "b":1, "c":2})
a = d["a"]  # 0
d.write_with_log("d", 3)
d.write_without_log("e", 5)
d.write_with_log("a", 4)
a = d["a"]  # 4
r = d.read_logs(extra_keys={"c"})  # {"c":2, "d":3, "a":4}
```


<h3>Args:</h3>


* **batch_data**: The batch data dictionary. In practice this is itself often a ChainMap containing separate prediction and batch dictionaries.

---

### read_logs<span class="tag">method of Data</span><a class="sourcelink" href=https://github.com/fastestimator/fastestimator/blob/r1.1/fastestimator/util/data.py/#L65-L71>View source on Github</a>
```python
read_logs(
	self
)
-> Dict[str, Any]
```
Read all values from the `Data` dictionary which were intended to be logged.


<h4>Returns:</h4>

<ul class="return-block"><li>    A dictionary of all of the keys and values to be logged.</li></ul>

---

### write_with_log<span class="tag">method of Data</span><a class="sourcelink" href=https://github.com/fastestimator/fastestimator/blob/r1.1/fastestimator/util/data.py/#L47-L54>View source on Github</a>
```python
write_with_log(
	self,
	key: str,
	value: Any
)
-> None
```
Write a given `value` into the `Data` dictionary with the intent that it be logged.


<h4>Args:</h4>


* **key**: The key to associate with the new entry.

* **value**: The new entry to be written.

---

### write_without_log<span class="tag">method of Data</span><a class="sourcelink" href=https://github.com/fastestimator/fastestimator/blob/r1.1/fastestimator/util/data.py/#L56-L63>View source on Github</a>
```python
write_without_log(
	self,
	key: str,
	value: Any
)
-> None
```
Write a given `value` into the `Data` dictionary with the intent that it not be logged.


<h4>Args:</h4>


* **key**: The ey to associate with the new entry.

* **value**: The new entry to be written.

