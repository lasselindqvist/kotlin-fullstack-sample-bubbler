(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-test'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-test'.");
    }
    root['kotlin-test'] = factory(typeof this['kotlin-test'] === 'undefined' ? {} : this['kotlin-test'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Throwable = Error;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var AssertionError = Kotlin.kotlin.AssertionError;
  var Unit = Kotlin.kotlin.Unit;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  function get_asserter() {
    return _asserter != null ? _asserter : lookupAsserter();
  }
  var _asserter;
  function assertTrue_0(actual, message) {
    if (message === void 0)
      message = null;
    return get_asserter().assertTrue_4mavae$(message != null ? message : 'Expected value to be true.', actual);
  }
  function Asserter() {
  }
  Asserter.prototype.assertTrue_o10pc4$ = function (lazyMessage, actual) {
    if (!actual) {
      this.fail_pdl1vj$(lazyMessage());
    }
  };
  function Asserter$assertTrue$lambda(closure$message) {
    return function () {
      return closure$message;
    };
  }
  Asserter.prototype.assertTrue_4mavae$ = function (message, actual) {
    this.assertTrue_o10pc4$(Asserter$assertTrue$lambda(message), actual);
  };
  function Asserter$assertEquals$lambda(closure$message, closure$expected, closure$actual) {
    return function () {
      return messagePrefix(closure$message) + ('Expected <' + Kotlin.toString(closure$expected) + '>, actual <' + Kotlin.toString(closure$actual) + '>.');
    };
  }
  Asserter.prototype.assertEquals_lzc6tz$ = function (message, expected, actual) {
    this.assertTrue_o10pc4$(Asserter$assertEquals$lambda(message, expected, actual), Kotlin.equals(actual, expected));
  };
  function Asserter$assertNotEquals$lambda(closure$message, closure$actual) {
    return function () {
      return messagePrefix(closure$message) + ('Illegal value: <' + Kotlin.toString(closure$actual) + '>.');
    };
  }
  Asserter.prototype.assertNotEquals_lzc6tz$ = function (message, illegal, actual) {
    this.assertTrue_o10pc4$(Asserter$assertNotEquals$lambda(message, actual), !Kotlin.equals(actual, illegal));
  };
  function Asserter$assertNull$lambda(closure$message, closure$actual) {
    return function () {
      return messagePrefix(closure$message) + ('Expected value to be null, but was: <' + Kotlin.toString(closure$actual) + '>.');
    };
  }
  Asserter.prototype.assertNull_67rc9h$ = function (message, actual) {
    this.assertTrue_o10pc4$(Asserter$assertNull$lambda(message, actual), actual == null);
  };
  function Asserter$assertNotNull$lambda(closure$message) {
    return function () {
      return messagePrefix(closure$message) + 'Expected value to be not null.';
    };
  }
  Asserter.prototype.assertNotNull_67rc9h$ = function (message, actual) {
    this.assertTrue_o10pc4$(Asserter$assertNotNull$lambda(message), actual != null);
  };
  Asserter.$metadata$ = {kind: Kotlin.Kind.INTERFACE, simpleName: 'Asserter', interfaces: []};
  function DefaultAsserter() {
  }
  function messagePrefix(message) {
    return message == null ? '' : Kotlin.toString(message) + '. ';
  }
  function assertHook$lambda(f) {
    return Unit;
  }
  var assertHook;
  function DefaultJsAsserter() {
    DefaultJsAsserter_instance = this;
    this.e_0 = undefined;
    this.a_0 = undefined;
  }
  DefaultJsAsserter.prototype.assertEquals_lzc6tz$ = function (message, expected, actual) {
    this.e_0 = expected;
    this.a_0 = actual;
    Asserter.prototype.assertEquals_lzc6tz$.call(this, message, expected, actual);
  };
  DefaultJsAsserter.prototype.assertNotEquals_lzc6tz$ = function (message, illegal, actual) {
    this.e_0 = illegal;
    this.a_0 = actual;
    Asserter.prototype.assertNotEquals_lzc6tz$.call(this, message, illegal, actual);
  };
  DefaultJsAsserter.prototype.assertNull_67rc9h$ = function (message, actual) {
    this.a_0 = actual;
    Asserter.prototype.assertNull_67rc9h$.call(this, message, actual);
  };
  DefaultJsAsserter.prototype.assertNotNull_67rc9h$ = function (message, actual) {
    this.a_0 = actual;
    Asserter.prototype.assertNotNull_67rc9h$.call(this, message, actual);
  };
  DefaultJsAsserter.prototype.assertTrue_o10pc4$ = function (lazyMessage, actual) {
    if (!actual) {
      this.failWithMessage_0(lazyMessage);
    }
     else {
      this.invokeHook_0(true, lazyMessage);
    }
  };
  function DefaultJsAsserter$assertTrue$lambda(closure$message) {
    return function () {
      return closure$message;
    };
  }
  DefaultJsAsserter.prototype.assertTrue_4mavae$ = function (message, actual) {
    this.assertTrue_o10pc4$(DefaultJsAsserter$assertTrue$lambda(message), actual);
  };
  function DefaultJsAsserter$fail$lambda(closure$message) {
    return function () {
      return closure$message;
    };
  }
  DefaultJsAsserter.prototype.fail_pdl1vj$ = function (message) {
    this.failWithMessage_0(DefaultJsAsserter$fail$lambda(message));
  };
  function DefaultJsAsserter$failWithMessage$lambda(closure$message) {
    return function () {
      return closure$message;
    };
  }
  DefaultJsAsserter.prototype.failWithMessage_0 = function (lazyMessage) {
    var message = lazyMessage();
    this.invokeHook_0(false, DefaultJsAsserter$failWithMessage$lambda(message));
    if (message == null)
      throw new AssertionError();
    else
      throw new AssertionError(message);
  };
  function DefaultJsAsserter$invokeHook$ObjectLiteral(closure$result, closure$lazyMessage) {
    this.result_13foyd$_0 = closure$result;
    this.expected_q67qvk$_0 = DefaultJsAsserter_getInstance().e_0;
    this.actual_wkq0m2$_0 = DefaultJsAsserter_getInstance().a_0;
    this.lazyMessage_wfmiv$_0 = closure$lazyMessage;
  }
  Object.defineProperty(DefaultJsAsserter$invokeHook$ObjectLiteral.prototype, 'result', {get: function () {
    return this.result_13foyd$_0;
  }});
  Object.defineProperty(DefaultJsAsserter$invokeHook$ObjectLiteral.prototype, 'expected', {get: function () {
    return this.expected_q67qvk$_0;
  }});
  Object.defineProperty(DefaultJsAsserter$invokeHook$ObjectLiteral.prototype, 'actual', {get: function () {
    return this.actual_wkq0m2$_0;
  }});
  Object.defineProperty(DefaultJsAsserter$invokeHook$ObjectLiteral.prototype, 'lazyMessage', {get: function () {
    return this.lazyMessage_wfmiv$_0;
  }});
  DefaultJsAsserter$invokeHook$ObjectLiteral.$metadata$ = {kind: Kotlin.Kind.CLASS, interfaces: []};
  DefaultJsAsserter.prototype.invokeHook_0 = function (result, lazyMessage) {
    try {
      assertHook(new DefaultJsAsserter$invokeHook$ObjectLiteral(result, lazyMessage));
    }
    finally {
      this.e_0 = undefined;
      this.a_0 = undefined;
    }
  };
  DefaultJsAsserter.$metadata$ = {kind: Kotlin.Kind.OBJECT, simpleName: 'DefaultJsAsserter', interfaces: [Asserter]};
  var DefaultJsAsserter_instance = null;
  function DefaultJsAsserter_getInstance() {
    if (DefaultJsAsserter_instance === null) {
      new DefaultJsAsserter();
    }
    return DefaultJsAsserter_instance;
  }
  function lookupAsserter() {
    return DefaultJsAsserter_getInstance();
  }
  var currentAdapter;
  function detectAdapter() {
    if (isQUnit())
      return new QUnitAdapter();
    else if (isJasmine())
      return new JasmineLikeAdapter();
    else
      return new BareAdapter();
  }
  var NAME_TO_ADAPTER;
  function BareAdapter() {
  }
  BareAdapter.prototype.suite = function (name, ignored, suiteFn) {
    if (!ignored) {
      suiteFn();
    }
  };
  BareAdapter.prototype.test = function (name, ignored, testFn) {
    if (!ignored) {
      testFn();
    }
  };
  BareAdapter.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'BareAdapter', interfaces: []};
  function isQUnit() {
    return typeof QUnit !== 'undefined';
  }
  function isJasmine() {
    return typeof describe === 'function' && typeof it === 'function';
  }
  function JasmineLikeAdapter() {
  }
  JasmineLikeAdapter.prototype.suite = function (name, ignored, suiteFn) {
    if (ignored) {
      xdescribe(name, suiteFn);
    }
     else {
      describe(name, suiteFn);
    }
  };
  JasmineLikeAdapter.prototype.test = function (name, ignored, testFn) {
    if (ignored) {
      xit(name, testFn);
    }
     else {
      it(name, testFn);
    }
  };
  JasmineLikeAdapter.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'JasmineLikeAdapter', interfaces: []};
  function QUnitAdapter() {
    this.ignoredSuite = false;
  }
  QUnitAdapter.prototype.suite = function (name, ignored, suiteFn) {
    var prevIgnore = this.ignoredSuite;
    this.ignoredSuite = this.ignoredSuite || ignored;
    QUnit.module(name, suiteFn);
    this.ignoredSuite = prevIgnore;
  };
  QUnitAdapter.prototype.test = function (name, ignored, testFn) {
    if (ignored || this.ignoredSuite) {
      QUnit.skip(name, this.wrapTest_0(testFn));
    }
     else {
      QUnit.test(name, this.wrapTest_0(testFn));
    }
  };
  function QUnitAdapter$wrapTest$lambda$lambda(closure$assertionsHappened, closure$assert) {
    return function (testResult) {
      closure$assertionsHappened.v = true;
      closure$assert.ok(testResult.result, testResult.lazyMessage());
      return Unit;
    };
  }
  function QUnitAdapter$wrapTest$lambda(closure$testFn) {
    return function (assert) {
      var assertionsHappened = {v: false};
      assertHook = QUnitAdapter$wrapTest$lambda$lambda(assertionsHappened, assert);
      closure$testFn();
      if (!assertionsHappened.v) {
        assertTrue_0(true, 'A test with no assertions is considered successful');
      }
      return Unit;
    };
  }
  QUnitAdapter.prototype.wrapTest_0 = function (testFn) {
    return QUnitAdapter$wrapTest$lambda(testFn);
  };
  QUnitAdapter.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'QUnitAdapter', interfaces: []};
  var package$kotlin = _.kotlin || (_.kotlin = {});
  var package$test = package$kotlin.test || (package$kotlin.test = {});
  Object.defineProperty(package$test, 'asserter', {get: get_asserter});
  package$test.assertTrue_ifx8ge$ = assertTrue_0;
  package$test.Asserter = Asserter;
  package$test.DefaultAsserter = DefaultAsserter;
  package$test.messagePrefix_7efafy$ = messagePrefix;
  Object.defineProperty(package$test, 'DefaultJsAsserter', {get: DefaultJsAsserter_getInstance});
  package$test.lookupAsserter_8be2vx$ = lookupAsserter;
  package$test.detectAdapter_8be2vx$ = detectAdapter;
  var package$adapters = package$test.adapters || (package$test.adapters = {});
  package$adapters.BareAdapter = BareAdapter;
  package$adapters.isQUnit_8be2vx$ = isQUnit;
  package$adapters.isJasmine_8be2vx$ = isJasmine;
  package$adapters.JasmineLikeAdapter = JasmineLikeAdapter;
  package$adapters.QUnitAdapter = QUnitAdapter;
  DefaultAsserter.prototype.assertTrue_o10pc4$ = Asserter.prototype.assertTrue_o10pc4$;
  DefaultAsserter.prototype.assertTrue_4mavae$ = Asserter.prototype.assertTrue_4mavae$;
  DefaultAsserter.prototype.assertEquals_lzc6tz$ = Asserter.prototype.assertEquals_lzc6tz$;
  DefaultAsserter.prototype.assertNotEquals_lzc6tz$ = Asserter.prototype.assertNotEquals_lzc6tz$;
  DefaultAsserter.prototype.assertNull_67rc9h$ = Asserter.prototype.assertNull_67rc9h$;
  DefaultAsserter.prototype.assertNotNull_67rc9h$ = Asserter.prototype.assertNotNull_67rc9h$;
  _asserter = null;
  assertHook = assertHook$lambda;
  currentAdapter = null;
  NAME_TO_ADAPTER = mapOf([to('qunit', Kotlin.getCallableRef('QUnitAdapter', function () {
    return new QUnitAdapter();
  })), to('jasmine', Kotlin.getCallableRef('JasmineLikeAdapter', function () {
    return new JasmineLikeAdapter();
  })), to('mocha', Kotlin.getCallableRef('JasmineLikeAdapter', function () {
    return new JasmineLikeAdapter();
  })), to('jest', Kotlin.getCallableRef('JasmineLikeAdapter', function () {
    return new JasmineLikeAdapter();
  })), to('auto', Kotlin.getCallableRef('detectAdapter', function () {
    return detectAdapter();
  }))]);
  return _;
}));

//# sourceMappingURL=kotlin-test.js.map
