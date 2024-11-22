import React from "react";

const BarChart = () => {
  // Data for the chart
  const data = [
    { label: "Jan", value: 20, color: "bg-[#E6E8F0]" },
    { label: "Feb", value: 30, color: "bg-[#E6E8F0]" },
    { label: "Mar", value: 50, color: "bg-gradient-to-b from-[#CDF4FF] to-[#33C600]" },
    { label: "Apr", value: 40, color: "bg-[#E6E8F0]" },
    { label: "May", value: 60, color: "bg-[#E6E8F0]" },
    { label: "Jun", value: 100, color: "bg-gradient-to-r from-[#B8B7FF] to-[#6C5DD3]" },
    { label: "Jul", value: 80, color: "bg-[#E6E8F0]" },
    { label: "Aug", value: 60, color: "bg-[#E6E8F0]" },
    { label: "Sep", value: 30, color: "bg-[#E6E8F0]" },
    { label: "Oct", value: 70, color: "bg-gradient-to-r from-[#FFB7F5] to-[#FF4CE2]" },
    { label: "Nov", value: 40, color: "bg-[#E6E8F0]" },
    { label: "Dec", value: 50, color: "bg-[#E6E8F0]" },
  ];

  // Find the highest value in the dataset
  const maxValue = Math.max(...data.map((item) => item.value));

  // Find the highest and total values
  const highestMonth = data.reduce((max, item) =>
    item.value > max.value ? item : max
  );
  const totalIncome = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="p-4">
      <div className="text-[32px] font-[700] text-[#081735] mb-4">$112,340</div>

      {/* Chart */}
      <div className="flex items-end h-48 space-x-2 overflow-x-scroll md:overflow-visible w-full">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center flex-1 h-full"
          >
            {/* Bar */}
            <div
              className={`w-full ${item.color} rounded-md`}
              style={{
                height: `${(item.value / maxValue) * 100}%`,
                marginTop: 'auto',
                minHeight: "10px", // Ensure visibility for the smallest bars
              }}
            />
            {/* Label */}
            <span className="text-xs mt-1">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Chart Stats */}
      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
        <div className="flex items-center space-x-1">
          <div className="bg-gradient-to-b from-[#CDF4FF] to-[#33C600] w-4 h-4 rounded-sm"/>
          <p className="text-[#8F95B2] text-[12px] font-[400]">Pending (10%)</p>
        </div>
        <div className="flex items-center space-x-1">
          <div className="text-sm bg-gradient-to-r from-[#B8B7FF] to-[#6C5DD3] w-4 h-4 rounded-sm"/>
          <p className="text-[#8F95B2] text-[12px] font-[400]">Income</p>
        </div>
        <div className="flex items-center space-x-1">
          <div className="text-sm bg-gradient-to-r from-[#FFB7F5] to-[#FF4CE2] w-4 h-4 rounded-sm"/>
          <p className="text-[#8F95B2] text-[12px] font-[400]">Expense</p>
        </div>
      </div>
    </div>
  );
};

export default BarChart;