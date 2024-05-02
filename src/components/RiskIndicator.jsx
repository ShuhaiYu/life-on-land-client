import React from 'react';

const RiskIndicator = ({ riskLevel }) => {
  // 根据风险级别确定指针角度
  let pointerAngle;
  switch (riskLevel) {
    case 'High':
      pointerAngle = 135;
      break;
    case 'Moderate':
      pointerAngle = 90;
      break;
    case 'Low':
      pointerAngle = 45;
      break;
    case 'Very Low':
      pointerAngle = 0;
      break;
    default:
      pointerAngle = 0;
  }

  return (
    <div className="flex justify-center items-center">
      <svg viewBox="0 0 100 50" width="200" height="100">
        {/* 绘制半圆 */}
        <path
          d="M 10,50
          A 90,90 0 1,1 90,50
          L 90,50
          Z"
          fill="#f0f0f0"
          stroke="#ccc"
          strokeWidth="2"
        />
        {/* 绘制指针 */}
        <line
          x1="50"
          y1="50"
          x2="90"
          y2="50"
          transform={`rotate(${pointerAngle} 50 50)`}
          stroke="#ff0000"
          strokeWidth="8"
        />
      </svg>
    </div>
  );
};

export default RiskIndicator;
