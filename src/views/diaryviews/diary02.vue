<template>
  <div class="h3-comp">
    <h3 class="h3-title">一窥javascript原型链</h3>
    <p>
      原型链是javascript实现面向对象的基础，所有的继承和构造都基于原型链完成。原型链这东西，说难不难，说简单也不简单。它真正让人迷惑的难点在于Function与Object二者的关系非常的复杂有趣。
    </p>
    <p>
      那么在接触这二者之前，我们先从最简单的prototyep、__proto
      __属性开始学习。
    </p>
    <p>首先我们写一个构造函数，用这个构造函数创建一个实例对象。</p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            function Dog (age) {
                this.age = age;
            }
            var dog1 = new Dog(10);
          </code>
        </pre>
      </div>
    </div>
    <p>
      以上代码中，我们可以认为Dog函数是一个构造函数，dog1是使用这个构造函数创建出来的一个实例对象。那么dog1和Dog之间有什么关系呢？
    </p>
    <p>
      从这里我们可以引出两个原型链的重要属性prototype与__proto
      __。每个被构建出来的实例对象都有一个__proto
      __属性，每个构造函数都有一个prototype属性。实例对象的__proto
      __指向的是它的构造函数的prototype对象。上面的例子中，dog1是Dog的实例对象，因此有
    </p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            function Dog (age) {
                this.age = age;
            }
            var dog1 = new Dog(10);
            console.log(dog1.__proto__ === Dog.prototype); // => true
          </code>
        </pre>
      </div>
    </div>
    <p>
      那么js是如何实现继承的呢？当实例对象访问属性时，会先从自己内部寻找是否存在该属性，若存在则直接访问，不存在的话会沿着__proto
      __属性寻找自己的“父类”，从自己的构造函数的prototype对象寻找该属性。若能找到便访问，不能则继续沿着__proto
      __访问上一级的构造函数的prototype对象，直至找到该属性或访问到原型链尽头为止。
    </p>
    <p>
      也就是说，上面的例子中dog对象是可以访问到Dog.prototype中的属性或方法的。
    </p>
    <p>这点我们稍微验证一下即可。</p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            function Dog (age) {
                this.age = age;
            }
            var dog1 = new Dog(10);
            Dog.prototype.showage = function () {
                console.log(this.age);
            }
            dog1.showage(); // => 10
          </code>
        </pre>
      </div>
    </div>
    <p>通过__proto__原型，js实现了父类与子类之间的继承。</p>
    <h4>万物皆对象</h4>
    <p>
      在javascript语言中，万物皆对象，函数自然也是对象。那么函数作为一个对象，自然也有__proto
      __属性。我们可能不记得的是，javascript中函数有一种非常不便也几乎无人使用的函数声明方式，那就是使用Function构造函数和new关键字。
    </p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            var Dog = new Function();
          </code>
        </pre>
      </div>
    </div>
    <p>
      所以，Dog构造函数也是Function构造函数的一个实例对象。事实上javascript中的所有函数都可看作构造函数Function的实例对象，或许除了Function本身。
    </p>
    <p>所以非常自然地，我们可以得到</p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            function Dog (age) {
                this.age = age;
            }
            console.log(Dog.__proto__ === Function.prototype); // => true
          </code>
        </pre>
      </div>
    </div>
    <p>
      函数对象的构造函数是Function，那么普通对象的构造函数是什么呢？这里我们只要回忆一下，普通对象如何使用new关键字构造出来就明白了。
    </p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            var obj1 = new Object();
            console.log(obj1.__proto__ === Object.prorotype); // => true
          </code>
        </pre>
      </div>
    </div>
    <p>由上可知，Object是普通对象的构造函数。obj1是Object的一个实例。</p>
    <p>
      我们刚刚提到，在javascript里万物皆对象。但对象其实只是javascript数据类型的一种，为了给其他基本类型提供常用的操作方法，javascript提供了三个基本类型的包装对象，分别是String、Boolean和Number。
    </p>
    <p>我们知道，基本类型可以直接调用封装类型的方法。如</p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            var str = "some text";
            console.log(str.substring(2));
          </code>
        </pre>
      </div>
    </div>
    <p>
      以上代码没有报错，并不是说明str是一个对象，substring是它的方法，而是因为javascript提供了String包装类型，在str调用substring方法前，js内部会自动创建一个String类型的实例，在实例中调用这个方法，然后将这个实例销毁。
      我们可以把以上代码看作
    </p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            var str = "some text",
            var s = new String(str);
            console.log(s.substring(2));
            s = null;
          </code>
        </pre>
      </div>
    </div>
    <p>那么，我们很自然地看得到，s的构造函数是String，也就是说</p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            var s = new String("sffa");
            console.log(s.__proto__ === String.prototype); // => true
          </code>
        </pre>
      </div>
    </div>
    <p>
      那么String的构造函数是谁呢?如上所说，构造函数的__proto__都指向Function，都是Function的一个实例对象。
    </p>
    <p>因此有</p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            console.log(String.__proto__ === Funciton.prototype); // => true
          </code>
        </pre>
      </div>
    </div>
    <p>
      至此我们完成了原型链中大部分内容的学习，而剩下的一部分，也是最暧昧最难理解的关于Object和Function的关系了。
    </p>
    <h4>Object与Function的关系</h4>
    <p>
      研究二者之前，我们很自然地去问的一个问题是，这俩有构造函数吗？这俩有上一级的父辈吗？然后我们自然就会沿着__proto
      __往上查找。
    </p>
    <p>然后我们就会发现一个很迷惑的东西 ：</p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            console.log(Function.__proto__ === Function.prototype); //=>true
            console.log(Object.__proto__ === Function.prototype); //=>true
          </code>
        </pre>
      </div>
    </div>
    <p>没错，Function的__proto__指向了自己的prototype。</p>
    <p>
      对于这个，通常有两种解释，一是Function是它本身的一个实例，因此它的__proto
      __自然地指向了自己的prototype。二是因为所有函数都可沿着__proto
      __找到Function.prototype，所以为了不引起误会，让本身作为函数的Function的__proto
      __属性也指向了自己的prototype。在能进一步深入地理解js之前，我们不妨把二者都先记住。
      为什么Object的__proto
      __也指向了Function.prototype呢？这说明Object是由Function创建出来的。那么Function.prototype怎么来的?当我们继续往上搜寻，就会发现
    </p>
    <div class="code-box">
      <div id="codeView" v-highlight>
        <pre>
          <code class="javascript">
            console.log(Function.prototype.__proto__ === Object.__proto__); // => true
            console.log(Object.prototype.__proto__ === null) // => true
          </code>
        </pre>
      </div>
    </div>
    <p>
      Function.prototype的__proto __
      指向了Object.prototype，而Object.prototype便是原型链的终点，在往前搜寻只有一个null。
    </p>
    <p>对于这一套关系，个人的理解是这样的：</p>
    <p>
      js引擎先做出了一个Object.porototype，这是整个ecmascript的万物起源，Object.prototype又做出一个Function.prototype。接着Function.prototype把自己和父亲整理一下，生成了Object和Function，这二者继续往下，才有了各式各样的对象和方法，生成了一条完整的原型链。
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("./css/diary.css");
</style>

