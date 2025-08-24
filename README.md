# VirTrend
VirTrend is website that predicts development of viruses
VirTrend is a platform that allows you to track how an epidemic will behave depending on the type, region, and various heterogeneous factors. 
To run the simulation, you need input data on disease statistics, model parameters for graph simulation, as well as statistics on vaccination of the population. Thanks to the use of the platform, we receive empirical data on the development of the virus and much more. 

About the product:
Certain data is required to run the program:
1. New and accumulated deaths
2. Population size
3. Type of model (SEIR)
4. Incubation period parameters 
5. Transmission parameters
6. Duration of simulation, 
7. The number of initially infected, the number of peaks
8. Vaccination (coverage, effectiveness) and the proportion of the immune population. 
After that, the simulation provides basic information about the duration of the disease, its peaks and troughs. An effective reproductive number gives us information about the potential for infection in a single patient. Also, by entering the initial number of people who are not susceptible to the virus, we can find out the final number of the population that will gain immunity. Addition: The Pearson correlation coefficient allows us to evaluate how plausible the model is and identify errors in the input data.



The team implemented a feature allowing users to upload data in CSV or Excel format with automatic detection of key columns corresponding to dates, new and cumulative cases, as well as mortality. For preprocessing, the data is transformed into a daily incidence time series, smoothed using a moving average, and used to calculate cumulative indicators, including the case fatality ratio (CFR). Based on the serial interval, either provided by the user or selected from predefined viral models, values of the effective reproduction number $R_t$ are estimated using the Cori method, along with infection transmission parameters β(t) and recovery rate γ.

Additionally, three methods for estimating the basic reproduction number $R_0$ are implemented: through model parameters β and γ, through analysis of the initial exponential growth, and through early $R_t$ values. Taking into account population characteristics, vaccination levels, and seroconversion, the share of immune individuals in the population and the herd immunity threshold (HIT) are calculated.

For user convenience, Plotly visualizations have been added: incidence dynamics, $R_t$ plots with confidence intervals, β and γ graphs, as well as immune fraction estimates. In the Streamlit sidebar, model parameter settings and a metrics block are available, reflecting average and peak $R_t$, CFR, final immune fraction, and HIT. Finally, a function for exporting analysis results to CSV is provided, making the application a universal tool for epidemiologists, researchers, and data analysts.
