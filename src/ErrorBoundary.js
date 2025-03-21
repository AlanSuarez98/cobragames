import React, { Component } from "react";
import NotFound from "./components/notFound/NotFound"; // Puedes personalizar este componente

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error capturado:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <NotFound />; // Muestra una página de error personalizada
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
