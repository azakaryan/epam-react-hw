'use strict';

const e = React.createElement;

ReactDOM.render(
  e('div', null, 'Hello World "React.createElemen"'),
  document.getElementById('case_1')
);


class Hello extends React.Component {
  render() {
    return 'Hello World "React.Component"';
  }
}

ReactDOM.render(
  e(Hello, {}, null),
  document.getElementById('case_2')
);

class PHello extends React.PureComponent {
  render() {
    return 'Hello World "React.PureComponent"';
  }
}

ReactDOM.render(
  e(PHello, {}, null),
  document.getElementById('case_3')
);

function FHello(props) {
  return 'Hello World "functional components"';
}

ReactDOM.render(
  e(FHello, {}, null),
  document.getElementById('case_4')
);