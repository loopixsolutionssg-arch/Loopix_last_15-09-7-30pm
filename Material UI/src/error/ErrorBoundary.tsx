import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface State { error: Error | null }

export default class ErrorBoundary extends React.Component<React.PropsWithChildren, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Log to console; could be extended to remote logging
    // eslint-disable-next-line no-console
    console.error("UI ErrorBoundary caught:", error, info);
  }

  handleReset = () => this.setState({ error: null });

  render() {
    if (this.state.error) {
      return (
        <Box sx={{ p: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>Something went wrong.</Typography>
          <Typography color="text.secondary" sx={{ mb: 2 }}>{this.state.error.message}</Typography>
          <Button variant="contained" onClick={this.handleReset}>Try again</Button>
        </Box>
      );
    }
    return this.props.children as React.ReactElement;
  }
}
