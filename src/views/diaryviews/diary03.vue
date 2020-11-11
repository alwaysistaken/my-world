<template>
  <div class="h3-comp">
    <h3 class="h3-title">javascript中的this指向</h3>
    <p>
      对js中的this指向问题有一个清晰的认知，是学习面向对象的重要基础。js中的this指向也和js语言中最重要的函数息息相关，因此弄清this指向问题可以说是学习javascript必不可少的一步
    </p>
    <h4>一、函数被直接调用时this指向的默认绑定规则</h4>
    <p>
      学习this指向时我经常看到一句话，this指向最后调用它的对象。这句话我认为有两个重点，一是this指向的，是最后才调用它的对象；二是this的指向并非在函数声明时确定的。只有函数被执行时，才能获取它的this指向。个人觉得这句话并不完全正确，首先我们来看下面的例子
    </p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            var a = 10;
            function fn () {
                console.log(this.a);
            }
            fn() // => 10
          </code>
        </pre>
      </div>
    </div>
    <p>
      以上代码中fn()的this指向了全局环境。当js代码放到浏览器环境中执行时，这个全局环境便是window。我们知道，在es5中，js声明全局变量都等同于给顶层对象添加相应的属性。因此以上例子中的fn可看作是顶层对象的一个属性。也就是说，下面的两种函数调用方式在非严格模式下，在浏览器环境中并无区别。
    </p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            window.fn === fn // => true  
            window.a === a // => true
            window.fn() === fn() // =>true
          </code>
        </pre>
      </div>
    </div>
    <p>
      因此，在非严格模式下，浏览器环境中，函数被直接调用是可以看作函数被window对象进行调用，由于this永远最后调用它的对象,this便指向window。
    </p>
    <p>
      个人觉得这种理解是不够准确的。首先在严格模式下，当函数在全局环境中直接调用时，this并不指向它的全局对象，而是指向undefinded。
    </p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            function fn(){
                console.log(this)
            }
            fn() // => undefinded
          </code>
        </pre>
      </div>
    </div>
    <p>
      其次，将顶层对象的属性和全局变量画上全等号，并非一个巧妙的设计。事实上，这个做法使得js语言在编译时无法识别变量未声明的错误，因为无法确定其是否属于顶层对象的一个属性。而es6中let和const已经对这点做出了修改。
      也就是说
    </p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            let a = 10;
            console.log(window.a === a) // => false
          </code>
        </pre>
      </div>
    </div>
    <p>
      所以对于函数的直接调用，最好还是不要认为“通过window对象进行调用，因此this指向window”。
    </p>
    <h4>函数作为对象属性被对象调用时的this指向绑定规则</h4>
    <p>
      这是最简单的一种情况了。在分析一切花里胡哨的this指向时，我们需要记住的只是两件事，一是函数在被调用时才确定this指向，被声明时this指向是未知的；二是函数的this总是指向最后调用它的对象。
    </p>
    <p>
      我们先通过下面的例子简单地说明一下，怎么利用以上两点分析函数的this指向
    </p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            let a = 8;
            let obj = {
                a : 10,
                fn : fucntion () {
                    console.log(this.a)
                }
            }
            obj.a() // => 10
          </code>
        </pre>
      </div>
    </div>
    <p>
      上面的代码非常简单，结果也是一目了然。this总是指向最后调用它的对象，那么我们怎么分析和找到这个对象呢，画函数上下文环境栈是个好办法，分析作用域链也可以，但最最简单的，应该是直接看函数被执行时，紧跟着函数前面的“.”号的是哪个对象其实就可以了...
    </p>
    <p>接下来我们看稍微复杂一点的代码 :</p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            var a = 8;
            function fn () {
                console.log(this.a);
            }
            var obj = {
                a : 10,
                fn : fn
            } 
            obj.fn(); // => 10
          </code>
        </pre>
      </div>
    </div>
    <p>
      以上代码就要求我们记住另一件事，函数在被执行时，才能确定它的this指向。函数在什么时候执行？在obj.fn(
      )时，因此此使this指向的便是最后调用它的obj对象。
      灵活运用着两个规律，已经可以判断大部分情况下函数的this指向对象了。接下来我们再把代码变得复杂一点。
    </p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            var a = 8;
            function foo () {
                console.log(this.a);
            }
            var obj = {
                a : 10,
                foo : foo
            }
            var fn = function (fn1) {
                let a = 12;
                fn1();
            }
            foo(); // => 8
            obj.foo(); // => 12
            fn(foo) // => 8
          </code>
        </pre>
      </div>
    </div>
    <p>
      以上三种情况只要综合运用上面的规律进行分析，便不难找出各个函数的this指向。
    </p>
    <p>
      情况一和情况二的分析过程同上面是一致的。情况三中，我们还是要抓住函数在运行时才能确定this指向。因此分析情况三的关键在于fn1(
      )。尽管这里有一个形参赋值的过程，但函数被调用时，this指向可以直接根据它的调用方式，直接判断函数体（而不是指向函数体的引用指针）在哪个上下文作用域中。而fn1(
      )是被直接调用的，因此this在非严格模式下，浏览器环境中指向的是window。
    </p>
    <p>
      <strong
        >MDN中这样描述this：“this是当前执行上下文（global、function 或
        eval）的一个属性”。这句话应该如何理解呢？</strong
      >
    </p>
    <p>我们回到例三</p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            var a = 8;
            function foo () {
                console.log(this.a);
            }
            var obj = {
                a : 10,
                foo : foo
            }
            var fn = function (fn1) {
                let a = 12;
                fn1();
            }
            foo(); // => 8
            obj.foo(); // => 12
            fn(foo) // => 8
          </code>
        </pre>
      </div>
    </div>
    <p>
      对前两次调用和this打印，我们都可以看出this指向的是它们所处的执行上下文。那么为什么fn1(
      )在函数作用域fn中执行了，this却指向了全局呢？因为函数是对象，属于引用类型。当执行fn（foo）时，只是把全局环境下指向foo的一个引用地址赋值给fn1，fn1执行时，根据这个地址寻找到fn函数再执行。所以此时fn执行的就是处在全局环境下的foo，foo指向的也是全局上下文。
    </p>
    <h4>三、改绑this指向的三个函数</h4>
    <p>
      js提供了三个函数可以用于改绑this的指向，分别是call、apply、bind。这三个函数的使用也非常简单，我们先从call函数开始看起。
    </p>
    <h4>call方法</h4>
    <p><strong>语法： function.call(thisArg, arg1, arg2, ...)</strong></p>
    <p>
      thisArg是指定的this绑定的值，arg1、arg2等是函数的参数。
      我们看一个简单的例子
    </p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            var obj = {
                a  : 1
            }
            var a = 2;
            var func = function (){
                console.log(this.a);
            }
            func.call(obj); // => 1
          </code>
        </pre>
      </div>
    </div>
    <h4>apply方法</h4>
    <p><strong>语法 ：func.apply(thisArg, [argsArray])</strong></p>
    <p>
      thisArg是this指向的对象，[argsArray]是参数列表，和call唯一的区别在于[argsArray]将参数集合成一个数组进行传参。例子如下
    </p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            var obj = {
                a : 1,
            }
            var a = 2;
            var func = function (x,y) {
                console.log(x + y + this.a);
            } 
            func.apply(obj,[5,5]); // => 11
          </code>
        </pre>
      </div>
    </div>
    <p>
      apply方法除了用于改绑this对象，在拓展运算符实现之前还可用于直接将数组中的数据赋参给函数。
    </p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            var count = function(a,b,c,d){
                return a + b + c + d
            };
            var arr = [1,2,3,4];
            count.apply(null,arr);
          </code>
        </pre>
      </div>
    </div>
    <p>
      这样的赋值方式在某些特殊的情况下，能够省掉遍历数组的麻烦。不过es6的拓展运算符已经可以替代这一功能了。
    </p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            var count = function (a,b,c,d){
                return a + b + c + d
            }
            var arr = [1,2,3,4]
            count(...arr)
          </code>
        </pre>
      </div>
    </div>
    <h4>bind方法</h4>
    <p><strong>语法 ：func.apply(thisArg, [argsArray])</strong></p>
    <p>
      bind方法和以上两个方法的不同之处在于，bind方法不会直接改绑原函数的this指向后立即执行原函数，而是给你返回一个this指向已经被改绑的函数。
      例子如下 ：
    </p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            var a = 10;
            var obj = {
                a : 20
            }
            var fn1 = function () {
                console.log(this.a)
            };
            var fn2 = fn1.bind(obj);
            fn2() // => 20
          </code>
        </pre>
      </div>
    </div>
    <h3>四、new关键字中的this指向</h3>
    <p>
      若是使用new关键字创建对象，new会将this指向构造函数新创建出来的实例对象。
    </p>
    <p>我们看一下以下的代码 ：</p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            function Person(age, name, sex) {
                this.age = age;
                this.sex = sex;
                this.name = name;
                this.foo = function() {
                    console.log(this.name)
                }
            }
            var person = new Person(18, "k", "男");
            person.foo(); // => k;
          </code>
        </pre>
      </div>
    </div>
    <h3>五、箭头函数的this指向</h3>
    <p>
      箭头函数是es6新增的一种函数声明方式，语法非常简洁，也是我们常用的一种函数声明方式。箭头函数对比函数声明式或函数表达式，最大的特点在于它的this指向的是该函数所在的上下文中this指向的对象。若箭头函数被直接定义在全局环境，那么this则直接指向全局。
    </p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            var name = "window";
            var obj = {
                name : "obj",
                fn : () => {
                    console.log(this.name);
                }
            }
            obj.fn();// =>window
          </code>
        </pre>
      </div>
    </div>
    <p>
      如果fn不是一个箭头函数，从以上文章中我们不难分析出fn的this指向的是最后调用它的obj对象。箭头函数的特性在于，指向的是它所在的上下文中的this指向。而fn是处在obj内部的，那么this指向的便是obj上一层的上下文,也就是包裹着obj的全局上下文，在浏览器环境中便指向了的window。
    </p>
    <p>我们再看下面的代码</p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            var objA = {
                name : "objA",
                objB : {
                    name : "objB",
                    fn : () => {
                        console.log(this.name)
                    }
                }
            }
            objA.objB.fn(); // => objA
          </code>
        </pre>
      </div>
    </div>
    <p>
      我们再来分析以上的代码，this指向的是objB所处的上下文，父级objA中，所以this.name打印的是objA。
    </p>
    <p>箭头函数的this指向是无法被call、apply、bind更改的。</p>
    <h3>箭头函数在闭包中的小妙用</h3>
    <p>在过去使用闭包时，this指向的遗留问题会造成一点小麻烦。例如</p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            var name = "window";
            var obj = {
                name : "obj",
                getName : function () {
                    return function(){
                        console.log(this.name)
                    }
                }
            }
            var myname = obj.getName();
            myname(); // =>window
          </code>
        </pre>
      </div>
    </div>
    <p>
      由于myname被直接调用，从上面的分析中我们可以知道在浏览器环境下this指向的是window。而getName方法被暴露的初衷在于返回obj的name属性，this指向的改变容易导致错误。
    </p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            var name = "window";
            var obj = {
                name : "obj",
                getName : function () {
                    return () => {
                        console.log(this.name)
                    }
                }
            }
            var myname = obj.getName();
            myname(); // =>obj
          </code>
        </pre>
      </div>
    </div>
    <p>
      我们将getName内部返回的函数变成箭头函数，此时箭头函数的this永远指向了getName的上级对象obj。
    </p>
  </div>
</template>

<style>
@import url("./css/diary.css");
</style>

<script>
export default {};
</script>