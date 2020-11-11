<template>
  <div class="h3-comp">
    <h3 class="h3-title">javascript闭包与作用域</h3>
    <p class="p1">
      闭包是js基础绕不过的一个坑，对于非计算机专业的初学者来说，也是前期的一个小难点。闭包的定义非常简单，能够访问其他作用域的变量的函数就能称之为闭包。但在理解闭包之前，我们应该先理清的是js这门语言中作用域的特点。
    </p>
    <p class="p2">
      作用域说白了就是一个能产生作用的“域”，只有在这个范围内，变量和函数才能被访问和使用。超出了这个范围，就无法访问了。当html中的js代码放到浏览器运行时，所有的js代码都被放到了一个叫window的全局作用域中。es5中我们定义的所有全局变量，其实都是给window添加属性，所以会出现以下的情况。
    </p>
    <img src="../../assets/diary01/ava01.png" alt="闭包一" />
    <h4>作用域的嵌套</h4>
    <p>
      作用域是可以嵌套的。由于js中没有块级作用域，我们常见的作用域嵌套都是函数作用域与函数作用域的嵌套。这里我们先来讲清一下函数定义和函数作用域产生的过程。
    </p>
    <p>首先，我们定义一个函数 hd</p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            var y = 2;
              function hd () {
                var x = 1;
                console.log(x); 
                console.log(y);
              }
            hd() // => 1,
            console.log(x); // => ReferenceErroe , x不存在
          </code>
        </pre>
      </div>
    </div>
    <p>
      我们在第二行将hd定义出来时，给window全局变量添加了一个名为hd的函数。此时它只是window的一个属性。但我们实际调用hd()时，window内部开辟了一块新的作用域，这块作用域内部有一个名为x的变量。用图片可以非常形象直观地将这种嵌套关系表现出来。
    </p>
    <img src="../../assets/diary01/ava02.png" alt="闭包二" />
    <p>
      从打印结果我们可以看到，hd()函数是可以访问到全局作用域中的y，但在hd()外全局作用域是访问不到hd()函数作用域中的x的。这是js作用域的特性之一，子作用域可以访问到父级作用域。在代码执行时，碰到相关的变量引用，
      函数会先在自己内部的函数作用域中寻找该变量，若变量存在则直接引用，若不存在，则访问上一级的父级作用域，若存在则引用，若不存在继续往上访问父级作用，若是最后在全局变量中依然找不到该变量，则会报错。
    </p>
    <p>以下代码中，hd函数会直接从函数作用域内部调用a，因此打印结果是5。</p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            var a = 10;
            function hd() {
              var a = 5;
              console.log(a);
            }
            hd(); // => 5 
          </code>
        </pre>
      </div>
    </div>
    <p>接下来，我们看一段非常经典的代码。</p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            var arr = [];

            for(var i = 0;i &#60; 3;i++){
              arr.push(function (){
              console.log(i);
              })
            }

            arr.forEach(fn => {
              fn();
            })

            // => 3，3，3 
          </code>
        </pre>
      </div>
    </div>
    <p>
      大部分学习闭包和js的人，都见过这段经典的代码。如果以前有过一些编程基础，看到这个还是有点懵的。因为在大部分语言里，我们看到大括号{
      }时，都下意识地把它理解成一个块级作用域。但在js中，es6出现之前是不存在块级作用域的。也就是说，var
      i = 0实际上把i定义到了全局变量window中去。
    </p>
    <img src="../../assets/diary01/ava03.png" alt="闭包三" />
    <p>
      从图中可以看出，我们每一次执行for循环，都是调用全局变量中的i，因此当我们调用函数时，也是直接从window中获取i。最后不管调用数组中的哪个函数，打印的都是window.i，也就是经过三次i++以后的3。
    </p>
    <h4>let与const的出现</h4>
    <p>
      es6中出现了let和const两个关键字，用于定义变量。let和var最大的不同在于使用let定义的变量存在块级作用域，不存在变量提升。我们看下面的代码
      ：
    </p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            if(true){
              var a = 1;
              let b = 2
            }

            console.log(a); // => 1
            console.log(b); // => 引用错误
          </code>
        </pre>
      </div>
    </div>
    <p>
      如上可见，我们使用var定义的变量a是全局变量，可以从外部访问，使用let定义的变量b则只能在块级作用域中访问。
      现在我们再次回到这段for循环看一下。
    </p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            let arr = [];
            for(let i = 0;i &#60; arr.length;i++){
                arr.push(function () {
                console.log(i)  
              })·
            }
            arr.forEach(fn => {
              fn(); // => 0,1,2
            })
          </code>
        </pre>
      </div>
    </div>
    <p>
      这段函数的执行结果不再是重复打印3，而是顺序打印0，1，2。在解释二者不同之前，我们先看一下这个for循环内部的结构是怎样的。
    </p>
    <img src="../../assets/diary01/ava04.png" alt="闭包四" />
    <p>
      从图中我们可以看到，使用let定义的i是存在于for体内的，每次执行for循环时，都在该块级作用域中新建一个变量i。当我们遍历调用arr中的函数时，fn()会从内部寻找i，由于内部没有i，再到上一级作用域中寻找，也就是for中的块级作用域寻找i，并将其打印出来。所以打印结果是0，1，2。
    </p>
    <h4>使用函数模拟块级作用域</h4>
    <p>
      在let出现之前，如果我们需要一个块级作用域，要如何实现呢。从上面我们可以得知，js虽然没有块级作用域，但有函数作用域。使用函数经过封装，便能巧妙地模拟出块级作用域的效果。
      请看下面的代码。
    </p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            var arr = [];
            for (var i = 0;i &#60; 3;i++){
              arr.push(function fn (i) {
                  return function () {
                  console.log(i)
                  }
                }(i))
            }

            arr.forEach(fn => {
              fn()
            })

            // => 0,1,2
          </code>
        </pre>
      </div>
    </div>
    <p>以上的js代码会打印出0，1，2。在分析代码之前，我们先画一下图。</p>
    <img src="../../assets/diary01/ava05.png" alt="闭包四" />
    <p>
      如上图所示。每次for循环中，自执行函数fn()都会执行，并将window.i进行形参赋值，将这个值复制一份放到函数内部作用域中。此时在函数fn()中存在一个变量i。而for循环运行了三次，内部便形成了三个不同的函数作用域(注意函数作用域是在函数执行时才形成的，因此在三次不同的循环中形成了三个不同的函数作用域，三个函数作用域中有三个不同的i)。每次函数执行时，都将该阶段的window.i赋值给形参，内部生成了一个新的变量i。
    </p>
    <p>
      在遍历arr数组，并将其中的函数执行时，函数会先从内部寻找i，找到后直接打印，没有访问全局变量中的window.i。以上代码便完成了使用函数模拟块级作用域的功能。
    </p>
    <p>那么什么是闭包呢？能够访问其他作用域的变量的函数，我们称之为闭包。</p>
    <p>我们将上面的代码稍微改一下</p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
                  var arr = [];
                  for (var i = 0;i &#60; 3;i++){
                      arr.push(function fn1 (i) {
                          return function fn2 () {
                              console.log(i)
                          }
                      }(i))
                  }
          </code>
        </pre>
      </div>
    </div>
    <p>
      为了方便说明，我们给匿名函数加上了一个名字。从代码中可以看到，fn2()是在fn1()内部进行定义的。fn2()执行时，也会形成一个函数作用域，该作用域是fn1()的函数作用域的子作用域，而fn2()打印的i，如上分析是fn1的形参赋值得来的。所以fn2实际上访问了fn1的作用域，从中取出了一个变量i，并将其打印出来。因此这个函数便是一个闭包。
    </p>
    <p>
      在理解了作用域以后，闭包的概念是不是变得特别简单？那么闭包能干嘛呢？我们来看一个场景。
    </p>
    <p>
      假如一个数组中存储着一批学生的成绩，我们需要拿到成绩在70-90之间的学生名单，我们可以这么实现
    </p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
              var arr = [];
              for (var i = 0;i &#60; 3;i++){
                  arr.push(function fn1 (i) {
                      return function fn2 () {
                          console.log(i)
                      }
                  }(i))
              }
          </code>
        </pre>
      </div>
    </div>
    <p>
      但是我们突然又需要一批成绩在60以上，80以下的学生名单，那没办法，我们再来写一次
    </p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            arr.filter(function (item) {
                return (item > 60 &#38;&#38; item &#60; 80)
            })
          </code>
        </pre>
      </div>
    </div>
    <p>
      这时我们很自然地想到，要封装一个函数，同时解决这两个或其他同类问题。我封装的代码如下：
    </p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            let between = function (a,b){
                return funcion(){
                    return item > a &#38;&#38; item &#60; b;
                }
            }
            arr.filter(between(60,80))
            arr.filter(between(70,90))
          </code>
        </pre>
      </div>
    </div>
    <p>我们稍微分析以下便能发现，以上代码也使用了闭包。</p>
    <h4>闭包中的内存泄露问题</h4>
    <p>我们来看下面这段代码。</p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            function fn () {
                var obj = {
                    name : "k",
                    age : 22,
                    sex : "无"
                }
                return function(){
                    return obj.name
                }
            }
        
            var getName = fn();
            console.log(getName())
            console.log(obj)
          </code>
        </pre>
      </div>
    </div>
    <p>
      上面的代码中使用了一个简单的闭包，用来封装一个获取名字的函数。但在成功执行fn()后，由于getName()引用了obj中的name，obj对象无法被js的垃圾回收机制回收，导致了内存泄漏。
      我们将代码稍微修改一下，便能解决这个问题。
    </p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            function fn(){
                var obj = {
                    name : "k",
                    age  : 22 ,
                    sex : "无"
                }
                var name = obj.name;
                obj = null;
                return function () {
                    return name;
                }
            }
          </code>
        </pre>
      </div>
    </div>
    <p>
      内存泄漏是闭包经常会出现的问题，稍不留心便会导致内存泄漏，因此使用闭包时要格外留意闭包中有没有无用的变量残留。
    </p>
  </div>
</template>

<script>
export default {
  created() {
    console.log(0);
  },
};
</script>

<style>
@import url("./css/diary.css");
</style>