import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function AddTransactionModal({ onClose, onAdd }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    await addDoc(collection(db, "expenses"), {
      text,
      amount: parseFloat(amount),
      date: new Date(),
    });
    setText("");
    setAmount("");
    onClose();
    onAdd();
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-lg space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          New Transaction
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-2">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Text
              </label>
              <input
                type="text"
                className="w-full border rounded-xl px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="e.g. Salary, Groceries"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Amount
              </label>
              <input
                type="number"
                className="w-full border rounded-xl px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="e.g. -200 or 2000"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <button
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-4 py-2 rounded-xl"
            >
              Cancel
            </button>
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-xl">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
