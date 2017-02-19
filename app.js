class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = { opacity: false };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    const tooltipNode = ReactDOM.findDOMNode(this);
    this.setState({
      opacity: !this.state.opacity,
      top: tooltipNode.offsetTop,
      left: tooltipNode.offsetLeft
    });
  }
  render() {
    const style = {
      zIndex: this.state.opacity ? 1000 : -1000,
      opacity: +this.state.opacity,
      top: (this.state.top || 0) + 25,
      left: (this.state.left || 0) - 35
    };
    return React.createElement(
      'div',
      { style: { display: 'inline' } },
      React.createElement(
        'span',
        { style: { color: 'yellow' }, onMouseEnter: this.toggle, onMouseOut: this.toggle },
        this.props.children
      ),
      React.createElement(
        'div',
        { className: 'tooltip bottom', style: style, role: 'tooltip' },
        React.createElement('div', { className: 'tooltip-arrow' }),
        React.createElement(
          'div',
          { className: 'tooltip-inner' },
          this.props.text
        )
      )
    );
  }
}

ReactDOM.render(React.createElement(
  'div',
  null,
  React.createElement(
    Tooltip,
    { text: "Sixteen time World Champion and equal the record of Rich Flair's 16 World Championship" },
    'John Cena ',
    React.createElement(
      "img",
      { src: "images/cena.jpg" },
      null
      )
  ),
  ' a WWE Superstar and one of the highest paid professonial wrestler in the world. ',
  React.createElement(
    "br",
    null
    ),    
  React.createElement(
    Tooltip,
    { text: 'First undfeated World Champion in History of Wrestling' },
    'Bill Goldberg ',
    React.createElement(
      "img",
      { src: "images/goldberg.png" },
      null
      )
  ),
  " Former WCW Superstar famous for this 173 consecutive wins in WCW and only have less than 5 defeat in his career",
  React.createElement(
    "br",
    null
    ),  
  React.createElement(
    Tooltip,
    { text: 'Defeat The Undertaker in Wrestlemania 31 for his undfeated streak in Wrestlemania (21-1)' },
    'Brock Lesnar ',
    React.createElement(
      "img",
      { src: "images/lesnar.png", width: "260px", height: "416px;"},
      null
      )
  ),
  ' the beast incarnate famous for his Suplex City that makes him one of the dangerous superstar in WWe'
), document.getElementById('tooltip'));
