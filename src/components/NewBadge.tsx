import React from 'react'
import * as Frigade from '@frigade/react'

interface NewBadgeProps {
  className?: string;
}

export const NewBadge: React.FC<NewBadgeProps> = ({ className = '' }) => {
  const flowId = "flow_Xk4yQCDK";
  const { flow } = Frigade.useFlow(flowId);
  
  if (!flow) {
    return null;
  }
  
  if (!flow.isVisible) {
    return null;
  }
  
  const firstStep = flow.steps.get("badge");
  
  return (
    <span 
      className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-green-500 text-white uppercase ${className}`}
    >
      {firstStep?.title || 'NEW'}
    </span>
  );
}