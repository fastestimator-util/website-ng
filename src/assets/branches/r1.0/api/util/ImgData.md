## ImgData<span class="tag">class</span><a class="sourcelink" href=https://github.com/fastestimator/fastestimator/blob/r1.0/fastestimator/util/img_data.py/#L30-L335>View source on Github</a>
```python
ImgData(
	colormap: str='Greys', **kwargs: Union[~Tensor, List[~Tensor]]
)
-> None
```
A container for image related data.

This class is useful for automatically laying out collections of images for comparison and visualization.

```python
d = fe.util.ImgData(y=tf.ones((4,)), x=0.5*tf.ones((4, 32, 32, 3)))
fig = d.paint_figure()
plt.show()

img = 0.5*np.ones((4, 32, 32, 3))
mask = np.zeros_like(img)
mask[0, 10:20, 10:30, :] = [1, 0, 0]
mask[1, 5:15, 5:20, :] = [0, 1, 0]
bbox = np.array([[[3,7,10,6,'box1'], [20,20,8,8,'box2']]]*4)
d = fe.util.ImgData(y=tf.ones((4,)), x=[img, mask, bbox])
fig = d.paint_figure()
plt.show()
```


<h3>Args:</h3>


* **colormap**: What colormap to use when rendering greyscale images. A good colorization option is 'inferno'.

* ****kwargs**: image_title / image pairs for visualization. Images with the same batch dimensions will be laid out side-by-side, with earlier kwargs entries displayed further to the left. The value part of the key/value pair can be a list of tensors, in which case the elements of the list are overlaid. This can be useful for displaying masks and bounding boxes on top of images. In such cases, the largest image should be put as the first entry in the list. Bounding boxes should be shaped like (batch, n_boxes, box), where each box is formatted like (x0, y0, width, height[, label]). 

<h3>Raises:</h3>


* **AssertionError**: If a list of Tensors is provided as an input, but that list has an inconsistent batch dimension.

---

### paint_figure<span class="tag">method of ImgData</span><a class="sourcelink" href=https://github.com/fastestimator/fastestimator/blob/r1.0/fastestimator/util/img_data.py/#L239-L297>View source on Github</a>
```python
paint_figure(
	self,
	height_gap: int=100,
	min_height: int=200,
	width_gap: int=50,
	min_width: int=200,
	dpi: int=96,
	save_path: Union[str, NoneType]=None
)
-> matplotlib.figure.Figure
```
Visualize the current ImgData entries in a matplotlib figure.

```python
d = fe.util.ImgData(y=tf.ones((4,)), x=0.5*tf.ones((4, 32, 32, 3)))
fig = d.paint_figure()
plt.show()
```


<h4>Args:</h4>


* **height_gap**: How much space to put between each row.

* **min_height**: The minimum height of a row.

* **width_gap**: How much space to put between each column.

* **min_width**: The minimum width of a column.

* **dpi**: The resolution of the image to display.

* **save_path**: If provided, the figure will be saved to the given path. 

<h4>Returns:</h4>

<ul class="return-block"><li>    The handle to the generated matplotlib figure.</li></ul>

---

### paint_numpy<span class="tag">method of ImgData</span><a class="sourcelink" href=https://github.com/fastestimator/fastestimator/blob/r1.0/fastestimator/util/img_data.py/#L299-L335>View source on Github</a>
```python
paint_numpy(
	self,
	height_gap: int=100,
	min_height: int=200,
	width_gap: int=50,
	min_width: int=200,
	dpi: int=96
)
-> numpy.ndarray
```
Visualize the current ImgData entries into an image stored in a numpy array.

```python
d = fe.util.ImgData(y=tf.ones((4,)), x=0.5*tf.ones((4, 32, 32, 3)))
img = d.paint_numpy()
plt.imshow(img[0])
plt.show()
```


<h4>Args:</h4>


* **height_gap**: How much space to put between each row.

* **min_height**: The minimum height of a row.

* **width_gap**: How much space to put between each column.

* **min_width**: The minimum width of a column.

* **dpi**: The resolution of the image to display. 

<h4>Returns:</h4>

<ul class="return-block"><li>    A numpy array with dimensions (1, height, width, 3) containing an image representation of this ImgData.</li></ul>

