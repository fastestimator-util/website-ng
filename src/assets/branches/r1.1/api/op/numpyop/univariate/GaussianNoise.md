## GaussianNoise<span class="tag">class</span><a class="sourcelink" href=https://github.com/fastestimator/fastestimator/blob/r1.1/fastestimator/op/numpyop/univariate/gaussian_noise.py/#L24-L51>View source on Github</a>
```python
GaussianNoise(
	inputs: Union[str, Iterable[str]],
	outputs: Union[str, Iterable[str]],
	mode: Union[NoneType, str, Iterable[str]]=None,
	var_limit: Union[float, Tuple[float, float]]=(10.0, 50.0),
	mean: float=0.0
)
```
Apply gaussian noise to the image.

WARNING: This assumes that floating point images are in the range [0,1] and will trim the output to that range. If
your image is in a range like [-0.5, 0.5] then you do not want to use this Op.


<h3>Args:</h3>


* **inputs**: Key(s) of images to be modified.

* **outputs**: Key(s) into which to write the modified images.

* **mode**: What mode(s) to execute this Op in. For example, "train", "eval", "test", or "infer". To execute regardless of mode, pass None. To execute in all modes except for a particular one, you can pass an argument like "!infer" or "!train".

* **var_limit**: Variance range for noise. If var_limit is a single float, the range will be (0, var_limit).

* **mean**: Mean of the noise. Image types: uint8, float32

