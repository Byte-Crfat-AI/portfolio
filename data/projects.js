import { 
  ShoppingCart, 
  CheckSquare, 
  Brain, 
  CreditCard, 
  Share2, 
  Activity,
  Trophy,
    FileSearch,
    CloudRain,
    Bot,
    Music2,
    Newspaper,
    BarChart4,
    BatteryCharging,
    Users,
    CircuitBoard,
    Wrench,
    Eye,
    Database,
    BarChart,
} from "lucide-react"

const PROJECT_DATA = [
  {
    code: "ML001",
    title: "Dream Team Predictor",
    tech: ["CNN", "Ranking Model", "LIME"],
    description: "Cricket team prediction system using dual-model architecture and explainable AI.",
    detailedDescription: [
      "Developed a CNN-based Dream Team predictor model that forecasts the ideal 11-player lineup for a cricket match",
      "Implemented a dual-model architecture consisting of a Ranking Model and a Fantasy Points Predictor Model",
      "Integrated LIME for model explainability to understand prediction decisions",
      "Achieved a MAPE of 13% for T20 and 25% for ODI matches"
    ],
    icon: Trophy,
    category: "Machine Learning",
    complexity: "High"
  },
  {
    code: "AI001",
    title: "AI Powered Data Management System",
    tech: ["Keyword Embeddings", "KeyBERT", "LIME"],
    description: "AI-based file retrieval system using keyword embeddings and summary extraction.",
    detailedDescription: [
      "Developed a system for content-based file retrieval using keyword embeddings instead of metadata",
      "Extracted summaries from various file formats using custom models",
      "Identified keywords using KeyBERT for improved search accuracy",
      "Integrated LIME for explaining model predictions and decision-making process"
    ],
    icon: FileSearch,
    category: "AI/NLP",
    complexity: "High"
  },
  {
    code: "IP001",
    title: "Upscaling of IMD Precipitation Data",
    tech: ["WGAN-GP", "Autoencoder", "Perceptual Loss"],
    description: "Super-resolved rainfall data using a GAN-based architecture for better accuracy.",
    detailedDescription: [
      "Developed a WGAN-GP based super-resolution model to upscale IMD rainfall data",
      "Used Wasserstein loss with gradient penalty for stable training",
      "Integrated an autoencoder with perceptual loss to preserve fine details",
      "Achieved PSNR of 31.8 and SSIM of 0.93 for high-quality results"
    ],
    icon: CloudRain,
    category: "Image Processing",
    complexity: "High"
  },
  {
    code: "NLP001",
    title: "Quantum Qubie: Physics Department Chatbot",
    tech: ["Gemini", "RAG", "Web Scraping", "Streamlit"],
    description: "Built a context-aware academic chatbot for the Physics department.",
    detailedDescription: [
      "Created a Gemini-powered chatbot for Physics department FAQs using Retrieval-Augmented Generation (RAG)",
      "Integrated web scraping and prompt engineering for comprehensive data gathering",
      "Built an intuitive UI in Streamlit for ease of use",
      "Implemented context-aware responses for academic queries"
    ],
    icon: Bot,
    category: "NLP/LLM",
    complexity: "Medium"
  },
  {
    code: "ASP001",
    title: "Song Identifier",
    tech: ["CNN", "MFCC", "VGG", "K-means"],
    description: "Built a song classification system using MFCCs and CNN with feature clustering.",
    detailedDescription: [
      "Developed a CNN-based model that processes MFCC features to classify songs",
      "Extracted audio features using a VGG-based CNN pipeline",
      "Grouped similar songs using K-means clustering algorithm",
      "Labeled clusters using known data for improved classification accuracy"
    ],
    icon: Music2,
    category: "Audio/Signal Processing",
    complexity: "Medium"
  },
  {
    code: "NLP002",
    title: "Fake News Detector",
    tech: ["SVC", "TF-IDF", "Sklearn"],
    description: "Achieved 99.9% accuracy in fake news classification using classical ML.",
    detailedDescription: [
      "Built a Fake News Detector using Support Vector Classifier (SVC)",
      "Preprocessing included stopword removal, tokenization, stemming, and lemmatization",
      "Transformed data using TF-IDF vectorization for effective classification",
      "Achieved 99.9% accuracy in distinguishing fake from real news"
    ],
    icon: Newspaper,
    category: "NLP",
    complexity: "Low"
  },
  {
    code: "MI001",
    title: "HAM10000 Skin Cancer Classification",
    tech: ["CNN", "YOLO", "OpenCV"],
    description: "Classified skin cancer images using CNNs, achieving 96% accuracy.",
    detailedDescription: [
      "Developed a CNN model for the HAM10000 dermatoscopic image dataset as part of a machine learning bootcamp",
      "Achieved 96% accuracy, 0.96 F1-score, 0.98 MAP, and 0.99 AUC",
      "Gained hands-on experience with YOLO object detection framework",
      "Utilized OpenCV for image preprocessing and enhancement"
    ],
    icon: Activity,
    category: "Medical Imaging",
    complexity: "High"
  },
  {
    code: "CV001",
    title: "Computer Vision Bootcamp Projects",
    tech: ["GAN", "OpenCV"],
    description: "Explored CV fundamentals including object detection and data generation with GANs.",
    detailedDescription: [
      "Completed a comprehensive summer program on Computer Vision",
      "Learned core concepts like object detection, segmentation, and classification",
      "Practiced data generation using Generative Adversarial Networks (GANs)",
      "Implemented various computer vision techniques using OpenCV"
    ],
    icon: Eye,
    category: "Computer Vision",
    complexity: "Medium"
  },
  {
    code: "PM001",
    title: "Battery SoH Estimator",
    tech: ["PINN", "Correlation Analysis"],
    description: "Estimated battery health using physics-informed neural networks with high precision.",
    detailedDescription: [
      "Built a Physics-Informed Neural Network (PINN) for Li-ion battery State of Health estimation",
      "Performed correlation analysis for feature optimization",
      "Achieved R² of 0.97 and MSE of 1.79e-05 for highly accurate predictions",
      "Combined physics principles with machine learning for robust modeling"
    ],
    icon: BatteryCharging,
    category: "Physics/ML",
    complexity: "High"
  },
  {
    code: "MA001",
    title: "Alumlink: Alumni-Student Networking App",
    tech: ["Flutter", "Gemini", "LLM"],
    description: "Mobile networking app with career chatbot to connect students and alumni.",
    detailedDescription: [
      "Created 'Alumlink', a Flutter-based mobile app for alumni-student networking",
      "Integrated Gemini as a career guidance chatbot for personalized advice",
      "Categorized alumni by domain to help students reach out efficiently",
      "Implemented user-friendly interface for seamless networking experience"
    ],
    icon: Users,
    category: "Mobile App + AI",
    complexity: "Medium"
  },
  {
    code: "FS001",
    title: "DevCom Mentorship E-Commerce Backend",
    tech: ["Django", "REST API", "Backend"],
    description: "Worked on backend of an e-commerce site during DevCom mentorship program.",
    detailedDescription: [
      "Contributed to backend development of an e-commerce site during DevCom's mentorship program",
      "Implemented Django REST APIs for various e-commerce functionalities",
      "Designed and optimized database models for efficient data management",
      "Enabled dynamic product interaction features for enhanced user experience"
    ],
    icon: ShoppingCart,
    category: "Full-Stack",
    complexity: "Medium"
  },
  {
    code: "ES001",
    title: "Electronics: Humanoid Project",
    tech: ["I2C", "Arduino", "Stepper Motors"],
    description: "Built I2C communication and motor control for humanoid robot.",
    detailedDescription: [
      "Designed I2C protocol for internal communication in a humanoid robot",
      "Built and optimized stepper motor circuits using Arduino and drivers",
      "Improved robotic performance through precise motor control",
      "Implemented efficient communication between multiple robot components"
    ],
    icon: CircuitBoard,
    category: "Embedded Systems",
    complexity: "Medium"
  },
  {
    code: "DS001",
    title: "Python for Data Science",
    tech: ["NumPy", "Pandas", "SVM", "Clustering"],
    description: "Used Python libraries to explore classical ML and unsupervised methods.",
    detailedDescription: [
      "Learned and applied NumPy, Pandas, and Matplotlib for comprehensive data analysis",
      "Used supervised methods like SVM and Naive Bayes for classification tasks",
      "Implemented unsupervised learning techniques including clustering and dimensionality reduction",
      "Applied anomaly detection methods for identifying outliers in datasets"
    ],
    icon: BarChart4,
    category: "Data Science",
    complexity: "Low"
  },
  {
    code: "DT001",
    title: "Excel and SQL",
    tech: ["Excel", "SQL", "Pivot Tables", "Joins"],
    description: "Used Excel and SQL for data querying, dashboards, and analytics.",
    detailedDescription: [
      "Built comprehensive dashboards using Excel with VLOOKUP, HLOOKUP, and pivot tables",
      "Practiced advanced SQL operations like joins, subqueries, and aggregations",
      "Answered complex analytical queries through efficient data manipulation",
      "Created visual representations of data insights for business decision-making"
    ],
    icon: Database,
    category: "Data Tools",
    complexity: "Low"
  },
  {
    code: "ME001",
    title: "UTM – Universal Testing Machine",
    tech: ["Arduino", "IR Sensors", "Gear Design"],
    description: "Built a UTM to generate stress-strain curves with custom hardware setup.",
    detailedDescription: [
      "Engineered a Universal Testing Machine to analyze stress-strain curves of materials",
      "Designed custom gear mechanism to enhance torque and break material samples",
      "Used IR sensors and Arduino Uno to collect real-time data",
      "Implemented data plotting functionality for stress-strain curve visualization"
    ],
    icon: Wrench,
    category: "Mechanical + Embedded",
    complexity: "Medium"
  }
]

export default PROJECT_DATA