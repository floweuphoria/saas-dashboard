import React from 'react';
import * as Frigade from '@frigade/react';

// Simple standalone example of Frigade Collection usage
// This is the minimal code needed to use no-code components
const FrigadeCollectionExample: React.FC = () => {
  return (
    <div className="frigade-collection-example">
      <h2>🚀 No-Code Frigade Components</h2>
      <p>All components are configured in your Frigade dashboard</p>
      
      {/* This is exactly as you specified */}
      <Frigade.Collection collectionId="collection_YlC44X2h" />
      
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '0.5rem' }}>
        <h3>Usage:</h3>
        <pre style={{ backgroundColor: '#1f2937', color: '#e5e7eb', padding: '1rem', borderRadius: '0.5rem', overflow: 'auto' }}>
{`import * as Frigade from '@frigade/react';

const App = () => {
  return (
    <Frigade.Collection collectionId="collection_YlC44X2h" />
  );
};`}
        </pre>
        <p style={{ marginTop: '1rem', color: '#6b7280', fontSize: '0.875rem' }}>
          ✨ That's it! No additional code needed. All components, styling, and logic are managed in your Frigade dashboard.
        </p>
      </div>
    </div>
  );
};

export default FrigadeCollectionExample;