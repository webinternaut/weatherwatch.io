import { EmailSignup } from "./components/EmailSignup";
import { Layout } from "./components/Layout";

const App = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 space-y-12">
        
        {/* Hero Section */}
        <div className="space-y-6 animate-fade-in-down">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            WeatherWatch<span className="text-blue-400">.io</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100/90 font-light max-w-2xl mx-auto leading-relaxed">
            Precision weather data for your life on the go.
            <br />
            <span className="font-semibold text-white mt-2 block">Coming soon to Android & Wear OS.</span>
          </p>
        </div>

        {/* Email Signup Form */}
        <div className="w-full max-w-md animate-fade-in-up delay-200">
          <EmailSignup />
        </div>

        {/* Footer */}
        <footer className="absolute bottom-8 text-sm text-blue-200/60">
          © {new Date().getFullYear()} WeatherWatch.io. All rights reserved.
        </footer>
      </div>
    </Layout>
  );
};

export default App;