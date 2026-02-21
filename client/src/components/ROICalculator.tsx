import React, { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, DollarSign, Clock, TrendingUp, ArrowRight, Users, Globe, AlertTriangle, CheckCircle2 } from 'lucide-react';
import ContactModal from '@/components/ContactModal';
import LeadCaptureModal from '@/components/LeadCaptureModal';

interface ROICalculatorProps {
  defaultHourlyRate?: number;
  industry?: string;
  problems?: { label: string; impact: number }[]; // impact is multiplier (e.g., 1.2 for high impact)
}

const CURRENCIES = {
  USD: { symbol: '$', rate: 1 },
  EUR: { symbol: '€', rate: 0.92 },
  GBP: { symbol: '£', rate: 0.79 },
};

const DEFAULT_PROBLEMS = [
  { label: "Manual Data Entry", impact: 1.0 },
  { label: "Invoicing & Billing", impact: 1.1 },
  { label: "Lead Qualification", impact: 1.2 },
  { label: "Customer Support Tickets", impact: 1.0 },
  { label: "Report Generation", impact: 1.1 },
];

const ROICalculator: React.FC<ROICalculatorProps> = ({ 
  defaultHourlyRate = 50, 
  industry = "General",
  problems = DEFAULT_PROBLEMS
}) => {
  const [currency, setCurrency] = useState<keyof typeof CURRENCIES>('USD');
  const [hoursPerWeek, setHoursPerWeek] = useState([10]);
  const [hourlyRate, setHourlyRate] = useState([defaultHourlyRate]);
  const [teamSize, setTeamSize] = useState([1]);
  const [selectedProblem, setSelectedProblem] = useState(problems[0].label);
  
  const [monthlySavings, setMonthlySavings] = useState(0);
  const [yearlySavings, setYearlySavings] = useState(0);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [leadCaptureOpen, setLeadCaptureOpen] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);

  useEffect(() => {
    const problemImpact = problems.find(p => p.label === selectedProblem)?.impact || 1;
    // Base cost calculation
    const weeklyCost = hoursPerWeek[0] * hourlyRate[0] * teamSize[0];
    // Apply problem impact multiplier to reflect hidden costs (errors, delays, opportunity cost)
    const totalWeeklyImpact = weeklyCost * problemImpact;
    
    const monthly = totalWeeklyImpact * 4.33;
    const yearly = monthly * 12;
    
    // Assuming automation saves 80% of manual work time + eliminates hidden costs
    setMonthlySavings(Math.round(monthly * 0.8));
    setYearlySavings(Math.round(yearly * 0.8));
  }, [hoursPerWeek, hourlyRate, teamSize, selectedProblem, problems]);

  const formatCurrency = (value: number) => {
    const convertedValue = value * CURRENCIES[currency].rate;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 0,
    }).format(convertedValue);
  };

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-semibold mb-4">
              <Calculator className="w-4 h-4" />
              <span>Automation Impact Analysis</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Calculate the True Cost of {industry} Inefficiency
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              See exactly how much manual work is costing your team and how much you could reinvest by automating.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Input Panel */}
            <Card className="lg:col-span-7 shadow-lg border-slate-200 dark:border-slate-800">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  Diagnose Your Bottleneck
                </CardTitle>
                <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
                  {(Object.keys(CURRENCIES) as Array<keyof typeof CURRENCIES>).map((curr) => (
                    <button
                      key={curr}
                      onClick={() => setCurrency(curr)}
                      className={`px-3 py-1 text-xs font-bold rounded-md transition-colors ${
                        currency === curr 
                          ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-blue-400' 
                          : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-8 pt-6">
                {/* Problem Selector */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    What is your biggest manual task?
                  </label>
                  <Select value={selectedProblem} onValueChange={setSelectedProblem}>
                    <SelectTrigger className="w-full h-12 text-base">
                      <SelectValue placeholder="Select a bottleneck" />
                    </SelectTrigger>
                    <SelectContent>
                      {problems.map((p) => (
                        <SelectItem key={p.label} value={p.label}>
                          {p.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  {/* Hours Input */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-slate-400" />
                        Hours/Week (Per Person)
                      </label>
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                        {hoursPerWeek} hrs
                      </span>
                    </div>
                    <Slider
                      value={hoursPerWeek}
                      onValueChange={setHoursPerWeek}
                      max={60}
                      step={1}
                      className="py-2"
                    />
                  </div>

                  {/* Hourly Rate Input */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-slate-400" />
                        Hourly Cost
                      </label>
                      <span className="text-sm font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded">
                        {formatCurrency(hourlyRate[0])}/hr
                      </span>
                    </div>
                    <Slider
                      value={hourlyRate}
                      onValueChange={setHourlyRate}
                      max={300}
                      step={5}
                      className="py-2"
                    />
                  </div>
                </div>

                {/* Team Size Input */}
                <div className="space-y-4 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                      <Users className="w-4 h-4 text-slate-400" />
                      Team Size Affected
                    </label>
                    <span className="text-sm font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 px-2 py-1 rounded">
                      {teamSize} people
                    </span>
                  </div>
                  <Slider
                    value={teamSize}
                    onValueChange={setTeamSize}
                    max={50}
                    step={1}
                    className="py-2"
                  />
                  <p className="text-xs text-slate-500">
                    Scale the impact across your entire department.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Results Panel */}
            <Card className="lg:col-span-5 shadow-xl border-blue-100 dark:border-blue-900 bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 relative overflow-hidden h-full flex flex-col">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none" />
              
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2 text-slate-900 dark:text-white">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  Your Potential ROI
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6 relative z-10 flex-grow flex flex-col justify-center">
                <div className="bg-white dark:bg-slate-950 p-5 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                  <p className="text-sm text-slate-500 mb-1 font-medium">Projected Yearly Savings</p>
                  <p className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {formatCurrency(yearlySavings)}
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-green-600 dark:text-green-400 font-medium">
                    <TrendingUp className="w-3 h-3" />
                    <span>+{(yearlySavings / (hourlyRate[0] * 2080) * 100).toFixed(0)}% efficiency gain</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">Eliminate {selectedProblem}</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                        Reclaim ~{(hoursPerWeek[0] * teamSize[0] * 0.8).toFixed(0)} hours/week for strategic work.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-auto">
                  {!showAnalysis ? (
                    <Button 
                      size="lg" 
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 h-14 text-base font-semibold shadow-lg group"
                      onClick={() => setLeadCaptureOpen(true)}
                    >
                      <span>Generate Analysis Report</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  ) : (
                    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700 text-sm">
                        <p className="font-semibold text-slate-900 dark:text-white mb-2">Analysis Summary:</p>
                        <ul className="space-y-1 text-slate-600 dark:text-slate-400 list-disc list-inside">
                          <li>Bottleneck: <span className="font-medium text-slate-900 dark:text-white">{selectedProblem}</span></li>
                          <li>Annual Waste: <span className="font-medium text-red-500">{formatCurrency(yearlySavings / 0.8)}</span></li>
                          <li>Potential Gain: <span className="font-medium text-green-600 dark:text-green-400">{formatCurrency(yearlySavings)}</span></li>
                        </ul>
                      </div>
                      <Button 
                        size="lg" 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-base font-semibold shadow-lg"
                        onClick={() => setContactModalOpen(true)}
                      >
                        Book Strategy Call to Fix This
                      </Button>
                    </div>
                  )}
                  {!showAnalysis && (
                    <p className="text-xs text-center text-slate-400 mt-3">
                      Includes detailed breakdown & implementation plan.
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
      <LeadCaptureModal 
        open={leadCaptureOpen} 
        onOpenChange={setLeadCaptureOpen} 
        onSuccess={() => setShowAnalysis(true)}
        data={{
          problem: selectedProblem,
          savings: formatCurrency(yearlySavings),
          industry: industry
        }}
      />
    </section>
  );
};

export default ROICalculator;
