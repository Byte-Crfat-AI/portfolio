import { 
  Code2, 
  Smartphone, 
  Layers, 
  Server, 
  Landmark, 
  BrainCircuit, 
  Flame, 
  BarChart3, 
  Camera, 
  Sparkles, 
  Settings, 
  Cloud, 
  Database,
    GitBranch
} from "lucide-react"

const SKILLS_DATA = [
  { 
    name: 'Python', 
    level: 98, 
    icon: Code2, 
    category: 'Language', 
    color: '#3776AB'
  },
  { 
    name: 'C++', 
    level: 97, 
    icon: Code2, 
    category: 'Language', 
    color: '#00599C'
  },
  { 
    name: 'TensorFlow', 
    level: 90, 
    icon: BrainCircuit, 
    category: 'ML Framework', 
    color: '#FF6F00'
  },
  { 
    name: 'PyTorch', 
    level: 90, 
    icon: Flame, 
    category: 'ML Framework', 
    color: '#EE4C2C'
  },
  { 
    name: 'Scikit-Learn', 
    level: 94, 
    icon: BarChart3, 
    category: 'ML Library', 
    color: '#F7931E'
  },
  { 
    name: 'OpenCV', 
    level: 92, 
    icon: Camera, 
    category: 'Computer Vision', 
    color: '#5C3EE8'
  },
  { 
    name: 'LangChain', 
    level: 91, 
    icon: Sparkles, 
    category: 'LLM', 
    color: '#8E24AA'
  },
  { 
    name: 'MLOps', 
    level: 91, 
    icon: Settings, 
    category: 'Operations', 
    color: '#FF6B6B'
  },
  { 
    name: 'FastAPI', 
    level: 90, 
    icon: Server, 
    category: 'Backend', 
    color: '#009688'
  },
  { 
    name: 'Django', 
    level: 90, 
    icon: Landmark, 
    category: 'Backend', 
    color: '#092E20'
  },
    { 
    name: 'Git', 
    level: 89, 
    icon: GitBranch, 
    category: 'Version Control', 
    color: '#F05032' 
    },
  { 
    name: 'Flutter', 
    level: 87, 
    icon: Smartphone, 
    category: 'Mobile App Framework', 
    color: '#02569B'
  },
  { 
    name: 'AWS', 
    level: 80, 
    icon: Cloud, 
    category: 'Cloud', 
    color: '#FF9900'
  },
  { 
    name: 'SQL', 
    level: 70, 
    icon: Database, 
    category: 'Database', 
    color: '#336791'
  }
]



export default SKILLS_DATA