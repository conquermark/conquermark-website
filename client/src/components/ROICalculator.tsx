import React, { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, DollarSign, Clock, TrendingUp, ArrowRight } from 'lucide-react';
import ContactModal from '@/components/ContactModal';

interface ROICalculatorProps {
  defaultHourlyRate?: number;
}

const ROICalculator: React.FC<ROICalculatorProps> = ({ defaultHourlyRate = 50 }) => {
  const [hoursPerWeek, setHoursPerWeek] = useState([10]);
  const [hourlyRate, setHourlyRate] = useState([defaultHourlyRate]);
  const [monthlySavings, setMonthlySavings] = useState(0);
  const [yearlySavings, setYearlySavings] = useState(0);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    const weeklyCost = hoursPerWeek[0] * hourlyRate[0];
    const monthly = weeklyCost * 4.33; // Average weeks in a month
    const yearly = monthly * 12;
    
    // Assuming automation saves 80% of manual work time
    setMonthlySavings(Math.round(monthly * 0.8));
    setYearlySavings(Math.round(yearly * 0.8));
  }, [hoursPerWeek, hourlyRate]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 text-sm font-semibold mb-4">
              <Calculator className="w-4 h-4" />
              <span>Calculate Your ROI</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              How Much Is Manual Work Costing You?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Estimate your potential savings by automating repetitive tasks. Most businesses save 80% of manual work time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Card className="shadow-lg border-slate-200 dark:border-slate-800">
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-500" />
                  Your Current Manual Work
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Hours spent manually per week
                    </label>
                    <span className="text-lg font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-md">
                      {hoursPerWeek} hrs
                    </span>
                  </div>
                  <Slider
                    value={hoursPerWeek}
                    onValueChange={setHoursPerWeek}
                    max={100}
                    step={1}
                    className="py-4"
                  />
                  <p className="text-xs text-slate-500">
                    Data entry, email follow-ups, report generation, etc.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Average hourly cost (Salary + Overhead)
                    </label>
                    <span className="text-lg font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-md">
                      ${hourlyRate}/hr
                    </span>
                  </div>
                  <Slider
                    value={hourlyRate}
                    onValueChange={setHourlyRate}
                    max={200}
                    step={5}
                    className="py-4"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-blue-100 dark:border-blue-900 bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
              
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2 text-slate-900 dark:text-white">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  Potential Savings with Automation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 relative z-10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                    <p className="text-sm text-slate-500 mb-1">Monthly Savings</p>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">
                      {formatCurrency(monthlySavings)}
                    </p>
                  </div>
                  <div className="bg-blue-600 p-4 rounded-xl shadow-lg shadow-blue-600/20 text-white">
                    <p className="text-sm text-blue-100 mb-1">Yearly Savings</p>
                    <p className="text-2xl font-bold">
                      {formatCurrency(yearlySavings)}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 flex-shrink-0">
                      <DollarSign className="w-4 h-4" />
                    </div>
                    <p>Save <span className="font-bold text-slate-900 dark:text-white">~{(hoursPerWeek[0] * 0.8).toFixed(1)} hours</span> every single week.</p>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 flex-shrink-0">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <p>Reinvest <span className="font-bold text-slate-900 dark:text-white">{formatCurrency(yearlySavings)}</span> back into growth.</p>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 h-12 text-base font-semibold shadow-lg"
                  onClick={() => setContactModalOpen(true)}
                >
                  Start Saving Today
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </section>
  );
};

export default ROICalculator;
