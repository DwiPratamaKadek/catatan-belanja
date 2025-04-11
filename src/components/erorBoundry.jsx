// src/components/ErrorBoundary.jsx
import { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null 
    };
  }

  static getDerivedStateFromError(error) {
    // Update state untuk menunjukkan error terjadi
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Anda bisa log error ke service seperti Sentry di sini
    console.error("Error Boundary menangkap error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
    // Optional: reset state aplikasi atau navigasi ke halaman awal
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>⚠️ Terjadi Kesalahan</h2>
          
          {this.props.fallbackComponent ? (
            this.props.fallbackComponent
          ) : (
            <div className="default-fallback">
              <p>Maaf, terjadi masalah teknis.</p>
              <details style={{ whiteSpace: 'pre-wrap' }}>
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo?.componentStack}
              </details>
              <button 
                onClick={this.handleReset}
                style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}
              >
                Coba Lagi
              </button>
            </div>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  fallbackComponent: PropTypes.element,
  onReset: PropTypes.func
};

export default ErrorBoundary;