var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var library = [{
  id: "Drum 1",
  url: "https://raw.githubusercontent.com/rapidsloth/synthesizer/master/BD06.mp3",
  loop: false,
  key: "Q",
  keyCode: 81 },

{
  id: "Drum 2",
  url: "https://raw.githubusercontent.com/rapidsloth/synthesizer/master/BD10.mp3",
  loop: false,
  key: "W",
  keyCode: 87 },


{
  id: "Bongo",
  url: "https://raw.githubusercontent.com/rapidsloth/synthesizer/master/BONGO.mp3",
  loop: false,
  key: "E",
  keyCode: 69 },


{
  id: "Claps",
  url: "https://raw.githubusercontent.com/rapidsloth/synthesizer/master/CLAPS.mp3",
  loop: false,
  key: "A",
  keyCode: 65 },


{
  id: "Cowbell",
  url: "https://raw.githubusercontent.com/rapidsloth/synthesizer/master/COWBELL.mp3",
  loop: false,
  key: "S",
  keyCode: 83 },


{
  id: "OPhat",
  url: "https://raw.githubusercontent.com/rapidsloth/synthesizer/master/OPHAT5.mp3",
  loop: false,
  key: "D",
  keyCode: 68 },


{
  id: "SD01",
  url: "https://raw.githubusercontent.com/rapidsloth/synthesizer/master/SD01.mp3",
  loop: false,
  key: "Z",
  keyCode: 90 },


{
  id: "SD10",
  url: "https://raw.githubusercontent.com/rapidsloth/synthesizer/master/SD10.mp3",
  loop: false,
  key: "X",
  keyCode: 88 },


{
  id: "TOMS",
  url: "https://raw.githubusercontent.com/rapidsloth/synthesizer/master/TOM03M.mp3",
  loop: false,
  key: "C",
  keyCode: 67 }];



var synths = [{
  id: "Roland B01",
  url: "https://raw.githubusercontent.com/rapidsloth/synthesizer/master/Roland%20B%20Line%2001.mp3",
  loop: false,
  key: "R",
  keyCode: 82 },

{
  id: "Roland C01",
  url: "https://raw.githubusercontent.com/rapidsloth/synthesizer/master/Roland%20C%20Line%2004.mp3",
  loop: false,
  key: "T",
  keyCode: 84 },

{
  id: "Roland D11",
  url: "https://raw.githubusercontent.com/rapidsloth/synthesizer/master/Roland%20D%20Line%2011.mp3",
  loop: false,
  key: "Y",
  keyCode: 89 },

{
  id: "Roland D13",
  url: "https://raw.githubusercontent.com/rapidsloth/synthesizer/master/Roland%20D%20Line%2013.mp3",
  loop: false,
  key: "F",
  keyCode: 70 },

{
  id: "Blip 01",
  url: "https://raw.githubusercontent.com/rapidsloth/synthesizer/master/Roland%20E%20Blip%2001.mp3",
  loop: false,
  key: "G",
  keyCode: 71 },

{
  id: "Blip 10",
  url: "https://raw.githubusercontent.com/rapidsloth/synthesizer/master/Roland%20E%20Blip%2010.mp3",
  loop: false,
  key: "H",
  keyCode: 72 },

{
  id: "Blip 17",
  url: "https://raw.githubusercontent.com/rapidsloth/synthesizer/master/Roland%20E%20Blip%2017.mp3",
  loop: false,
  key: "V",
  keyCode: 86 },

{
  id: "Blip 29",
  url: "https://raw.githubusercontent.com/rapidsloth/synthesizer/master/Roland%20E%20Blip%2029.mp3",
  loop: false,
  key: "B",
  keyCode: 66 },

{
  id: "Roland F01",
  url: "https://raw.githubusercontent.com/rapidsloth/synthesizer/master/Roland%20F%20Line%2001.mp3",
  loop: false,
  key: "N",
  keyCode: 78 }];



var baselines = [{
  id: "Baseline 1",
  url: "https://raw.githubusercontent.com/rapidsloth/synthesizer/master/baselinefixed.mp3",
  loop: true,
  key: "1",
  keyCode: 49 },

{
  //placeholder same as baseline1 for now
  id: "Baseline 2",
  url: "https://raw.githubusercontent.com/rapidsloth/synthesizer/master/TechBassR120E-04.mp3",
  loop: true,
  key: "2",
  keyCode: 50 },

{
  id: "Baseline 3",
  url: "https://raw.githubusercontent.com/rapidsloth/synthesizer/master/TechBassR120E-01.mp3",
  loop: true,
  key: "3",
  keyCode: 51 }];


