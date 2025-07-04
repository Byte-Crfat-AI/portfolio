import {
  Brain,
  Database,
  Server,
  Activity,
  Globe,
  Sparkle,
  Monitor,
  Code2,
  Settings,
  Satellite,
  Code,
  Pi,
  Calculator,
  Sigma,
  Zap,
  Atom,
  CircuitBoard,
  Cpu,
  FlaskConical,
  Waves,
  Thermometer,
  Ruler
} from "lucide-react"

const COURSE_DATA = [
  /* …first 6 courses as previously… */
  {
    title: "Programming for Machine Learning and Data Science",
    institute: "Indian Institute of Technology Bombay",
    department: "C-MInDS",
    code: "DS203",
    instructor: "IIT Bombay Faculty",
    description: "Hands‑on Python programming for data science, covering data manipulation, visualization, ML pipelines, and big‑data integration.",
    concepts: [
      "Python & Pandas", "Data Cleaning", "Matplotlib/Seaborn", "Feature Engineering",
      "Regression", "Classification", "Clustering", "Basic Neural Networks",
      "Spark/Hadoop", "SQL & NoSQL"
    ],
    detailed_description: [
      "Core Python programming for data science: Pandas, EDA, Matplotlib/Seaborn for plotting and insights.",
      "Fundamentals of probability, hypothesis testing, and descriptive statistics for clean data analysis.",
      "Supervised learning workflows: regression/classification, evaluation (RMSE, accuracy, ROC).",
      "Introduction to deep‑learning pipelines via TensorFlow/Keras basics.",
      "Scalable computing and big‑data processing with Spark/Hadoop and group labs.",
      "Database integration: SQL joins, NoSQL patterns, plus a capstone DS project."
    ],
    category: "Machine Learning",
    difficulty: "Intermediate",
    icon: Code,
    semester: "Fall 2024"
  },
  {
    title: "Artificial Intelligence in Process Engineering",
    institute: "Indian Institute of Technology Bombay",
    department: "Chemical Engineering",
    code: "CL688",
    instructor: "Prof. Santosh Noronha",
    description: "Advanced AI and statistical techniques applied to modeling, monitoring, and diagnostics in chemical process systems.",
    concepts: [
      "Multivariate Density Estimation", "Bayesian & Discriminant Classifiers",
      "Neural Networks (MLP, RBF)", "Support Vector Machines",
      "Decision Trees & Ensemble Methods",
      "Unsupervised Learning & EM", "Geometric Methods"
    ],
    detailed_description: [
      "Probabilistic modeling: multivariate density estimation, Bayesian and LDA classifiers tailored to process data.",
      "Neural network design (MLP/RBF), SVM, decision trees/ensemble models for process optimization.",
      "Unsupervised anomaly detection using clustering and Expectation–Maximization.",
      "Geometric machine‑learning methods and optional pattern-matching topics.",
      "Hands‑on labs in MATLAB/R/Weka, quizzes, midsem, and a final project."
    ],
    category: "Machine Learning",
    difficulty: "Advanced",
    icon: Settings,
    semester: "Fall 2024"
  },
  {
    title: "Advanced Methods in Satellite Image Processing",
    institute: "Indian Institute of Technology Bombay",
    department: "CSRE",
    code: "GNR602",
    instructor: "Prof. B. Krishna Mohan",
    description: "In-depth exploration of advanced satellite image analysis techniques: classification, segmentation, hyperspectral processing, compression, optimization.",
    concepts: [
      "Satellite Image Classification", "SVMs & Neural Nets", "Segmentation Methods",
      "Fuzzy & Texture Analysis", "Edge/Region Growing", "Hyperspectral Imaging",
      "Compression (e.g. JPEG)", "Genetic Algorithms"
    ],
    detailed_description: [
      "Advanced classification techniques using SVMs and neural networks with satellite imagery.",
      "Segmentation via thresholding, fuzzy clustering, edge detection, and region‑growing.",
      "Texture and feature extraction on multispectral and hyperspectral data.",
      "Compression techniques (JPEG) and feature‑preserving algorithms.",
      "Optimization using genetic algorithms for image analysis pipelines.",
      "Term papers and case studies on real remote-sensing datasets."  // enhanced
    ],
    category: "Machine Learning",
    difficulty: "Advanced",
    icon: Satellite,
    semester: "Spring 2025"
  },
  {
    title: "Computer Programming and Utilization",
    institute: "Indian Institute of Technology Bombay",
    department: "Computer Science & Engineering",
    code: "CS101",
    instructor: "Prof. Shivram Kalayanakrishnan",
    description: "Introductory C/C++ programming, focusing on variables, control flow, data structures, pointers, recursion, and basic algorithms.",
    concepts: [
      "C/C++ Syntax", "Data Types & Variables", "Control Flow Statements",
      "Functions", "Arrays & Strings", "Pointers", "Structures",
      "Recursion", "Searching & Sorting", "Basic File I/O"
    ],
    detailed_description: [
      "Grammar of C/C++: variables, types, operators, control flow.",
      "Modular programming using functions, passing by value/reference.",
      "Memory handling: pointers, dynamic allocation, and address arithmetic.",
      "Recursive algorithms and problem decomposition.",
      "Introduction to arrays, strings, structs, and elementary data layouts.",
      "Implementation of search and sort (e.g. linear, binary, bubble, insertion).",
      "Simple file I/O: reading/writing text files via stdio/fstream."
    ],
    category: "Computer Science",
    difficulty: "Beginner",
    icon: Code,
    semester: "Spring 2024"
  },
  {
    title: "Data Structures and Algorithms",
    institute: "Indian Institute of Technology Bombay",
    department: "Computer Science & Engineering",
    code: "CS213",
    instructor: "Prof. Sohoni Milind",
    description: "Study of fundamental and advanced data structures and algorithms, including trees, graphs, hashing, sorting, and searching techniques.",
    concepts: [
      "Arrays & Linked Lists", "Stacks & Queues", "Hashing", "Trees & BSTs",
      "Red-Black Trees", "Heaps & Priority Queues", "Graph Traversals (BFS, DFS)",
      "Topological Sort", "Union-Find", "MST (Kruskal/Prim)", "Shortest Path (Dijkstra)"
    ],
    detailed_description: [
      "Abstract data types implemented in C++: arrays, vectors, lists, stacks, queues, hash tables.",
      "Tree-based structures: binary search trees, red‑black trees, heaps, priority queues.",
      "Graph algorithms: BFS, DFS, topological sort, strongly‑connected components.",
      "Greedy/graph methods including union‑find, MST (Kruskal/Prim), Dijkstra.",
      "Sorting algorithms: mergesort, quicksort, heapsort, radix; analysis (Big‑O, correctness).",
      "Hands‑on quizzes, assignments, and cumulative mid‑term/final exams."  // enhanced
    ],
    category: "Computer Science",
    difficulty: "Intermediate",
    icon: Database,
    semester: "Spring 2025"
  },
  {
    title: "Statistical Physics",
    institute: "Indian Institute of Technology Bombay",
    department: "Physics",
    code: "PH216",
    instructor: "Prof. Dibyendu Das",
    description: "Introduction to statistical mechanics covering ensembles, partition functions, thermodynamics, and quantum statistical methods.",
    concepts: [
      "Microcanonical & Canonical Ensembles", "Partition Function", "Thermodynamic Potentials",
      "Boltzmann Statistics", "Fermi & Bose Gases", "Phase Transitions", "Fluctuations"
    ],
    detailed_description: [
      "Ensemble theory: microcanonical, canonical, grand-canonical ensembles with applications.",
      "Partition function derivation and extraction of thermodynamic observables (entropy, free energy).",
      "Quantum statistics: Fermi–Dirac, Bose–Einstein distributions, applications to electron gas and photons.",
      "Critical phenomena: phase transitions, order parameters, Landau theory.",
      "Statistical fluctuations, central limit theorem, and applications to real systems."
    ],
    category: "Mathematics",
    difficulty: "Advanced",
    icon: Sigma,
    semester: "Spring 2025"
  },
  {
    title: "Complex Analysis",
    institute: "Indian Institute of Technology Bombay",
    department: "Physics",
    code: "PH223",
    instructor: "Prof. Dibyendu Das",
    description: "Study of analytic functions, Cauchy theory, residues, conformal maps, and series expansions in complex variables.",
    concepts: [
      "Complex Differentiability", "Cauchy-Riemann Equations", "Complex Integration",
      "Power and Laurent Series", "Residue Theorem", "Conformal Mappings",
      "Applications of Laplace & Fourier Transforms"
    ],
    detailed_description: [
      "Analytic functions, Cauchy–Riemann conditions and significance.",
      "Contour integration: Cauchy’s theorem, integral formulas, and residue applications.",
      "Series expansions: Taylor and Laurent series with pole classification.",
      "Residue evaluation techniques for real integrals and sums.",
      "Conformal mapping tools for solving boundary-value problems."
    ],
    category: "Mathematics",
    difficulty: "Intermediate",
    icon: Pi,
    semester: "Fall 2024"
  },
  {
    title: "Linear Algebra and Differential Equations",
    institute: "Indian Institute of Technology Bombay",
    department: "Mathematics",
    code: "MA110",
    instructor: "Prof. Rekha Santhanam",
    description: "Explores vector spaces, matrix operations, eigenvalues, eigenvectors, and solving ordinary differential equations including systems and matrix exponentials.",
    concepts: [
      "Vector Spaces & Subspaces", "Matrix Algebra", "Linear Transformations",
      "Eigenvalues & Eigenvectors", "Diagonalization", "System of ODEs",
      "Matrix Exponentials", "Stability Analysis"
    ],
    detailed_description: [
      "Vector space axioms, basis, dimension, and subspace computations.",
      "Linear transformations and representation via matrices.",
      "Eigenvalue problems, spectral theorems, diagonalization techniques.",
      "Solution of linear ODEs and coupled systems.",
      "Matrix exponential method for evolution equations.",
      "Stability and qualitative analysis via eigenvalue spectra."
    ],
    category: "Mathematics",
    difficulty: "Intermediate",
    icon: Calculator,
    semester: "Spring 2024"
  },
  {
    title: "Calculus",
    institute: "Indian Institute of Technology Bombay",
    department: "Mathematics",
    code: "MA105",
    instructor: "Prof. Ravi Raghunathan",
    description: "Core calculus topics: limits, continuity, differentiation, integration, series, and their applications in geometry and optimization.",
    concepts: [
      "Limits & Continuity", "Derivative Techniques", "Integral Calculus",
      "Sequences & Infinite Series", "Taylor Series", "Maxima/Minima",
      "Riemann Integration", "Applications in Physics"
    ],
    detailed_description: [
      "Formal epsilon–delta definitions; continuity and differentiability.",
      "Derivative rules, higher derivatives, and Taylor expansions.",
      "Integral calculus: Riemann definition, fundamental theorem, improper integrals.",
      "Series convergence, power-series manipulation, comparison tests.",
      "Multivariable applications: maxima/minima and geometric problems.",
      "Applied exercises in physics: area, volume, and optimization."
    ],
    category: "Mathematics",
    difficulty: "Intermediate",
    icon: Sigma,
    semester: "Fall 2023"
  },
  {
    title: "Electromagnetic Theory",
    institute: "Indian Institute of Technology Bombay",
    department: "Physics",
    code: "PH312",
    instructor: "Prof. Kantimay Das Gupta",
    description: "Explores Maxwell's equations, electromagnetic wave propagation, boundary value problems, and applications in optics and communications.",
    concepts: [
      "Maxwell's Equations", "Electrostatics & Magnetostatics",
      "EM Wave Propagation", "Boundary Conditions", "Waveguides",
      "Reflection/Refraction", "Poynting Theorem", "Antenna Basics"
    ],
    detailed_description: [
      "Differential and integral forms of Maxwell’s equations.",
      "Electrostatic and magnetostatic field solutions (Poisson, Biot–Savart, etc.).",
      "Plane wave derivation, reflection/refraction at interfaces.",
      "Poynting vector and energy transport analysis.",
      "Guided waves in waveguides, boundary-value solutions.",
      "Basic antenna theory and polarization concepts."
    ],
    category: "Physics",
    difficulty: "Intermediate",
    icon: Zap,
    semester: "Spring 2025"
  },
  {
    title: "Quantum Mechanics",
    institute: "Indian Institute of Technology Bombay",
    department: "Physics",
    code: "PH225",
    instructor: "Prof. Ramadevi",
    description: "Fundamental principles of quantum theory: wavefunctions, operators, Schrödinger equation, angular momentum, and applications to atomic systems.",
    concepts: [
      "Wavefunction & Hilbert Space", "Operators & Observables", "Time‑independent Schrödinger Equation",
      "Angular Momentum", "Hydrogenic Systems", "Spin & Two‑State Systems", "Perturbation Theory"
    ],
    detailed_description: [
      "Postulates of quantum mechanics, Hilbert space and operator expectancy.",
      "Time‑independent Schrödinger equation for 1D potentials.",
      "Angular momentum algebra and eigenstates (L, S, total J).",
      "Hydrogen atom solutions and energy level quantization.",
      "Two-state quantum systems, spin‑½, and superposition.",
      "Introduction to time-independent perturbation theory."
    ],
    category: "Physics",
    difficulty: "Advanced",
    icon: Atom,
    semester: "Spring 2025"
  },
  {
    title: "Analog Electronics Lab",
    institute: "Indian Institute of Technology Bombay",
    department: "Physics",
    code: "PH221",
    instructor: "Prof. Pradeep Sarin",
    description: "Hands-on lab focused on designing, building, and testing analog circuits using diodes, transistors, amplifiers, and oscillators.",
    concepts: [
      "PN Junctions & Diodes", "BJT & MOSFET Transistors",
      "Amplifier Design", "Oscillator Circuits", "Analog Signal Analysis"
    ],
    detailed_description: [
      "Biasing and VI-characteristics of PN diodes and BJTs.",
      "Single-stage amplifier design: gain, bandwidth, loading.",
      "Multi-stage amplifiers and frequency response analysis.",
      "Sinusoidal oscillators: design of RC & LC circuits.",
      "Real‑world measurement: input/output characteristics, distortion."
    ],
    category: "Physics",
    difficulty: "Intermediate",
    icon: CircuitBoard,
    semester: "Fall 2024"
  },
  {
    title: "Digital Electronics and Microprocessors Lab",
    institute: "Indian Institute of Technology Bombay",
    department: "Physics",
    code: "PH222",
    instructor: "Prof. Pradeep Sarin",
    description: "Lab course on digital logic systems and microprocessor interfacing through design, testing, and debugging digital modules.",
    concepts: [
      "Combinational Logic", "Sequential Circuits", "Flip‑Flops & Registers",
      "Microprocessor Basics", "Logic Families", "Digital System Debugging"
    ],
    detailed_description: [
      "Design and testing of logic gates, multiplexers, decoders on breadboard.",
      "Construction of counters, shift registers and sequential circuits.",
      "Microprocessor interfacing basics: I/O, timers, interrupts.",
      "Use of HDL tools and logic analyzers for debugging.",
      "Laboratory reporting: timing diagrams, truth tables, functional verification."
    ],
    category: "Physics",
    difficulty: "Intermediate",
    icon: Cpu,
    semester: "Spring 2025"
  },
  {
    title: "Waves and Oscillations",
    institute: "Indian Institute of Technology Bombay",
    department: "Physics",
    code: "PH113",
    instructor: "Prof. Ramadevi",
    description: "Comprehensive study of wave motion and oscillatory systems including resonance, superposition, and wave propagation phenomena.",
    concepts: [
      "Simple Harmonic Motion", "Damped & Forced Oscillations", "Resonance Phenomena",
      "Wave Equations", "Superposition", "Standing Waves", "Wave Speed & Attenuation"
    ],
    detailed_description: [
      "Analysis of SHM: period, energy, and small oscillations.",
      "Damping types, quality factor (Q), and resonance sharpness.",
      "Wave properties: propagation speed, impedance, dispersion.",
      "Superposition principle and formation of standing waves.",
      "Practical applications in acoustics and coupled oscillators."
    ],
    category: "Physics",
    difficulty: "Intermediate",
    icon: Waves,
    semester: "Fall 2024"
  },
  {
    title: "Thermal Physics",
    institute: "Indian Institute of Technology Bombay",
    department: "Physics",
    code: "PH114",
    instructor: "Prof. Somya Bera",
    description: "Fundamentals of thermodynamics and kinetic theory with statistical interpretation of thermodynamic laws in physical systems.",
    concepts: [
      "Laws of Thermodynamics", "Heat & Work", "Entropy & Reversible Processes",
      "Kinetic Theory of Gases", "Ideal & Real Gases", "Statistical Interpretation"
    ],
    detailed_description: [
      "First and second laws: internal energy, enthalpy, entropy generation.",
      "Reversible vs irreversible processes and Carnot cycle efficiency.",
      "Entropy change calculations for ideal and non‑ideal processes.",
      "Kinetic theory: molecular speeds, Maxwell–Boltzmann distribution.",
      "Real gas behavior and van der Waals corrections."
    ],
    category: "Physics",
    difficulty: "Intermediate",
    icon: Thermometer,
    semester: "Fall 2024"
  },
  {
    title: "Physics Lab",
    institute: "Indian Institute of Technology Bombay",
    department: "Physics",
    code: "PH117",
    instructor: "Prof. Aslam",
    description: "Foundational physics laboratory covering mechanics, optics, electricity, and data analysis techniques.",
    concepts: [
      "Mechanics Experiments", "Optics Experiments", "Electric Circuits",
      "Data Collection & Analysis", "Error Estimation", "Instrumentation"
    ],
    detailed_description: [
      "Classic mechanics experiments: g, friction, moments of inertia.",
      "Optics setups: lens formula, interference, diffraction.",
      "Electric circuit verification: Ohm’s law, series/parallel analysis.",
      "Data logging, least‑squares fitting, propagation of error.",
      "Lab report standards: graphing, uncertainty quantification."
    ],
    category: "Physics",
    difficulty: "Beginner",
    icon: Ruler,
    semester: "Spring 2024"
  },
  {
    title: "Introduction to Classical and Quantum Physics",
    institute: "Indian Institute of Technology Bombay",
    department: "Physics",
    code: "PH110",
    instructor: "Prof. Kantimay Das Gupta",
    description: "Survey of classical mechanics and introductory quantum concepts: waves, particles, energy conservation, and elementary QM.",
    concepts: [
      "Newtonian Mechanics", "Energy Conservation", "Wave‑Particle Duality",
      "Basic Quantum Theory", "Oscillations & Waves", "Quantum States"
    ],
    detailed_description: [
      "Newton’s laws applications and conservation of energy/momentum.",
      "Classical wave behavior: superposition, interference.",
      "Wave–particle duality: photoelectric effect, de Broglie relations.",
      "Introductory Schrödinger formalism and probability amplitudes.",
      "Transitional physics exercises bridging classical and quantum."
    ],
    category: "Physics",
    difficulty: "Intermediate",
    icon: Brain,
    semester: "Spring 2024"
  },
  {
    title: "Fundamental themes in Physics",
    institute: "Indian Institute of Technology Bombay",
    department: "Physics",
    code: "PH109",
    instructor: "Prof. Uma Shankar",
    description: "Introductory exploration of physics' foundational themes: symmetry, conservation laws, and links between classical and quantum theories.",
    concepts: [
      "Symmetry Principles", "Conservation Laws", "Newtonian & Quantum Mechanics",
      "Wave‑Particle Duality", "Thermodynamics", "Electromagnetism Basics"
    ],
    detailed_description: [
      "Symmetry in physics: conservation laws from Noether’s theorem.",
      "Bridges between classical and quantum mechanics via wave properties.",
      "Introduces thermodynamic and electromagnetic foundational laws.",
      "Conceptual exercises and historical case studies.",
      "Encourages thematic thinking across diverse physical phenomena."
    ],
    category: "Physics",
    difficulty: "Beginner",
    icon: Brain,
    semester: "Fall 2023"
  },
  {
    title: "AI and Data Science",
    institute: "Indian Institute of Technology Bombay",
    department: "Physics",
    code: "PH227",
    instructor: "Prof. Alok Shukla",
    description: "Introductory exposure to AI/ML methods and data science workflows, geared towards applications in physics and engineering.",
    concepts: [
      "Machine Learning Fundamentals", "Data Analysis", "Statistical Modeling",
      "Data Visualization", "Neural Network Basics", "Python for Data Science", "Big‑Data Tools"
    ],
    detailed_description: [
      "Python-based data processing: NumPy, Pandas, visualization (Matplotlib, Seaborn).",
      "Introductory ML models: regression/classification, cross-validation.",
      "Statistical modeling: inference, distributions, hypothesis testing.",
      "Basic neural networks via TensorFlow/Keras.",
      "Hands‑on labs using real physics/engineering datasets.",
      "Mini-project integrating ML pipeline to a physics problem."
    ],
    category: "Machine Learning",
    difficulty: "Beginner",
    icon: Code2,
    semester: "Fall 2024"
  },
  {
    title: "Classical Mechanics",
    institute: "Indian Institute of Technology Bombay",
    department: "Physics",
    code: "PH217",
    instructor: "Prof. Nitin Kumar",
    description: "Comprehensive study of analytical mechanics: Lagrangian and Hamiltonian formalisms, rigid-body motion, conservation principles, and nonlinear dynamics.",
    concepts: [
      "Newton's Laws", "Lagrangian Mechanics", "Hamiltonian Mechanics",
      "Conservation Laws", "Small Oscillations", "Rigid‑Body Dynamics",
      "Non‑Inertial Frames", "Chaos and Nonlinear Systems"
    ],
    detailed_description: [
      "Generalised coordinates and Lagrange’s equations.",
      "Hamiltonian mechanics and phase-space analysis.",
      "Rigid-body motion: Euler angles, rotational inertia.",
      "Small oscillations and normal-mode solutions.",
      "Non‑inertial frames, Coriolis and centrifugal forces.",
      "Introduction to nonlinear dynamics and chaos theory."
    ],
    category: "Physics",
    difficulty: "Intermediate",
    icon: Brain,
    semester: "Fall 2024"
  },
  {
    title: "General Physics Lab",
    institute: "Indian Institute of Technology Bombay",
    department: "Physics",
    code: "PH232",
    instructor: "Prof. Maniraj Mahalingam",
    description: "Experimental lab focused on mechanics, optics, and electromagnetism with emphasis on data interpretation and reporting.",
    concepts: [
      "Mechanics Experiments", "Optics Experiments", "Electromagnetism",
      "Data Acquisition", "Error Analysis", "Experimental Methods"
    ],
    detailed_description: [
      "Mechanics: pendulum, acceleration, and rotational experiments.",
      "Optics: diffraction, interference, lens focal lengths.",
      "Electromagnetism: field strength, circuit response.",
      "Use of sensors and data loggers for accurate measurements.",
      "Error estimation, propagation, and lab report communication."
    ],
    category: "Physics",
    difficulty: "Intermediate",
    icon: Ruler,
    semester: "Spring 2025"
  }
]

export default COURSE_DATA
