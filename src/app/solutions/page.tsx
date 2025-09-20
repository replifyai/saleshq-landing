'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { 
  ArrowRight, 
  CheckCircle, 
  Star,
  Users,
  Target,
  Zap,
  MessageSquare,
  DollarSign,
  Clock,
  Brain,
  Globe,
  TrendingUp,
  BarChart3,
  Shield,
  BookOpen,
  Heart,
  Calculator,
  Phone,
  Mail,
  AlertTriangle,
  LineChart,
  Database,
  Settings,
  AlertCircle,
  PieChart,
  Headphones,
  Link,
  FileText,
  Monitor,
  TrendingDown,
  Bot,
  Search,
  RefreshCw,
  BarChart,
  Share2,
  MessageCircle
} from 'lucide-react';
import { getAllTeams } from '@/data/teamSolutions';

export default function SolutionsPage() {
  const router = useRouter();
  const teamSolutions = getAllTeams();

  const getIcons = (name: string) => {
    switch (name) {
      case 'Activity':
        return <TrendingUp className="w-6 h-6" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6" />;
      case 'Shield':
        return <Shield className="w-6 h-6" />;
      case 'Zap':
        return <Zap className="w-6 h-6" />;
      case 'Heart':
        return <Heart className="w-6 h-6" />;
      case 'Globe':
        return <Globe className="w-6 h-6" />;
      case 'Calculator':
        return <Calculator className="w-6 h-6" />;
      case 'Phone':
        return <Phone className="w-6 h-6" />;
      case 'Mail':
        return <Mail className="w-6 h-6" />;
      case 'AlertTriangle':
        return <AlertTriangle className="w-6 h-6" />;
      case 'LineChart':
        return <LineChart className="w-6 h-6" />;
      case 'Database':
        return <Database className="w-6 h-6" />;
      case 'Settings':
        return <Settings className="w-6 h-6" />;
      case 'AlertCircle':
        return <AlertCircle className="w-6 h-6" />;
      case 'PieChart':
        return <PieChart className="w-6 h-6" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6" />;
      case 'Brain':
        return <Brain className="w-6 h-6" />;
      case 'Link':
        return <Link className="w-6 h-6" />;
      case 'FileText':
        return <FileText className="w-6 h-6" />;
      case 'Monitor':
        return <Monitor className="w-6 h-6" />;
      case 'TrendingDown':
        return <TrendingDown className="w-6 h-6" />;
      case 'DollarSign':
        return <DollarSign className="w-6 h-6" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6" />;
      case 'Bot':
        return <Bot className="w-6 h-6" />;
      case 'Search':
        return <Search className="w-6 h-6" />;
      case 'RefreshCw':
        return <RefreshCw className="w-6 h-6" />;
      case 'BarChart':
        return <BarChart className="w-6 h-6" />;
      case 'Share2':
        return <Share2 className="w-6 h-6" />;
      case 'MessageCircle':
        return <MessageCircle className="w-6 h-6" />;
      default:
        return <Target className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden pt-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-emerald-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 text-sm font-medium">
              <Star className="w-4 h-4 mr-2" />
              Tailored Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent mb-6">
              Solutions Built for
              <span className="block">Every Team</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              Discover how our AI-powered platform transforms workflows and drives results for Sales, 
              Customer Support, and Revenue Operations teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 dark:border-slate-600" onClick={() => router.push('/contact')}>
                <MessageSquare className="w-4 h-4 mr-2" />
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Team Solutions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {teamSolutions.map((solution) => (
            <Card 
              key={solution.id} 
              className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm relative overflow-hidden cursor-pointer"
              onClick={() => router.push(`/solutions/${solution.id}`)}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <CardHeader className="relative z-10 pb-4">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${solution.color} text-white shadow-lg mb-4`}>
                  {/* {solution.icon} */}
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {solution.name}
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10 space-y-6">
                {/* Key Features */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900 dark:text-white flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-blue-500" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {solution.keyFeatures.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle className="w-3 h-3 mr-2 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Metrics */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900 dark:text-white flex items-center">
                    <Target className="w-4 h-4 mr-2 text-purple-500" />
                    Key Results
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {solution.metrics.slice(0, 2).map((metric, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                        <span className="text-sm font-medium text-slate-900 dark:text-white">{metric.label}</span>
                        <div className="text-right">
                          <span className="text-lg font-bold text-slate-900 dark:text-white">{metric.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  className="w-full bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 text-white group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/solutions/${solution.id}`);
                  }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Problems We Solve Section */}
      <div className="bg-slate-50 dark:bg-slate-800/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Common Challenges We Solve
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Every team faces unique challenges. Our solutions are designed to address the most common pain points across different departments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamSolutions.map((solution) => (
              <div key={solution.id} className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${solution.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {getIcons(solution.icon)}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {solution.name}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {solution.problemsSolved.slice(0, 4).map((problem, index) => (
                    <li key={index} className="flex items-start text-sm text-slate-600 dark:text-slate-300 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300" />
                      {problem}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {solution.problemsSolved.length} total challenges addressed
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Team?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of teams already using our AI-powered platform to accelerate growth and achieve better results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50" onClick={() => router.push('/contact')}>
              Get Started Free
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => {
              window.open('https://calendly.com/saleshqai/30min', '_blank');
            }}>
              <MessageSquare className="w-4 h-4 mr-2" />
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}