'use client';

import React, { useState, useEffect } from 'react';
import { 
  PageLoader, 
  DotsLoader, 
  SkeletonLoader, 
  HealthPageLoader 
} from '../../../components/ui';

const LoadersDemo = () => {
  const [loading, setLoading] = useState(true);
  const [sectionLoading, setSectionLoading] = useState(true);

  useEffect(() => {
    // Simulate page loading
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Simulate section loading
    const timer = setTimeout(() => setSectionLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <HealthPageLoader variant="heartbeat" size="large" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Health Community Loaders</h1>
          <p className="text-lg text-muted-foreground">
            Modern, optimized loaders designed for your health platform
          </p>
        </div>

        {/* Page Loaders Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Page Loaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-border">
              <h3 className="text-lg font-medium mb-4">Heartbeat</h3>
              <HealthPageLoader variant="heartbeat" size="default" showText={false} />
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-border">
              <h3 className="text-lg font-medium mb-4">Pulse</h3>
              <HealthPageLoader variant="pulse" size="default" showText={false} />
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-border">
              <h3 className="text-lg font-medium mb-4">Spinner</h3>
              <HealthPageLoader variant="spinner" size="default" showText={false} />
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-border">
              <h3 className="text-lg font-medium mb-4">Wave</h3>
              <HealthPageLoader variant="wave" size="default" showText={false} />
            </div>
          </div>
        </section>

        {/* Dots Loaders Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Dots Loaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-border">
              <h3 className="text-lg font-medium mb-4">Small</h3>
              <DotsLoader size="small" speed="normal" />
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-border">
              <h3 className="text-lg font-medium mb-4">Default</h3>
              <DotsLoader size="default" speed="normal" />
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-border">
              <h3 className="text-lg font-medium mb-4">Large</h3>
              <DotsLoader size="large" speed="normal" />
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-border">
              <h3 className="text-lg font-medium mb-4">Fast Speed</h3>
              <DotsLoader size="default" speed="fast" />
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-border">
              <h3 className="text-lg font-medium mb-4">Slow Speed</h3>
              <DotsLoader size="default" speed="slow" />
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-border">
              <h3 className="text-lg font-medium mb-4">5 Dots</h3>
              <DotsLoader size="default" count={5} />
            </div>
          </div>
        </section>

        {/* Skeleton Loaders Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Skeleton Loaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-border">
              <h3 className="text-lg font-medium mb-4">Text Skeleton</h3>
              <SkeletonLoader type="text" lines={4} />
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-border">
              <h3 className="text-lg font-medium mb-4">Card Skeleton</h3>
              <SkeletonLoader type="card" />
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-border">
              <h3 className="text-lg font-medium mb-4">Avatar Skeleton</h3>
              <div className="flex items-center space-x-4">
                <SkeletonLoader type="avatar" height="large" width="1/4" />
                <SkeletonLoader type="text" lines={2} />
              </div>
            </div>
          </div>
        </section>

        {/* Section Loading Demo */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Section Loading Demo</h2>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-border">
            <h3 className="text-lg font-medium mb-4">Content Section</h3>
            {sectionLoading ? (
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <DotsLoader size="small" />
                  <span className="text-sm text-muted-foreground">Loading content...</span>
                </div>
                <SkeletonLoader type="text" lines={3} />
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-foreground">
                  This content has been loaded successfully! The skeleton loader provided a smooth transition.
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-sm text-green-600">Content loaded</span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Usage Examples */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Usage Examples</h2>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-border">
            <h3 className="text-lg font-medium mb-4">Code Examples</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-sm mb-2">Page Loader:</h4>
                <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`import { HealthPageLoader } from '@/components/ui';

<HealthPageLoader variant="heartbeat" size="large" />`}
                </pre>
              </div>
              <div>
                <h4 className="font-medium text-sm mb-2">Dots Loader:</h4>
                <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`import { DotsLoader } from '@/components/ui';

<DotsLoader size="default" speed="normal" count={3} />`}
                </pre>
              </div>
              <div>
                <h4 className="font-medium text-sm mb-2">Skeleton Loader:</h4>
                <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`import { SkeletonLoader } from '@/components/ui';

<SkeletonLoader type="text" lines={3} />`}
                </pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoadersDemo; 