Project Boilerplate with Chained IIFEs
======================================

A simple project boilerplate code with chained immediately-invoked function expressions.

###Principle Usage
<pre lang="javascript">
<code>
  (function() {
    /*ready to go after then...*/
  }(function() {
    /*ready to go first...*/
  }));
</code>
</pre>

###Practical Usage
<pre lang="javascript">
<code>
  (function(testFunc) {
    /*ready to go after then...*/
    testFunc();
  }(function() {
    var variable1 = 0;
    function testFunc () {
      return 'this is the inner iife';
    }
    return {
      testFunc : testFunc
    }
  }));
</code>
</pre>
