import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const NotFound = () => (
  <>
    <Navbar />
    <main className="pt-28 pb-20 min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-foreground">404</h1>
        <p className="mt-4 text-lg text-muted-foreground">Page not found.</p>
        <Button asChild className="mt-8">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </main>
    <Footer />
  </>
);

export default NotFound;
