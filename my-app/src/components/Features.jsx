import dataIcon from "../assets/data-icon.svg";
import aiIcon from "../assets/ai-icon.svg";
import predictIcon from "../assets/predict-icon.svg";

export default function Features() {
    const features = [
        {
            icon: dataIcon,
            title: "Function",
            desc: "Tracks epidemic development by region, virus type, and heterogeneous factors.",
        },
        {
            icon: aiIcon,
            title: "Analysis",
            desc: "Uses SEIR epidemiological model for simulation.",
        },
        {
            icon: predictIcon,
            title: "Predictive Results",
            desc: "Include various data and predictions on the development of virus",
        },
    ];

    return (
        <section id="Features" className="features">
            <h2>
                The main ideas behind <span className="highlight">VirTrend</span>
            </h2>
            <div className="feature-grid">
                {features.map((f, i) => (
                    <div key={i} className="feature-card">
                        <img src={f.icon} alt={f.title} />
                        <h3>{f.title}</h3>
                        <p>{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
