import { Switch, Route } from "wouter";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Navigation } from "@/components/landing/navigation";
import Home from "@/pages/home";
import Docs from "@/pages/docs";
import NotFound from "@/pages/not-found";
import { Analytics } from "@vercel/analytics/react"

function Router() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/docs" component={Docs} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="chalknotes-ui-theme">
      <Router />
      <Analytics />
    </ThemeProvider>
  );
}

export default App;
