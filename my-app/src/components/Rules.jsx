export default function Rules() {
        const rules = [
        {
            icon: true,
            title: "Prepare input data:",
            list: ['New & cumulative deaths', "Population size", "Disease incidence (daily or cumulative cases)"]
        },
        {
            icon: true,
            title: "Set model parameters:",
            list: ["Type of model (SEIR)", "Incubation period", "Transmission parameters", "Duration of simulation", "Initial infected, peaks", "Vaccination details (coverage, effectiveness, immune fraction)"]
        },
        {
            icon: true,
            title: "Run the simulation:",
            list: ["Upload CSV/Excel", "System auto-detects key columns", "Data preprocessing & smoothing"]
        },
        {
            icon: true,
            title: "Interpret results:",
            list: ["Check disease duration & peaks", "Review R₀, Rₜ, CFR, immune population", "Compare plausibility with correlation"]
        },
        {
            icon: true,
            title: "Export & Share results as CSV",
            list: ["Download CSV", "Use for research or reporting"]
        }
    ];
    return (
        <section className="rules" id="Rules">
            <h2>
                The data <span className="highlight">submission rules</span> to get{" "}
                <span className="highlight">good predictions</span>
            </h2>
            <div className="rules-grid">

                {rules.map((f, i) => (
                    <div key={i} className="rule-card">
                        <h3>{i}. {f.title}</h3>
                        {f.list.map((r, i) => (
                            <ul>
                                <li key={i}>{r}</li>
                            </ul>
                        ))}
                    </div>
                    ))}
            </div>
            <a href="https://virusspread-kb7fz87xnhhxtrt4dxcpwj.streamlit.app/"><button className="cta-button">Get Started</button></a>
        </section>
    );
}
