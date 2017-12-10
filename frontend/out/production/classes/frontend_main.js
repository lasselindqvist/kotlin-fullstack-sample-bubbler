(function (_, Kotlin, $module$react_dom, $module$kotlinx_html_js, $module$react) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var Unit = Kotlin.kotlin.Unit;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var equals = Kotlin.equals;
  var experimental = Kotlin.kotlin.coroutines.experimental;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Continuation = Kotlin.kotlin.coroutines.experimental.Continuation;
  var startCoroutine = Kotlin.kotlin.coroutines.experimental.startCoroutine_xtwlez$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_59el9d$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var nav = $module$kotlinx_html_js.kotlinx.html.nav_19d8h1$;
  var h1 = $module$kotlinx_html_js.kotlinx.html.h1_vmej1w$;
  var CoroutineImpl = Kotlin.kotlin.coroutines.experimental.CoroutineImpl;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.experimental.intrinsics.COROUTINE_SUSPENDED;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var h2 = $module$kotlinx_html_js.kotlinx.html.h2_eh5gi3$;
  var p = $module$kotlinx_html_js.kotlinx.html.p_8pggrc$;
  var h3 = $module$kotlinx_html_js.kotlinx.html.h3_agelx2$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var legend = $module$kotlinx_html_js.kotlinx.html.legend_99jryr$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var set_onChangeFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onChangeFunction_pszlq2$;
  var input = $module$kotlinx_html_js.kotlinx.html.input_e1g74z$;
  var fieldSet = $module$kotlinx_html_js.kotlinx.html.fieldSet_27mjzc$;
  var getCallableRef = Kotlin.getCallableRef;
  var label = $module$kotlinx_html_js.kotlinx.html.label_yd75js$;
  var button = $module$kotlinx_html_js.kotlinx.html.button_whohl6$;
  var form = $module$kotlinx_html_js.kotlinx.html.form_3vb3wm$;
  var ul = $module$kotlinx_html_js.kotlinx.html.ul_e6giw3$;
  var a = $module$kotlinx_html_js.kotlinx.html.a_gu26kr$;
  var li = $module$kotlinx_html_js.kotlinx.html.li_yzv5uh$;
  var textArea = $module$kotlinx_html_js.kotlinx.html.textArea_b1tfd9$;
  var form_0 = $module$kotlinx_html_js.kotlinx.html.form_3ereno$;
  var toString = Kotlin.toString;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var removeSuffix = Kotlin.kotlin.text.removeSuffix_gsj5wt$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var throwCCE = Kotlin.throwCCE;
  var Throwable = Error;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  var header = $module$kotlinx_html_js.kotlinx.html.header_8btlf7$;
  var section = $module$kotlinx_html_js.kotlinx.html.section_ac1jhf$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var ul_0 = $module$kotlinx_html_js.kotlinx.html.ul_pzlyaf$;
  var set_style = $module$kotlinx_html_js.kotlinx.html.set_style_ueiko3$;
  var span = $module$kotlinx_html_js.kotlinx.html.span_6djfml$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Annotation = Kotlin.kotlin.Annotation;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var throwUPAE = Kotlin.throwUPAE;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var ReadWriteProperty = Kotlin.kotlin.properties.ReadWriteProperty;
  var ReadOnlyProperty = Kotlin.kotlin.properties.ReadOnlyProperty;
  var filterNotNull = Kotlin.kotlin.collections.filterNotNull_m3lr2h$;
  var Iterable = Kotlin.kotlin.collections.Iterable;
  var filterNotNull_0 = Kotlin.kotlin.collections.filterNotNull_emfgvx$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var StringAttribute = $module$kotlinx_html_js.kotlinx.html.attributes.StringAttribute;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var Unsafe = $module$kotlinx_html_js.kotlinx.html.Unsafe;
  var IllegalStateException = Kotlin.kotlin.IllegalStateException;
  var TagConsumer = $module$kotlinx_html_js.kotlinx.html.TagConsumer;
  ReactDOMComponent.prototype = Object.create(ReactComponent.prototype);
  ReactDOMComponent.prototype.constructor = ReactDOMComponent;
  Application.prototype = Object.create(ReactDOMComponent.prototype);
  Application.prototype.constructor = Application;
  MainView.prototype = Object.create(Enum.prototype);
  MainView.prototype.constructor = MainView;
  UserProps.prototype = Object.create(RProps.prototype);
  UserProps.prototype.constructor = UserProps;
  BubbleView$Props.prototype = Object.create(RProps.prototype);
  BubbleView$Props.prototype.constructor = BubbleView$Props;
  BubbleView.prototype = Object.create(ReactDOMComponent.prototype);
  BubbleView.prototype.constructor = BubbleView;
  HomeView$Props.prototype = Object.create(RProps.prototype);
  HomeView$Props.prototype.constructor = HomeView$Props;
  HomeView.prototype = Object.create(ReactDOMComponent.prototype);
  HomeView.prototype.constructor = HomeView;
  JoinBubbleComponent.prototype = Object.create(ReactDOMComponent.prototype);
  JoinBubbleComponent.prototype.constructor = JoinBubbleComponent;
  LeaveBubbleComponent.prototype = Object.create(ReactDOMComponent.prototype);
  LeaveBubbleComponent.prototype.constructor = LeaveBubbleComponent;
  LoginComponent.prototype = Object.create(ReactDOMComponent.prototype);
  LoginComponent.prototype.constructor = LoginComponent;
  NavBarComponent$NavBarHandlerProps.prototype = Object.create(RProps.prototype);
  NavBarComponent$NavBarHandlerProps.prototype.constructor = NavBarComponent$NavBarHandlerProps;
  NavBarComponent.prototype = Object.create(ReactDOMComponent.prototype);
  NavBarComponent.prototype.constructor = NavBarComponent;
  NewThoughtComponent$Props.prototype = Object.create(RProps.prototype);
  NewThoughtComponent$Props.prototype.constructor = NewThoughtComponent$Props;
  NewThoughtComponent.prototype = Object.create(ReactDOMComponent.prototype);
  NewThoughtComponent.prototype.constructor = NewThoughtComponent;
  Polling$NewMessages$None.prototype = Object.create(Polling$NewMessages.prototype);
  Polling$NewMessages$None.prototype.constructor = Polling$NewMessages$None;
  Polling$NewMessages$Few.prototype = Object.create(Polling$NewMessages.prototype);
  Polling$NewMessages$Few.prototype.constructor = Polling$NewMessages$Few;
  Polling$NewMessages$MoreThan.prototype = Object.create(Polling$NewMessages.prototype);
  Polling$NewMessages$MoreThan.prototype.constructor = Polling$NewMessages$MoreThan;
  ReactMarkdownProps.prototype = Object.create(RProps.prototype);
  ReactMarkdownProps.prototype.constructor = ReactMarkdownProps;
  ReactMarkdownComponent.prototype = Object.create(ReactExternalComponentSpec.prototype);
  ReactMarkdownComponent.prototype.constructor = ReactMarkdownComponent;
  RegisterComponent.prototype = Object.create(ReactDOMComponent.prototype);
  RegisterComponent.prototype.constructor = RegisterComponent;
  LoginOrRegisterFailedException.prototype = Object.create(Throwable.prototype);
  LoginOrRegisterFailedException.prototype.constructor = LoginOrRegisterFailedException;
  JoiningBubbleFailedException.prototype = Object.create(Throwable.prototype);
  JoiningBubbleFailedException.prototype.constructor = JoiningBubbleFailedException;
  ShowingBubbleFailedException.prototype = Object.create(Throwable.prototype);
  ShowingBubbleFailedException.prototype.constructor = ShowingBubbleFailedException;
  ViewingBubbleFailedException.prototype = Object.create(Throwable.prototype);
  ViewingBubbleFailedException.prototype.constructor = ViewingBubbleFailedException;
  LeavingBubbleFailedException.prototype = Object.create(Throwable.prototype);
  LeavingBubbleFailedException.prototype.constructor = LeavingBubbleFailedException;
  ShowBubbleComponent$Props.prototype = Object.create(RProps.prototype);
  ShowBubbleComponent$Props.prototype.constructor = ShowBubbleComponent$Props;
  ShowBubbleComponent.prototype = Object.create(ReactDOMComponent.prototype);
  ShowBubbleComponent.prototype.constructor = ShowBubbleComponent;
  ThoughtsListComponent$Props.prototype = Object.create(RProps.prototype);
  ThoughtsListComponent$Props.prototype.constructor = ThoughtsListComponent$Props;
  ThoughtsListComponent.prototype = Object.create(ReactDOMComponent.prototype);
  ThoughtsListComponent.prototype.constructor = ThoughtsListComponent;
  ViewBubbleComponent$Props.prototype = Object.create(RProps.prototype);
  ViewBubbleComponent$Props.prototype.constructor = ViewBubbleComponent$Props;
  ViewBubbleComponent.prototype = Object.create(ReactDOMComponent.prototype);
  ViewBubbleComponent.prototype.constructor = ViewBubbleComponent;
  ViewThoughtComponent$Props.prototype = Object.create(RProps.prototype);
  ViewThoughtComponent$Props.prototype.constructor = ViewThoughtComponent$Props;
  ViewThoughtComponent.prototype = Object.create(ReactDOMComponent.prototype);
  ViewThoughtComponent.prototype.constructor = ViewThoughtComponent;
  ReactComponentNoProps.prototype = Object.create(RProps.prototype);
  ReactComponentNoProps.prototype.constructor = ReactComponentNoProps;
  ReactComponentEmptyProps.prototype = Object.create(RProps.prototype);
  ReactComponentEmptyProps.prototype.constructor = ReactComponentEmptyProps;
  BaseReactExtensionReadWriteProperty.prototype = Object.create(BaseReactExtension.prototype);
  BaseReactExtensionReadWriteProperty.prototype.constructor = BaseReactExtensionReadWriteProperty;
  BaseReactExtensionReadOnlyProperty.prototype = Object.create(BaseReactExtension.prototype);
  BaseReactExtensionReadOnlyProperty.prototype.constructor = BaseReactExtensionReadOnlyProperty;
  DOMProps.prototype = Object.create(RProps.prototype);
  DOMProps.prototype.constructor = DOMProps;
  ReactDOMBuilder$DOMNode.prototype = Object.create(ReactBuilder$Node.prototype);
  ReactDOMBuilder$DOMNode.prototype.constructor = ReactDOMBuilder$DOMNode;
  ReactDOMBuilder.prototype = Object.create(ReactBuilder.prototype);
  ReactDOMBuilder.prototype.constructor = ReactDOMBuilder;
  ReactDOMStatelessComponent.prototype = Object.create(ReactDOMComponent.prototype);
  ReactDOMStatelessComponent.prototype.constructor = ReactDOMStatelessComponent;
  ReactDOMPropslessComponent.prototype = Object.create(ReactDOMComponent.prototype);
  ReactDOMPropslessComponent.prototype.constructor = ReactDOMPropslessComponent;
  ReactDOMStaticComponent.prototype = Object.create(ReactDOMComponent.prototype);
  ReactDOMStaticComponent.prototype.constructor = ReactDOMStaticComponent;
  function createInstance($receiver) {
    var ctor = get_js($receiver);
    return new ctor();
  }
  var jsObject = defineInlineFunction('frontend_main.runtime.wrappers.jsObject_7qq44f$', wrapFunction(function () {
    return function (builder) {
      var obj = {};
      builder(obj);
      return obj;
    };
  }));
  var js = defineInlineFunction('frontend_main.runtime.wrappers.js_5ij4lk$', wrapFunction(function () {
    return function (builder) {
      var obj = {};
      builder(obj);
      return obj;
    };
  }));
  function getOwnPropertyNames($receiver) {
    var me = $receiver;
    return Object.getOwnPropertyNames(me);
  }
  function toPlainObjectStripNull(me) {
    var tmp$;
    var obj = {};
    var $receiver = getOwnPropertyNames(me);
    var destination = ArrayList_init();
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
      var element = $receiver[tmp$_0];
      if (!(equals(element, '__proto__') || equals(element, 'constructor')))
        destination.add_11rb$(element);
    }
    tmp$ = destination.iterator();
    while (tmp$.hasNext()) {
      var p = tmp$.next();
      if (me[p] != null) {
        obj[p] = me[p];
      }
    }
    return obj;
  }
  function jsstyle(builder) {
    var obj = {};
    builder(obj);
    return obj;
  }
  function await$lambda$lambda(closure$cont) {
    return function (value) {
      closure$cont.resume_11rb$(value);
      return Unit;
    };
  }
  function await$lambda$lambda_0(closure$cont) {
    return function (exception) {
      closure$cont.resumeWithException_tcv7n7$(exception);
      return Unit;
    };
  }
  function await$lambda(this$await) {
    return function (cont) {
      this$await.then(await$lambda$lambda(cont), await$lambda$lambda_0(cont));
      return Unit;
    };
  }
  var SafeContinuation_init = Kotlin.kotlin.coroutines.experimental.SafeContinuation_init_n4f53e$;
  function suspendCoroutine$lambda(closure$block) {
    return function (c) {
      var safe = SafeContinuation_init(c);
      closure$block(safe);
      return safe.getResult();
    };
  }
  function await_0($receiver, continuation) {
    return suspendCoroutine$lambda(await$lambda($receiver))(continuation.facade);
  }
  function async$lambda$ObjectLiteral(closure$resolve, closure$reject) {
    this.closure$resolve = closure$resolve;
    this.closure$reject = closure$reject;
  }
  Object.defineProperty(async$lambda$ObjectLiteral.prototype, 'context', {
    get: function () {
      return experimental.EmptyCoroutineContext;
    }
  });
  async$lambda$ObjectLiteral.prototype.resume_11rb$ = function (value) {
    this.closure$resolve(value);
  };
  async$lambda$ObjectLiteral.prototype.resumeWithException_tcv7n7$ = function (exception) {
    this.closure$reject(exception);
  };
  async$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Continuation]
  };
  function async$lambda(closure$block) {
    return function (resolve, reject) {
      startCoroutine(closure$block, new async$lambda$ObjectLiteral(resolve, reject));
      return Unit;
    };
  }
  function async(block) {
    return new Promise(async$lambda(block));
  }
  function launch$lambda(exception) {
    console.log('Failed with ' + exception);
    return Unit;
  }
  function launch(block) {
    async(block).catch(launch$lambda);
  }
  function get_inputValue($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    return (tmp$_4 = (tmp$_3 = (tmp$_0 = Kotlin.isType(tmp$ = $receiver.target, HTMLInputElement) ? tmp$ : null) != null ? tmp$_0.value : null) != null ? tmp$_3 : (tmp$_2 = Kotlin.isType(tmp$_1 = $receiver.target, HTMLTextAreaElement) ? tmp$_1 : null) != null ? tmp$_2.value : null) != null ? tmp$_4 : '';
  }
  function main$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function ReactBuilder$invoke$lambda(closure$props, closure$handler) {
    return function ($receiver) {
      closure$handler(closure$props);
      return Unit;
    };
  }
  var getKClass = Kotlin.getKClass;
  function main$lambda$lambda(this$) {
    return function ($receiver) {
      var $this = this$;
      Application$Companion_getInstance();
      var props = createInstance(getKClass(ReactComponentNoProps));
      $this.enterReactNode_uztyw4$(ReactComponent.Companion.wrap_v5not5$(getKClass(Application)), props, ReactBuilder$invoke$lambda(props, main$lambda$lambda$lambda));
      return Unit;
    };
  }
  function main$lambda($receiver) {
    div($receiver, void 0, main$lambda$lambda($receiver));
    return Unit;
  }
  function main(args) {
    require('pure-blog.css');
    render($module$react_dom, document.getElementById('content'), main$lambda);
  }
  function Application() {
    Application$Companion_getInstance();
    ReactDOMComponent.call(this);
    this.polling = new Polling();
    this.state = new ApplicationPageState(MainView$Home_getInstance());
    this.checkUserSession_0();
  }
  function Application$Companion() {
    Application$Companion_instance = this;
  }
  Application$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [ReactComponentSpec]
  };
  var Application$Companion_instance = null;
  function Application$Companion_getInstance() {
    if (Application$Companion_instance === null) {
      new Application$Companion();
    }
    return Application$Companion_instance;
  }
  Application.prototype.componentWillUnmount = function () {
    this.polling.stop();
    ReactDOMComponent.prototype.componentWillUnmount.call(this);
  };
  function Application$render$lambda$lambda$lambda$lambda$lambda(this$Application) {
    return function (it) {
      this$Application.mainViewSelected_0();
      return Unit;
    };
  }
  function Application$render$lambda$lambda$lambda$lambda(this$Application) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Bubbler');
      if (this$Application.state.selected !== MainView$Loading_getInstance()) {
        set_onClickFunction($receiver, Application$render$lambda$lambda$lambda$lambda$lambda(this$Application));
      }
      return Unit;
    };
  }
  function Application$render$lambda$lambda$lambda$lambda$lambda$lambda(this$Application) {
    return function (it) {
      this$Application.navBarSelected_0(it);
      return Unit;
    };
  }
  function Application$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$Application) {
    return function () {
      this$Application.onLoggedOut_0();
      return Unit;
    };
  }
  function Application$render$lambda$lambda$lambda$lambda$lambda_0(this$Application) {
    return function ($receiver) {
      $receiver.user = this$Application.state.currentUser;
      $receiver.handler = Application$render$lambda$lambda$lambda$lambda$lambda$lambda(this$Application);
      $receiver.logoutHandler = Application$render$lambda$lambda$lambda$lambda$lambda$lambda_0(this$Application);
      $receiver.poller = this$Application.polling;
      return Unit;
    };
  }
  function Application$render$lambda$lambda$lambda$lambda_0(this$Application, this$render) {
    return function ($receiver) {
      if (this$Application.state.selected !== MainView$Loading_getInstance()) {
        var $this = this$render;
        NavBarComponent$Companion_getInstance();
        var handler = Application$render$lambda$lambda$lambda$lambda$lambda_0(this$Application);
        var props = createInstance(getKClass(NavBarComponent$NavBarHandlerProps));
        $this.enterReactNode_uztyw4$(ReactComponent.Companion.wrap_v5not5$(getKClass(NavBarComponent)), props, ReactBuilder$invoke$lambda(props, handler));
      }
      return Unit;
    };
  }
  function Application$render$lambda$lambda$lambda(this$Application, this$render) {
    return function ($receiver) {
      div_0($receiver, 'brand-title', Application$render$lambda$lambda$lambda$lambda(this$Application));
      nav($receiver, 'nav', Application$render$lambda$lambda$lambda$lambda_0(this$Application, this$render));
      return Unit;
    };
  }
  function Application$render$lambda$lambda(this$Application, this$render) {
    return function ($receiver) {
      div_0($receiver, 'header', Application$render$lambda$lambda$lambda(this$Application, this$render));
      return Unit;
    };
  }
  function Application$render$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Loading...');
    return Unit;
  }
  function Application$render$lambda$lambda$lambda$lambda_1(this$Application) {
    return function (t) {
      this$Application.onShowThought_0(t);
      return Unit;
    };
  }
  function Application$render$lambda$lambda$lambda_1(this$Application) {
    return function ($receiver) {
      $receiver.showThought = Application$render$lambda$lambda$lambda$lambda_1(this$Application);
      $receiver.polling = this$Application.polling;
      return Unit;
    };
  }
  function Application$render$lambda$lambda$lambda$lambda_2(this$Application) {
    return function (it) {
      this$Application.onUserAssigned_0(it);
      return Unit;
    };
  }
  function Application$render$lambda$lambda$lambda_2(this$Application) {
    return function ($receiver) {
      $receiver.userAssigned = Application$render$lambda$lambda$lambda$lambda_2(this$Application);
      return Unit;
    };
  }
  function Application$render$lambda$lambda$lambda$lambda_3(this$Application) {
    return function (it) {
      this$Application.onUserAssigned_0(it);
      return Unit;
    };
  }
  function Application$render$lambda$lambda$lambda_3(this$Application) {
    return function ($receiver) {
      $receiver.userAssigned = Application$render$lambda$lambda$lambda$lambda_3(this$Application);
      return Unit;
    };
  }
  function Application$render$lambda$lambda$lambda_4($receiver) {
    return Unit;
  }
  function Application$render$lambda$lambda$lambda_5($receiver) {
    return Unit;
  }
  function Application$render$lambda$lambda$lambda$lambda_4(this$Application) {
    return function (t) {
      this$Application.onShowThought_0(t);
      return Unit;
    };
  }
  function Application$render$lambda$lambda$lambda_6(this$Application) {
    return function ($receiver) {
      $receiver.showThought = Application$render$lambda$lambda$lambda$lambda_4(this$Application);
      return Unit;
    };
  }
  function Application$render$lambda$lambda$lambda_7($receiver) {
    return Unit;
  }
  function Application$render$lambda$lambda$lambda$lambda_5(this$Application) {
    return function (t) {
      this$Application.onShowThought_0(t);
      return Unit;
    };
  }
  function Application$render$lambda$lambda$lambda_8(this$Application) {
    return function ($receiver) {
      $receiver.showThought = Application$render$lambda$lambda$lambda$lambda_5(this$Application);
      $receiver.replyTo = this$Application.state.replyTo;
      return Unit;
    };
  }
  function Application$render$lambda$lambda$lambda$lambda_6(this$Application) {
    return function (it) {
      this$Application.onReplyTo_0(it);
      return Unit;
    };
  }
  function Application$render$lambda$lambda$lambda$lambda_7(this$Application) {
    return function () {
      this$Application.mainViewSelected_0();
      return Unit;
    };
  }
  function Application$render$lambda$lambda$lambda_9(this$Application) {
    return function ($receiver) {
      var tmp$;
      $receiver.thought = (tmp$ = this$Application.state.currentThought) != null ? tmp$ : new Thought(0, '?', '?', '?', '?', null);
      $receiver.currentUser = this$Application.state.currentUser;
      $receiver.bubbleName = this$Application.state.bubbleName;
      $receiver.reply = Application$render$lambda$lambda$lambda$lambda_6(this$Application);
      $receiver.leave = Application$render$lambda$lambda$lambda$lambda_7(this$Application);
      return Unit;
    };
  }
  function Application$render$lambda$lambda_0(this$Application, this$render) {
    return function ($receiver) {
      var tmp$;
      tmp$ = this$Application.state.selected;
      if (equals(tmp$, MainView$Loading_getInstance()))
        h1($receiver, void 0, Application$render$lambda$lambda$lambda_0);
      else if (equals(tmp$, MainView$Home_getInstance())) {
        var $this = this$render;
        HomeView$Companion_getInstance();
        var handler = Application$render$lambda$lambda$lambda_1(this$Application);
        var props = createInstance(getKClass(HomeView$Props));
        $this.enterReactNode_uztyw4$(ReactComponent.Companion.wrap_v5not5$(getKClass(HomeView)), props, ReactBuilder$invoke$lambda(props, handler));
      }
       else if (equals(tmp$, MainView$Login_getInstance())) {
        var $this_0 = this$render;
        LoginComponent$Companion_getInstance();
        var handler_0 = Application$render$lambda$lambda$lambda_2(this$Application);
        var props_0 = createInstance(getKClass(UserProps));
        $this_0.enterReactNode_uztyw4$(ReactComponent.Companion.wrap_v5not5$(getKClass(LoginComponent)), props_0, ReactBuilder$invoke$lambda(props_0, handler_0));
      }
       else if (equals(tmp$, MainView$Register_getInstance())) {
        var $this_1 = this$render;
        RegisterComponent$Companion_getInstance();
        var handler_1 = Application$render$lambda$lambda$lambda_3(this$Application);
        var props_1 = createInstance(getKClass(UserProps));
        $this_1.enterReactNode_uztyw4$(ReactComponent.Companion.wrap_v5not5$(getKClass(RegisterComponent)), props_1, ReactBuilder$invoke$lambda(props_1, handler_1));
      }
       else if (equals(tmp$, MainView$JoinBubble_getInstance())) {
        var $this_2 = this$render;
        JoinBubbleComponent$Companion_getInstance();
        var props_2 = createInstance(getKClass(UserProps));
        $this_2.enterReactNode_uztyw4$(ReactComponent.Companion.wrap_v5not5$(getKClass(JoinBubbleComponent)), props_2, ReactBuilder$invoke$lambda(props_2, Application$render$lambda$lambda$lambda_4));
      }
       else if (equals(tmp$, MainView$LeaveBubble_getInstance())) {
        var $this_3 = this$render;
        LeaveBubbleComponent$Companion_getInstance();
        var props_3 = createInstance(getKClass(UserProps));
        $this_3.enterReactNode_uztyw4$(ReactComponent.Companion.wrap_v5not5$(getKClass(LeaveBubbleComponent)), props_3, ReactBuilder$invoke$lambda(props_3, Application$render$lambda$lambda$lambda_5));
      }
       else if (equals(tmp$, MainView$ShowBubble_getInstance())) {
        var $this_4 = this$render;
        ShowBubbleComponent$Companion_getInstance();
        var handler_2 = Application$render$lambda$lambda$lambda_6(this$Application);
        var props_4 = createInstance(getKClass(ShowBubbleComponent$Props));
        $this_4.enterReactNode_uztyw4$(ReactComponent.Companion.wrap_v5not5$(getKClass(ShowBubbleComponent)), props_4, ReactBuilder$invoke$lambda(props_4, handler_2));
      }
       else if (equals(tmp$, MainView$ViewBubble_getInstance())) {
        var $this_5 = this$render;
        ViewBubbleComponent$Companion_getInstance();
        var props_5 = createInstance(getKClass(ViewBubbleComponent$Props));
        $this_5.enterReactNode_uztyw4$(ReactComponent.Companion.wrap_v5not5$(getKClass(ViewBubbleComponent)), props_5, ReactBuilder$invoke$lambda(props_5, Application$render$lambda$lambda$lambda_7));
      }
       else if (equals(tmp$, MainView$PostThought_getInstance())) {
        var $this_6 = this$render;
        NewThoughtComponent$Companion_getInstance();
        var handler_3 = Application$render$lambda$lambda$lambda_8(this$Application);
        var props_6 = createInstance(getKClass(NewThoughtComponent$Props));
        $this_6.enterReactNode_uztyw4$(ReactComponent.Companion.wrap_v5not5$(getKClass(NewThoughtComponent)), props_6, ReactBuilder$invoke$lambda(props_6, handler_3));
      }
       else if (!equals(tmp$, MainView$User_getInstance()))
        if (equals(tmp$, MainView$Thought_getInstance())) {
          var $this_7 = this$render;
          ViewThoughtComponent$Companion_getInstance();
          var handler_4 = Application$render$lambda$lambda$lambda_9(this$Application);
          var props_7 = createInstance(getKClass(ViewThoughtComponent$Props));
          $this_7.enterReactNode_uztyw4$(ReactComponent.Companion.wrap_v5not5$(getKClass(ViewThoughtComponent)), props_7, ReactBuilder$invoke$lambda(props_7, handler_4));
        }
         else
          Kotlin.noWhenBranchMatched();
      return Unit;
    };
  }
  function Application$render$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('Bubbler kotlin frontend + react + ktor example');
    return Unit;
  }
  function Application$render$lambda(this$Application, this$render) {
    return function ($receiver) {
      div_0($receiver, 'sidebar pure-u-1 pure-u-md-1-4', Application$render$lambda$lambda(this$Application, this$render));
      div_0($receiver, 'content pure-u-1 pure-u-md-3-4', Application$render$lambda$lambda_0(this$Application, this$render));
      div_0($receiver, 'footer', Application$render$lambda$lambda_1);
      return Unit;
    };
  }
  Application.prototype.render_vhjzqq$ = function ($receiver) {
    div($receiver, 'pure-g', Application$render$lambda(this, $receiver));
  };
  function Application$onReplyTo$lambda(closure$t) {
    return function ($receiver) {
      $receiver.replyTo = closure$t;
      $receiver.selected = MainView$PostThought_getInstance();
      return Unit;
    };
  }
  Application.prototype.onReplyTo_0 = function (t) {
    this.setState_hgm6vj$(Application$onReplyTo$lambda(t));
  };
  function Application$onLoggedOut$lambda(closure$oldSelected) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      $receiver.currentUser = null;
      tmp$ = closure$oldSelected;
      if (equals(tmp$, MainView$Home_getInstance()) || equals(tmp$, MainView$Thought_getInstance()) || equals(tmp$, MainView$Login_getInstance()) || equals(tmp$, MainView$Register_getInstance()))
        tmp$_0 = closure$oldSelected;
      else
        tmp$_0 = MainView$Home_getInstance();
      $receiver.selected = tmp$_0;
      return Unit;
    };
  }
  Application.prototype.onLoggedOut_0 = function () {
    var oldSelected = this.state.selected;
    this.setState_hgm6vj$(Application$onLoggedOut$lambda(oldSelected));
  };
  function Application$onShowThought$lambda(closure$t) {
    return function ($receiver) {
      $receiver.currentThought = closure$t;
      $receiver.selected = MainView$Thought_getInstance();
      return Unit;
    };
  }
  Application.prototype.onShowThought_0 = function (t) {
    this.setState_hgm6vj$(Application$onShowThought$lambda(t));
  };
  function Application$navBarSelected$lambda(closure$newSelected) {
    return function ($receiver) {
      $receiver.selected = closure$newSelected;
      return Unit;
    };
  }
  Application.prototype.navBarSelected_0 = function (newSelected) {
    this.setState_hgm6vj$(Application$navBarSelected$lambda(newSelected));
  };
  function Application$onUserAssigned$lambda(closure$user) {
    return function ($receiver) {
      $receiver.currentUser = closure$user;
      $receiver.selected = MainView$Home_getInstance();
      return Unit;
    };
  }
  Application.prototype.onUserAssigned_0 = function (user) {
    this.setState_hgm6vj$(Application$onUserAssigned$lambda(user));
  };
  function Application$mainViewSelected$lambda($receiver) {
    $receiver.selected = MainView$Home_getInstance();
    return Unit;
  }
  Application.prototype.mainViewSelected_0 = function () {
    this.setState_hgm6vj$(Application$mainViewSelected$lambda);
  };
  function Application$checkUserSession$lambda(this$Application_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Application$checkUserSession$lambda(this$Application_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Application$checkUserSession$lambda(this$Application_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Application = this$Application_0;
  }
  Coroutine$Application$checkUserSession$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Application$checkUserSession$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Application$checkUserSession$lambda.prototype.constructor = Coroutine$Application$checkUserSession$lambda;
  Coroutine$Application$checkUserSession$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = checkSession(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            var user = this.result_0;
            return this.local$this$Application.onUserAssigned_0(user), Unit;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Application$checkUserSession$lambda$lambda($receiver) {
    $receiver.selected = MainView$Home_getInstance();
    return Unit;
  }
  function Application$checkUserSession$lambda_0(this$Application) {
    return function (it) {
      this$Application.setState_hgm6vj$(Application$checkUserSession$lambda$lambda);
      return Unit;
    };
  }
  Application.prototype.checkUserSession_0 = function () {
    async(Application$checkUserSession$lambda(this)).catch(Application$checkUserSession$lambda_0(this));
  };
  Application.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Application',
    interfaces: [ReactDOMComponent]
  };
  function MainView(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MainView_initFields() {
    MainView_initFields = function () {
    };
    MainView$Loading_instance = new MainView('Loading', 0);
    MainView$Register_instance = new MainView('Register', 1);
    MainView$Login_instance = new MainView('Login', 2);
    MainView$User_instance = new MainView('User', 3);
    MainView$JoinBubble_instance = new MainView('JoinBubble', 4);
    MainView$LeaveBubble_instance = new MainView('LeaveBubble', 5);
    MainView$ShowBubble_instance = new MainView('ShowBubble', 6);
    MainView$ViewBubble_instance = new MainView('ViewBubble', 7);
    MainView$PostThought_instance = new MainView('PostThought', 8);
    MainView$Thought_instance = new MainView('Thought', 9);
    MainView$Home_instance = new MainView('Home', 10);
  }
  var MainView$Loading_instance;
  function MainView$Loading_getInstance() {
    MainView_initFields();
    return MainView$Loading_instance;
  }
  var MainView$Register_instance;
  function MainView$Register_getInstance() {
    MainView_initFields();
    return MainView$Register_instance;
  }
  var MainView$Login_instance;
  function MainView$Login_getInstance() {
    MainView_initFields();
    return MainView$Login_instance;
  }
  var MainView$User_instance;
  function MainView$User_getInstance() {
    MainView_initFields();
    return MainView$User_instance;
  }
  var MainView$JoinBubble_instance;
  function MainView$JoinBubble_getInstance() {
    MainView_initFields();
    return MainView$JoinBubble_instance;
  }
  var MainView$LeaveBubble_instance;
  function MainView$LeaveBubble_getInstance() {
    MainView_initFields();
    return MainView$LeaveBubble_instance;
  }
  var MainView$ShowBubble_instance;
  function MainView$ShowBubble_getInstance() {
    MainView_initFields();
    return MainView$ShowBubble_instance;
  }
  var MainView$ViewBubble_instance;
  function MainView$ViewBubble_getInstance() {
    MainView_initFields();
    return MainView$ViewBubble_instance;
  }
  var MainView$PostThought_instance;
  function MainView$PostThought_getInstance() {
    MainView_initFields();
    return MainView$PostThought_instance;
  }
  var MainView$Thought_instance;
  function MainView$Thought_getInstance() {
    MainView_initFields();
    return MainView$Thought_instance;
  }
  var MainView$Home_instance;
  function MainView$Home_getInstance() {
    MainView_initFields();
    return MainView$Home_instance;
  }
  MainView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MainView',
    interfaces: [Enum]
  };
  function MainView$values() {
    return [MainView$Loading_getInstance(), MainView$Register_getInstance(), MainView$Login_getInstance(), MainView$User_getInstance(), MainView$JoinBubble_getInstance(), MainView$LeaveBubble_getInstance(), MainView$ShowBubble_getInstance(), MainView$ViewBubble_getInstance(), MainView$PostThought_getInstance(), MainView$Thought_getInstance(), MainView$Home_getInstance()];
  }
  MainView.values = MainView$values;
  function MainView$valueOf(name) {
    switch (name) {
      case 'Loading':
        return MainView$Loading_getInstance();
      case 'Register':
        return MainView$Register_getInstance();
      case 'Login':
        return MainView$Login_getInstance();
      case 'User':
        return MainView$User_getInstance();
      case 'JoinBubble':
        return MainView$JoinBubble_getInstance();
      case 'LeaveBubble':
        return MainView$LeaveBubble_getInstance();
      case 'ShowBubble':
        return MainView$ShowBubble_getInstance();
      case 'ViewBubble':
        return MainView$ViewBubble_getInstance();
      case 'PostThought':
        return MainView$PostThought_getInstance();
      case 'Thought':
        return MainView$Thought_getInstance();
      case 'Home':
        return MainView$Home_getInstance();
      default:throwISE('No enum constant org.jetbrains.demo.bubbler.MainView.' + name);
    }
  }
  MainView.valueOf_61zpoe$ = MainView$valueOf;
  function ApplicationPageState(selected, currentUser, bubbleName, currentThought, replyTo) {
    if (currentUser === void 0)
      currentUser = null;
    if (bubbleName === void 0)
      bubbleName = '';
    if (currentThought === void 0)
      currentThought = null;
    if (replyTo === void 0)
      replyTo = null;
    this.selected = selected;
    this.currentUser = currentUser;
    this.bubbleName = bubbleName;
    this.currentThought = currentThought;
    this.replyTo = replyTo;
  }
  ApplicationPageState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ApplicationPageState',
    interfaces: []
  };
  function UserProps() {
    RProps.call(this);
    this.userAssigned = UserProps$userAssigned$lambda;
  }
  function UserProps$userAssigned$lambda(it) {
    return Unit;
  }
  UserProps.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserProps',
    interfaces: [RProps]
  };
  function BubbleView() {
    BubbleView$Companion_getInstance();
    ReactDOMComponent.call(this);
    this.state = new BubbleView$State(this.props.bubbleName, emptyList(), emptyList(), true, Polling$NewMessages$None_getInstance());
    this.pollerHandler_0 = BubbleView$pollerHandler$lambda(this);
  }
  function BubbleView$Companion() {
    BubbleView$Companion_instance = this;
  }
  BubbleView$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [ReactComponentSpec]
  };
  var BubbleView$Companion_instance = null;
  function BubbleView$Companion_getInstance() {
    if (BubbleView$Companion_instance === null) {
      new BubbleView$Companion();
    }
    return BubbleView$Companion_instance;
  }
  BubbleView.prototype.componentWillMount = function () {
    ReactDOMComponent.prototype.componentWillMount.call(this);
    this.props.polling.listeners.add_11rb$(this.pollerHandler_0);
    this.loadHome_0();
  };
  BubbleView.prototype.componentWillUnmount = function () {
    ReactDOMComponent.prototype.componentWillUnmount.call(this);
    this.props.polling.listeners.remove_11rb$(this.pollerHandler_0);
  };
  function BubbleView$render$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Thoughts in your bubble');
    return Unit;
  }
  function BubbleView$render$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Loading...');
    return Unit;
  }
  function BubbleView$render$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('Top');
    return Unit;
  }
  function BubbleView$render$lambda$lambda_2(this$BubbleView) {
    return function ($receiver) {
      $receiver.thoughts = this$BubbleView.state.top;
      $receiver.show = this$BubbleView.props.showThought;
      return Unit;
    };
  }
  function BubbleView$render$lambda$lambda_3($receiver) {
    $receiver.unaryPlus_pdl1vz$('Recent');
    return Unit;
  }
  function BubbleView$render$lambda$lambda_4(this$BubbleView) {
    return function ($receiver) {
      $receiver.thoughts = this$BubbleView.state.latest;
      $receiver.show = this$BubbleView.props.showThought;
      return Unit;
    };
  }
  function ReactBuilder$invoke$lambda_0(closure$props, closure$handler) {
    return function ($receiver) {
      closure$handler(closure$props);
      return Unit;
    };
  }
  function BubbleView$render$lambda(this$BubbleView, this$render) {
    return function ($receiver) {
      h2($receiver, void 0, BubbleView$render$lambda$lambda);
      if (this$BubbleView.state.loading) {
        p($receiver, void 0, BubbleView$render$lambda$lambda_0);
      }
       else {
        h3($receiver, void 0, BubbleView$render$lambda$lambda_1);
        var $this = this$render;
        ThoughtsListComponent$Companion_getInstance();
        var handler = BubbleView$render$lambda$lambda_2(this$BubbleView);
        var props = createInstance(getKClass(ThoughtsListComponent$Props));
        $this.enterReactNode_uztyw4$(ReactComponent.Companion.wrap_v5not5$(getKClass(ThoughtsListComponent)), props, ReactBuilder$invoke$lambda_0(props, handler));
        h3($receiver, void 0, BubbleView$render$lambda$lambda_3);
        var $this_0 = this$render;
        ThoughtsListComponent$Companion_getInstance();
        var handler_0 = BubbleView$render$lambda$lambda_4(this$BubbleView);
        var props_0 = createInstance(getKClass(ThoughtsListComponent$Props));
        $this_0.enterReactNode_uztyw4$(ReactComponent.Companion.wrap_v5not5$(getKClass(ThoughtsListComponent)), props_0, ReactBuilder$invoke$lambda_0(props_0, handler_0));
      }
      return Unit;
    };
  }
  BubbleView.prototype.render_vhjzqq$ = function ($receiver) {
    div($receiver, void 0, BubbleView$render$lambda(this, $receiver));
  };
  function BubbleView$loadHome$lambda$lambda(closure$r) {
    return function ($receiver) {
      $receiver.loading = false;
      $receiver.top = closure$r.top;
      $receiver.latest = closure$r.latest;
      return Unit;
    };
  }
  function BubbleView$loadHome$lambda(this$BubbleView_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$BubbleView$loadHome$lambda(this$BubbleView_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$BubbleView$loadHome$lambda(this$BubbleView_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$BubbleView = this$BubbleView_0;
  }
  Coroutine$BubbleView$loadHome$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$BubbleView$loadHome$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BubbleView$loadHome$lambda.prototype.constructor = Coroutine$BubbleView$loadHome$lambda;
  Coroutine$BubbleView$loadHome$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = index(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            var r = this.result_0;
            this.local$this$BubbleView.props.polling.start();
            return this.local$this$BubbleView.setState_hgm6vj$(BubbleView$loadHome$lambda$lambda(r)), Unit;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  BubbleView.prototype.loadHome_0 = function () {
    launch(BubbleView$loadHome$lambda(this));
  };
  function BubbleView$State(bubbleName, top, latest, loading, newMessages) {
    this.bubbleName = bubbleName;
    this.top = top;
    this.latest = latest;
    this.loading = loading;
    this.newMessages = newMessages;
  }
  BubbleView$State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: []
  };
  function BubbleView$Props(bubbleName, polling, showThought) {
    if (showThought === void 0)
      showThought = BubbleView$BubbleView$Props_init$lambda;
    RProps.call(this);
    this.bubbleName = bubbleName;
    this.polling = polling;
    this.showThought = showThought;
  }
  function BubbleView$BubbleView$Props_init$lambda(it) {
    return Unit;
  }
  BubbleView$Props.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Props',
    interfaces: [RProps]
  };
  function BubbleView$pollerHandler$lambda$lambda(closure$m) {
    return function ($receiver) {
      $receiver.newMessages = closure$m;
      return Unit;
    };
  }
  function BubbleView$pollerHandler$lambda(this$BubbleView) {
    return function (m) {
      var oldMessages = this$BubbleView.state.newMessages;
      this$BubbleView.setState_hgm6vj$(BubbleView$pollerHandler$lambda$lambda(m));
      if (!equals(oldMessages, m) && equals(m, Polling$NewMessages$None_getInstance())) {
        this$BubbleView.loadHome_0();
      }
      return Unit;
    };
  }
  BubbleView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BubbleView',
    interfaces: [ReactDOMComponent]
  };
  function HomeView() {
    HomeView$Companion_getInstance();
    ReactDOMComponent.call(this);
    this.state = new HomeView$State(emptyList(), emptyList(), true, Polling$NewMessages$None_getInstance());
    this.pollerHandler_0 = HomeView$pollerHandler$lambda(this);
  }
  function HomeView$Companion() {
    HomeView$Companion_instance = this;
  }
  HomeView$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [ReactComponentSpec]
  };
  var HomeView$Companion_instance = null;
  function HomeView$Companion_getInstance() {
    if (HomeView$Companion_instance === null) {
      new HomeView$Companion();
    }
    return HomeView$Companion_instance;
  }
  HomeView.prototype.componentWillMount = function () {
    ReactDOMComponent.prototype.componentWillMount.call(this);
    this.props.polling.listeners.add_11rb$(this.pollerHandler_0);
    this.loadHome_0();
  };
  HomeView.prototype.componentWillUnmount = function () {
    ReactDOMComponent.prototype.componentWillUnmount.call(this);
    this.props.polling.listeners.remove_11rb$(this.pollerHandler_0);
  };
  function HomeView$render$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Thoughts');
    return Unit;
  }
  function HomeView$render$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Loading...');
    return Unit;
  }
  function HomeView$render$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('Top');
    return Unit;
  }
  function HomeView$render$lambda$lambda_2(this$HomeView) {
    return function ($receiver) {
      $receiver.thoughts = this$HomeView.state.top;
      $receiver.show = this$HomeView.props.showThought;
      return Unit;
    };
  }
  function HomeView$render$lambda$lambda_3($receiver) {
    $receiver.unaryPlus_pdl1vz$('Recent');
    return Unit;
  }
  function HomeView$render$lambda$lambda_4(this$HomeView) {
    return function ($receiver) {
      $receiver.thoughts = this$HomeView.state.latest;
      $receiver.show = this$HomeView.props.showThought;
      return Unit;
    };
  }
  function ReactBuilder$invoke$lambda_1(closure$props, closure$handler) {
    return function ($receiver) {
      closure$handler(closure$props);
      return Unit;
    };
  }
  function HomeView$render$lambda(this$HomeView, this$render) {
    return function ($receiver) {
      h2($receiver, void 0, HomeView$render$lambda$lambda);
      if (this$HomeView.state.loading) {
        p($receiver, void 0, HomeView$render$lambda$lambda_0);
      }
       else {
        h3($receiver, void 0, HomeView$render$lambda$lambda_1);
        var $this = this$render;
        ThoughtsListComponent$Companion_getInstance();
        var handler = HomeView$render$lambda$lambda_2(this$HomeView);
        var props = createInstance(getKClass(ThoughtsListComponent$Props));
        $this.enterReactNode_uztyw4$(ReactComponent.Companion.wrap_v5not5$(getKClass(ThoughtsListComponent)), props, ReactBuilder$invoke$lambda_1(props, handler));
        h3($receiver, void 0, HomeView$render$lambda$lambda_3);
        var $this_0 = this$render;
        ThoughtsListComponent$Companion_getInstance();
        var handler_0 = HomeView$render$lambda$lambda_4(this$HomeView);
        var props_0 = createInstance(getKClass(ThoughtsListComponent$Props));
        $this_0.enterReactNode_uztyw4$(ReactComponent.Companion.wrap_v5not5$(getKClass(ThoughtsListComponent)), props_0, ReactBuilder$invoke$lambda_1(props_0, handler_0));
      }
      return Unit;
    };
  }
  HomeView.prototype.render_vhjzqq$ = function ($receiver) {
    div($receiver, void 0, HomeView$render$lambda(this, $receiver));
  };
  function HomeView$loadHome$lambda$lambda(closure$r) {
    return function ($receiver) {
      $receiver.loading = false;
      $receiver.top = closure$r.top;
      $receiver.latest = closure$r.latest;
      return Unit;
    };
  }
  function HomeView$loadHome$lambda(this$HomeView_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$HomeView$loadHome$lambda(this$HomeView_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$HomeView$loadHome$lambda(this$HomeView_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$HomeView = this$HomeView_0;
  }
  Coroutine$HomeView$loadHome$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HomeView$loadHome$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HomeView$loadHome$lambda.prototype.constructor = Coroutine$HomeView$loadHome$lambda;
  Coroutine$HomeView$loadHome$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = index(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            var r = this.result_0;
            this.local$this$HomeView.props.polling.start();
            return this.local$this$HomeView.setState_hgm6vj$(HomeView$loadHome$lambda$lambda(r)), Unit;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  HomeView.prototype.loadHome_0 = function () {
    launch(HomeView$loadHome$lambda(this));
  };
  function HomeView$State(top, latest, loading, newMessages) {
    this.top = top;
    this.latest = latest;
    this.loading = loading;
    this.newMessages = newMessages;
  }
  HomeView$State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: []
  };
  function HomeView$Props(polling, showThought) {
    if (showThought === void 0)
      showThought = HomeView$HomeView$Props_init$lambda;
    RProps.call(this);
    this.polling = polling;
    this.showThought = showThought;
  }
  function HomeView$HomeView$Props_init$lambda(it) {
    return Unit;
  }
  HomeView$Props.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Props',
    interfaces: [RProps]
  };
  function HomeView$pollerHandler$lambda$lambda(closure$m) {
    return function ($receiver) {
      $receiver.newMessages = closure$m;
      return Unit;
    };
  }
  function HomeView$pollerHandler$lambda(this$HomeView) {
    return function (m) {
      var oldMessages = this$HomeView.state.newMessages;
      this$HomeView.setState_hgm6vj$(HomeView$pollerHandler$lambda$lambda(m));
      if (!equals(oldMessages, m) && equals(m, Polling$NewMessages$None_getInstance())) {
        this$HomeView.loadHome_0();
      }
      return Unit;
    };
  }
  HomeView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HomeView',
    interfaces: [ReactDOMComponent]
  };
  function JoinBubbleComponent() {
    JoinBubbleComponent$Companion_getInstance();
    ReactDOMComponent.call(this);
    this.state = new JoinBubbleFormState('', '', false, '', '');
  }
  function JoinBubbleComponent$Companion() {
    JoinBubbleComponent$Companion_instance = this;
  }
  JoinBubbleComponent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [ReactComponentSpec]
  };
  var JoinBubbleComponent$Companion_instance = null;
  function JoinBubbleComponent$Companion_getInstance() {
    if (JoinBubbleComponent$Companion_instance === null) {
      new JoinBubbleComponent$Companion();
    }
    return JoinBubbleComponent$Companion_instance;
  }
  function JoinBubbleComponent$render$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Join Bubble');
    return Unit;
  }
  function JoinBubbleComponent$render$lambda$lambda$lambda$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.bubbleName = get_inputValue(closure$it);
      return Unit;
    };
  }
  function JoinBubbleComponent$render$lambda$lambda$lambda$lambda$lambda(this$JoinBubbleComponent) {
    return function (it) {
      this$JoinBubbleComponent.setState_hgm6vj$(JoinBubbleComponent$render$lambda$lambda$lambda$lambda$lambda$lambda(it));
      return Unit;
    };
  }
  function JoinBubbleComponent$render$lambda$lambda$lambda$lambda(this$JoinBubbleComponent) {
    return function ($receiver) {
      $receiver.value = this$JoinBubbleComponent.state.bubbleName;
      $receiver.placeholder = 'Name of the Bubble';
      $receiver.disabled = this$JoinBubbleComponent.state.disabled;
      set_onChangeFunction($receiver, JoinBubbleComponent$render$lambda$lambda$lambda$lambda$lambda(this$JoinBubbleComponent));
      return Unit;
    };
  }
  function JoinBubbleComponent$render$lambda$lambda$lambda_0(this$JoinBubbleComponent) {
    return function ($receiver) {
      input($receiver, InputType.text, void 0, void 0, 'bubbleName', void 0, JoinBubbleComponent$render$lambda$lambda$lambda$lambda(this$JoinBubbleComponent));
      return Unit;
    };
  }
  function JoinBubbleComponent$render$lambda$lambda$lambda$lambda_0(closure$message) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$message);
      return Unit;
    };
  }
  function JoinBubbleComponent$render$lambda$lambda$lambda$lambda_1(closure$message) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$message);
      return Unit;
    };
  }
  function JoinBubbleComponent$render$lambda$lambda$lambda$lambda_2(this$JoinBubbleComponent) {
    return function (it) {
      it.preventDefault();
      this$JoinBubbleComponent.doJoin_0();
      return Unit;
    };
  }
  function JoinBubbleComponent$render$lambda$lambda$lambda_1(this$JoinBubbleComponent) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Join');
      $receiver.disabled = this$JoinBubbleComponent.state.disabled;
      set_onClickFunction($receiver, JoinBubbleComponent$render$lambda$lambda$lambda$lambda_2(this$JoinBubbleComponent));
      return Unit;
    };
  }
  function JoinBubbleComponent$render$lambda$lambda(this$render, this$JoinBubbleComponent) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      legend(this$render, void 0, JoinBubbleComponent$render$lambda$lambda$lambda);
      fieldSet($receiver, 'pure-group', JoinBubbleComponent$render$lambda$lambda$lambda_0(this$JoinBubbleComponent));
      if ((tmp$_0 = (tmp$ = this$JoinBubbleComponent.state.errorMessage) != null ? tmp$.length > 0 ? tmp$ : null : null) != null) {
        label($receiver, void 0, JoinBubbleComponent$render$lambda$lambda$lambda$lambda_0(tmp$_0));
      }
      if ((tmp$_2 = (tmp$_1 = this$JoinBubbleComponent.state.infoMessage) != null ? tmp$_1.length > 0 ? tmp$_1 : null : null) != null) {
        label($receiver, void 0, JoinBubbleComponent$render$lambda$lambda$lambda$lambda_1(tmp$_2));
      }
      button($receiver, void 0, void 0, void 0, 'pure-button pure-button-primary', JoinBubbleComponent$render$lambda$lambda$lambda_1(this$JoinBubbleComponent));
      return Unit;
    };
  }
  function JoinBubbleComponent$render$lambda(this$render, this$JoinBubbleComponent) {
    return function ($receiver) {
      form($receiver, void 0, void 0, void 0, 'pure-form pure-form-stacked', JoinBubbleComponent$render$lambda$lambda(this$render, this$JoinBubbleComponent));
      return Unit;
    };
  }
  JoinBubbleComponent.prototype.render_vhjzqq$ = function ($receiver) {
    div($receiver, void 0, JoinBubbleComponent$render$lambda($receiver, this));
  };
  function JoinBubbleComponent$doJoin$lambda($receiver) {
    $receiver.disabled = false;
    $receiver.infoMessage = 'Joining Bubble succeeded!';
    $receiver.errorMessage = '';
    return Unit;
  }
  function JoinBubbleComponent$doJoin$lambda_0(this$JoinBubbleComponent_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$JoinBubbleComponent$doJoin$lambda(this$JoinBubbleComponent_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JoinBubbleComponent$doJoin$lambda(this$JoinBubbleComponent_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$JoinBubbleComponent = this$JoinBubbleComponent_0;
  }
  Coroutine$JoinBubbleComponent$doJoin$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$JoinBubbleComponent$doJoin$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JoinBubbleComponent$doJoin$lambda.prototype.constructor = Coroutine$JoinBubbleComponent$doJoin$lambda;
  Coroutine$JoinBubbleComponent$doJoin$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = joinBubble(this.local$this$JoinBubbleComponent.state.userId, this.local$this$JoinBubbleComponent.state.bubbleName, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function JoinBubbleComponent$doJoin$lambda_1(this$JoinBubbleComponent) {
    return function (err) {
      this$JoinBubbleComponent.joinFailed_0(err);
      return Unit;
    };
  }
  JoinBubbleComponent.prototype.doJoin_0 = function () {
    this.setState_hgm6vj$(JoinBubbleComponent$doJoin$lambda);
    async(JoinBubbleComponent$doJoin$lambda_0(this)).catch(JoinBubbleComponent$doJoin$lambda_1(this));
  };
  function JoinBubbleComponent$joinFailed$lambda(closure$err) {
    return function ($receiver) {
      $receiver.disabled = false;
      $receiver.infoMessage = '';
      $receiver.errorMessage = closure$err.message;
      return Unit;
    };
  }
  function JoinBubbleComponent$joinFailed$lambda_0($receiver) {
    $receiver.disabled = false;
    $receiver.infoMessage = '';
    $receiver.errorMessage = 'Joining Bubble failed: please reload page and try again';
    return Unit;
  }
  JoinBubbleComponent.prototype.joinFailed_0 = function (err) {
    if (Kotlin.isType(err, JoiningBubbleFailedException)) {
      this.setState_hgm6vj$(JoinBubbleComponent$joinFailed$lambda(err));
    }
     else {
      console.error('Joining Bubble failed', err);
      this.setState_hgm6vj$(JoinBubbleComponent$joinFailed$lambda_0);
    }
  };
  JoinBubbleComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JoinBubbleComponent',
    interfaces: [ReactDOMComponent]
  };
  function JoinBubbleFormState(userId, bubbleName, disabled, infoMessage, errorMessage) {
    this.userId = userId;
    this.bubbleName = bubbleName;
    this.disabled = disabled;
    this.infoMessage = infoMessage;
    this.errorMessage = errorMessage;
  }
  JoinBubbleFormState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JoinBubbleFormState',
    interfaces: []
  };
  function LeaveBubbleComponent() {
    LeaveBubbleComponent$Companion_getInstance();
    ReactDOMComponent.call(this);
    this.state = new LeaveBubbleFormState('', '', false, '', '');
  }
  function LeaveBubbleComponent$Companion() {
    LeaveBubbleComponent$Companion_instance = this;
  }
  LeaveBubbleComponent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [ReactComponentSpec]
  };
  var LeaveBubbleComponent$Companion_instance = null;
  function LeaveBubbleComponent$Companion_getInstance() {
    if (LeaveBubbleComponent$Companion_instance === null) {
      new LeaveBubbleComponent$Companion();
    }
    return LeaveBubbleComponent$Companion_instance;
  }
  function LeaveBubbleComponent$render$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Leave Bubble');
    return Unit;
  }
  function LeaveBubbleComponent$render$lambda$lambda$lambda$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.bubbleName = get_inputValue(closure$it);
      return Unit;
    };
  }
  function LeaveBubbleComponent$render$lambda$lambda$lambda$lambda$lambda(this$LeaveBubbleComponent) {
    return function (it) {
      this$LeaveBubbleComponent.setState_hgm6vj$(LeaveBubbleComponent$render$lambda$lambda$lambda$lambda$lambda$lambda(it));
      return Unit;
    };
  }
  function LeaveBubbleComponent$render$lambda$lambda$lambda$lambda(this$LeaveBubbleComponent) {
    return function ($receiver) {
      $receiver.value = this$LeaveBubbleComponent.state.bubbleName;
      $receiver.placeholder = 'Name of the Bubble';
      $receiver.disabled = this$LeaveBubbleComponent.state.disabled;
      set_onChangeFunction($receiver, LeaveBubbleComponent$render$lambda$lambda$lambda$lambda$lambda(this$LeaveBubbleComponent));
      return Unit;
    };
  }
  function LeaveBubbleComponent$render$lambda$lambda$lambda_0(this$LeaveBubbleComponent) {
    return function ($receiver) {
      input($receiver, InputType.text, void 0, void 0, 'bubbleName', void 0, LeaveBubbleComponent$render$lambda$lambda$lambda$lambda(this$LeaveBubbleComponent));
      return Unit;
    };
  }
  function LeaveBubbleComponent$render$lambda$lambda$lambda$lambda_0(closure$message) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$message);
      return Unit;
    };
  }
  function LeaveBubbleComponent$render$lambda$lambda$lambda$lambda_1(closure$message) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$message);
      return Unit;
    };
  }
  function LeaveBubbleComponent$render$lambda$lambda$lambda$lambda_2(this$LeaveBubbleComponent) {
    return function (it) {
      it.preventDefault();
      this$LeaveBubbleComponent.doJoin_0();
      return Unit;
    };
  }
  function LeaveBubbleComponent$render$lambda$lambda$lambda_1(this$LeaveBubbleComponent) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Leave');
      $receiver.disabled = this$LeaveBubbleComponent.state.disabled;
      set_onClickFunction($receiver, LeaveBubbleComponent$render$lambda$lambda$lambda$lambda_2(this$LeaveBubbleComponent));
      return Unit;
    };
  }
  function LeaveBubbleComponent$render$lambda$lambda(this$render, this$LeaveBubbleComponent) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      legend(this$render, void 0, LeaveBubbleComponent$render$lambda$lambda$lambda);
      fieldSet($receiver, 'pure-group', LeaveBubbleComponent$render$lambda$lambda$lambda_0(this$LeaveBubbleComponent));
      if ((tmp$_0 = (tmp$ = this$LeaveBubbleComponent.state.infoMessage) != null ? tmp$.length > 0 ? tmp$ : null : null) != null) {
        label($receiver, void 0, LeaveBubbleComponent$render$lambda$lambda$lambda$lambda_0(tmp$_0));
      }
      if ((tmp$_2 = (tmp$_1 = this$LeaveBubbleComponent.state.errorMessage) != null ? tmp$_1.length > 0 ? tmp$_1 : null : null) != null) {
        label($receiver, void 0, LeaveBubbleComponent$render$lambda$lambda$lambda$lambda_1(tmp$_2));
      }
      button($receiver, void 0, void 0, void 0, 'pure-button pure-button-primary', LeaveBubbleComponent$render$lambda$lambda$lambda_1(this$LeaveBubbleComponent));
      return Unit;
    };
  }
  function LeaveBubbleComponent$render$lambda(this$render, this$LeaveBubbleComponent) {
    return function ($receiver) {
      form($receiver, void 0, void 0, void 0, 'pure-form pure-form-stacked', LeaveBubbleComponent$render$lambda$lambda(this$render, this$LeaveBubbleComponent));
      return Unit;
    };
  }
  LeaveBubbleComponent.prototype.render_vhjzqq$ = function ($receiver) {
    div($receiver, void 0, LeaveBubbleComponent$render$lambda($receiver, this));
  };
  function LeaveBubbleComponent$doJoin$lambda($receiver) {
    $receiver.disabled = false;
    $receiver.infoMessage = 'Leaving Bubble succeeded!';
    $receiver.errorMessage = '';
    return Unit;
  }
  function LeaveBubbleComponent$doJoin$lambda_0(this$LeaveBubbleComponent_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$LeaveBubbleComponent$doJoin$lambda(this$LeaveBubbleComponent_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$LeaveBubbleComponent$doJoin$lambda(this$LeaveBubbleComponent_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$LeaveBubbleComponent = this$LeaveBubbleComponent_0;
  }
  Coroutine$LeaveBubbleComponent$doJoin$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LeaveBubbleComponent$doJoin$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LeaveBubbleComponent$doJoin$lambda.prototype.constructor = Coroutine$LeaveBubbleComponent$doJoin$lambda;
  Coroutine$LeaveBubbleComponent$doJoin$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = leaveBubble(this.local$this$LeaveBubbleComponent.state.userId, this.local$this$LeaveBubbleComponent.state.bubbleName, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function LeaveBubbleComponent$doJoin$lambda_1(this$LeaveBubbleComponent) {
    return function (err) {
      this$LeaveBubbleComponent.leaveFailed_0(err);
      return Unit;
    };
  }
  LeaveBubbleComponent.prototype.doJoin_0 = function () {
    this.setState_hgm6vj$(LeaveBubbleComponent$doJoin$lambda);
    async(LeaveBubbleComponent$doJoin$lambda_0(this)).catch(LeaveBubbleComponent$doJoin$lambda_1(this));
  };
  function LeaveBubbleComponent$leaveFailed$lambda(closure$err) {
    return function ($receiver) {
      $receiver.disabled = false;
      $receiver.infoMessage = '';
      $receiver.errorMessage = closure$err.message;
      return Unit;
    };
  }
  function LeaveBubbleComponent$leaveFailed$lambda_0($receiver) {
    $receiver.disabled = false;
    $receiver.infoMessage = '';
    $receiver.errorMessage = 'Leaving Bubble failed: please reload page and try again';
    return Unit;
  }
  LeaveBubbleComponent.prototype.leaveFailed_0 = function (err) {
    if (Kotlin.isType(err, LeavingBubbleFailedException)) {
      this.setState_hgm6vj$(LeaveBubbleComponent$leaveFailed$lambda(err));
    }
     else {
      console.error('Leaving Bubble failed', err);
      this.setState_hgm6vj$(LeaveBubbleComponent$leaveFailed$lambda_0);
    }
  };
  LeaveBubbleComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LeaveBubbleComponent',
    interfaces: [ReactDOMComponent]
  };
  function LeaveBubbleFormState(userId, bubbleName, disabled, infoMessage, errorMessage) {
    this.userId = userId;
    this.bubbleName = bubbleName;
    this.disabled = disabled;
    this.infoMessage = infoMessage;
    this.errorMessage = errorMessage;
  }
  LeaveBubbleFormState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LeaveBubbleFormState',
    interfaces: []
  };
  function LoginComponent() {
    LoginComponent$Companion_getInstance();
    ReactDOMComponent.call(this);
    this.state = new LoginFormState('', '', false, '');
  }
  function LoginComponent$Companion() {
    LoginComponent$Companion_instance = this;
  }
  LoginComponent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [ReactComponentSpec]
  };
  var LoginComponent$Companion_instance = null;
  function LoginComponent$Companion_getInstance() {
    if (LoginComponent$Companion_instance === null) {
      new LoginComponent$Companion();
    }
    return LoginComponent$Companion_instance;
  }
  function LoginComponent$render$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Login');
    return Unit;
  }
  function LoginComponent$render$lambda$lambda$lambda$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.login = get_inputValue(closure$it);
      return Unit;
    };
  }
  function LoginComponent$render$lambda$lambda$lambda$lambda$lambda(this$LoginComponent) {
    return function (it) {
      this$LoginComponent.setState_hgm6vj$(LoginComponent$render$lambda$lambda$lambda$lambda$lambda$lambda(it));
      return Unit;
    };
  }
  function LoginComponent$render$lambda$lambda$lambda$lambda(this$LoginComponent) {
    return function ($receiver) {
      $receiver.value = this$LoginComponent.state.login;
      $receiver.placeholder = 'Login';
      $receiver.disabled = this$LoginComponent.state.disabled;
      set_onChangeFunction($receiver, LoginComponent$render$lambda$lambda$lambda$lambda$lambda(this$LoginComponent));
      return Unit;
    };
  }
  function LoginComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$it) {
    return function ($receiver) {
      $receiver.password = get_inputValue(closure$it);
      return Unit;
    };
  }
  function LoginComponent$render$lambda$lambda$lambda$lambda$lambda_0(this$LoginComponent) {
    return function (it) {
      this$LoginComponent.setState_hgm6vj$(LoginComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_0(it));
      return Unit;
    };
  }
  function LoginComponent$render$lambda$lambda$lambda$lambda_0(this$LoginComponent) {
    return function ($receiver) {
      $receiver.value = this$LoginComponent.state.password;
      $receiver.placeholder = 'Password';
      $receiver.disabled = this$LoginComponent.state.disabled;
      set_onChangeFunction($receiver, LoginComponent$render$lambda$lambda$lambda$lambda$lambda_0(this$LoginComponent));
      return Unit;
    };
  }
  function LoginComponent$render$lambda$lambda$lambda_0(this$LoginComponent) {
    return function ($receiver) {
      input($receiver, InputType.text, void 0, void 0, 'login', void 0, LoginComponent$render$lambda$lambda$lambda$lambda(this$LoginComponent));
      input($receiver, InputType.password, void 0, void 0, 'password', void 0, LoginComponent$render$lambda$lambda$lambda$lambda_0(this$LoginComponent));
      return Unit;
    };
  }
  function LoginComponent$render$lambda$lambda$lambda$lambda_1(closure$message) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$message);
      return Unit;
    };
  }
  function LoginComponent$render$lambda$lambda$lambda$lambda_2(this$LoginComponent) {
    return function (it) {
      it.preventDefault();
      this$LoginComponent.doLogin_0();
      return Unit;
    };
  }
  function LoginComponent$render$lambda$lambda$lambda_1(this$LoginComponent) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Login');
      $receiver.disabled = this$LoginComponent.state.disabled;
      set_onClickFunction($receiver, LoginComponent$render$lambda$lambda$lambda$lambda_2(this$LoginComponent));
      return Unit;
    };
  }
  function LoginComponent$render$lambda$lambda(this$render, this$LoginComponent) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      legend(this$render, void 0, LoginComponent$render$lambda$lambda$lambda);
      fieldSet($receiver, 'pure-group', LoginComponent$render$lambda$lambda$lambda_0(this$LoginComponent));
      if ((tmp$_0 = (tmp$ = this$LoginComponent.state.errorMessage) != null ? tmp$.length > 0 ? tmp$ : null : null) != null) {
        label($receiver, void 0, LoginComponent$render$lambda$lambda$lambda$lambda_1(tmp$_0));
      }
      button($receiver, void 0, void 0, void 0, 'pure-button pure-button-primary', LoginComponent$render$lambda$lambda$lambda_1(this$LoginComponent));
      return Unit;
    };
  }
  function LoginComponent$render$lambda(this$render, this$LoginComponent) {
    return function ($receiver) {
      form($receiver, void 0, void 0, void 0, 'pure-form pure-form-stacked', LoginComponent$render$lambda$lambda(this$render, this$LoginComponent));
      return Unit;
    };
  }
  LoginComponent.prototype.render_vhjzqq$ = function ($receiver) {
    div($receiver, void 0, LoginComponent$render$lambda($receiver, this));
  };
  function LoginComponent$doLogin$lambda($receiver) {
    $receiver.disabled = true;
    return Unit;
  }
  function LoginComponent$doLogin$lambda_0(this$LoginComponent_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$LoginComponent$doLogin$lambda(this$LoginComponent_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$LoginComponent$doLogin$lambda(this$LoginComponent_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$LoginComponent = this$LoginComponent_0;
  }
  Coroutine$LoginComponent$doLogin$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoginComponent$doLogin$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoginComponent$doLogin$lambda.prototype.constructor = Coroutine$LoginComponent$doLogin$lambda;
  Coroutine$LoginComponent$doLogin$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = login(this.local$this$LoginComponent.state.login, this.local$this$LoginComponent.state.password, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            var user = this.result_0;
            return this.local$this$LoginComponent.loggedIn_0(user), Unit;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function LoginComponent$doLogin$lambda_1(this$LoginComponent) {
    return function (err) {
      this$LoginComponent.loginFailed_0(err);
      return Unit;
    };
  }
  LoginComponent.prototype.doLogin_0 = function () {
    this.setState_hgm6vj$(LoginComponent$doLogin$lambda);
    async(LoginComponent$doLogin$lambda_0(this)).catch(LoginComponent$doLogin$lambda_1(this));
  };
  LoginComponent.prototype.loggedIn_0 = function (user) {
    this.props.userAssigned(user);
  };
  function LoginComponent$loginFailed$lambda(closure$err) {
    return function ($receiver) {
      $receiver.disabled = false;
      $receiver.errorMessage = closure$err.message;
      return Unit;
    };
  }
  function LoginComponent$loginFailed$lambda_0($receiver) {
    $receiver.disabled = false;
    $receiver.errorMessage = 'Login failed: please reload page and try again';
    return Unit;
  }
  LoginComponent.prototype.loginFailed_0 = function (err) {
    if (Kotlin.isType(err, LoginOrRegisterFailedException)) {
      this.setState_hgm6vj$(LoginComponent$loginFailed$lambda(err));
    }
     else {
      console.error('Login failed', err);
      this.setState_hgm6vj$(LoginComponent$loginFailed$lambda_0);
    }
  };
  LoginComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoginComponent',
    interfaces: [ReactDOMComponent]
  };
  function LoginFormState(login, password, disabled, errorMessage) {
    this.login = login;
    this.password = password;
    this.disabled = disabled;
    this.errorMessage = errorMessage;
  }
  LoginFormState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoginFormState',
    interfaces: []
  };
  function NavBarComponent() {
    NavBarComponent$Companion_getInstance();
    ReactDOMComponent.call(this);
    this.state = new NavBarComponent$NavBarState('');
    this.pollerHandler_0 = NavBarComponent$pollerHandler$lambda(this);
  }
  function NavBarComponent$Companion() {
    NavBarComponent$Companion_instance = this;
  }
  NavBarComponent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [ReactComponentSpec]
  };
  var NavBarComponent$Companion_instance = null;
  function NavBarComponent$Companion_getInstance() {
    if (NavBarComponent$Companion_instance === null) {
      new NavBarComponent$Companion();
    }
    return NavBarComponent$Companion_instance;
  }
  NavBarComponent.prototype.componentDidMount = function () {
    var tmp$;
    if ((tmp$ = this.props.poller) != null) {
      tmp$.listeners.add_11rb$(this.pollerHandler_0);
      tmp$.start();
    }
    ReactDOMComponent.prototype.componentDidMount.call(this);
  };
  NavBarComponent.prototype.componentWillUnmount = function () {
    var tmp$, tmp$_0;
    ReactDOMComponent.prototype.componentWillUnmount.call(this);
    (tmp$_0 = (tmp$ = this.props.poller) != null ? tmp$.listeners : null) != null ? tmp$_0.remove_11rb$(this.pollerHandler_0) : null;
  };
  function NavBarComponent$render$lambda$lambda$lambda($receiver) {
    $receiver.newMessages = Polling$NewMessages$None_getInstance();
    return Unit;
  }
  function NavBarComponent$render$lambda$lambda(this$NavBarComponent) {
    return function () {
      var tmp$;
      (tmp$ = this$NavBarComponent.props.poller) != null ? (tmp$.start(), Unit) : null;
      this$NavBarComponent.timeline_0();
      this$NavBarComponent.setState_hgm6vj$(NavBarComponent$render$lambda$lambda$lambda);
      return Unit;
    };
  }
  function NavBarComponent$render$lambda$lambda_0(this$NavBarComponent) {
    return function () {
      this$NavBarComponent.postNew_0();
      return Unit;
    };
  }
  function NavBarComponent$render$lambda$lambda_1(this$NavBarComponent) {
    return function () {
      this$NavBarComponent.logout_0();
      return Unit;
    };
  }
  function NavBarComponent$render$lambda$lambda_2(this$NavBarComponent) {
    return function () {
      this$NavBarComponent.joinBubble_0();
      return Unit;
    };
  }
  function NavBarComponent$render$lambda$lambda_3(this$NavBarComponent) {
    return function () {
      this$NavBarComponent.leaveBubble_0();
      return Unit;
    };
  }
  function NavBarComponent$render$lambda$lambda_4(this$NavBarComponent) {
    return function () {
      this$NavBarComponent.showBubble_0();
      return Unit;
    };
  }
  function NavBarComponent$render$lambda$lambda_5(this$NavBarComponent) {
    return function () {
      this$NavBarComponent.register_0();
      return Unit;
    };
  }
  function NavBarComponent$render$lambda$lambda_6(this$NavBarComponent) {
    return function () {
      this$NavBarComponent.login_0();
      return Unit;
    };
  }
  function NavBarComponent$render$lambda(closure$newMessages, this$NavBarComponent, closure$user) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      tmp$ = closure$newMessages;
      if (equals(tmp$, Polling$NewMessages$None_getInstance()))
        tmp$_0 = '';
      else if (Kotlin.isType(tmp$, Polling$NewMessages$Few))
        tmp$_0 = '(' + closure$newMessages.n + ')';
      else if (Kotlin.isType(tmp$, Polling$NewMessages$MoreThan))
        tmp$_0 = '(' + closure$newMessages.n + '+';
      else
        tmp$_0 = Kotlin.noWhenBranchMatched();
      var timelineText = 'Timeline' + tmp$_0;
      this$NavBarComponent.navItem_0($receiver, timelineText, NavBarComponent$render$lambda$lambda(this$NavBarComponent));
      if (closure$user != null) {
        this$NavBarComponent.navItem_0($receiver, 'New thought', NavBarComponent$render$lambda$lambda_0(this$NavBarComponent));
        var $receiver_0 = closure$user.displayName;
        tmp$_2 = 'Sign out, ' + ((tmp$_1 = !isBlank($receiver_0) ? $receiver_0 : null) != null ? tmp$_1 : closure$user.userId);
        tmp$_3 = NavBarComponent$render$lambda$lambda_1(this$NavBarComponent);
        this$NavBarComponent.navItem_0($receiver, tmp$_2, tmp$_3);
        this$NavBarComponent.navItem_0($receiver, 'Join Bubbles', NavBarComponent$render$lambda$lambda_2(this$NavBarComponent));
        this$NavBarComponent.navItem_0($receiver, 'Leave Bubbles', NavBarComponent$render$lambda$lambda_3(this$NavBarComponent));
        this$NavBarComponent.navItem_0($receiver, 'Show Bubbles', NavBarComponent$render$lambda$lambda_4(this$NavBarComponent));
      }
       else {
        this$NavBarComponent.navItem_0($receiver, 'Sign up', NavBarComponent$render$lambda$lambda_5(this$NavBarComponent));
        this$NavBarComponent.navItem_0($receiver, 'Sign in', NavBarComponent$render$lambda$lambda_6(this$NavBarComponent));
      }
      return Unit;
    };
  }
  NavBarComponent.prototype.render_vhjzqq$ = function ($receiver) {
    var user = this.props.user;
    var newMessages = this.state.newMessages;
    ul($receiver, 'nav-list', NavBarComponent$render$lambda(newMessages, this, user));
  };
  NavBarComponent.prototype.timeline_0 = function () {
    this.props.handler(MainView$Home_getInstance());
  };
  NavBarComponent.prototype.register_0 = function () {
    this.props.handler(MainView$Register_getInstance());
  };
  NavBarComponent.prototype.login_0 = function () {
    this.props.handler(MainView$Login_getInstance());
  };
  function NavBarComponent$logout$lambda(this$NavBarComponent_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$NavBarComponent$logout$lambda(this$NavBarComponent_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$NavBarComponent$logout$lambda(this$NavBarComponent_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$NavBarComponent = this$NavBarComponent_0;
  }
  Coroutine$NavBarComponent$logout$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$NavBarComponent$logout$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$NavBarComponent$logout$lambda.prototype.constructor = Coroutine$NavBarComponent$logout$lambda;
  Coroutine$NavBarComponent$logout$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = logoutUser(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$this$NavBarComponent.props.logoutHandler();
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  NavBarComponent.prototype.logout_0 = function () {
    launch(NavBarComponent$logout$lambda(this));
  };
  NavBarComponent.prototype.joinBubble_0 = function () {
    this.props.handler(MainView$JoinBubble_getInstance());
  };
  NavBarComponent.prototype.leaveBubble_0 = function () {
    this.props.handler(MainView$LeaveBubble_getInstance());
  };
  NavBarComponent.prototype.showBubble_0 = function () {
    this.props.handler(MainView$ShowBubble_getInstance());
  };
  NavBarComponent.prototype.postNew_0 = function () {
    this.props.handler(MainView$PostThought_getInstance());
  };
  function NavBarComponent$navItem$lambda() {
    return Unit;
  }
  function NavBarComponent$navItem$lambda$lambda$lambda(closure$function) {
    return function (it) {
      closure$function();
      return Unit;
    };
  }
  function NavBarComponent$navItem$lambda$lambda(closure$title, closure$function) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$title);
      set_onClickFunction($receiver, NavBarComponent$navItem$lambda$lambda$lambda(closure$function));
      return Unit;
    };
  }
  function NavBarComponent$navItem$lambda_0(closure$title, closure$function) {
    return function ($receiver) {
      a($receiver, 'javascript:void(0)', void 0, 'pure-button', NavBarComponent$navItem$lambda$lambda(closure$title, closure$function));
      return Unit;
    };
  }
  NavBarComponent.prototype.navItem_0 = function ($receiver, title, function_0) {
    if (function_0 === void 0)
      function_0 = NavBarComponent$navItem$lambda;
    li($receiver, 'nav-item', NavBarComponent$navItem$lambda_0(title, function_0));
  };
  function NavBarComponent$NavBarState(bubbleName, newMessages) {
    if (newMessages === void 0)
      newMessages = Polling$NewMessages$None_getInstance();
    this.bubbleName = bubbleName;
    this.newMessages = newMessages;
  }
  NavBarComponent$NavBarState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NavBarState',
    interfaces: []
  };
  function NavBarComponent$NavBarHandlerProps() {
    RProps.call(this);
    this.user = null;
    this.logoutHandler = NavBarComponent$NavBarHandlerProps$logoutHandler$lambda;
    this.handler = NavBarComponent$NavBarHandlerProps$handler$lambda;
    this.poller = null;
  }
  function NavBarComponent$NavBarHandlerProps$logoutHandler$lambda() {
    return Unit;
  }
  function NavBarComponent$NavBarHandlerProps$handler$lambda(it) {
    return Unit;
  }
  NavBarComponent$NavBarHandlerProps.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NavBarHandlerProps',
    interfaces: [RProps]
  };
  function NavBarComponent$pollerHandler$lambda$lambda(closure$count) {
    return function ($receiver) {
      $receiver.newMessages = closure$count;
      return Unit;
    };
  }
  function NavBarComponent$pollerHandler$lambda(this$NavBarComponent) {
    return function (count) {
      this$NavBarComponent.setState_hgm6vj$(NavBarComponent$pollerHandler$lambda$lambda(count));
      return Unit;
    };
  }
  NavBarComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NavBarComponent',
    interfaces: [ReactDOMComponent]
  };
  function NewThoughtComponent() {
    NewThoughtComponent$Companion_getInstance();
    ReactDOMComponent.call(this);
    this.state = new NewThoughtComponent$State();
  }
  function NewThoughtComponent$Companion() {
    NewThoughtComponent$Companion_instance = this;
  }
  NewThoughtComponent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [ReactComponentSpec]
  };
  var NewThoughtComponent$Companion_instance = null;
  function NewThoughtComponent$Companion_getInstance() {
    if (NewThoughtComponent$Companion_instance === null) {
      new NewThoughtComponent$Companion();
    }
    return NewThoughtComponent$Companion_instance;
  }
  function NewThoughtComponent$render$lambda$lambda(this$NewThoughtComponent) {
    return function ($receiver) {
      if (this$NewThoughtComponent.props.replyTo == null) {
        $receiver.unaryPlus_pdl1vz$('New thought');
      }
       else {
        $receiver.unaryPlus_pdl1vz$('Reply');
      }
      return Unit;
    };
  }
  function NewThoughtComponent$render$lambda$lambda$lambda(closure$replyTo) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('reply to ' + closure$replyTo.userId);
      return Unit;
    };
  }
  function NewThoughtComponent$render$lambda$lambda$lambda_0(closure$bubble) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('in bubble ' + closure$bubble.name);
      return Unit;
    };
  }
  function NewThoughtComponent$render$lambda$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.text = get_inputValue(closure$it);
      return Unit;
    };
  }
  function NewThoughtComponent$render$lambda$lambda$lambda_1(this$NewThoughtComponent) {
    return function (it) {
      this$NewThoughtComponent.setState_hgm6vj$(NewThoughtComponent$render$lambda$lambda$lambda$lambda(it));
      return Unit;
    };
  }
  function NewThoughtComponent$render$lambda$lambda_0(this$NewThoughtComponent) {
    return function ($receiver) {
      $receiver.placeholder = 'Your thought...';
      set_onChangeFunction($receiver, NewThoughtComponent$render$lambda$lambda$lambda_1(this$NewThoughtComponent));
      return Unit;
    };
  }
  function NewThoughtComponent$render$lambda$lambda$lambda$lambda_0(closure$it) {
    return function ($receiver) {
      $receiver.bubbleName = get_inputValue(closure$it);
      return Unit;
    };
  }
  function NewThoughtComponent$render$lambda$lambda$lambda_2(this$NewThoughtComponent) {
    return function (it) {
      this$NewThoughtComponent.setState_hgm6vj$(NewThoughtComponent$render$lambda$lambda$lambda$lambda_0(it));
      return Unit;
    };
  }
  function NewThoughtComponent$render$lambda$lambda_1(this$NewThoughtComponent) {
    return function ($receiver) {
      $receiver.placeholder = 'Think in a Bubble...';
      set_onChangeFunction($receiver, NewThoughtComponent$render$lambda$lambda$lambda_2(this$NewThoughtComponent));
      return Unit;
    };
  }
  function NewThoughtComponent$render$lambda$lambda$lambda_3(closure$message) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$message);
      return Unit;
    };
  }
  function NewThoughtComponent$render$lambda$lambda$lambda_4(this$NewThoughtComponent) {
    return function (it) {
      it.preventDefault();
      this$NewThoughtComponent.doPostThought_0();
      return Unit;
    };
  }
  function NewThoughtComponent$render$lambda$lambda_2(this$NewThoughtComponent) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Post');
      set_onClickFunction($receiver, NewThoughtComponent$render$lambda$lambda$lambda_4(this$NewThoughtComponent));
      return Unit;
    };
  }
  function NewThoughtComponent$render$lambda(this$NewThoughtComponent, this$render) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1;
      legend(this$render, void 0, NewThoughtComponent$render$lambda$lambda(this$NewThoughtComponent));
      if ((tmp$ = this$NewThoughtComponent.props.replyTo) != null) {
        div_0($receiver, void 0, NewThoughtComponent$render$lambda$lambda$lambda(tmp$));
      }
      if ((tmp$_0 = this$NewThoughtComponent.props.inBubble) != null) {
        div_0($receiver, void 0, NewThoughtComponent$render$lambda$lambda$lambda_0(tmp$_0));
      }
      textArea($receiver, void 0, void 0, void 0, 'pure-input-1-2', NewThoughtComponent$render$lambda$lambda_0(this$NewThoughtComponent));
      input($receiver, void 0, void 0, void 0, void 0, 'pure-input-1-2', NewThoughtComponent$render$lambda$lambda_1(this$NewThoughtComponent));
      if ((tmp$_1 = this$NewThoughtComponent.state.errorMessage) != null) {
        p($receiver, void 0, NewThoughtComponent$render$lambda$lambda$lambda_3(tmp$_1));
      }
      button($receiver, void 0, void 0, void 0, 'pure-button pure-button-primary', NewThoughtComponent$render$lambda$lambda_2(this$NewThoughtComponent));
      return Unit;
    };
  }
  NewThoughtComponent.prototype.render_vhjzqq$ = function ($receiver) {
    form_0($receiver, void 0, void 0, void 0, 'pure-form pure-form-stacked', NewThoughtComponent$render$lambda(this, $receiver));
  };
  function NewThoughtComponent$doPostThought$lambda(this$NewThoughtComponent_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$NewThoughtComponent$doPostThought$lambda(this$NewThoughtComponent_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$NewThoughtComponent$doPostThought$lambda(this$NewThoughtComponent_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$NewThoughtComponent = this$NewThoughtComponent_0;
  }
  Coroutine$NewThoughtComponent$doPostThought$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$NewThoughtComponent$doPostThought$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$NewThoughtComponent$doPostThought$lambda.prototype.constructor = Coroutine$NewThoughtComponent$doPostThought$lambda;
  Coroutine$NewThoughtComponent$doPostThought$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = postThoughtPrepare(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            var token = this.result_0;
            this.state_0 = 3;
            this.result_0 = postThought((tmp$ = this.local$this$NewThoughtComponent.props.replyTo) != null ? tmp$.id : null, this.local$this$NewThoughtComponent.state.text, this.local$this$NewThoughtComponent.state.bubbleName, token, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            var thought = this.result_0;
            return this.local$this$NewThoughtComponent.onSubmitted_0(thought), Unit;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function NewThoughtComponent$doPostThought$lambda_0(this$NewThoughtComponent) {
    return function (err) {
      this$NewThoughtComponent.onFailed_0(err);
      return Unit;
    };
  }
  NewThoughtComponent.prototype.doPostThought_0 = function () {
    async(NewThoughtComponent$doPostThought$lambda(this)).catch(NewThoughtComponent$doPostThought$lambda_0(this));
  };
  function NewThoughtComponent$onSubmitted$lambda($receiver) {
    $receiver.errorMessage = null;
    return Unit;
  }
  NewThoughtComponent.prototype.onSubmitted_0 = function (thought) {
    this.setState_hgm6vj$(NewThoughtComponent$onSubmitted$lambda);
    this.props.showThought(thought);
  };
  function NewThoughtComponent$onFailed$lambda(closure$err) {
    return function ($receiver) {
      $receiver.errorMessage = closure$err.message + toString(closure$err.cause);
      return Unit;
    };
  }
  NewThoughtComponent.prototype.onFailed_0 = function (err) {
    this.setState_hgm6vj$(NewThoughtComponent$onFailed$lambda(err));
  };
  function NewThoughtComponent$State(text, bubbleName, errorMessage) {
    if (text === void 0)
      text = '';
    if (bubbleName === void 0)
      bubbleName = '';
    if (errorMessage === void 0)
      errorMessage = null;
    this.text = text;
    this.bubbleName = bubbleName;
    this.errorMessage = errorMessage;
  }
  NewThoughtComponent$State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: []
  };
  function NewThoughtComponent$Props(inBubble, replyTo, replyToUser, showThought) {
    if (replyTo === void 0)
      replyTo = null;
    if (replyToUser === void 0)
      replyToUser = null;
    if (showThought === void 0)
      showThought = NewThoughtComponent$NewThoughtComponent$Props_init$lambda;
    RProps.call(this);
    this.inBubble = inBubble;
    this.replyTo = replyTo;
    this.replyToUser = replyToUser;
    this.showThought = showThought;
  }
  function NewThoughtComponent$NewThoughtComponent$Props_init$lambda(it) {
    return Unit;
  }
  NewThoughtComponent$Props.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Props',
    interfaces: [RProps]
  };
  NewThoughtComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NewThoughtComponent',
    interfaces: [ReactDOMComponent]
  };
  function Polling(period) {
    if (period === void 0)
      period = 20000;
    this.period = period;
    this.timerId_0 = 0;
    this.lastTime = Kotlin.Long.fromNumber((new Date()).getTime());
    this.listeners = ArrayList_init();
  }
  function Polling$start$lambda(this$Polling) {
    return function () {
      this$Polling.tick();
      return Unit;
    };
  }
  Polling.prototype.start = function () {
    this.lastTime = Kotlin.Long.fromNumber((new Date()).getTime());
    var tmp$;
    tmp$ = this.listeners.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element(Polling$NewMessages$None_getInstance());
    }
    if (this.timerId_0 === 0) {
      this.stop();
      this.timerId_0 = window.setInterval(Polling$start$lambda(this), this.period);
    }
  };
  Polling.prototype.stop = function () {
    if (this.timerId_0 > 0) {
      window.clearInterval(this.timerId_0);
      this.timerId_0 = 0;
    }
  };
  function Polling$tick$lambda(this$Polling_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Polling$tick$lambda(this$Polling_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Polling$tick$lambda(this$Polling_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Polling = this$Polling_0;
  }
  Coroutine$Polling$tick$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Polling$tick$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Polling$tick$lambda.prototype.constructor = Coroutine$Polling$tick$lambda;
  Coroutine$Polling$tick$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = pollFromLastTime(this.local$this$Polling.lastTime.toString(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            var newMessagesText = this.result_0;
            if (equals(newMessagesText, '0') || isBlank(newMessagesText))
              tmp$ = Polling$NewMessages$None_getInstance();
            else if (endsWith(newMessagesText, '+'))
              tmp$ = new Polling$NewMessages$MoreThan(toInt(removeSuffix(newMessagesText, '+')));
            else
              tmp$ = new Polling$NewMessages$Few(toInt(newMessagesText));
            var newMessages = tmp$;
            var tmp$_0;
            tmp$_0 = this.local$this$Polling.listeners.iterator();
            while (tmp$_0.hasNext()) {
              var element = tmp$_0.next();
              element(newMessages);
            }

            return Unit;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  Polling.prototype.tick = function () {
    launch(Polling$tick$lambda(this));
  };
  function Polling$NewMessages() {
  }
  function Polling$NewMessages$None() {
    Polling$NewMessages$None_instance = this;
    Polling$NewMessages.call(this);
  }
  Polling$NewMessages$None.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'None',
    interfaces: [Polling$NewMessages]
  };
  var Polling$NewMessages$None_instance = null;
  function Polling$NewMessages$None_getInstance() {
    if (Polling$NewMessages$None_instance === null) {
      new Polling$NewMessages$None();
    }
    return Polling$NewMessages$None_instance;
  }
  function Polling$NewMessages$Few(n) {
    Polling$NewMessages.call(this);
    this.n = n;
  }
  Polling$NewMessages$Few.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Few',
    interfaces: [Polling$NewMessages]
  };
  Polling$NewMessages$Few.prototype.component1 = function () {
    return this.n;
  };
  Polling$NewMessages$Few.prototype.copy_za3lpa$ = function (n) {
    return new Polling$NewMessages$Few(n === void 0 ? this.n : n);
  };
  Polling$NewMessages$Few.prototype.toString = function () {
    return 'Few(n=' + Kotlin.toString(this.n) + ')';
  };
  Polling$NewMessages$Few.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.n) | 0;
    return result;
  };
  Polling$NewMessages$Few.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.n, other.n))));
  };
  function Polling$NewMessages$MoreThan(n) {
    Polling$NewMessages.call(this);
    this.n = n;
  }
  Polling$NewMessages$MoreThan.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MoreThan',
    interfaces: [Polling$NewMessages]
  };
  Polling$NewMessages$MoreThan.prototype.component1 = function () {
    return this.n;
  };
  Polling$NewMessages$MoreThan.prototype.copy_za3lpa$ = function (n) {
    return new Polling$NewMessages$MoreThan(n === void 0 ? this.n : n);
  };
  Polling$NewMessages$MoreThan.prototype.toString = function () {
    return 'MoreThan(n=' + Kotlin.toString(this.n) + ')';
  };
  Polling$NewMessages$MoreThan.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.n) | 0;
    return result;
  };
  Polling$NewMessages$MoreThan.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.n, other.n))));
  };
  Polling$NewMessages.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NewMessages',
    interfaces: []
  };
  Polling.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Polling',
    interfaces: []
  };
  var ReactMarkdown;
  function ReactMarkdownProps(source) {
    if (source === void 0)
      source = '';
    RProps.call(this);
    this.source = source;
  }
  ReactMarkdownProps.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReactMarkdownProps',
    interfaces: [RProps]
  };
  function ReactMarkdownComponent() {
    ReactMarkdownComponent_instance = this;
    ReactExternalComponentSpec.call(this, ReactMarkdown);
  }
  ReactMarkdownComponent.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ReactMarkdownComponent',
    interfaces: [ReactExternalComponentSpec]
  };
  var ReactMarkdownComponent_instance = null;
  function ReactMarkdownComponent_getInstance() {
    if (ReactMarkdownComponent_instance === null) {
      new ReactMarkdownComponent();
    }
    return ReactMarkdownComponent_instance;
  }
  function RegisterComponent() {
    RegisterComponent$Companion_getInstance();
    ReactDOMComponent.call(this);
    this.state = new RegisterFormState('', '', '', '', '', null, false);
  }
  function RegisterComponent$Companion() {
    RegisterComponent$Companion_instance = this;
  }
  RegisterComponent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [ReactComponentSpec]
  };
  var RegisterComponent$Companion_instance = null;
  function RegisterComponent$Companion_getInstance() {
    if (RegisterComponent$Companion_instance === null) {
      new RegisterComponent$Companion();
    }
    return RegisterComponent$Companion_instance;
  }
  function RegisterComponent$render$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Register');
    return Unit;
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda(closure$e) {
    return function ($receiver) {
      $receiver.login = get_inputValue(closure$e);
      return Unit;
    };
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda$lambda(this$RegisterComponent) {
    return function (e) {
      this$RegisterComponent.setState_hgm6vj$(RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda(e));
      return Unit;
    };
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda(this$RegisterComponent) {
    return function ($receiver) {
      $receiver.value = this$RegisterComponent.state.login;
      $receiver.placeholder = 'Login';
      $receiver.disabled = this$RegisterComponent.state.disabled;
      set_onChangeFunction($receiver, RegisterComponent$render$lambda$lambda$lambda$lambda$lambda(this$RegisterComponent));
      return Unit;
    };
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$e) {
    return function ($receiver) {
      $receiver.email = get_inputValue(closure$e);
      return Unit;
    };
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda$lambda_0(this$RegisterComponent) {
    return function (e) {
      this$RegisterComponent.setState_hgm6vj$(RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_0(e));
      return Unit;
    };
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda_0(this$RegisterComponent) {
    return function ($receiver) {
      $receiver.value = this$RegisterComponent.state.email;
      $receiver.placeholder = 'Email';
      $receiver.disabled = this$RegisterComponent.state.disabled;
      set_onChangeFunction($receiver, RegisterComponent$render$lambda$lambda$lambda$lambda$lambda_0(this$RegisterComponent));
      return Unit;
    };
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$e) {
    return function ($receiver) {
      $receiver.phoneNumber = get_inputValue(closure$e);
      return Unit;
    };
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda$lambda_1(this$RegisterComponent) {
    return function (e) {
      this$RegisterComponent.setState_hgm6vj$(RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_1(e));
      return Unit;
    };
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda_1(this$RegisterComponent) {
    return function ($receiver) {
      $receiver.value = this$RegisterComponent.state.phoneNumber;
      $receiver.placeholder = 'Phone number';
      $receiver.disabled = this$RegisterComponent.state.disabled;
      set_onChangeFunction($receiver, RegisterComponent$render$lambda$lambda$lambda$lambda$lambda_1(this$RegisterComponent));
      return Unit;
    };
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$e) {
    return function ($receiver) {
      $receiver.password = get_inputValue(closure$e);
      return Unit;
    };
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda$lambda_2(this$RegisterComponent) {
    return function (e) {
      this$RegisterComponent.setState_hgm6vj$(RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_2(e));
      return Unit;
    };
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda_2(this$RegisterComponent) {
    return function ($receiver) {
      $receiver.value = this$RegisterComponent.state.password;
      $receiver.placeholder = 'Password';
      $receiver.disabled = this$RegisterComponent.state.disabled;
      set_onChangeFunction($receiver, RegisterComponent$render$lambda$lambda$lambda$lambda$lambda_2(this$RegisterComponent));
      return Unit;
    };
  }
  function RegisterComponent$render$lambda$lambda$lambda_0(this$RegisterComponent) {
    return function ($receiver) {
      input($receiver, InputType.text, void 0, void 0, 'login', void 0, RegisterComponent$render$lambda$lambda$lambda$lambda(this$RegisterComponent));
      input($receiver, InputType.text, void 0, void 0, 'email', void 0, RegisterComponent$render$lambda$lambda$lambda$lambda_0(this$RegisterComponent));
      input($receiver, InputType.text, void 0, void 0, 'phoneNumber', void 0, RegisterComponent$render$lambda$lambda$lambda$lambda_1(this$RegisterComponent));
      input($receiver, InputType.password, void 0, void 0, 'password', void 0, RegisterComponent$render$lambda$lambda$lambda$lambda_2(this$RegisterComponent));
      return Unit;
    };
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$e) {
    return function ($receiver) {
      $receiver.displayName = get_inputValue(closure$e);
      return Unit;
    };
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda$lambda_3(this$RegisterComponent) {
    return function (e) {
      this$RegisterComponent.setState_hgm6vj$(RegisterComponent$render$lambda$lambda$lambda$lambda$lambda$lambda_3(e));
      return Unit;
    };
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda_3(this$RegisterComponent) {
    return function ($receiver) {
      $receiver.value = this$RegisterComponent.state.displayName;
      $receiver.placeholder = 'Display name';
      $receiver.disabled = this$RegisterComponent.state.disabled;
      set_onChangeFunction($receiver, RegisterComponent$render$lambda$lambda$lambda$lambda$lambda_3(this$RegisterComponent));
      return Unit;
    };
  }
  function RegisterComponent$render$lambda$lambda$lambda_1(this$RegisterComponent) {
    return function ($receiver) {
      input($receiver, InputType.text, void 0, void 0, 'displayName', void 0, RegisterComponent$render$lambda$lambda$lambda$lambda_3(this$RegisterComponent));
      return Unit;
    };
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda_4(closure$message) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$message);
      return Unit;
    };
  }
  function RegisterComponent$render$lambda$lambda$lambda$lambda_5(this$RegisterComponent) {
    return function (it) {
      this$RegisterComponent.doRegister_0();
      it.preventDefault();
      return Unit;
    };
  }
  function RegisterComponent$render$lambda$lambda$lambda_2(this$RegisterComponent) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Register');
      $receiver.disabled = this$RegisterComponent.state.disabled;
      set_onClickFunction($receiver, RegisterComponent$render$lambda$lambda$lambda$lambda_5(this$RegisterComponent));
      return Unit;
    };
  }
  function RegisterComponent$render$lambda$lambda(this$render, this$RegisterComponent) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      legend(this$render, void 0, RegisterComponent$render$lambda$lambda$lambda);
      fieldSet($receiver, 'pure-group', RegisterComponent$render$lambda$lambda$lambda_0(this$RegisterComponent));
      fieldSet($receiver, 'pure-group', RegisterComponent$render$lambda$lambda$lambda_1(this$RegisterComponent));
      if ((tmp$_0 = (tmp$ = this$RegisterComponent.state.errorMessage) != null ? tmp$.length > 0 ? tmp$ : null : null) != null) {
        label($receiver, void 0, RegisterComponent$render$lambda$lambda$lambda$lambda_4(tmp$_0));
      }
      button($receiver, void 0, void 0, void 0, 'pure-button pure-button-primary', RegisterComponent$render$lambda$lambda$lambda_2(this$RegisterComponent));
      return Unit;
    };
  }
  function RegisterComponent$render$lambda(this$render, this$RegisterComponent) {
    return function ($receiver) {
      form($receiver, void 0, void 0, void 0, 'pure-form pure-form-stacked', RegisterComponent$render$lambda$lambda(this$render, this$RegisterComponent));
      return Unit;
    };
  }
  RegisterComponent.prototype.render_vhjzqq$ = function ($receiver) {
    div($receiver, void 0, RegisterComponent$render$lambda($receiver, this));
  };
  function RegisterComponent$doRegister$lambda($receiver) {
    $receiver.disabled = true;
    return Unit;
  }
  function RegisterComponent$doRegister$lambda_0(this$RegisterComponent_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$RegisterComponent$doRegister$lambda(this$RegisterComponent_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$RegisterComponent$doRegister$lambda(this$RegisterComponent_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$RegisterComponent = this$RegisterComponent_0;
    this.local$closure$continuation = void 0;
    this.local$this$RegisterComponent_0 = void 0;
  }
  Coroutine$RegisterComponent$doRegister$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$RegisterComponent$doRegister$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$RegisterComponent$doRegister$lambda.prototype.constructor = Coroutine$RegisterComponent$doRegister$lambda;
  Coroutine$RegisterComponent$doRegister$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var receiver = this.local$this$RegisterComponent.state;
            this.local$closure$continuation = this;
            this.local$this$RegisterComponent_0 = this.local$this$RegisterComponent;
            this.state_0 = 2;
            this.result_0 = register(receiver.login, receiver.password, receiver.displayName, receiver.email, receiver.phoneNumber, this.local$closure$continuation);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            var user = this.local$closure$continuation.result_0;
            this.local$this$RegisterComponent_0.registered_0(user);
            return Unit;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function RegisterComponent$doRegister$lambda_1(this$RegisterComponent) {
    return function (err) {
      this$RegisterComponent.registrationFailed_0(err);
      return Unit;
    };
  }
  RegisterComponent.prototype.doRegister_0 = function () {
    this.setState_hgm6vj$(RegisterComponent$doRegister$lambda);
    async(RegisterComponent$doRegister$lambda_0(this)).catch(RegisterComponent$doRegister$lambda_1(this));
  };
  RegisterComponent.prototype.registered_0 = function (user) {
    this.props.userAssigned(user);
  };
  function RegisterComponent$registrationFailed$lambda(closure$err) {
    return function ($receiver) {
      $receiver.errorMessage = closure$err.message;
      $receiver.disabled = false;
      return Unit;
    };
  }
  function RegisterComponent$registrationFailed$lambda_0($receiver) {
    $receiver.errorMessage = 'Registration failed';
    return Unit;
  }
  RegisterComponent.prototype.registrationFailed_0 = function (err) {
    if (Kotlin.isType(err, LoginOrRegisterFailedException)) {
      this.setState_hgm6vj$(RegisterComponent$registrationFailed$lambda(err));
    }
     else {
      console.log('Registration failed', err);
      this.setState_hgm6vj$(RegisterComponent$registrationFailed$lambda_0);
    }
  };
  RegisterComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RegisterComponent',
    interfaces: [ReactDOMComponent]
  };
  function RegisterFormState(login, displayName, password, email, phoneNumber, errorMessage, disabled) {
    this.login = login;
    this.displayName = displayName;
    this.password = password;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.errorMessage = errorMessage;
    this.disabled = disabled;
  }
  RegisterFormState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RegisterFormState',
    interfaces: []
  };
  function index(continuation) {
    return getAndParseResult('/', null, getCallableRef('parseIndexResponse', function (json) {
      return parseIndexResponse(json);
    }), continuation);
  }
  function register(userId, password, displayName, email, phoneNumber, continuation) {
    var $receiver = new URLSearchParams();
    $receiver.append('userId', userId);
    $receiver.append('password', password);
    $receiver.append('displayName', displayName);
    $receiver.append('email', email);
    $receiver.append('phoneNumber', phoneNumber);
    return postAndParseResult('/register', $receiver, getCallableRef('parseLoginOrRegisterResponse', function (json) {
      return parseLoginOrRegisterResponse(json);
    }), continuation);
  }
  function pollFromLastTime$lambda(json) {
    return json.count;
  }
  function pollFromLastTime(lastTime, continuation) {
    if (lastTime === void 0)
      lastTime = '';
    return getAndParseResult('/poll?lastTime=' + lastTime, null, pollFromLastTime$lambda, continuation);
  }
  function checkSession(continuation) {
    return getAndParseResult('/login', null, getCallableRef('parseLoginOrRegisterResponse', function (json) {
      return parseLoginOrRegisterResponse(json);
    }), continuation);
  }
  function login(userId, password, continuation) {
    var $receiver = new URLSearchParams();
    $receiver.append('userId', userId);
    $receiver.append('password', password);
    return postAndParseResult('/login', $receiver, getCallableRef('parseLoginOrRegisterResponse', function (json) {
      return parseLoginOrRegisterResponse(json);
    }), continuation);
  }
  function joinBubble(userId, bubbleName, continuation) {
    var $receiver = new URLSearchParams();
    $receiver.append('userId', userId);
    $receiver.append('bubbleName', bubbleName);
    return postAndParseResult('/join-bubble', $receiver, getCallableRef('parseJoinBubbleResponse', function (json) {
      return parseJoinBubbleResponse(json);
    }), continuation);
  }
  function showBubble(userId, bubbleName, continuation) {
    var $receiver = new URLSearchParams();
    $receiver.append('userId', userId);
    $receiver.append('bubbleName', bubbleName);
    return postAndParseResult('/show-bubble', $receiver, getCallableRef('parseShowBubbleResponse', function (json) {
      return parseShowBubbleResponse(json);
    }), continuation);
  }
  function viewBubble(userId, bubbleName, continuation) {
    var $receiver = new URLSearchParams();
    $receiver.append('userId', userId);
    $receiver.append('bubbleName', bubbleName);
    return postAndParseResult('/view-bubble', $receiver, getCallableRef('parseViewBubbleResponse', function (json) {
      return parseViewBubbleResponse(json);
    }), continuation);
  }
  function leaveBubble(userId, bubbleName, continuation) {
    var $receiver = new URLSearchParams();
    $receiver.append('userId', userId);
    $receiver.append('bubbleName', bubbleName);
    return postAndParseResult('/leave-bubble', $receiver, getCallableRef('parseLeaveBubbleResponse', function (json) {
      return parseLeaveBubbleResponse(json);
    }), continuation);
  }
  function postThoughtPrepare(continuation) {
    return getAndParseResult('/post-new', null, getCallableRef('parseNewPostTokenResponse', function (json) {
      return parseNewPostTokenResponse(json);
    }), continuation);
  }
  function postThought(replyTo, text, bubbleName, token, continuation) {
    var $receiver = new URLSearchParams();
    $receiver.append('text', text);
    $receiver.append('bubbleName', bubbleName);
    $receiver.append('date', token.date.toString());
    $receiver.append('code', token.code);
    if (replyTo != null) {
      $receiver.append('replyTo', replyTo.toString());
    }
    return postAndParseResult('/post-new', $receiver, getCallableRef('parsePostThoughtResponse', function (json) {
      return parsePostThoughtResponse(json);
    }), continuation);
  }
  function logoutUser$ObjectLiteral() {
    this.method_7loug4$_0 = 'POST';
    this.credentials_el3cjf$_0 = 'same-origin';
  }
  Object.defineProperty(logoutUser$ObjectLiteral.prototype, 'method', {
    get: function () {
      return this.method_7loug4$_0;
    },
    set: function (method) {
      this.method_7loug4$_0 = method;
    }
  });
  Object.defineProperty(logoutUser$ObjectLiteral.prototype, 'credentials', {
    get: function () {
      return this.credentials_el3cjf$_0;
    },
    set: function (credentials) {
      this.credentials_el3cjf$_0 = credentials;
    }
  });
  logoutUser$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function logoutUser(continuation_0, suspended) {
    var instance = new Coroutine$logoutUser(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$logoutUser(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$logoutUser.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$logoutUser.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$logoutUser.prototype.constructor = Coroutine$logoutUser;
  Coroutine$logoutUser.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(window.fetch('/logout', new logoutUser$ObjectLiteral()), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function deleteThought$lambda(it) {
    return Unit;
  }
  function deleteThought(id, date, code, continuation) {
    var tmp$ = '/thought/' + id + '/delete';
    var $receiver = new URLSearchParams();
    $receiver.append('date', date.toString());
    $receiver.append('code', code);
    return postAndParseResult(tmp$, $receiver, deleteThought$lambda, continuation);
  }
  function parseIndexResponse(json) {
    var tmp$, tmp$_0;
    var top = Kotlin.isArray(tmp$ = json.top) ? tmp$ : throwCCE();
    var latest = Kotlin.isArray(tmp$_0 = json.latest) ? tmp$_0 : throwCCE();
    var destination = ArrayList_init(top.length);
    var tmp$_1;
    for (tmp$_1 = 0; tmp$_1 !== top.length; ++tmp$_1) {
      var item = top[tmp$_1];
      destination.add_11rb$(parseThought(item));
    }
    var destination_0 = ArrayList_init(latest.length);
    var tmp$_2;
    for (tmp$_2 = 0; tmp$_2 !== latest.length; ++tmp$_2) {
      var item_0 = latest[tmp$_2];
      destination_0.add_11rb$(parseThought(item_0));
    }
    return new IndexResponse(destination, destination_0);
  }
  function parsePostThoughtResponse(json) {
    return parseThought(json.thought);
  }
  function parseThought(json) {
    return new Thought(json.id, json.userId, json.bubbleId, json.text, json.date, json.replyTo);
  }
  function parseNewPostTokenResponse(json) {
    return new PostThoughtToken(json.user, json.bubbleId, json.date, json.code);
  }
  function parseLoginOrRegisterResponse(json) {
    if (json.error != null) {
      throw new LoginOrRegisterFailedException(json.error.toString());
    }
    return new User(json.user.userId, json.user.email, json.user.phoneNumber, json.user.displayName, json.user.passwordHash);
  }
  function parseJoinBubbleResponse(json) {
    if (json.error != null) {
      throw new JoiningBubbleFailedException(json.error.toString());
    }
    return new Bubble(json.bubble.bubbleId, json.bubble.name, json.bubble.creationTime);
  }
  function parseShowBubbleResponse(json) {
    if (json.error != null) {
      throw new ShowingBubbleFailedException(json.error.toString());
    }
    console.log(json.toString());
    return new ShowBubbleResponse(json.bubble, json.top, json.latest, json.date, json.code);
  }
  function parseViewBubbleResponse(json) {
    if (json.error != null) {
      throw new ViewingBubbleFailedException(json.error.toString());
    }
    return new ViewBubbleResponse(json.bubble, json.top, json.latest, json.date, json.code);
  }
  function parseLeaveBubbleResponse(json) {
    if (json.error != null) {
      throw new LeavingBubbleFailedException(json.error.toString());
    }
    return new User(json.user.userId, json.user.email, json.user.phoneNumber, json.user.displayName, json.user.passwordHash);
  }
  function LoginOrRegisterFailedException(message) {
    Throwable.call(this);
    this.message_4vo8d$_0 = message;
    this.cause_dam0c5$_0 = null;
    Kotlin.captureStack(Throwable, this);
    this.name = 'LoginOrRegisterFailedException';
  }
  Object.defineProperty(LoginOrRegisterFailedException.prototype, 'message', {
    get: function () {
      return this.message_4vo8d$_0;
    }
  });
  Object.defineProperty(LoginOrRegisterFailedException.prototype, 'cause', {
    get: function () {
      return this.cause_dam0c5$_0;
    }
  });
  LoginOrRegisterFailedException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoginOrRegisterFailedException',
    interfaces: [Throwable]
  };
  function JoiningBubbleFailedException(message) {
    Throwable.call(this);
    this.message_jhylr2$_0 = message;
    this.cause_g1ssg0$_0 = null;
    Kotlin.captureStack(Throwable, this);
    this.name = 'JoiningBubbleFailedException';
  }
  Object.defineProperty(JoiningBubbleFailedException.prototype, 'message', {
    get: function () {
      return this.message_jhylr2$_0;
    }
  });
  Object.defineProperty(JoiningBubbleFailedException.prototype, 'cause', {
    get: function () {
      return this.cause_g1ssg0$_0;
    }
  });
  JoiningBubbleFailedException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JoiningBubbleFailedException',
    interfaces: [Throwable]
  };
  function ShowingBubbleFailedException(message) {
    Throwable.call(this);
    this.message_eehh5d$_0 = message;
    this.cause_wd9sy5$_0 = null;
    Kotlin.captureStack(Throwable, this);
    this.name = 'ShowingBubbleFailedException';
  }
  Object.defineProperty(ShowingBubbleFailedException.prototype, 'message', {
    get: function () {
      return this.message_eehh5d$_0;
    }
  });
  Object.defineProperty(ShowingBubbleFailedException.prototype, 'cause', {
    get: function () {
      return this.cause_wd9sy5$_0;
    }
  });
  ShowingBubbleFailedException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShowingBubbleFailedException',
    interfaces: [Throwable]
  };
  function ViewingBubbleFailedException(message) {
    Throwable.call(this);
    this.message_wz22x3$_0 = message;
    this.cause_14zufv$_0 = null;
    Kotlin.captureStack(Throwable, this);
    this.name = 'ViewingBubbleFailedException';
  }
  Object.defineProperty(ViewingBubbleFailedException.prototype, 'message', {
    get: function () {
      return this.message_wz22x3$_0;
    }
  });
  Object.defineProperty(ViewingBubbleFailedException.prototype, 'cause', {
    get: function () {
      return this.cause_14zufv$_0;
    }
  });
  ViewingBubbleFailedException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ViewingBubbleFailedException',
    interfaces: [Throwable]
  };
  function LeavingBubbleFailedException(message) {
    Throwable.call(this);
    this.message_2fr7oe$_0 = message;
    this.cause_ykuzes$_0 = null;
    Kotlin.captureStack(Throwable, this);
    this.name = 'LeavingBubbleFailedException';
  }
  Object.defineProperty(LeavingBubbleFailedException.prototype, 'message', {
    get: function () {
      return this.message_2fr7oe$_0;
    }
  });
  Object.defineProperty(LeavingBubbleFailedException.prototype, 'cause', {
    get: function () {
      return this.cause_ykuzes$_0;
    }
  });
  LeavingBubbleFailedException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LeavingBubbleFailedException',
    interfaces: [Throwable]
  };
  function postAndParseResult(url, body, parse, continuation) {
    return requestAndParseResult('POST', url, body, parse, continuation);
  }
  function getAndParseResult(url, body, parse, continuation) {
    return requestAndParseResult('GET', url, body, parse, continuation);
  }
  function requestAndParseResult$ObjectLiteral(closure$method, closure$body) {
    this.method_eqn0kr$_0 = closure$method;
    this.body_qr8w3a$_0 = closure$body;
    this.credentials_z6j1zg$_0 = 'same-origin';
    this.headers_jn0upu$_0 = json([to('Accept', 'application/json')]);
  }
  Object.defineProperty(requestAndParseResult$ObjectLiteral.prototype, 'method', {
    get: function () {
      return this.method_eqn0kr$_0;
    },
    set: function (method) {
      this.method_eqn0kr$_0 = method;
    }
  });
  Object.defineProperty(requestAndParseResult$ObjectLiteral.prototype, 'body', {
    get: function () {
      return this.body_qr8w3a$_0;
    },
    set: function (body) {
      this.body_qr8w3a$_0 = body;
    }
  });
  Object.defineProperty(requestAndParseResult$ObjectLiteral.prototype, 'credentials', {
    get: function () {
      return this.credentials_z6j1zg$_0;
    },
    set: function (credentials) {
      this.credentials_z6j1zg$_0 = credentials;
    }
  });
  Object.defineProperty(requestAndParseResult$ObjectLiteral.prototype, 'headers', {
    get: function () {
      return this.headers_jn0upu$_0;
    },
    set: function (headers) {
      this.headers_jn0upu$_0 = headers;
    }
  });
  requestAndParseResult$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function requestAndParseResult(method_0, url_0, body_0, parse_0, continuation_0, suspended) {
    var instance = new Coroutine$requestAndParseResult(method_0, url_0, body_0, parse_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$requestAndParseResult(method_0, url_0, body_0, parse_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$method = method_0;
    this.local$url = url_0;
    this.local$body = body_0;
    this.local$parse = parse_0;
  }
  Coroutine$requestAndParseResult.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$requestAndParseResult.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$requestAndParseResult.prototype.constructor = Coroutine$requestAndParseResult;
  Coroutine$requestAndParseResult.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(window.fetch(this.local$url, new requestAndParseResult$ObjectLiteral(this.local$method, this.local$body)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            var response = this.result_0;
            this.state_0 = 3;
            this.result_0 = await_0(response.json(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            return this.local$parse(this.result_0);
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function ShowBubbleComponent() {
    ShowBubbleComponent$Companion_getInstance();
    ReactDOMComponent.call(this);
    this.state = new ShowBubbleComponent$State(true, '', null, emptyList(), emptyList(), '', false, '', '');
  }
  function ShowBubbleComponent$Companion() {
    ShowBubbleComponent$Companion_instance = this;
  }
  ShowBubbleComponent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [ReactComponentSpec]
  };
  var ShowBubbleComponent$Companion_instance = null;
  function ShowBubbleComponent$Companion_getInstance() {
    if (ShowBubbleComponent$Companion_instance === null) {
      new ShowBubbleComponent$Companion();
    }
    return ShowBubbleComponent$Companion_instance;
  }
  function ShowBubbleComponent$render$thoughtLi$lambda$lambda$lambda$lambda$lambda(closure$t) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$t.date);
      $receiver.unaryPlus_pdl1vz$(' by ');
      $receiver.unaryPlus_pdl1vz$(closure$t.userId);
      return Unit;
    };
  }
  function ShowBubbleComponent$render$thoughtLi$lambda$lambda$lambda$lambda(closure$t) {
    return function ($receiver) {
      a($receiver, 'javascript:void(0)', void 0, void 0, ShowBubbleComponent$render$thoughtLi$lambda$lambda$lambda$lambda$lambda(closure$t));
      return Unit;
    };
  }
  function ShowBubbleComponent$render$thoughtLi$lambda$lambda$lambda(closure$t) {
    return function ($receiver) {
      p($receiver, 'post-meta', ShowBubbleComponent$render$thoughtLi$lambda$lambda$lambda$lambda(closure$t));
      return Unit;
    };
  }
  function ShowBubbleComponent$render$thoughtLi$lambda$lambda$lambda$lambda_0(closure$t) {
    return function ($receiver) {
      $receiver.source = closure$t.text;
      return Unit;
    };
  }
  function ReactBuilder$invoke$lambda_2(closure$props, closure$handler) {
    return function ($receiver) {
      closure$handler(closure$props);
      return Unit;
    };
  }
  function ShowBubbleComponent$render$thoughtLi$lambda$lambda$lambda_0(closure$t, this$render) {
    return function ($receiver) {
      var $this = this$render;
      var $receiver_0 = ReactMarkdownComponent_getInstance();
      var handler = ShowBubbleComponent$render$thoughtLi$lambda$lambda$lambda$lambda_0(closure$t);
      var props = createInstance(getKClass(ReactMarkdownProps));
      $this.enterReactNode_uztyw4$($receiver_0.ref, props, ReactBuilder$invoke$lambda_2(props, handler));
      return Unit;
    };
  }
  function ShowBubbleComponent$render$thoughtLi$lambda$lambda(closure$t, this$render) {
    return function ($receiver) {
      header($receiver, 'post-header', ShowBubbleComponent$render$thoughtLi$lambda$lambda$lambda(closure$t));
      div_0($receiver, 'post-description', ShowBubbleComponent$render$thoughtLi$lambda$lambda$lambda_0(closure$t, this$render));
      return Unit;
    };
  }
  function ShowBubbleComponent$render$thoughtLi$lambda(closure$t, this$render) {
    return function ($receiver) {
      section($receiver, 'post', ShowBubbleComponent$render$thoughtLi$lambda$lambda(closure$t, this$render));
      return Unit;
    };
  }
  function ShowBubbleComponent$render$thoughtLi(this$render) {
    return function ($receiver, t) {
      li($receiver, void 0, ShowBubbleComponent$render$thoughtLi$lambda(t, this$render));
    };
  }
  function ShowBubbleComponent$render$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Show Bubble');
    return Unit;
  }
  function ShowBubbleComponent$render$lambda$lambda$lambda$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.bubbleName = get_inputValue(closure$it);
      return Unit;
    };
  }
  function ShowBubbleComponent$render$lambda$lambda$lambda$lambda$lambda(this$ShowBubbleComponent) {
    return function (it) {
      this$ShowBubbleComponent.setState_hgm6vj$(ShowBubbleComponent$render$lambda$lambda$lambda$lambda$lambda$lambda(it));
      return Unit;
    };
  }
  function ShowBubbleComponent$render$lambda$lambda$lambda$lambda(this$ShowBubbleComponent) {
    return function ($receiver) {
      $receiver.value = this$ShowBubbleComponent.state.bubbleName;
      $receiver.placeholder = 'Name of the Bubble';
      $receiver.disabled = this$ShowBubbleComponent.state.disabled;
      set_onChangeFunction($receiver, ShowBubbleComponent$render$lambda$lambda$lambda$lambda$lambda(this$ShowBubbleComponent));
      return Unit;
    };
  }
  function ShowBubbleComponent$render$lambda$lambda$lambda_0(this$ShowBubbleComponent) {
    return function ($receiver) {
      input($receiver, InputType.text, void 0, void 0, 'bubbleName', void 0, ShowBubbleComponent$render$lambda$lambda$lambda$lambda(this$ShowBubbleComponent));
      return Unit;
    };
  }
  function ShowBubbleComponent$render$lambda$lambda$lambda$lambda_0(closure$message) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$message);
      return Unit;
    };
  }
  function ShowBubbleComponent$render$lambda$lambda$lambda$lambda_1(closure$message) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$message);
      return Unit;
    };
  }
  function ShowBubbleComponent$render$lambda$lambda$lambda$lambda_2(this$ShowBubbleComponent) {
    return function (it) {
      it.preventDefault();
      this$ShowBubbleComponent.doShow_0();
      return Unit;
    };
  }
  function ShowBubbleComponent$render$lambda$lambda$lambda_1(this$ShowBubbleComponent) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Show');
      $receiver.disabled = this$ShowBubbleComponent.state.disabled;
      set_onClickFunction($receiver, ShowBubbleComponent$render$lambda$lambda$lambda$lambda_2(this$ShowBubbleComponent));
      return Unit;
    };
  }
  function ShowBubbleComponent$render$lambda$lambda(this$render, this$ShowBubbleComponent) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      legend(this$render, void 0, ShowBubbleComponent$render$lambda$lambda$lambda);
      fieldSet($receiver, 'pure-group', ShowBubbleComponent$render$lambda$lambda$lambda_0(this$ShowBubbleComponent));
      if ((tmp$_0 = (tmp$ = this$ShowBubbleComponent.state.errorMessage) != null ? tmp$.length > 0 ? tmp$ : null : null) != null) {
        label($receiver, void 0, ShowBubbleComponent$render$lambda$lambda$lambda$lambda_0(tmp$_0));
      }
      if ((tmp$_2 = (tmp$_1 = this$ShowBubbleComponent.state.infoMessage) != null ? tmp$_1.length > 0 ? tmp$_1 : null : null) != null) {
        label($receiver, void 0, ShowBubbleComponent$render$lambda$lambda$lambda$lambda_1(tmp$_2));
      }
      button($receiver, void 0, void 0, void 0, 'pure-button pure-button-primary', ShowBubbleComponent$render$lambda$lambda$lambda_1(this$ShowBubbleComponent));
      return Unit;
    };
  }
  function ShowBubbleComponent$render$lambda$lambda$lambda_2($receiver) {
    $receiver.unaryPlus_pdl1vz$('Thoughts');
    return Unit;
  }
  function ShowBubbleComponent$render$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.unaryPlus_pdl1vz$('Top');
    return Unit;
  }
  function ShowBubbleComponent$render$lambda$lambda$lambda_3(closure$top, closure$thoughtLi) {
    return function ($receiver) {
      var tmp$;
      h3($receiver, void 0, ShowBubbleComponent$render$lambda$lambda$lambda$lambda_3);
      if (!closure$top.isEmpty()) {
        tmp$ = closure$top.iterator();
        while (tmp$.hasNext()) {
          var t = tmp$.next();
          closure$thoughtLi($receiver, t);
        }
      }
      return Unit;
    };
  }
  function ShowBubbleComponent$render$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.unaryPlus_pdl1vz$('Recent');
    return Unit;
  }
  function ShowBubbleComponent$render$lambda$lambda$lambda_4(closure$latest, closure$thoughtLi) {
    return function ($receiver) {
      var tmp$;
      h3($receiver, void 0, ShowBubbleComponent$render$lambda$lambda$lambda$lambda_4);
      if (!closure$latest.isEmpty()) {
        tmp$ = closure$latest.iterator();
        while (tmp$.hasNext()) {
          var t = tmp$.next();
          closure$thoughtLi($receiver, t);
        }
      }
      return Unit;
    };
  }
  function ShowBubbleComponent$render$lambda$lambda_0(closure$top, closure$thoughtLi, closure$latest) {
    return function ($receiver) {
      h2($receiver, void 0, ShowBubbleComponent$render$lambda$lambda$lambda_2);
      ul_0($receiver, void 0, ShowBubbleComponent$render$lambda$lambda$lambda_3(closure$top, closure$thoughtLi));
      ul_0($receiver, void 0, ShowBubbleComponent$render$lambda$lambda$lambda_4(closure$latest, closure$thoughtLi));
      return Unit;
    };
  }
  function ShowBubbleComponent$render$lambda(this$render, this$ShowBubbleComponent, closure$thoughtLi) {
    return function ($receiver) {
      form($receiver, void 0, void 0, void 0, 'pure-form pure-form-stacked', ShowBubbleComponent$render$lambda$lambda(this$render, this$ShowBubbleComponent));
      if (this$ShowBubbleComponent.state.showBubbleResponse != null && !this$ShowBubbleComponent.state.loading) {
        var latest = toMutableList(this$ShowBubbleComponent.state.latest);
        var top = toMutableList(this$ShowBubbleComponent.state.top);
        div_0($receiver, void 0, ShowBubbleComponent$render$lambda$lambda_0(top, closure$thoughtLi, latest));
      }
      return Unit;
    };
  }
  ShowBubbleComponent.prototype.render_vhjzqq$ = function ($receiver) {
    var thoughtLi = ShowBubbleComponent$render$thoughtLi($receiver);
    div($receiver, void 0, ShowBubbleComponent$render$lambda($receiver, this, thoughtLi));
  };
  function ShowBubbleComponent$doShow$lambda($receiver) {
    $receiver.loading = true;
    $receiver.disabled = false;
    $receiver.infoMessage = 'Showing Bubble succeeded!';
    $receiver.errorMessage = '';
    return Unit;
  }
  function ShowBubbleComponent$doShow$lambda_0(this$ShowBubbleComponent_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ShowBubbleComponent$doShow$lambda(this$ShowBubbleComponent_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ShowBubbleComponent$doShow$lambda(this$ShowBubbleComponent_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ShowBubbleComponent = this$ShowBubbleComponent_0;
  }
  Coroutine$ShowBubbleComponent$doShow$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ShowBubbleComponent$doShow$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ShowBubbleComponent$doShow$lambda.prototype.constructor = Coroutine$ShowBubbleComponent$doShow$lambda;
  Coroutine$ShowBubbleComponent$doShow$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = showBubble(this.local$this$ShowBubbleComponent.state.userId, this.local$this$ShowBubbleComponent.state.bubbleName, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            var localResponse = this.result_0;
            if (localResponse != null) {
              this.local$this$ShowBubbleComponent.state.showBubbleResponse = localResponse;
              this.local$this$ShowBubbleComponent.state.latest = localResponse.latest;
              this.local$this$ShowBubbleComponent.state.top = localResponse.top;
              return this.local$this$ShowBubbleComponent.state.loading = false, Unit;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            return Unit;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function ShowBubbleComponent$doShow$lambda_1(this$ShowBubbleComponent) {
    return function (err) {
      this$ShowBubbleComponent.showFailed_0(err);
      return Unit;
    };
  }
  ShowBubbleComponent.prototype.doShow_0 = function () {
    this.setState_hgm6vj$(ShowBubbleComponent$doShow$lambda);
    async(ShowBubbleComponent$doShow$lambda_0(this)).catch(ShowBubbleComponent$doShow$lambda_1(this));
    console.log(toString(this.state.showBubbleResponse));
    console.log(this.state.latest.toString());
    console.log(this.state.top.toString());
  };
  function ShowBubbleComponent$showFailed$lambda(closure$err) {
    return function ($receiver) {
      $receiver.disabled = false;
      $receiver.infoMessage = '';
      $receiver.errorMessage = closure$err.message;
      return Unit;
    };
  }
  function ShowBubbleComponent$showFailed$lambda_0($receiver) {
    $receiver.disabled = false;
    $receiver.infoMessage = '';
    $receiver.errorMessage = 'Showing Bubble failed: please reload page and try again';
    return Unit;
  }
  ShowBubbleComponent.prototype.showFailed_0 = function (err) {
    if (Kotlin.isType(err, ShowingBubbleFailedException)) {
      this.setState_hgm6vj$(ShowBubbleComponent$showFailed$lambda(err));
    }
     else {
      console.error('Showing Bubble failed', err);
      this.setState_hgm6vj$(ShowBubbleComponent$showFailed$lambda_0);
    }
  };
  function ShowBubbleComponent$Props(showThought) {
    if (showThought === void 0)
      showThought = ShowBubbleComponent$ShowBubbleComponent$Props_init$lambda;
    RProps.call(this);
    this.showThought = showThought;
  }
  function ShowBubbleComponent$ShowBubbleComponent$Props_init$lambda(it) {
    return Unit;
  }
  ShowBubbleComponent$Props.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Props',
    interfaces: [RProps]
  };
  function ShowBubbleComponent$State(loading, userId, showBubbleResponse, top, latest, bubbleName, disabled, infoMessage, errorMessage) {
    this.loading = loading;
    this.userId = userId;
    this.showBubbleResponse = showBubbleResponse;
    this.top = top;
    this.latest = latest;
    this.bubbleName = bubbleName;
    this.disabled = disabled;
    this.infoMessage = infoMessage;
    this.errorMessage = errorMessage;
  }
  ShowBubbleComponent$State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: []
  };
  ShowBubbleComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShowBubbleComponent',
    interfaces: [ReactDOMComponent]
  };
  function ThoughtsListComponent() {
    ThoughtsListComponent$Companion_getInstance();
    ReactDOMComponent.call(this);
    this.state = new ReactComponentNoState();
  }
  function ThoughtsListComponent$Companion() {
    ThoughtsListComponent$Companion_instance = this;
  }
  ThoughtsListComponent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [ReactComponentSpec]
  };
  var ThoughtsListComponent$Companion_instance = null;
  function ThoughtsListComponent$Companion_getInstance() {
    if (ThoughtsListComponent$Companion_instance === null) {
      new ThoughtsListComponent$Companion();
    }
    return ThoughtsListComponent$Companion_instance;
  }
  function ThoughtsListComponent$render$thoughtLi$lambda$lambda$lambda$lambda$lambda$lambda(this$ThoughtsListComponent, closure$t) {
    return function (it) {
      this$ThoughtsListComponent.props.show(closure$t);
      return Unit;
    };
  }
  function ThoughtsListComponent$render$thoughtLi$lambda$lambda$lambda$lambda$lambda(closure$t, this$ThoughtsListComponent) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$t.date);
      $receiver.unaryPlus_pdl1vz$(' by ');
      $receiver.unaryPlus_pdl1vz$(closure$t.userId);
      set_onClickFunction($receiver, ThoughtsListComponent$render$thoughtLi$lambda$lambda$lambda$lambda$lambda$lambda(this$ThoughtsListComponent, closure$t));
      return Unit;
    };
  }
  function ThoughtsListComponent$render$thoughtLi$lambda$lambda$lambda$lambda(closure$t, this$ThoughtsListComponent) {
    return function ($receiver) {
      a($receiver, 'javascript:void(0)', void 0, void 0, ThoughtsListComponent$render$thoughtLi$lambda$lambda$lambda$lambda$lambda(closure$t, this$ThoughtsListComponent));
      return Unit;
    };
  }
  function ThoughtsListComponent$render$thoughtLi$lambda$lambda$lambda(closure$t, this$ThoughtsListComponent) {
    return function ($receiver) {
      p($receiver, 'post-meta', ThoughtsListComponent$render$thoughtLi$lambda$lambda$lambda$lambda(closure$t, this$ThoughtsListComponent));
      return Unit;
    };
  }
  function ThoughtsListComponent$render$thoughtLi$lambda$lambda$lambda$lambda_0(closure$t) {
    return function ($receiver) {
      $receiver.source = closure$t.text;
      return Unit;
    };
  }
  function ReactBuilder$invoke$lambda_3(closure$props, closure$handler) {
    return function ($receiver) {
      closure$handler(closure$props);
      return Unit;
    };
  }
  function ThoughtsListComponent$render$thoughtLi$lambda$lambda$lambda_0(closure$t, this$render) {
    return function ($receiver) {
      var $this = this$render;
      var $receiver_0 = ReactMarkdownComponent_getInstance();
      var handler = ThoughtsListComponent$render$thoughtLi$lambda$lambda$lambda$lambda_0(closure$t);
      var props = createInstance(getKClass(ReactMarkdownProps));
      $this.enterReactNode_uztyw4$($receiver_0.ref, props, ReactBuilder$invoke$lambda_3(props, handler));
      return Unit;
    };
  }
  function ThoughtsListComponent$render$thoughtLi$lambda$lambda(closure$t, this$ThoughtsListComponent, this$render) {
    return function ($receiver) {
      header($receiver, 'post-header', ThoughtsListComponent$render$thoughtLi$lambda$lambda$lambda(closure$t, this$ThoughtsListComponent));
      div_0($receiver, 'post-description', ThoughtsListComponent$render$thoughtLi$lambda$lambda$lambda_0(closure$t, this$render));
      return Unit;
    };
  }
  function ThoughtsListComponent$render$thoughtLi$lambda(closure$t, this$ThoughtsListComponent, this$render) {
    return function ($receiver) {
      section($receiver, 'post', ThoughtsListComponent$render$thoughtLi$lambda$lambda(closure$t, this$ThoughtsListComponent, this$render));
      return Unit;
    };
  }
  function ThoughtsListComponent$render$thoughtLi(this$ThoughtsListComponent, this$render) {
    return function ($receiver, t) {
      li($receiver, void 0, ThoughtsListComponent$render$thoughtLi$lambda(t, this$ThoughtsListComponent, this$render));
    };
  }
  function ThoughtsListComponent$render$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('There are no thoughts yet');
    return Unit;
  }
  function ThoughtsListComponent$render$lambda$lambda(this$ThoughtsListComponent, closure$thoughtLi) {
    return function ($receiver) {
      var tmp$;
      if (this$ThoughtsListComponent.props.thoughts.isEmpty()) {
        li($receiver, void 0, ThoughtsListComponent$render$lambda$lambda$lambda);
      }
       else {
        tmp$ = this$ThoughtsListComponent.props.thoughts.iterator();
        while (tmp$.hasNext()) {
          var t = tmp$.next();
          closure$thoughtLi($receiver, t);
        }
      }
      return Unit;
    };
  }
  function ThoughtsListComponent$render$lambda(this$ThoughtsListComponent, closure$thoughtLi) {
    return function ($receiver) {
      ul_0($receiver, void 0, ThoughtsListComponent$render$lambda$lambda(this$ThoughtsListComponent, closure$thoughtLi));
      return Unit;
    };
  }
  ThoughtsListComponent.prototype.render_vhjzqq$ = function ($receiver) {
    var thoughtLi = ThoughtsListComponent$render$thoughtLi(this, $receiver);
    div($receiver, void 0, ThoughtsListComponent$render$lambda(this, thoughtLi));
  };
  function ThoughtsListComponent$Props(thoughts, show) {
    if (thoughts === void 0)
      thoughts = emptyList();
    if (show === void 0)
      show = ThoughtsListComponent$ThoughtsListComponent$Props_init$lambda;
    RProps.call(this);
    this.thoughts = thoughts;
    this.show = show;
  }
  function ThoughtsListComponent$ThoughtsListComponent$Props_init$lambda(it) {
    return Unit;
  }
  ThoughtsListComponent$Props.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Props',
    interfaces: [RProps]
  };
  ThoughtsListComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ThoughtsListComponent',
    interfaces: [ReactDOMComponent]
  };
  function ViewBubbleComponent() {
    ViewBubbleComponent$Companion_getInstance();
    ReactDOMComponent.call(this);
    this.state = new ViewBubbleFormState('', null, emptyList(), emptyList(), '', false, '', '');
  }
  function ViewBubbleComponent$Companion() {
    ViewBubbleComponent$Companion_instance = this;
  }
  ViewBubbleComponent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [ReactComponentSpec]
  };
  var ViewBubbleComponent$Companion_instance = null;
  function ViewBubbleComponent$Companion_getInstance() {
    if (ViewBubbleComponent$Companion_instance === null) {
      new ViewBubbleComponent$Companion();
    }
    return ViewBubbleComponent$Companion_instance;
  }
  function ViewBubbleComponent$render$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Show Bubble');
    return Unit;
  }
  function ViewBubbleComponent$render$lambda$lambda$lambda$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.bubbleName = get_inputValue(closure$it);
      return Unit;
    };
  }
  function ViewBubbleComponent$render$lambda$lambda$lambda$lambda$lambda(this$ViewBubbleComponent) {
    return function (it) {
      this$ViewBubbleComponent.setState_hgm6vj$(ViewBubbleComponent$render$lambda$lambda$lambda$lambda$lambda$lambda(it));
      return Unit;
    };
  }
  function ViewBubbleComponent$render$lambda$lambda$lambda$lambda(this$ViewBubbleComponent) {
    return function ($receiver) {
      $receiver.value = this$ViewBubbleComponent.state.bubbleName;
      $receiver.placeholder = 'Name of the Bubble';
      $receiver.disabled = this$ViewBubbleComponent.state.disabled;
      set_onChangeFunction($receiver, ViewBubbleComponent$render$lambda$lambda$lambda$lambda$lambda(this$ViewBubbleComponent));
      return Unit;
    };
  }
  function ViewBubbleComponent$render$lambda$lambda$lambda_0(this$ViewBubbleComponent) {
    return function ($receiver) {
      input($receiver, InputType.text, void 0, void 0, 'bubbleName', void 0, ViewBubbleComponent$render$lambda$lambda$lambda$lambda(this$ViewBubbleComponent));
      return Unit;
    };
  }
  function ViewBubbleComponent$render$lambda$lambda$lambda$lambda_0(closure$message) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$message);
      return Unit;
    };
  }
  function ViewBubbleComponent$render$lambda$lambda$lambda$lambda_1(closure$message) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$message);
      return Unit;
    };
  }
  function ViewBubbleComponent$render$lambda$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('Top');
    return Unit;
  }
  function ViewBubbleComponent$render$lambda$lambda$lambda_2(this$ViewBubbleComponent) {
    return function ($receiver) {
      $receiver.thoughts = this$ViewBubbleComponent.state.top;
      $receiver.show = this$ViewBubbleComponent.props.showThought;
      return Unit;
    };
  }
  function ViewBubbleComponent$render$lambda$lambda$lambda_3($receiver) {
    $receiver.unaryPlus_pdl1vz$('Recent');
    return Unit;
  }
  function ViewBubbleComponent$render$lambda$lambda$lambda_4(this$ViewBubbleComponent) {
    return function ($receiver) {
      $receiver.thoughts = this$ViewBubbleComponent.state.latest;
      $receiver.show = this$ViewBubbleComponent.props.showThought;
      return Unit;
    };
  }
  function ViewBubbleComponent$render$lambda$lambda$lambda$lambda_2(this$ViewBubbleComponent) {
    return function (it) {
      it.preventDefault();
      this$ViewBubbleComponent.doView_0();
      return Unit;
    };
  }
  function ViewBubbleComponent$render$lambda$lambda$lambda_5(this$ViewBubbleComponent) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Show');
      $receiver.disabled = this$ViewBubbleComponent.state.disabled;
      set_onClickFunction($receiver, ViewBubbleComponent$render$lambda$lambda$lambda$lambda_2(this$ViewBubbleComponent));
      return Unit;
    };
  }
  function ReactBuilder$invoke$lambda_4(closure$props, closure$handler) {
    return function ($receiver) {
      closure$handler(closure$props);
      return Unit;
    };
  }
  function ViewBubbleComponent$render$lambda$lambda(this$render, this$ViewBubbleComponent) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      legend(this$render, void 0, ViewBubbleComponent$render$lambda$lambda$lambda);
      fieldSet($receiver, 'pure-group', ViewBubbleComponent$render$lambda$lambda$lambda_0(this$ViewBubbleComponent));
      if ((tmp$_0 = (tmp$ = this$ViewBubbleComponent.state.errorMessage) != null ? tmp$.length > 0 ? tmp$ : null : null) != null) {
        label($receiver, void 0, ViewBubbleComponent$render$lambda$lambda$lambda$lambda_0(tmp$_0));
      }
      if ((tmp$_2 = (tmp$_1 = this$ViewBubbleComponent.state.infoMessage) != null ? tmp$_1.length > 0 ? tmp$_1 : null : null) != null) {
        label($receiver, void 0, ViewBubbleComponent$render$lambda$lambda$lambda$lambda_1(tmp$_2));
      }
      if (this$ViewBubbleComponent.state.viewBubbleResponse != null) {
        h3($receiver, void 0, ViewBubbleComponent$render$lambda$lambda$lambda_1);
        var $this = this$render;
        ThoughtsListComponent$Companion_getInstance();
        var handler = ViewBubbleComponent$render$lambda$lambda$lambda_2(this$ViewBubbleComponent);
        var props = createInstance(getKClass(ThoughtsListComponent$Props));
        $this.enterReactNode_uztyw4$(ReactComponent.Companion.wrap_v5not5$(getKClass(ThoughtsListComponent)), props, ReactBuilder$invoke$lambda_4(props, handler));
        h3($receiver, void 0, ViewBubbleComponent$render$lambda$lambda$lambda_3);
        var $this_0 = this$render;
        ThoughtsListComponent$Companion_getInstance();
        var handler_0 = ViewBubbleComponent$render$lambda$lambda$lambda_4(this$ViewBubbleComponent);
        var props_0 = createInstance(getKClass(ThoughtsListComponent$Props));
        $this_0.enterReactNode_uztyw4$(ReactComponent.Companion.wrap_v5not5$(getKClass(ThoughtsListComponent)), props_0, ReactBuilder$invoke$lambda_4(props_0, handler_0));
      }
      button($receiver, void 0, void 0, void 0, 'pure-button pure-button-primary', ViewBubbleComponent$render$lambda$lambda$lambda_5(this$ViewBubbleComponent));
      return Unit;
    };
  }
  function ViewBubbleComponent$render$lambda(this$render, this$ViewBubbleComponent) {
    return function ($receiver) {
      form($receiver, void 0, void 0, void 0, 'pure-form pure-form-stacked', ViewBubbleComponent$render$lambda$lambda(this$render, this$ViewBubbleComponent));
      return Unit;
    };
  }
  ViewBubbleComponent.prototype.render_vhjzqq$ = function ($receiver) {
    div($receiver, void 0, ViewBubbleComponent$render$lambda($receiver, this));
  };
  function ViewBubbleComponent$doView$lambda($receiver) {
    $receiver.disabled = false;
    $receiver.infoMessage = 'Viewing Bubble succeeded!';
    $receiver.errorMessage = '';
    return Unit;
  }
  function ViewBubbleComponent$doView$lambda_0(this$ViewBubbleComponent_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ViewBubbleComponent$doView$lambda(this$ViewBubbleComponent_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ViewBubbleComponent$doView$lambda(this$ViewBubbleComponent_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ViewBubbleComponent = this$ViewBubbleComponent_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$ViewBubbleComponent$doView$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ViewBubbleComponent$doView$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ViewBubbleComponent$doView$lambda.prototype.constructor = Coroutine$ViewBubbleComponent$doView$lambda;
  Coroutine$ViewBubbleComponent$doView$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$this$ViewBubbleComponent.state;
            this.state_0 = 2;
            this.result_0 = viewBubble(this.local$this$ViewBubbleComponent.state.userId, this.local$this$ViewBubbleComponent.state.bubbleName, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$.viewBubbleResponse = this.result_0;
            var viewBubbleResponse = this.local$this$ViewBubbleComponent.state.viewBubbleResponse;
            if (viewBubbleResponse != null) {
              this.local$this$ViewBubbleComponent.state.latest = viewBubbleResponse.latest;
              return this.local$this$ViewBubbleComponent.state.top = viewBubbleResponse.top, Unit;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            return Unit;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function ViewBubbleComponent$doView$lambda_1(this$ViewBubbleComponent) {
    return function (err) {
      this$ViewBubbleComponent.viewFailed_0(err);
      return Unit;
    };
  }
  ViewBubbleComponent.prototype.doView_0 = function () {
    this.setState_hgm6vj$(ViewBubbleComponent$doView$lambda);
    async(ViewBubbleComponent$doView$lambda_0(this)).catch(ViewBubbleComponent$doView$lambda_1(this));
  };
  function ViewBubbleComponent$viewFailed$lambda(closure$err) {
    return function ($receiver) {
      $receiver.disabled = false;
      $receiver.infoMessage = '';
      $receiver.errorMessage = closure$err.message;
      return Unit;
    };
  }
  function ViewBubbleComponent$viewFailed$lambda_0($receiver) {
    $receiver.disabled = false;
    $receiver.infoMessage = '';
    $receiver.errorMessage = 'Viewing Bubble failed: please reload page and try again';
    return Unit;
  }
  ViewBubbleComponent.prototype.viewFailed_0 = function (err) {
    if (Kotlin.isType(err, ShowingBubbleFailedException)) {
      this.setState_hgm6vj$(ViewBubbleComponent$viewFailed$lambda(err));
    }
     else {
      console.error('Viewing Bubble failed', err);
      this.setState_hgm6vj$(ViewBubbleComponent$viewFailed$lambda_0);
    }
  };
  function ViewBubbleComponent$Props(showThought) {
    if (showThought === void 0)
      showThought = ViewBubbleComponent$ViewBubbleComponent$Props_init$lambda;
    RProps.call(this);
    this.showThought = showThought;
  }
  function ViewBubbleComponent$ViewBubbleComponent$Props_init$lambda(it) {
    return Unit;
  }
  ViewBubbleComponent$Props.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Props',
    interfaces: [RProps]
  };
  ViewBubbleComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ViewBubbleComponent',
    interfaces: [ReactDOMComponent]
  };
  function ViewBubbleFormState(userId, viewBubbleResponse, top, latest, bubbleName, disabled, infoMessage, errorMessage) {
    this.userId = userId;
    this.viewBubbleResponse = viewBubbleResponse;
    this.top = top;
    this.latest = latest;
    this.bubbleName = bubbleName;
    this.disabled = disabled;
    this.infoMessage = infoMessage;
    this.errorMessage = errorMessage;
  }
  ViewBubbleFormState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ViewBubbleFormState',
    interfaces: []
  };
  function ViewThoughtComponent() {
    ViewThoughtComponent$Companion_getInstance();
    ReactDOMComponent.call(this);
    this.state = new ReactComponentNoState();
  }
  function ViewThoughtComponent$Companion() {
    ViewThoughtComponent$Companion_instance = this;
  }
  ViewThoughtComponent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [ReactComponentSpec]
  };
  var ViewThoughtComponent$Companion_instance = null;
  function ViewThoughtComponent$Companion_getInstance() {
    if (ViewThoughtComponent$Companion_instance === null) {
      new ViewThoughtComponent$Companion();
    }
    return ViewThoughtComponent$Companion_instance;
  }
  function ViewThoughtComponent$render$lambda$lambda(closure$userId, closure$replyTo) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$userId);
      if (closure$replyTo != null) {
        $receiver.unaryPlus_pdl1vz$(' replies to ' + closure$replyTo);
      }
      return Unit;
    };
  }
  function ViewThoughtComponent$render$lambda$lambda_0(closure$userId, closure$bubbleId) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$userId);
      if (closure$bubbleId != null) {
        $receiver.unaryPlus_pdl1vz$(' sent this message in bubble ' + closure$bubbleId);
      }
      return Unit;
    };
  }
  function ViewThoughtComponent$render$lambda$lambda_1(closure$date) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$date);
      return Unit;
    };
  }
  function ViewThoughtComponent$render$lambda$lambda$lambda(closure$text) {
    return function ($receiver) {
      $receiver.source = closure$text;
      return Unit;
    };
  }
  function ReactBuilder$invoke$lambda_5(closure$props, closure$handler) {
    return function ($receiver) {
      closure$handler(closure$props);
      return Unit;
    };
  }
  function ViewThoughtComponent$render$lambda$lambda_2(closure$text, this$render) {
    return function ($receiver) {
      var $this = this$render;
      var $receiver_0 = ReactMarkdownComponent_getInstance();
      var handler = ViewThoughtComponent$render$lambda$lambda$lambda(closure$text);
      var props = createInstance(getKClass(ReactMarkdownProps));
      $this.enterReactNode_uztyw4$($receiver_0.ref, props, ReactBuilder$invoke$lambda_5(props, handler));
      return Unit;
    };
  }
  function ViewThoughtComponent$render$lambda$lambda_3($receiver) {
    $receiver.unaryPlus_pdl1vz$('');
    return Unit;
  }
  function ViewThoughtComponent$render$lambda$lambda$lambda$lambda(this$ViewThoughtComponent) {
    return function (it) {
      this$ViewThoughtComponent.delete_0();
      return Unit;
    };
  }
  function ViewThoughtComponent$render$lambda$lambda$lambda_0(this$ViewThoughtComponent) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Delete');
      set_onClickFunction($receiver, ViewThoughtComponent$render$lambda$lambda$lambda$lambda(this$ViewThoughtComponent));
      return Unit;
    };
  }
  function ViewThoughtComponent$render$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.margin = '0 5px 0 5px';
    return Unit;
  }
  function ViewThoughtComponent$render$lambda$lambda$lambda_1($receiver) {
    set_style($receiver, jsstyle(ViewThoughtComponent$render$lambda$lambda$lambda$lambda_0));
    $receiver.unaryPlus_pdl1vz$(' ');
    return Unit;
  }
  function ViewThoughtComponent$render$lambda$lambda$lambda$lambda_1(this$ViewThoughtComponent) {
    return function (it) {
      this$ViewThoughtComponent.props.reply(this$ViewThoughtComponent.props.thought);
      return Unit;
    };
  }
  function ViewThoughtComponent$render$lambda$lambda$lambda_2(this$ViewThoughtComponent) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Reply');
      set_onClickFunction($receiver, ViewThoughtComponent$render$lambda$lambda$lambda$lambda_1(this$ViewThoughtComponent));
      return Unit;
    };
  }
  function ViewThoughtComponent$render$lambda$lambda_4(this$ViewThoughtComponent) {
    return function ($receiver) {
      a($receiver, 'javascript:void(0)', void 0, void 0, ViewThoughtComponent$render$lambda$lambda$lambda_0(this$ViewThoughtComponent));
      span($receiver, void 0, ViewThoughtComponent$render$lambda$lambda$lambda_1);
      a($receiver, 'javascript:void(0)', void 0, void 0, ViewThoughtComponent$render$lambda$lambda$lambda_2(this$ViewThoughtComponent));
      return Unit;
    };
  }
  function ViewThoughtComponent$render$lambda(closure$userId, closure$replyTo, closure$bubbleId, closure$date, closure$text, this$render, this$ViewThoughtComponent) {
    return function ($receiver) {
      div_0($receiver, 'pure-u-1 pure-u-md-1-3', ViewThoughtComponent$render$lambda$lambda(closure$userId, closure$replyTo));
      div_0($receiver, 'pure-u-1 pure-u-md-1-3', ViewThoughtComponent$render$lambda$lambda_0(closure$userId, closure$bubbleId));
      div_0($receiver, 'pure-u-1 pure-u-md-2-3', ViewThoughtComponent$render$lambda$lambda_1(closure$date));
      div_0($receiver, 'pure-u-2 pure-u-md-1-1', ViewThoughtComponent$render$lambda$lambda_2(closure$text, this$render));
      if (this$ViewThoughtComponent.props.currentUser != null) {
        div_0($receiver, 'pure-u-3 pure-u-md-2-3', ViewThoughtComponent$render$lambda$lambda_3);
        div_0($receiver, 'pure-u-3 pure-u-md-1-3', ViewThoughtComponent$render$lambda$lambda_4(this$ViewThoughtComponent));
      }
      return Unit;
    };
  }
  ViewThoughtComponent.prototype.render_vhjzqq$ = function ($receiver) {
    var userId = this.props.thought.userId;
    var replyTo = this.props.thought.replyTo;
    var bubbleId = this.props.thought.bubbleId;
    var text = this.props.thought.text;
    var date = this.props.thought.date;
    div($receiver, 'pure-g', ViewThoughtComponent$render$lambda(userId, replyTo, bubbleId, date, text, $receiver, this));
  };
  function ViewThoughtComponent$delete$lambda(this$ViewThoughtComponent_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ViewThoughtComponent$delete$lambda(this$ViewThoughtComponent_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ViewThoughtComponent$delete$lambda(this$ViewThoughtComponent_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ViewThoughtComponent = this$ViewThoughtComponent_0;
  }
  Coroutine$ViewThoughtComponent$delete$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ViewThoughtComponent$delete$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ViewThoughtComponent$delete$lambda.prototype.constructor = Coroutine$ViewThoughtComponent$delete$lambda;
  Coroutine$ViewThoughtComponent$delete$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = postThoughtPrepare(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            var token = this.result_0;
            this.state_0 = 3;
            this.result_0 = deleteThought(this.local$this$ViewThoughtComponent.props.thought.id, token.date, token.code, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            return this.local$this$ViewThoughtComponent.props.leave;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  ViewThoughtComponent.prototype.delete_0 = function () {
    if (window.confirm('Do you want to delete the thought?')) {
      launch(ViewThoughtComponent$delete$lambda(this));
    }
  };
  function ViewThoughtComponent$Props(thought, currentUser, bubbleName, reply, leave) {
    if (currentUser === void 0)
      currentUser = null;
    if (bubbleName === void 0)
      bubbleName = '';
    if (reply === void 0)
      reply = ViewThoughtComponent$ViewThoughtComponent$Props_init$lambda;
    if (leave === void 0)
      leave = ViewThoughtComponent$ViewThoughtComponent$Props_init$lambda_0;
    RProps.call(this);
    this.thought = thought;
    this.currentUser = currentUser;
    this.bubbleName = bubbleName;
    this.reply = reply;
    this.leave = leave;
  }
  function ViewThoughtComponent$ViewThoughtComponent$Props_init$lambda(it) {
    return Unit;
  }
  function ViewThoughtComponent$ViewThoughtComponent$Props_init$lambda_0() {
    return Unit;
  }
  ViewThoughtComponent$Props.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Props',
    interfaces: [RProps]
  };
  ViewThoughtComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ViewThoughtComponent',
    interfaces: [ReactDOMComponent]
  };
  function Thought(id, userId, bubbleId, text, date, replyTo) {
    this.id = id;
    this.userId = userId;
    this.bubbleId = bubbleId;
    this.text = text;
    this.date = date;
    this.replyTo = replyTo;
  }
  Thought.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Thought',
    interfaces: []
  };
  Thought.prototype.component1 = function () {
    return this.id;
  };
  Thought.prototype.component2 = function () {
    return this.userId;
  };
  Thought.prototype.component3 = function () {
    return this.bubbleId;
  };
  Thought.prototype.component4 = function () {
    return this.text;
  };
  Thought.prototype.component5 = function () {
    return this.date;
  };
  Thought.prototype.component6 = function () {
    return this.replyTo;
  };
  Thought.prototype.copy_26owzy$ = function (id, userId, bubbleId, text, date, replyTo) {
    return new Thought(id === void 0 ? this.id : id, userId === void 0 ? this.userId : userId, bubbleId === void 0 ? this.bubbleId : bubbleId, text === void 0 ? this.text : text, date === void 0 ? this.date : date, replyTo === void 0 ? this.replyTo : replyTo);
  };
  Thought.prototype.toString = function () {
    return 'Thought(id=' + Kotlin.toString(this.id) + (', userId=' + Kotlin.toString(this.userId)) + (', bubbleId=' + Kotlin.toString(this.bubbleId)) + (', text=' + Kotlin.toString(this.text)) + (', date=' + Kotlin.toString(this.date)) + (', replyTo=' + Kotlin.toString(this.replyTo)) + ')';
  };
  Thought.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.userId) | 0;
    result = result * 31 + Kotlin.hashCode(this.bubbleId) | 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    result = result * 31 + Kotlin.hashCode(this.date) | 0;
    result = result * 31 + Kotlin.hashCode(this.replyTo) | 0;
    return result;
  };
  Thought.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.userId, other.userId) && Kotlin.equals(this.bubbleId, other.bubbleId) && Kotlin.equals(this.text, other.text) && Kotlin.equals(this.date, other.date) && Kotlin.equals(this.replyTo, other.replyTo)))));
  };
  function User(userId, email, phoneNumber, displayName, passwordHash) {
    this.userId = userId;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.displayName = displayName;
    this.passwordHash = passwordHash;
  }
  User.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'User',
    interfaces: []
  };
  User.prototype.component1 = function () {
    return this.userId;
  };
  User.prototype.component2 = function () {
    return this.email;
  };
  User.prototype.component3 = function () {
    return this.phoneNumber;
  };
  User.prototype.component4 = function () {
    return this.displayName;
  };
  User.prototype.component5 = function () {
    return this.passwordHash;
  };
  User.prototype.copy_x0a6t6$ = function (userId, email, phoneNumber, displayName, passwordHash) {
    return new User(userId === void 0 ? this.userId : userId, email === void 0 ? this.email : email, phoneNumber === void 0 ? this.phoneNumber : phoneNumber, displayName === void 0 ? this.displayName : displayName, passwordHash === void 0 ? this.passwordHash : passwordHash);
  };
  User.prototype.toString = function () {
    return 'User(userId=' + Kotlin.toString(this.userId) + (', email=' + Kotlin.toString(this.email)) + (', phoneNumber=' + Kotlin.toString(this.phoneNumber)) + (', displayName=' + Kotlin.toString(this.displayName)) + (', passwordHash=' + Kotlin.toString(this.passwordHash)) + ')';
  };
  User.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.userId) | 0;
    result = result * 31 + Kotlin.hashCode(this.email) | 0;
    result = result * 31 + Kotlin.hashCode(this.phoneNumber) | 0;
    result = result * 31 + Kotlin.hashCode(this.displayName) | 0;
    result = result * 31 + Kotlin.hashCode(this.passwordHash) | 0;
    return result;
  };
  User.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.userId, other.userId) && Kotlin.equals(this.email, other.email) && Kotlin.equals(this.phoneNumber, other.phoneNumber) && Kotlin.equals(this.displayName, other.displayName) && Kotlin.equals(this.passwordHash, other.passwordHash)))));
  };
  function Bubble(bubbleId, name, creationTime) {
    this.bubbleId = bubbleId;
    this.name = name;
    this.creationTime = creationTime;
  }
  Bubble.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bubble',
    interfaces: []
  };
  Bubble.prototype.component1 = function () {
    return this.bubbleId;
  };
  Bubble.prototype.component2 = function () {
    return this.name;
  };
  Bubble.prototype.component3 = function () {
    return this.creationTime;
  };
  Bubble.prototype.copy_s4fhmi$ = function (bubbleId, name, creationTime) {
    return new Bubble(bubbleId === void 0 ? this.bubbleId : bubbleId, name === void 0 ? this.name : name, creationTime === void 0 ? this.creationTime : creationTime);
  };
  Bubble.prototype.toString = function () {
    return 'Bubble(bubbleId=' + Kotlin.toString(this.bubbleId) + (', name=' + Kotlin.toString(this.name)) + (', creationTime=' + Kotlin.toString(this.creationTime)) + ')';
  };
  Bubble.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.bubbleId) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.creationTime) | 0;
    return result;
  };
  Bubble.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.bubbleId, other.bubbleId) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.creationTime, other.creationTime)))));
  };
  function RpcData() {
  }
  RpcData.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RpcData',
    interfaces: []
  };
  function IndexResponse(top, latest) {
    this.top = top;
    this.latest = latest;
  }
  IndexResponse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IndexResponse',
    interfaces: [RpcData]
  };
  IndexResponse.prototype.component1 = function () {
    return this.top;
  };
  IndexResponse.prototype.component2 = function () {
    return this.latest;
  };
  IndexResponse.prototype.copy_pc154c$ = function (top, latest) {
    return new IndexResponse(top === void 0 ? this.top : top, latest === void 0 ? this.latest : latest);
  };
  IndexResponse.prototype.toString = function () {
    return 'IndexResponse(top=' + Kotlin.toString(this.top) + (', latest=' + Kotlin.toString(this.latest)) + ')';
  };
  IndexResponse.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.top) | 0;
    result = result * 31 + Kotlin.hashCode(this.latest) | 0;
    return result;
  };
  IndexResponse.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.top, other.top) && Kotlin.equals(this.latest, other.latest)))));
  };
  function PostThoughtToken(user, bubbleId, date, code) {
    this.user = user;
    this.bubbleId = bubbleId;
    this.date = date;
    this.code = code;
  }
  PostThoughtToken.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PostThoughtToken',
    interfaces: [RpcData]
  };
  PostThoughtToken.prototype.component1 = function () {
    return this.user;
  };
  PostThoughtToken.prototype.component2 = function () {
    return this.bubbleId;
  };
  PostThoughtToken.prototype.component3 = function () {
    return this.date;
  };
  PostThoughtToken.prototype.component4 = function () {
    return this.code;
  };
  PostThoughtToken.prototype.copy_cermny$ = function (user, bubbleId, date, code) {
    return new PostThoughtToken(user === void 0 ? this.user : user, bubbleId === void 0 ? this.bubbleId : bubbleId, date === void 0 ? this.date : date, code === void 0 ? this.code : code);
  };
  PostThoughtToken.prototype.toString = function () {
    return 'PostThoughtToken(user=' + Kotlin.toString(this.user) + (', bubbleId=' + Kotlin.toString(this.bubbleId)) + (', date=' + Kotlin.toString(this.date)) + (', code=' + Kotlin.toString(this.code)) + ')';
  };
  PostThoughtToken.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.user) | 0;
    result = result * 31 + Kotlin.hashCode(this.bubbleId) | 0;
    result = result * 31 + Kotlin.hashCode(this.date) | 0;
    result = result * 31 + Kotlin.hashCode(this.code) | 0;
    return result;
  };
  PostThoughtToken.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.user, other.user) && Kotlin.equals(this.bubbleId, other.bubbleId) && Kotlin.equals(this.date, other.date) && Kotlin.equals(this.code, other.code)))));
  };
  function PostThoughtResult(thought) {
    this.thought = thought;
  }
  PostThoughtResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PostThoughtResult',
    interfaces: [RpcData]
  };
  PostThoughtResult.prototype.component1 = function () {
    return this.thought;
  };
  PostThoughtResult.prototype.copy_b4ew03$ = function (thought) {
    return new PostThoughtResult(thought === void 0 ? this.thought : thought);
  };
  PostThoughtResult.prototype.toString = function () {
    return 'PostThoughtResult(thought=' + Kotlin.toString(this.thought) + ')';
  };
  PostThoughtResult.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.thought) | 0;
    return result;
  };
  PostThoughtResult.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.thought, other.thought))));
  };
  function UserThoughtsResponse(user, thoughts) {
    this.user = user;
    this.thoughts = thoughts;
  }
  UserThoughtsResponse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserThoughtsResponse',
    interfaces: [RpcData]
  };
  UserThoughtsResponse.prototype.component1 = function () {
    return this.user;
  };
  UserThoughtsResponse.prototype.component2 = function () {
    return this.thoughts;
  };
  UserThoughtsResponse.prototype.copy_64r9df$ = function (user, thoughts) {
    return new UserThoughtsResponse(user === void 0 ? this.user : user, thoughts === void 0 ? this.thoughts : thoughts);
  };
  UserThoughtsResponse.prototype.toString = function () {
    return 'UserThoughtsResponse(user=' + Kotlin.toString(this.user) + (', thoughts=' + Kotlin.toString(this.thoughts)) + ')';
  };
  UserThoughtsResponse.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.user) | 0;
    result = result * 31 + Kotlin.hashCode(this.thoughts) | 0;
    return result;
  };
  UserThoughtsResponse.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.user, other.user) && Kotlin.equals(this.thoughts, other.thoughts)))));
  };
  function ViewThoughtResponse(thought, date, code) {
    this.thought = thought;
    this.date = date;
    this.code = code;
  }
  ViewThoughtResponse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ViewThoughtResponse',
    interfaces: [RpcData]
  };
  ViewThoughtResponse.prototype.component1 = function () {
    return this.thought;
  };
  ViewThoughtResponse.prototype.component2 = function () {
    return this.date;
  };
  ViewThoughtResponse.prototype.component3 = function () {
    return this.code;
  };
  ViewThoughtResponse.prototype.copy_r679sj$ = function (thought, date, code) {
    return new ViewThoughtResponse(thought === void 0 ? this.thought : thought, date === void 0 ? this.date : date, code === void 0 ? this.code : code);
  };
  ViewThoughtResponse.prototype.toString = function () {
    return 'ViewThoughtResponse(thought=' + Kotlin.toString(this.thought) + (', date=' + Kotlin.toString(this.date)) + (', code=' + Kotlin.toString(this.code)) + ')';
  };
  ViewThoughtResponse.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.thought) | 0;
    result = result * 31 + Kotlin.hashCode(this.date) | 0;
    result = result * 31 + Kotlin.hashCode(this.code) | 0;
    return result;
  };
  ViewThoughtResponse.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.thought, other.thought) && Kotlin.equals(this.date, other.date) && Kotlin.equals(this.code, other.code)))));
  };
  function ViewBubbleResponse(bubble, top, latest, date, code) {
    this.bubble = bubble;
    this.top = top;
    this.latest = latest;
    this.date = date;
    this.code = code;
  }
  ViewBubbleResponse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ViewBubbleResponse',
    interfaces: [RpcData]
  };
  ViewBubbleResponse.prototype.component1 = function () {
    return this.bubble;
  };
  ViewBubbleResponse.prototype.component2 = function () {
    return this.top;
  };
  ViewBubbleResponse.prototype.component3 = function () {
    return this.latest;
  };
  ViewBubbleResponse.prototype.component4 = function () {
    return this.date;
  };
  ViewBubbleResponse.prototype.component5 = function () {
    return this.code;
  };
  ViewBubbleResponse.prototype.copy_jrjzte$ = function (bubble, top, latest, date, code) {
    return new ViewBubbleResponse(bubble === void 0 ? this.bubble : bubble, top === void 0 ? this.top : top, latest === void 0 ? this.latest : latest, date === void 0 ? this.date : date, code === void 0 ? this.code : code);
  };
  ViewBubbleResponse.prototype.toString = function () {
    return 'ViewBubbleResponse(bubble=' + Kotlin.toString(this.bubble) + (', top=' + Kotlin.toString(this.top)) + (', latest=' + Kotlin.toString(this.latest)) + (', date=' + Kotlin.toString(this.date)) + (', code=' + Kotlin.toString(this.code)) + ')';
  };
  ViewBubbleResponse.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.bubble) | 0;
    result = result * 31 + Kotlin.hashCode(this.top) | 0;
    result = result * 31 + Kotlin.hashCode(this.latest) | 0;
    result = result * 31 + Kotlin.hashCode(this.date) | 0;
    result = result * 31 + Kotlin.hashCode(this.code) | 0;
    return result;
  };
  ViewBubbleResponse.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.bubble, other.bubble) && Kotlin.equals(this.top, other.top) && Kotlin.equals(this.latest, other.latest) && Kotlin.equals(this.date, other.date) && Kotlin.equals(this.code, other.code)))));
  };
  function LoginResponse(user, error) {
    if (user === void 0)
      user = null;
    if (error === void 0)
      error = null;
    this.user = user;
    this.error = error;
  }
  LoginResponse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoginResponse',
    interfaces: [RpcData]
  };
  LoginResponse.prototype.component1 = function () {
    return this.user;
  };
  LoginResponse.prototype.component2 = function () {
    return this.error;
  };
  LoginResponse.prototype.copy_r298mn$ = function (user, error) {
    return new LoginResponse(user === void 0 ? this.user : user, error === void 0 ? this.error : error);
  };
  LoginResponse.prototype.toString = function () {
    return 'LoginResponse(user=' + Kotlin.toString(this.user) + (', error=' + Kotlin.toString(this.error)) + ')';
  };
  LoginResponse.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.user) | 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  LoginResponse.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.user, other.user) && Kotlin.equals(this.error, other.error)))));
  };
  function JoinBubbleResponse(userId, bubbleId, error) {
    if (error === void 0)
      error = null;
    this.userId = userId;
    this.bubbleId = bubbleId;
    this.error = error;
  }
  JoinBubbleResponse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JoinBubbleResponse',
    interfaces: [RpcData]
  };
  JoinBubbleResponse.prototype.component1 = function () {
    return this.userId;
  };
  JoinBubbleResponse.prototype.component2 = function () {
    return this.bubbleId;
  };
  JoinBubbleResponse.prototype.component3 = function () {
    return this.error;
  };
  JoinBubbleResponse.prototype.copy_buzeal$ = function (userId, bubbleId, error) {
    return new JoinBubbleResponse(userId === void 0 ? this.userId : userId, bubbleId === void 0 ? this.bubbleId : bubbleId, error === void 0 ? this.error : error);
  };
  JoinBubbleResponse.prototype.toString = function () {
    return 'JoinBubbleResponse(userId=' + Kotlin.toString(this.userId) + (', bubbleId=' + Kotlin.toString(this.bubbleId)) + (', error=' + Kotlin.toString(this.error)) + ')';
  };
  JoinBubbleResponse.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.userId) | 0;
    result = result * 31 + Kotlin.hashCode(this.bubbleId) | 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  JoinBubbleResponse.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.userId, other.userId) && Kotlin.equals(this.bubbleId, other.bubbleId) && Kotlin.equals(this.error, other.error)))));
  };
  function LeaveBubbleResponse(userId, bubbleId, error) {
    if (error === void 0)
      error = null;
    this.userId = userId;
    this.bubbleId = bubbleId;
    this.error = error;
  }
  LeaveBubbleResponse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LeaveBubbleResponse',
    interfaces: [RpcData]
  };
  LeaveBubbleResponse.prototype.component1 = function () {
    return this.userId;
  };
  LeaveBubbleResponse.prototype.component2 = function () {
    return this.bubbleId;
  };
  LeaveBubbleResponse.prototype.component3 = function () {
    return this.error;
  };
  LeaveBubbleResponse.prototype.copy_buzeal$ = function (userId, bubbleId, error) {
    return new LeaveBubbleResponse(userId === void 0 ? this.userId : userId, bubbleId === void 0 ? this.bubbleId : bubbleId, error === void 0 ? this.error : error);
  };
  LeaveBubbleResponse.prototype.toString = function () {
    return 'LeaveBubbleResponse(userId=' + Kotlin.toString(this.userId) + (', bubbleId=' + Kotlin.toString(this.bubbleId)) + (', error=' + Kotlin.toString(this.error)) + ')';
  };
  LeaveBubbleResponse.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.userId) | 0;
    result = result * 31 + Kotlin.hashCode(this.bubbleId) | 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  LeaveBubbleResponse.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.userId, other.userId) && Kotlin.equals(this.bubbleId, other.bubbleId) && Kotlin.equals(this.error, other.error)))));
  };
  function ShowBubbleResponse(bubble, top, latest, date, code) {
    this.bubble = bubble;
    this.top = top;
    this.latest = latest;
    this.date = date;
    this.code = code;
  }
  ShowBubbleResponse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShowBubbleResponse',
    interfaces: [RpcData]
  };
  ShowBubbleResponse.prototype.component1 = function () {
    return this.bubble;
  };
  ShowBubbleResponse.prototype.component2 = function () {
    return this.top;
  };
  ShowBubbleResponse.prototype.component3 = function () {
    return this.latest;
  };
  ShowBubbleResponse.prototype.component4 = function () {
    return this.date;
  };
  ShowBubbleResponse.prototype.component5 = function () {
    return this.code;
  };
  ShowBubbleResponse.prototype.copy_73jyc3$ = function (bubble, top, latest, date, code) {
    return new ShowBubbleResponse(bubble === void 0 ? this.bubble : bubble, top === void 0 ? this.top : top, latest === void 0 ? this.latest : latest, date === void 0 ? this.date : date, code === void 0 ? this.code : code);
  };
  ShowBubbleResponse.prototype.toString = function () {
    return 'ShowBubbleResponse(bubble=' + Kotlin.toString(this.bubble) + (', top=' + Kotlin.toString(this.top)) + (', latest=' + Kotlin.toString(this.latest)) + (', date=' + Kotlin.toString(this.date)) + (', code=' + Kotlin.toString(this.code)) + ')';
  };
  ShowBubbleResponse.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.bubble) | 0;
    result = result * 31 + Kotlin.hashCode(this.top) | 0;
    result = result * 31 + Kotlin.hashCode(this.latest) | 0;
    result = result * 31 + Kotlin.hashCode(this.date) | 0;
    result = result * 31 + Kotlin.hashCode(this.code) | 0;
    return result;
  };
  ShowBubbleResponse.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.bubble, other.bubble) && Kotlin.equals(this.top, other.top) && Kotlin.equals(this.latest, other.latest) && Kotlin.equals(this.date, other.date) && Kotlin.equals(this.code, other.code)))));
  };
  function ReactComponentNoState() {
  }
  ReactComponentNoState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReactComponentNoState',
    interfaces: []
  };
  function ReactComponentNoProps() {
    RProps.call(this);
  }
  ReactComponentNoProps.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReactComponentNoProps',
    interfaces: [RProps]
  };
  function ReactComponentEmptyProps() {
    RProps.call(this);
  }
  ReactComponentEmptyProps.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReactComponentEmptyProps',
    interfaces: [RProps]
  };
  function ReactDsl() {
  }
  ReactDsl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReactDsl',
    interfaces: [Annotation]
  };
  function ReactBuilder() {
    this.path = ArrayList_init();
    this.lastLeaved_gxmp8s$_0 = null;
  }
  function ReactBuilder$Node(type, props) {
    this.type = type;
    this.props = props;
    this.children = ArrayList_init();
  }
  Object.defineProperty(ReactBuilder$Node.prototype, 'realType', {
    get: function () {
      return this.type;
    }
  });
  ReactBuilder$Node.prototype.create = function () {
    return ReactWrapper_getInstance().createRaw_139a74$(this.realType, this.props, this.children);
  };
  ReactBuilder$Node.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Node',
    interfaces: []
  };
  Object.defineProperty(ReactBuilder.prototype, 'children', {
    get: function () {
      return this.currentNode().children;
    }
  });
  ReactBuilder.prototype.currentNode = function () {
    return last(this.path);
  };
  ReactBuilder.prototype.currentNodeOfType_rku8s3$ = defineInlineFunction('frontend_main.react.ReactBuilder.currentNodeOfType_rku8s3$', wrapFunction(function () {
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT) {
      var tmp$;
      return isT(tmp$ = this.currentNode()) ? tmp$ : throwCCE();
    };
  }));
  ReactBuilder.prototype.enterNode_88i3q1$ = function (node) {
    if (this.path.isEmpty() && this.lastLeaved_gxmp8s$_0 != null) {
      console.error('React only allows single element be returned from render() function');
    }
    this.path.add_11rb$(node);
  };
  ReactBuilder.prototype.exitCurrentNode = function () {
    var node = this.path.removeAt_za3lpa$(get_lastIndex(this.path));
    var element = node.create();
    if (!this.path.isEmpty()) {
      this.children.add_11rb$(element);
    }
    this.lastLeaved_gxmp8s$_0 = element;
    return element;
  };
  ReactBuilder.prototype.createReactNode_qfhe8e$ = function (type, props) {
    return new ReactBuilder$Node(type, props);
  };
  ReactBuilder.prototype.enterReactNode_uztyw4$ = function (type, props, handler) {
    this.enterNode_88i3q1$(this.createReactNode_qfhe8e$(type, props));
    handler(this);
    return this.exitCurrentNode();
  };
  ReactBuilder.prototype.instantiateProps_xu0bud$ = defineInlineFunction('frontend_main.react.ReactBuilder.instantiateProps_xu0bud$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var createInstance = _.runtime.reflect.createInstance_1yb8b7$;
    return function (P_0, isP) {
      return createInstance(getKClass(P_0));
    };
  }));
  ReactBuilder.prototype.invoke_6pvil0$ = defineInlineFunction('frontend_main.react.ReactBuilder.invoke_6pvil0$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    function ReactBuilder$invoke$lambda($receiver) {
      return Unit;
    }
    function ReactBuilder$invoke$lambda_0(closure$props, closure$handler) {
      return function ($receiver) {
        closure$handler(closure$props);
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    var createInstance = _.runtime.reflect.createInstance_1yb8b7$;
    var ReactComponent = _.react.ReactComponent;
    return function (T_0, isT, P_0, isP, $receiver, handler) {
      if (handler === void 0)
        handler = ReactBuilder$invoke$lambda;
      var props = createInstance(getKClass(P_0));
      return this.enterReactNode_uztyw4$(ReactComponent.Companion.wrap_v5not5$(getKClass(T_0)), props, ReactBuilder$invoke$lambda_0(props, handler));
    };
  }));
  ReactBuilder.prototype.invoke_yo4to9$ = defineInlineFunction('frontend_main.react.ReactBuilder.invoke_yo4to9$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    function ReactBuilder$invoke$lambda($receiver) {
      return Unit;
    }
    function ReactBuilder$invoke$lambda_0(closure$props, closure$handler) {
      return function ($receiver) {
        closure$handler(closure$props);
        return Unit;
      };
    }
    var ReactComponent = _.react.ReactComponent;
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, P_0, isP, $receiver, props, handler) {
      if (handler === void 0)
        handler = ReactBuilder$invoke$lambda;
      return this.enterReactNode_uztyw4$(ReactComponent.Companion.wrap_v5not5$(getKClass(T_0)), props, ReactBuilder$invoke$lambda_0(props, handler));
    };
  }));
  ReactBuilder.prototype.node_g12n31$ = defineInlineFunction('frontend_main.react.ReactBuilder.node_g12n31$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var ReactComponent = _.react.ReactComponent;
    var getKClass = Kotlin.getKClass;
    function ReactBuilder$node$lambda($receiver) {
      return Unit;
    }
    return function (T_0, isT, P_0, isP, $receiver, props, handler) {
      if (handler === void 0)
        handler = ReactBuilder$node$lambda;
      return this.enterReactNode_uztyw4$(ReactComponent.Companion.wrap_v5not5$(getKClass(T_0)), props, handler);
    };
  }));
  ReactBuilder.prototype.invoke_hz9fqm$ = defineInlineFunction('frontend_main.react.ReactBuilder.invoke_hz9fqm$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    function ReactBuilder$invoke$lambda($receiver) {
      return Unit;
    }
    function ReactBuilder$invoke$lambda_0(closure$props, closure$handler) {
      return function ($receiver) {
        closure$handler(closure$props);
        return Unit;
      };
    }
    var getKClass = Kotlin.getKClass;
    var createInstance = _.runtime.reflect.createInstance_1yb8b7$;
    return function (P_0, isP, $receiver, handler) {
      if (handler === void 0)
        handler = ReactBuilder$invoke$lambda;
      var props = createInstance(getKClass(P_0));
      return this.enterReactNode_uztyw4$($receiver.ref, props, ReactBuilder$invoke$lambda_0(props, handler));
    };
  }));
  ReactBuilder.prototype.node_arc5mv$ = defineInlineFunction('frontend_main.react.ReactBuilder.node_arc5mv$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    function ReactBuilder$node$lambda($receiver) {
      return Unit;
    }
    return function (P_0, isP, $receiver, props, handler) {
      if (handler === void 0)
        handler = ReactBuilder$node$lambda;
      return this.enterReactNode_uztyw4$($receiver.ref, props, handler);
    };
  }));
  ReactBuilder.prototype.result = function () {
    return this.lastLeaved_gxmp8s$_0;
  };
  ReactBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReactBuilder',
    interfaces: []
  };
  function RProps() {
    this.key = null;
    this.children = null;
  }
  RProps.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RProps',
    interfaces: []
  };
  function BoxedState(state) {
    this.state = state;
  }
  BoxedState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoxedState',
    interfaces: []
  };
  function ReactComponentSpec() {
  }
  ReactComponentSpec.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ReactComponentSpec',
    interfaces: []
  };
  var initWrapper;
  function ReactComponent() {
    ReactComponent$Companion_getInstance();
    var tmp$;
    this.wrapper_8be2vx$ = Kotlin.isType(tmp$ = initWrapper, ReactComponentWrapper) ? tmp$ : throwCCE();
    this.stateField_8be2vx$_qnl6m4$_0 = this.stateField_8be2vx$_qnl6m4$_0;
    this.isSealed_8be2vx$ = false;
    this.hasState_8be2vx$ = false;
  }
  Object.defineProperty(ReactComponent.prototype, 'stateField_8be2vx$', {
    get: function () {
      if (this.stateField_8be2vx$_qnl6m4$_0 == null)
        return throwUPAE('stateField');
      return this.stateField_8be2vx$_qnl6m4$_0;
    },
    set: function (stateField) {
      this.stateField_8be2vx$_qnl6m4$_0 = stateField;
    }
  });
  Object.defineProperty(ReactComponent.prototype, 'props', {
    get: function () {
      return this.wrapper_8be2vx$.props;
    }
  });
  Object.defineProperty(ReactComponent.prototype, 'state', {
    get: function () {
      return this.stateField_8be2vx$;
    },
    set: function (value) {
      if (!this.isSealed_8be2vx$) {
        this.stateField_8be2vx$ = value;
        this.hasState_8be2vx$ = true;
      }
       else {
        throw new RuntimeException("You can't set initial state not in constructor");
      }
    }
  });
  ReactComponent.prototype.setState_hgm6vj$ = function (builder) {
    if (!this.isSealed_8be2vx$) {
      builder(this.state);
    }
     else {
      this.wrapper_8be2vx$.setState_6a2he9$(builder);
    }
  };
  ReactComponent.prototype.replaceState_scoadc$ = function (state) {
    if (!this.isSealed_8be2vx$) {
      this.state = state;
    }
     else {
      this.wrapper_8be2vx$.replaceState_vpnnum$(state);
    }
  };
  ReactComponent.prototype.seal_8be2vx$ = function () {
    this.isSealed_8be2vx$ = true;
  };
  ReactComponent.prototype.setStateFromWrapper_3fmn43$ = function (state) {
    this.stateField_8be2vx$ = state;
    this.hasState_8be2vx$ = true;
  };
  function ReactComponent$Companion() {
    ReactComponent$Companion_instance = this;
    this.wrappers_0 = HashMap_init();
  }
  ReactComponent$Companion.prototype.wrap_x51phs$ = defineInlineFunction('frontend_main.react.ReactComponent.Companion.wrap_x51phs$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (K_0, isK) {
      return this.wrap_v5not5$(getKClass(K_0));
    };
  }));
  function ReactComponent$Companion$wrap$lambda(closure$clazz) {
    return function (p, f, updater) {
      return new ReactComponentWrapper(p, updater, closure$clazz);
    };
  }
  ReactComponent$Companion.prototype.wrap_v5not5$ = function (clazz) {
    var tmp$;
    if (this.wrappers_0.get_11rb$(clazz) == null) {
      this.wrappers_0.put_xwzc9p$(clazz, ReactComponent$Companion$wrap$lambda(clazz));
      this.wrappers_0.get_11rb$(clazz).displayName = get_js(clazz).name;
    }
    return typeof (tmp$ = this.wrappers_0.get_11rb$(clazz)) === 'function' ? tmp$ : throwCCE();
  };
  ReactComponent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ReactComponent$Companion_instance = null;
  function ReactComponent$Companion_getInstance() {
    if (ReactComponent$Companion_instance === null) {
      new ReactComponent$Companion();
    }
    return ReactComponent$Companion_instance;
  }
  ReactComponent.prototype.componentWillMount = function () {
  };
  ReactComponent.prototype.componentDidMount = function () {
  };
  ReactComponent.prototype.componentWillUnmount = function () {
  };
  ReactComponent.prototype.componentDidUpdate_swhzy7$ = function (prevProps, prevState) {
  };
  ReactComponent.prototype.shouldComponentUpdate_swhzy7$ = function (nextProps, nextState) {
    return true;
  };
  ReactComponent.prototype.componentWillUpdate = function () {
  };
  ReactComponent.prototype.componentWillReceiveProps_hc7t5p$ = function (nextProps) {
  };
  ReactComponent.prototype.subscribe_jthzip$ = function (listener) {
    this.wrapper_8be2vx$.subscribers.add_11rb$(listener);
  };
  ReactComponent.prototype.unsubscribe_jthzip$ = function (listener) {
    this.wrapper_8be2vx$.subscribers.remove_11rb$(listener);
  };
  ReactComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReactComponent',
    interfaces: [ReactExtensionProvider]
  };
  function ReactComponentWrapper(props, updater, klazz) {
    this.props = props;
    this.updater = updater;
    this.klazz = klazz;
    this.delegate_0 = null;
    this.stateField_0 = null;
    this.subscribers = ArrayList_init();
    var oldGlobal = initWrapper;
    initWrapper = this;
    this.delegate_0 = createInstance(this.klazz);
    this.delegate_0.seal_8be2vx$();
    initWrapper = oldGlobal;
    if (!this.delegate_0.hasState_8be2vx$) {
      throw new RuntimeException("You haven't set initial state in your constructor of " + toString(this.klazz.simpleName) + '!');
    }
    this.stateField_0 = this.delegate_0.state;
  }
  Object.defineProperty(ReactComponentWrapper.prototype, 'state', {
    get: function () {
      return this.stateField_0;
    },
    set: function (value) {
      this.stateField_0 = value;
      this.delegate_0.setStateFromWrapper_3fmn43$(value);
    }
  });
  ReactComponentWrapper.prototype.setState_6a2he9$ = function (stateBuilder) {
    var partialState = {};
    stateBuilder(partialState);
    this.updater.enqueueSetState(this, partialState);
  };
  ReactComponentWrapper.prototype.replaceState_vpnnum$ = function (state) {
    this.updater.enqueueReplaceState(this, state);
  };
  ReactComponentWrapper.prototype.render = function () {
    return this.delegate_0.render();
  };
  ReactComponentWrapper.prototype.shouldComponentUpdate = function (nextProps, nextState) {
    return this.delegate_0.shouldComponentUpdate_swhzy7$(nextProps, nextState);
  };
  ReactComponentWrapper.prototype.componentWillReceiveProps = function (nextProps) {
    this.delegate_0.componentWillReceiveProps_hc7t5p$(nextProps);
  };
  ReactComponentWrapper.prototype.componentWillUpdate = function () {
    var tmp$;
    tmp$ = this.subscribers.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.reactComponentWillUpdate();
    }
    this.delegate_0.componentWillUpdate();
  };
  ReactComponentWrapper.prototype.componentDidUpdate = function (prevProps, prevState) {
    var tmp$;
    tmp$ = this.subscribers.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.reactComponentDidUpdate_gnpndf$(prevProps, prevState);
    }
    this.delegate_0.componentDidUpdate_swhzy7$(prevProps, prevState);
  };
  ReactComponentWrapper.prototype.componentWillUnmount = function () {
    var tmp$;
    tmp$ = this.subscribers.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.reactComponentWillUnmount();
    }
    this.delegate_0.componentWillUnmount();
  };
  ReactComponentWrapper.prototype.componentWillMount = function () {
    var tmp$;
    tmp$ = this.subscribers.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.reactComponentWillMount();
    }
    this.delegate_0.componentWillMount();
  };
  ReactComponentWrapper.prototype.componentDidMount = function () {
    var tmp$;
    tmp$ = this.subscribers.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.reactComponentDidMount();
    }
    this.delegate_0.componentDidMount();
  };
  ReactComponentWrapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReactComponentWrapper',
    interfaces: []
  };
  function ReactComponentLifecycleListener() {
  }
  ReactComponentLifecycleListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ReactComponentLifecycleListener',
    interfaces: []
  };
  function ReactExtensionProvider() {
  }
  ReactExtensionProvider.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ReactExtensionProvider',
    interfaces: []
  };
  function BaseReactExtension(provider) {
    this.provider = provider;
    this.listener_dbgix4$_0 = new BaseReactExtension$listener$ObjectLiteral(this);
    this.provider.subscribe_jthzip$(this.listener_dbgix4$_0);
  }
  BaseReactExtension.prototype.componentDidUpdate_gnpndf$ = function (prevProps, prevState) {
  };
  BaseReactExtension.prototype.componentWillUpdate = function () {
  };
  BaseReactExtension.prototype.componentWillUnmount = function () {
  };
  BaseReactExtension.prototype.componentWillMount = function () {
  };
  BaseReactExtension.prototype.componentDidMount = function () {
  };
  function BaseReactExtension$listener$ObjectLiteral(this$BaseReactExtension) {
    this.this$BaseReactExtension = this$BaseReactExtension;
  }
  BaseReactExtension$listener$ObjectLiteral.prototype.reactComponentWillUpdate = function () {
    this.this$BaseReactExtension.componentWillUpdate();
  };
  BaseReactExtension$listener$ObjectLiteral.prototype.reactComponentDidUpdate_gnpndf$ = function (prevProps, prevState) {
    this.this$BaseReactExtension.componentDidUpdate_gnpndf$(prevProps, prevState);
  };
  BaseReactExtension$listener$ObjectLiteral.prototype.reactComponentWillUnmount = function () {
    this.this$BaseReactExtension.provider.unsubscribe_jthzip$(this);
    this.this$BaseReactExtension.componentWillUnmount();
  };
  BaseReactExtension$listener$ObjectLiteral.prototype.reactComponentWillMount = function () {
    this.this$BaseReactExtension.componentWillMount();
  };
  BaseReactExtension$listener$ObjectLiteral.prototype.reactComponentDidMount = function () {
    this.this$BaseReactExtension.componentDidMount();
  };
  BaseReactExtension$listener$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ReactComponentLifecycleListener]
  };
  BaseReactExtension.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseReactExtension',
    interfaces: []
  };
  function BaseReactExtensionReadWriteProperty(provider) {
    BaseReactExtension.call(this, provider);
  }
  BaseReactExtensionReadWriteProperty.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseReactExtensionReadWriteProperty',
    interfaces: [ReadWriteProperty, BaseReactExtension]
  };
  function BaseReactExtensionReadOnlyProperty(provider) {
    BaseReactExtension.call(this, provider);
  }
  BaseReactExtensionReadOnlyProperty.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseReactExtensionReadOnlyProperty',
    interfaces: [ReadOnlyProperty, BaseReactExtension]
  };
  function ReactExternalComponentSpec(ref) {
    this.ref = ref;
  }
  ReactExternalComponentSpec.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReactExternalComponentSpec',
    interfaces: []
  };
  function ReactElement() {
  }
  ReactElement.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ReactElement',
    interfaces: []
  };
  function ReactWrapper() {
    ReactWrapper_instance = this;
  }
  ReactWrapper.prototype.normalize_s8jyv4$ = function (child) {
    if (child == null) {
      return emptyList();
    }
     else if (Kotlin.isType(child, Iterable))
      return filterNotNull(child);
    else if (Kotlin.isArray(child))
      return filterNotNull_0(child);
    else
      return listOf(child);
  };
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  ReactWrapper.prototype.createRaw_139a74$ = function (type, props, child) {
    if (child === void 0)
      child = null;
    var tmp$;
    return (tmp$ = $module$react).createElement.apply(tmp$, [type, toPlainObjectStripNull(props)].concat(copyToArray(this.normalize_s8jyv4$(child))));
  };
  ReactWrapper.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ReactWrapper',
    interfaces: []
  };
  var ReactWrapper_instance = null;
  function ReactWrapper_getInstance() {
    if (ReactWrapper_instance === null) {
      new ReactWrapper();
    }
    return ReactWrapper_instance;
  }
  function render($receiver, container, handler) {
    $receiver.render(buildElement(handler), container);
  }
  var events;
  var eventMap;
  function fixAttributeName(event) {
    var tmp$;
    return (tmp$ = eventMap.get_11rb$(event)) != null ? tmp$ : equals(event, 'class') ? 'className' : event;
  }
  var attributeStringString;
  function get_defaultValue($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'defaultValue');
  }
  function set_defaultValue($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'defaultValue', newValue);
  }
  function get_defaultValue_0($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'defaultValue');
  }
  function set_defaultValue_0($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'defaultValue', newValue);
  }
  function get_value($receiver) {
    return attributeStringString.get_txhc1s$($receiver, 'value');
  }
  function set_value($receiver, newValue) {
    attributeStringString.set_fid0sb$($receiver, 'value', newValue);
  }
  function InnerHTML(__html) {
    this.__html = __html;
  }
  InnerHTML.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InnerHTML',
    interfaces: []
  };
  function DOMProps() {
    RProps.call(this);
    this.dangerouslySetInnerHTML = null;
  }
  DOMProps.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DOMProps',
    interfaces: [RProps]
  };
  function ReactDOMBuilder() {
    ReactBuilder.call(this);
  }
  ReactDOMBuilder.prototype.createReactNode_qfhe8e$ = function (type, props) {
    return new ReactBuilder$Node(type, props);
  };
  function ReactDOMBuilder$DOMNode(tagName) {
    ReactBuilder$Node.call(this, tagName, new DOMProps());
    this.tagName = tagName;
  }
  ReactDOMBuilder$DOMNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DOMNode',
    interfaces: [ReactBuilder$Node]
  };
  ReactDOMBuilder.prototype.currentDOMNode_0 = function () {
    var tmp$;
    return Kotlin.isType(tmp$ = this.currentNode(), ReactDOMBuilder$DOMNode) ? tmp$ : throwCCE();
  };
  ReactDOMBuilder.prototype.get_key_8alqek$ = function ($receiver) {
    var tmp$;
    return (tmp$ = this.currentDOMNode_0().props.key) != null ? tmp$ : '';
  };
  ReactDOMBuilder.prototype.set_key_mi7nou$ = function ($receiver, value) {
    this.currentDOMNode_0().props.key = value;
  };
  ReactDOMBuilder.prototype.setProp_bm4g0d$ = function (attribute, value) {
    var node = this.currentNode();
    var key = fixAttributeName(attribute);
    if (value == null) {
      delete node.props[key];
    }
     else {
      node.props[key] = value;
    }
  };
  ReactDOMBuilder.prototype.onTagAttributeChange_5n2z71$ = function (tag, attribute, value) {
    this.setProp_bm4g0d$(attribute, value);
  };
  ReactDOMBuilder.prototype.unaryPlus_pdl1vz$ = function ($receiver) {
    this.onTagContent_6bul2c$($receiver);
  };
  ReactDOMBuilder.prototype.onTagContent_6bul2c$ = function (content) {
    this.children.add_11rb$(content);
  };
  ReactDOMBuilder.prototype.onTagContentEntity_ws8or7$ = function (entity) {
    this.children.add_11rb$(entity.text);
  };
  function ReactDOMBuilder$onTagContentUnsafe$ObjectLiteral(closure$sb) {
    this.closure$sb = closure$sb;
  }
  ReactDOMBuilder$onTagContentUnsafe$ObjectLiteral.prototype.unaryPlus_pdl1vz$ = function ($receiver) {
    this.closure$sb.append_gw00v9$($receiver);
  };
  ReactDOMBuilder$onTagContentUnsafe$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Unsafe]
  };
  ReactDOMBuilder.prototype.onTagContentUnsafe_kntra7$ = function (block) {
    var sb = new StringBuilder();
    block(new ReactDOMBuilder$onTagContentUnsafe$ObjectLiteral(sb));
    var node = this.currentDOMNode_0();
    node.props.dangerouslySetInnerHTML = new InnerHTML(sb.toString());
  };
  ReactDOMBuilder.prototype.onTagStart_tkgjla$ = function (tag) {
    this.enterNode_88i3q1$(new ReactDOMBuilder$DOMNode(tag.tagName));
    var tmp$;
    tmp$ = tag.attributesEntries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.setProp_bm4g0d$(element.key, element.value);
    }
  };
  ReactDOMBuilder.prototype.onTagEnd_tkgjla$ = function (tag) {
    var tmp$ = this.path.isEmpty();
    if (!tmp$) {
      tmp$ = !equals(this.currentDOMNode_0().tagName.toLowerCase(), tag.tagName.toLowerCase());
    }
    if (tmp$)
      throw new IllegalStateException("We haven't entered tag " + tag.tagName + ' but trying to leave');
    this.exitCurrentNode();
  };
  ReactDOMBuilder.prototype.onTagEvent_azi6uv$ = function (tag, event, value) {
    this.setProp_bm4g0d$(event, value);
  };
  ReactDOMBuilder.prototype.finalize = function () {
    return this.result();
  };
  ReactDOMBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReactDOMBuilder',
    interfaces: [TagConsumer, ReactBuilder]
  };
  function buildElement(handler) {
    var $receiver = new ReactDOMBuilder();
    handler($receiver);
    return $receiver.finalize();
  }
  function ReactDOMComponent() {
    ReactComponent.call(this);
  }
  ReactDOMComponent.prototype.children_u0k4lg$ = function ($receiver) {
    $receiver.children.addAll_brywnq$(ReactWrapper_getInstance().normalize_s8jyv4$(this.props.children));
  };
  Object.defineProperty(ReactDOMComponent.prototype, 'DOMNode', {
    get: function () {
      return $module$react_dom.findDOMNode(this);
    }
  });
  function ReactDOMComponent$render$lambda(this$ReactDOMComponent) {
    return function ($receiver) {
      this$ReactDOMComponent.render_vhjzqq$($receiver);
      return Unit;
    };
  }
  ReactDOMComponent.prototype.render = function () {
    return buildElement(ReactDOMComponent$render$lambda(this));
  };
  ReactDOMComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReactDOMComponent',
    interfaces: [ReactComponent]
  };
  function ReactDOMStatelessComponent() {
    ReactDOMComponent.call(this);
    this.state = new ReactComponentNoState();
  }
  ReactDOMStatelessComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReactDOMStatelessComponent',
    interfaces: [ReactDOMComponent]
  };
  function ReactDOMPropslessComponent() {
    ReactDOMComponent.call(this);
  }
  ReactDOMPropslessComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReactDOMPropslessComponent',
    interfaces: [ReactDOMComponent]
  };
  function ReactDOMStaticComponent() {
    ReactDOMComponent.call(this);
    this.state = new ReactComponentNoState();
  }
  ReactDOMStaticComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReactDOMStaticComponent',
    interfaces: [ReactDOMComponent]
  };
  var package$runtime = _.runtime || (_.runtime = {});
  var package$reflect = package$runtime.reflect || (package$runtime.reflect = {});
  package$reflect.createInstance_1yb8b7$ = createInstance;
  $$importsForInline$$.frontend_main = _;
  var package$wrappers = package$runtime.wrappers || (package$runtime.wrappers = {});
  package$wrappers.jsObject_7qq44f$ = jsObject;
  package$wrappers.js_5ij4lk$ = js;
  package$wrappers.getOwnPropertyNames_s8jyvk$ = getOwnPropertyNames;
  package$wrappers.toPlainObjectStripNull_za3rmp$ = toPlainObjectStripNull;
  package$wrappers.jsstyle_5ij4lk$ = jsstyle;
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$coroutines = package$kotlinx.coroutines || (package$kotlinx.coroutines = {});
  var package$experimental = package$coroutines.experimental || (package$coroutines.experimental = {});
  package$experimental.await_t11jrl$ = await_0;
  package$experimental.async_lnyleu$ = async;
  package$experimental.launch_g2bo5h$ = launch;
  var package$org = _.org || (_.org = {});
  var package$jetbrains = package$org.jetbrains || (package$org.jetbrains = {});
  var package$common = package$jetbrains.common || (package$jetbrains.common = {});
  package$common.get_inputValue_fxsrhs$ = get_inputValue;
  var package$demo = package$jetbrains.demo || (package$jetbrains.demo = {});
  var package$bubbler = package$demo.bubbler || (package$demo.bubbler = {});
  package$bubbler.main_kand9s$ = main;
  Object.defineProperty(Application, 'Companion', {
    get: Application$Companion_getInstance
  });
  package$bubbler.Application = Application;
  Object.defineProperty(MainView, 'Loading', {
    get: MainView$Loading_getInstance
  });
  Object.defineProperty(MainView, 'Register', {
    get: MainView$Register_getInstance
  });
  Object.defineProperty(MainView, 'Login', {
    get: MainView$Login_getInstance
  });
  Object.defineProperty(MainView, 'User', {
    get: MainView$User_getInstance
  });
  Object.defineProperty(MainView, 'JoinBubble', {
    get: MainView$JoinBubble_getInstance
  });
  Object.defineProperty(MainView, 'LeaveBubble', {
    get: MainView$LeaveBubble_getInstance
  });
  Object.defineProperty(MainView, 'ShowBubble', {
    get: MainView$ShowBubble_getInstance
  });
  Object.defineProperty(MainView, 'ViewBubble', {
    get: MainView$ViewBubble_getInstance
  });
  Object.defineProperty(MainView, 'PostThought', {
    get: MainView$PostThought_getInstance
  });
  Object.defineProperty(MainView, 'Thought', {
    get: MainView$Thought_getInstance
  });
  Object.defineProperty(MainView, 'Home', {
    get: MainView$Home_getInstance
  });
  package$bubbler.MainView = MainView;
  package$bubbler.ApplicationPageState = ApplicationPageState;
  package$bubbler.UserProps = UserProps;
  Object.defineProperty(BubbleView, 'Companion', {
    get: BubbleView$Companion_getInstance
  });
  BubbleView.State = BubbleView$State;
  BubbleView.Props = BubbleView$Props;
  package$bubbler.BubbleView = BubbleView;
  Object.defineProperty(HomeView, 'Companion', {
    get: HomeView$Companion_getInstance
  });
  HomeView.State = HomeView$State;
  HomeView.Props = HomeView$Props;
  package$bubbler.HomeView = HomeView;
  Object.defineProperty(JoinBubbleComponent, 'Companion', {
    get: JoinBubbleComponent$Companion_getInstance
  });
  package$bubbler.JoinBubbleComponent = JoinBubbleComponent;
  package$bubbler.JoinBubbleFormState = JoinBubbleFormState;
  Object.defineProperty(LeaveBubbleComponent, 'Companion', {
    get: LeaveBubbleComponent$Companion_getInstance
  });
  package$bubbler.LeaveBubbleComponent = LeaveBubbleComponent;
  package$bubbler.LeaveBubbleFormState = LeaveBubbleFormState;
  Object.defineProperty(LoginComponent, 'Companion', {
    get: LoginComponent$Companion_getInstance
  });
  package$bubbler.LoginComponent = LoginComponent;
  package$bubbler.LoginFormState = LoginFormState;
  Object.defineProperty(NavBarComponent, 'Companion', {
    get: NavBarComponent$Companion_getInstance
  });
  NavBarComponent.NavBarState = NavBarComponent$NavBarState;
  NavBarComponent.NavBarHandlerProps = NavBarComponent$NavBarHandlerProps;
  package$bubbler.NavBarComponent = NavBarComponent;
  Object.defineProperty(NewThoughtComponent, 'Companion', {
    get: NewThoughtComponent$Companion_getInstance
  });
  NewThoughtComponent.State = NewThoughtComponent$State;
  NewThoughtComponent.Props = NewThoughtComponent$Props;
  package$bubbler.NewThoughtComponent = NewThoughtComponent;
  Object.defineProperty(Polling$NewMessages, 'None', {
    get: Polling$NewMessages$None_getInstance
  });
  Polling$NewMessages.Few = Polling$NewMessages$Few;
  Polling$NewMessages.MoreThan = Polling$NewMessages$MoreThan;
  Polling.NewMessages = Polling$NewMessages;
  package$bubbler.Polling = Polling;
  package$bubbler.ReactMarkdownProps = ReactMarkdownProps;
  Object.defineProperty(package$bubbler, 'ReactMarkdownComponent', {
    get: ReactMarkdownComponent_getInstance
  });
  Object.defineProperty(RegisterComponent, 'Companion', {
    get: RegisterComponent$Companion_getInstance
  });
  package$bubbler.RegisterComponent = RegisterComponent;
  package$bubbler.RegisterFormState = RegisterFormState;
  package$bubbler.index = index;
  package$bubbler.register_x0a6t6$ = register;
  package$bubbler.pollFromLastTime_61zpoe$ = pollFromLastTime;
  package$bubbler.checkSession = checkSession;
  package$bubbler.login_puj7f4$ = login;
  package$bubbler.joinBubble_puj7f4$ = joinBubble;
  package$bubbler.showBubble_puj7f4$ = showBubble;
  package$bubbler.viewBubble_puj7f4$ = viewBubble;
  package$bubbler.leaveBubble_puj7f4$ = leaveBubble;
  package$bubbler.postThoughtPrepare = postThoughtPrepare;
  package$bubbler.postThought_lodz63$ = postThought;
  package$bubbler.logoutUser = logoutUser;
  package$bubbler.deleteThought_nti4mp$ = deleteThought;
  package$bubbler.LoginOrRegisterFailedException = LoginOrRegisterFailedException;
  package$bubbler.JoiningBubbleFailedException = JoiningBubbleFailedException;
  package$bubbler.ShowingBubbleFailedException = ShowingBubbleFailedException;
  package$bubbler.ViewingBubbleFailedException = ViewingBubbleFailedException;
  package$bubbler.LeavingBubbleFailedException = LeavingBubbleFailedException;
  package$bubbler.postAndParseResult_8iex2c$ = postAndParseResult;
  package$bubbler.getAndParseResult_8iex2c$ = getAndParseResult;
  package$bubbler.requestAndParseResult_7af5f2$ = requestAndParseResult;
  Object.defineProperty(ShowBubbleComponent, 'Companion', {
    get: ShowBubbleComponent$Companion_getInstance
  });
  ShowBubbleComponent.Props = ShowBubbleComponent$Props;
  ShowBubbleComponent.State = ShowBubbleComponent$State;
  package$bubbler.ShowBubbleComponent = ShowBubbleComponent;
  Object.defineProperty(ThoughtsListComponent, 'Companion', {
    get: ThoughtsListComponent$Companion_getInstance
  });
  ThoughtsListComponent.Props = ThoughtsListComponent$Props;
  package$bubbler.ThoughtsListComponent = ThoughtsListComponent;
  Object.defineProperty(ViewBubbleComponent, 'Companion', {
    get: ViewBubbleComponent$Companion_getInstance
  });
  ViewBubbleComponent.Props = ViewBubbleComponent$Props;
  package$bubbler.ViewBubbleComponent = ViewBubbleComponent;
  package$bubbler.ViewBubbleFormState = ViewBubbleFormState;
  Object.defineProperty(ViewThoughtComponent, 'Companion', {
    get: ViewThoughtComponent$Companion_getInstance
  });
  ViewThoughtComponent.Props = ViewThoughtComponent$Props;
  package$bubbler.ViewThoughtComponent = ViewThoughtComponent;
  var package$model = package$bubbler.model || (package$bubbler.model = {});
  package$model.Thought = Thought;
  package$model.User = User;
  package$model.Bubble = Bubble;
  package$model.RpcData = RpcData;
  package$model.IndexResponse = IndexResponse;
  package$model.PostThoughtToken = PostThoughtToken;
  package$model.PostThoughtResult = PostThoughtResult;
  package$model.UserThoughtsResponse = UserThoughtsResponse;
  package$model.ViewThoughtResponse = ViewThoughtResponse;
  package$model.ViewBubbleResponse = ViewBubbleResponse;
  package$model.LoginResponse = LoginResponse;
  package$model.JoinBubbleResponse = JoinBubbleResponse;
  package$model.LeaveBubbleResponse = LeaveBubbleResponse;
  package$model.ShowBubbleResponse = ShowBubbleResponse;
  var package$react = _.react || (_.react = {});
  package$react.ReactComponentNoState = ReactComponentNoState;
  package$react.ReactComponentNoProps = ReactComponentNoProps;
  package$react.ReactComponentEmptyProps = ReactComponentEmptyProps;
  package$react.ReactDsl = ReactDsl;
  ReactBuilder.Node = ReactBuilder$Node;
  package$react.ReactComponent = ReactComponent;
  package$react.ReactBuilder = ReactBuilder;
  package$react.RProps = RProps;
  package$react.BoxedState = BoxedState;
  package$react.ReactComponentSpec = ReactComponentSpec;
  Object.defineProperty(ReactComponent, 'Companion', {
    get: ReactComponent$Companion_getInstance
  });
  package$react.ReactComponentWrapper = ReactComponentWrapper;
  package$react.ReactComponentLifecycleListener = ReactComponentLifecycleListener;
  package$react.ReactExtensionProvider = ReactExtensionProvider;
  package$react.BaseReactExtension = BaseReactExtension;
  package$react.BaseReactExtensionReadWriteProperty = BaseReactExtensionReadWriteProperty;
  package$react.BaseReactExtensionReadOnlyProperty = BaseReactExtensionReadOnlyProperty;
  package$react.ReactExternalComponentSpec = ReactExternalComponentSpec;
  package$react.ReactElement = ReactElement;
  Object.defineProperty(package$react, 'ReactWrapper', {
    get: ReactWrapper_getInstance
  });
  var package$dom = package$react.dom || (package$react.dom = {});
  package$dom.render_jzglv5$ = render;
  package$dom.fixAttributeName_61zpoe$ = fixAttributeName;
  package$dom.get_defaultValue_a2ovwx$ = get_defaultValue;
  package$dom.set_defaultValue_q3v29f$ = set_defaultValue;
  package$dom.get_defaultValue_dtfm6v$ = get_defaultValue_0;
  package$dom.set_defaultValue_5ng1o5$ = set_defaultValue_0;
  package$dom.get_value_dtfm6v$ = get_value;
  package$dom.set_value_5ng1o5$ = set_value;
  package$dom.InnerHTML = InnerHTML;
  package$dom.DOMProps = DOMProps;
  ReactDOMBuilder.DOMNode = ReactDOMBuilder$DOMNode;
  package$dom.ReactDOMBuilder = ReactDOMBuilder;
  package$dom.buildElement_yic5sk$ = buildElement;
  package$dom.ReactDOMComponent = ReactDOMComponent;
  package$dom.ReactDOMStatelessComponent = ReactDOMStatelessComponent;
  package$dom.ReactDOMPropslessComponent = ReactDOMPropslessComponent;
  package$dom.ReactDOMStaticComponent = ReactDOMStaticComponent;
  ReactDOMBuilder$onTagContentUnsafe$ObjectLiteral.prototype.unaryPlus_lvwjq6$ = Unsafe.prototype.unaryPlus_lvwjq6$;
  ReactDOMBuilder$onTagContentUnsafe$ObjectLiteral.prototype.raw_3p81yu$ = Unsafe.prototype.raw_3p81yu$;
  ReactDOMBuilder$onTagContentUnsafe$ObjectLiteral.prototype.raw_61zpoe$ = Unsafe.prototype.raw_61zpoe$;
  ReactDOMBuilder$onTagContentUnsafe$ObjectLiteral.prototype.raw_ws8or7$ = Unsafe.prototype.raw_ws8or7$;
  ReactDOMBuilder.prototype.onTagError_cjwpn3$ = TagConsumer.prototype.onTagError_cjwpn3$;
  ReactMarkdown = require('react-markdown');
  initWrapper = null;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  events = listOf_0(['onCopy', 'onCut', 'onPaste', 'onCompositionEnd', 'onCompositionStart', 'onCompositionUpdate', 'onKeyDown', 'onKeyPress', 'onKeyUp', 'onFocus', 'onBlur', 'onChange', 'onInput', 'onSubmit', 'onClick', 'onContextMenu', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onSelect', 'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart', 'onScroll', 'onWheel', 'onAbort', 'onCanPlay', 'onCanPlayThrough', 'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded', 'onError', 'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay', 'onPlaying', 'onProgress', 'onRateChange', 'onSeeked', 'onSeeking', 'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting', 'onLoad', 'onError', 'onAnimationStart', 'onAnimationEnd', 'onAnimationIteration', 'onTransitionEnd', 'accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency', 'alt', 'async', 'autoComplete', 'autoFocus', 'autoPlay', 'capture', 'cellPadding', 'cellSpacing', 'challenge', 'charSet', 'checked', 'cite', 'classID', 'className', 'colSpan', 'cols', 'content', 'contentEditable', 'contextMenu', 'controls', 'coords', 'crossOrigin', 'data', 'dateTime', 'default', 'defer', 'dir', 'disabled', 'download', 'draggable', 'encType', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'frameBorder', 'headers', 'height', 'hidden', 'high', 'href', 'hrefLang', 'htmlFor', 'httpEquiv', 'icon', 'id', 'inputMode', 'integrity', 'is', 'keyParams', 'keyType', 'kind', 'label', 'lang', 'list', 'loop', 'low', 'manifest', 'marginHeight', 'marginWidth', 'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted', 'name', 'noValidate', 'nonce', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'profile', 'radioGroup', 'readOnly', 'rel', 'required', 'reversed', 'role', 'rowSpan', 'rows', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start', 'step', 'style', 'summary', 'tabIndex', 'target', 'title', 'type', 'useMap', 'value', 'width', 'wmode', 'wrap']);
  var $receiver = events;
  var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
  var tmp$;
  tmp$ = $receiver.iterator();
  while (tmp$.hasNext()) {
    var item = tmp$.next();
    destination.add_11rb$(to(item.toLowerCase(), item));
  }
  eventMap = toMap(destination);
  attributeStringString = new StringAttribute();
  main([]);
  Kotlin.defineModule('frontend_main', _);
  return _;
}(module.exports, require('kotlin'), require('react-dom'), require('kotlinx-html-js'), require('react')));

//# sourceMappingURL=frontend_main.js.map
