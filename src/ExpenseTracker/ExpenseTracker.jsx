import React, { useState, useEffect } from "react";

export default function ExpenseTracker() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Expense Tracker
        </h1>

        <div className="text-center">
          <h3 className="text-gray-500 uppercase tracking-wider text-sm">
            Your Balance
          </h3>
          <h2 className="text-2xl font-semibold text-gray-800">$1245.00</h2>
        </div>

        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl shadow-inner">
          <div className="text-center w-1/2 border-r border-gray-300">
            <h4 className="text-sm text-gray-500">Income</h4>
            <p className="text-lg font-semibold text-green-500">+$2000.00</p>
          </div>
          <div className="text-center w-1/2">
            <h4 className="text-sm text-gray-500">Expense</h4>
            <p className="text-lg font-semibold text-red-500">-$755.00</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">History</h3>
          <ul className="space-y-2 max-h-40 overflow-y-auto">
            <li className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm">
              <span className="text-gray-700">Groceries</span>
              <span className="text-red-500 font-medium">- $200.00</span>
            </li>
            <li className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm">
              <span className="text-gray-700">Salary</span>
              <span className="text-green-500 font-medium">+ $2000.00</span>
            </li>
            <li className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm">
              <span className="text-gray-700">Book</span>
              <span className="text-red-500 font-medium">- $15.00</span>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition duration-300">
            Add New Transaction
          </button>
        </div>
      </div>
    </div>
  );
}
