import React, { Component, ErrorInfo, ReactNode } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Owlbear from './assets/images/owlbear.svg';
import './errorBoundry.css';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="error-container" data-testid="error-boundry">
          <div className="art-container">
            <div className="speech-bubble">
              <h2>Something went wrong.</h2>
            </div>
            <div className="bubble top"></div>
            <div className="bubble middle"></div>
            <div className="bubble bottom"></div>
            <img className="owlbear" src={Owlbear} alt="a sad looking owlbear" />
          </div>
          <h2 className="help-messege">If the problem persists try reseting card data.</h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
