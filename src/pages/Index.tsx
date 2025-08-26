import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-text-primary">AIHI IT Consulting</h1>
        <p className="text-xl text-text-secondary mb-8">Premium IT consulting solutions</p>
        <Button variant="primary" size="lg" asChild>
          <Link to="/nonexistent-page">Test 404 Page</Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
