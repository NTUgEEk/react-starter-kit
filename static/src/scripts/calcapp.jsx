import React from 'react';


// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO
    };
  }

  resetState() {
    // TODO
  }

  showNotImplemented() {
    console.warn('This function is not implemented yet.');
  }

  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">1980</div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.resetState.bind(this)}>AC</CalcButton>
            <CalcButton onClick={this.showNotImplemented.bind(this)}>+/-</CalcButton>
            <CalcButton onClick={this.showNotImplemented.bind(this)}>%</CalcButton>
            <CalcButton className="calc-operator">÷</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number">7</CalcButton>
            <CalcButton className="calc-number"></CalcButton>
            <CalcButton className="calc-number"></CalcButton>
            <CalcButton className="calc-operator"></CalcButton>
          </div>
        </div>
      </div>
    );
  }
}


class CalcButton extends React.Component {
  render() {
    const { className, children, onClick } = this.props;
    return (
      <div
        className={'calc-btn ' + (className ? className : '')}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
}

CalcButton.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func
};

CalcButton.defaultProps = {
  onClick: () => {}
};


// ReactDOM.render(<CalcApp />, document.getElementById('root'));

export default CalcApp;