var vaporwave = [{
  background: "linear-gradient(#3b0084 0%, #F765b8 47%, #94D0FF)"
  //app background color
},
{
  background: "#8795E8",
  border: "1px solid black",
  fontFamily: "Orbitron",
  color: "white",
  fontWeight: "bold",
  borderRadius: "3px",
  textShadow: " 3px 3px #c774e8",
  padding: "5px",
  boxShadow: "2px 3px #3b0084"
  //pad css 
},

{
  fontSize: "2.5em",
  color: "#ff71ce",
  fontFamily: "Orbitron",
  transform: "rotate(-4deg)",
  padding: "20px 0px",
  letterSpacing: "20px",
  textShadow: "5px 5px purple"
  //h1 css
}];


var dark = [{
  background: "#212121" },

{
  background: "#424242",
  border: "1px solid black",
  fontFamily: "Helvetica",
  color: "white",
  fontWeight: "bold",
  borderRadius: "3px" },

{
  color: "white" }];var




NoiseMachine = function (_React$Component) {_inherits(NoiseMachine, _React$Component);
  function NoiseMachine(props) {_classCallCheck(this, NoiseMachine);var _this = _possibleConstructorReturn(this, (NoiseMachine.__proto__ || Object.getPrototypeOf(NoiseMachine)).call(this,
    props));
    _this.state = {
      style: vaporwave,
      display: "Press some keys!",
      synthTable: false,
      baselines: false };

    _this.handleClick = _this.handleClick.bind(_this);
    _this.makeNoise = _this.makeNoise.bind(_this);
    _this.handleKey = _this.handleKey.bind(_this);
    _this.addSynth = _this.addSynth.bind(_this);
    _this.addBasslines = _this.addBasslines.bind(_this);
    _this.toggleStyle = _this.toggleStyle.bind(_this);return _this;
  }_createClass(NoiseMachine, [{ key: "addSynth", value: function addSynth()
    {//adds synthbar
      if (this.state.synthTable == false) {
        this.setState({
          synthTable: true });

      } else if (this.state.synthTable == true) {
        this.setState({
          synthTable: false });

      }
    } }, { key: "addBasslines", value: function addBasslines()

    {//adds basslines
      if (this.state.baselines == false) {
        this.setState({
          baselines: true });

      } else if (this.state.baselines == true) {
        this.setState({
          baselines: false });

      }
    } }, { key: "makeNoise", value: function makeNoise(

    x) {//takes the audio element as x and plays sound and handles everything else
      function lookup(arr, elem) {
        for (var i in arr) {
          if (arr[i].key == elem.id) {
            return arr[i].id;
          }
        }
      }
      if (x.loop == true && !x.classList.contains("isPlaying")) {
        x.classList.add("isPlaying");
        x.play();
        x.parentNode.style.backgroundColor = "orange";
        this.setState({
          display: lookup(baselines, x) });


      } else
      if (x.loop == true && x.classList.contains("isPlaying")) {
        x.classList.remove("isPlaying");
        x.pause();
        x.currentTime = 0;
        var original = this.state.style[1].background;
        x.parentNode.style.backgroundColor = original;
        this.setState({
          display: "-" });

      } else
      if (x.loop == false) {
        x.currentTime = 0;
        x.play();
        var _original = this.state.style[1].background;
        x.parentNode.style.backgroundColor = "orange";
        setTimeout(function () {x.parentNode.style.backgroundColor = _original;}, 200);
        console.log(this.state.style[1].background, "style");
        this.setState({
          display: lookup(library.slice().concat(synths.slice()), x) });

      };


    } }, { key: "handleKey", value: function handleKey(
    e) {//checks array for what sound to play, lookup array depends on seleceted pads
      var toPlay = void 0;
      var checkArray = void 0;
      if (this.state.synthTable == true && this.state.baselines == true) {
        checkArray = library.slice().concat(synths.slice().concat(baselines.slice()));
      } else
      if (this.state.synthTable == true && this.state.baselines == false) {
        checkArray = library.slice().concat(synths.slice());
      } else
      if (this.state.synthTable == false && this.state.baselines == true) {
        checkArray = library.slice().concat(baselines.slice());
      } else
      checkArray = library;
      for (var i = 0; i < checkArray.length; i++) {
        if (e.keyCode == checkArray[i].keyCode) {
          var z = document.getElementById(checkArray[i].key).childNodes[0];
          toPlay = z;
        }
      }
      this.makeNoise(toPlay);
    } }, { key: "handleClick", value: function handleClick(
    e) {
      var x = e.target.childNodes[0];
      this.makeNoise(x);
    } }, { key: "toggleStyle", value: function toggleStyle()
    {//change between styles
      switch (this.state.style) {
        case vaporwave:
          this.setState({
            style: dark });

          break;
        case dark:
          this.setState({
            style: vaporwave });

          break;}

    } }, { key: "componentDidMount", value: function componentDidMount()
    {
      document.addEventListener("keydown", this.handleKey);
    } }, { key: "componentWillUnmount", value: function componentWillUnmount()
    {
      document.removeEventListener("keydown", this.handleKey);
    } }, { key: "render", value: function render()

    {
      var drums = React.createElement(Pads, {
        id: "pads",
        style: this.state.style[1],
        handleClick: this.handleClick,
        library: library });

      var synthesizer = React.createElement(Pads, {
        id: "synths",
        style: this.state.style[1],
        handleClick: this.handleClick,
        library: synths });

      var basslines = React.createElement(Pads, {
        id: "basslines",
        style: this.state.style[1],
        handleClick: this.handleClick,
        library: baselines });


      return (
        React.createElement("div", {
            id: "drum-machine",
            style: this.state.style[0] },
          React.createElement("h1", { style: this.state.style[2] }, "Noise Machine"),
          React.createElement("div", { id: "button-container" },
            React.createElement("button", { className: "buttons", id: "synth-button", style: this.state.style[1], onClick: this.addSynth }, this.state.synthTable == false ? "Add Synthesizer!" : "Less synth!"),
            React.createElement("button", { className: "buttons", id: "bass-button", style: this.state.style[1], onClick: this.addBasslines }, this.state.baselines == false ? "Add Basslines!" : "Less Basslines!"),
            React.createElement("button", { className: "buttons", id: "style-button", style: this.state.style[1], onClick: this.toggleStyle }, "Change Style!")),

          React.createElement("div", { id: "display", style: this.state.style[1] }, this.state.display),
          React.createElement("div", { id: "multipad" },
            drums,
            this.state.synthTable == true ? synthesizer : React.createElement("div", null)),

          this.state.baselines == true ? basslines : React.createElement("div", null),
          this.state.style == vaporwave ? React.createElement("div", { id: "author" }, "\u4F5C\u8005\uFF1A", React.createElement("a", { href: "https://github.com/rapidsloth", target: "_blank" }, "\u30B8\u30E3\u30C3\u30AF")) : React.createElement("div", null)));


    } }]);return NoiseMachine;}(React.Component);var


