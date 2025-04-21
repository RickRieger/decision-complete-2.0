"use client";

import { useState } from "react";

export default function ApprovePage() {
  const [creditScore, setCreditScore] = useState<number | "">("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreditScore(Number(e.target.value));
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <h1 className="text-3xl font-bold text-blue-600">Lease Approval</h1>
      <p className="mt-4 text-black text-xl">Enter applicant’s credit score</p>

      <input
        type="number"
        value={creditScore}
        onChange={handleInputChange}
        placeholder="Enter Credit Score"
        className="mt-6 p-3 border border-gray-300 rounded-lg text-lg placeholder:text-gray-400 w-full max-w-xs"
        min="300"
        max="850"
      />

      <div className="mt-6">
        <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
          Approve
        </button>
        <button className="ml-4 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600">
          Reject
        </button>
      </div>

      <div className="mt-4">
        {creditScore >= 700 && (
          <p className="text-green-600">Applicant Approved!</p>
        )}
        {creditScore < 700 && creditScore > 0 && (
          <p className="text-red-600">Applicant Rejected!</p>
        )}
      </div>
    </main>
  );
}
