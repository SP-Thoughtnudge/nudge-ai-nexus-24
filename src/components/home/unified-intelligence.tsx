export const UnifiedIntelligence = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-center">
            Your Always-On{" "}
            <span className="text-primary">Activation Engine</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-16 max-w-4xl mx-auto leading-relaxed">
            Thoughtnudge sits on top of your data systems and creates a dedicated learning agent for every user. 
            Each agent continuously experiments, learns, and evolves — building a deep contextual memory of that individual's behavior, intent signals, and activation blockers. It then selects the most effective next action: what to send, when to send it, how to frame it, and through which channel. 
            Instead of predicting, it discovers in real time what activates each user and adapts every interaction accordingly.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Feature 1 */}
            <div className="bg-card/60 backdrop-blur-sm rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-primary rounded-md"></div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Activates dormant first-party data instantly
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Uses behavioural, transactional, emotional, and contextual signals from your data systems as inputs for continuous learning.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-card/60 backdrop-blur-sm rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-primary rounded-md"></div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                One autonomous learning agent per customer
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Runs ongoing micro-experiments for every individual, updating its understanding after every action, inaction, and context shift.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-card/60 backdrop-blur-sm rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-primary rounded-md"></div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Discovers the most effective action through experimentation
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Tests thousands of hypotheses across offer, product, content, timing, channel, tone, emotion, and value proposition — to find what actually drives the outcome for that customer.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-card/60 backdrop-blur-sm rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-primary rounded-md"></div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Builds evolving agentic memory
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Creates a continuously updated "psychographic profile" unique to each individual, powering deeply personalised and context-aware engagement.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-card/60 backdrop-blur-sm rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-primary rounded-md"></div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Real-time decisioning at enterprise scale
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Executes millions of adaptive decisions per day — without journeys, segments, rules, or A/B tests.
              </p>
            </div>
            
            {/* Result Block - spans remaining space */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm rounded-xl p-8 border border-primary/20 hover:shadow-lg transition-all duration-300 flex items-center justify-center">
              <p className="text-lg font-semibold text-foreground text-center leading-relaxed">
                A self-improving, hyper-personalised journey for every customer — continuously evolving, outcome-driven, and fully autonomous.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};