Pad = function (_React$Component2) {_inherits(Pad, _React$Component2);
  function Pad(props) {_classCallCheck(this, Pad);return _possibleConstructorReturn(this, (Pad.__proto__ || Object.getPrototypeOf(Pad)).call(this,
    props));
  }_createClass(Pad, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", { id: this.props.ident,
            className: "drum-pad",
            onClick: this.props.onClick,
            style: this.props.style },
          React.createElement("audio", { className: "clip", id: this.props.inner, loop: this.props.loop, src: this.props.sample }),
          this.props.inner));

    } }]);return Pad;}(React.Component);var


Pads = function (_React$Component3) {_inherits(Pads, _React$Component3);
  function Pads(props) {_classCallCheck(this, Pads);return _possibleConstructorReturn(this, (Pads.__proto__ || Object.getPrototypeOf(Pads)).call(this,
    props));
  }_createClass(Pads, [{ key: "render", value: function render()
    {var _this4 = this;
      var padBank = void 0;
      padBank = this.props.library.map(function (obj, i, padArray) {return (
          React.createElement("div", null,
            React.createElement(Pad, {
              ident: padArray[i].key,
              onClick: _this4.props.handleClick,
              style: _this4.props.style,
              sample: padArray[i].url,
              loop: padArray[i].loop,
              inner: padArray[i].key })));



      });
      return (
        React.createElement("div", { className: "pads-container" },
          padBank));


    } }]);return Pads;}(React.Component);


ReactDOM.render(React.createElement(NoiseMachine, null), document.getElementById("root"));