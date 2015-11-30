# neat-simple-grid

* v0.2.0

this is a simple grid which is wrapper of [Neat](http://neat.bourbon.io/).  
you need [Bourbon](http://bourbon.io/) also.

Bourbon and Neat is known as a lightweight sass.



## install

```bash
bower install neat-simple-grid --save
```



## usage

* see [demo page](http://github.masa69.net/neat-simple-grid/).
* @import the following files in your main sass file.
	* bourbon
	* neat
	* _neat-simple-grid-setting.scss
	* _neat-simple-grid.scss



### Basic Grid

* Basic Grid has 12 columns.

```html
<div class="row">
	<div class="twelve columns">
		<p>12 columns</p>
	</div>
</div>
<div class="row">
	<div class="ten columns">
		<p>10 columns</p>
	</div>
	<div class="two columns">
		<p>2</p>
	</div>
</div>
<div class="row">
	<div class="eight columns">
		<p>8 columns</p>
	</div>
	<div class="four columns">
		<p>4 columns</p>
	</div>
</div>
<div class="row">
	<div class="six columns">
		<p>6 columns</p>
	</div>
	<div class="six columns">
		<p>6 columns</p>
	</div>
</div>
```



### Mobile Grid

* Mobile Grid has 4 columns.
* use ***sm-xxx (one - three)***

```html
<div class="row">
	<div class="sm-three twelve columns">
		<p>12 columns</p>
	</div>
</div>
<div class="row">
	<div class="sm-one eleven columns">
		<p>11 columns</p>
	</div>
	<div class="sm-three one columns">
		<p>1</p>
	</div>
</div>
<div class="row">
	<div class="sm-two ten columns">
		<p>10 columns</p>
	</div>
	<div class="sm-two two columns">
		<p>2</p>
	</div>
</div>
<div class="row">
	<div class="sm-three nine columns">
		<p>9 columns</p>
	</div>
	<div class="sm-one three columns">
		<p>3 columns</p>
	</div>
</div>
```



### Centered Columns

* use ***centered***

```html
<div class="row">
	<div class="centered ten columns">
		<p>10 columns</p>
	</div>
</div>
<div class="row">
	<div class="centered six columns">
		<p>6 columns</p>
	</div>
</div>
<div class="row">
	<div class="centered two columns">
		<p>2</p>
	</div>
</div>
```



### Basic List

* use just ***one, two, three, four, six***

```html
// use <ul> or <ol> and <li>

<ul class="one list">
	<li>1 list</li>
	<li>1 list</li>
	<li>1 list</li>
</ul>
<ul class="two list">
	<li>2 list</li>
	<li>2 list</li>
	<li>2 list</li>
	<li>2 list</li>
	<li>2 list</li>
	<li>2 list</li>
</ul>
<ul class="three list">
	<li>3 list</li>
	<li>3 list</li>
	<li>3 list</li>
	<li>3 list</li>
	<li>3 list</li>
	<li>3 list</li>
</ul>
<ul class="four list">
	<li>4 list</li>
	<li>4 list</li>
	<li>4 list</li>
	<li>4 list</li>
	<li>4 list</li>
	<li>4 list</li>
</ul>
<ul class="six list">
	<li>6 list</li>
	<li>6 list</li>
	<li>6 list</li>
	<li>6 list</li>
	<li>6 list</li>
	<li>6 list</li>
	<li>6 list</li>
	<li>6 list</li>
	<li>6 list</li>
	<li>6 list</li>
	<li>6 list</li>
	<li>6 list</li>
</ul>
```



### Mobile List

* use just ***sm-xxx (two or four)***

```html
// use <ul> or <ol> and <li>

<ul class="sm-four two list">
	<li>2 list</li>
	<li>2 list</li>
	<li>2 list</li>
	<li>2 list</li>
	<li>2 list</li>
	<li>2 list</li>
	<li>2 list</li>
	<li>2 list</li>
	<li>2 list</li>
	<li>2 list</li>
	<li>2 list</li>
	<li>2 list</li>
</ul>
<ul class="sm-two six list">
	<li>6 list</li>
	<li>6 list</li>
	<li>6 list</li>
	<li>6 list</li>
	<li>6 list</li>
	<li>6 list</li>
	<li>6 list</li>
	<li>6 list</li>
	<li>6 list</li>
	<li>6 list</li>
	<li>6 list</li>
	<li>6 list</li>
</ul>
```
