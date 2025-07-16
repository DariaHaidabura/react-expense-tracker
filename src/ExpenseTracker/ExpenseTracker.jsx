import React, { useState, useEffect } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import AddTransactionModal from "../AddtTransactionModal/AddTransactionModal";

export default function ExpenseTracker() {
  const [transactions, setTransactions] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "expenses"));
    const data = querySnapshot.docs.map((doc) => doc.data());
    setTransactions(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income + expense;
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
          <h2 className="text-2xl font-semibold text-gray-800">
            ${balance.toFixed(2)}
          </h2>
        </div>

        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl shadow-inner">
          <div className="text-center w-1/2 border-r border-gray-300">
            <h4 className="text-sm text-gray-500">Income</h4>
            <p className="text-lg font-semibold text-green-500">
              +${income.toFixed(2)}
            </p>
          </div>
          <div className="text-center w-1/2">
            <h4 className="text-sm text-gray-500">Expense</h4>
            <p className="text-lg font-semibold text-red-500">
              -${Math.abs(expense).toFixed(2)}
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">History</h3>
          <ul className="space-y-2 max-h-60 overflow-y-auto">
            {transactions.map((t, index) => (
              <li
                key={index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="cursor-pointer flex flex-col bg-gray-50 p-3 rounded-lg shadow-sm"
              >
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">{t.text}</span>
                  <span
                    className={`font-medium ${
                      t.amount < 0 ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {t.amount < 0 ? "-" : "+"}${Math.abs(t.amount).toFixed(2)}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(t.date.seconds * 1000).toLocaleString()}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition duration-300"
            onClick={() => setModalIsOpen(true)}
          >
            Add New Transaction
          </button>
        </div>
      </div>

      {modalIsOpen && (
        <AddTransactionModal
          onClose={() => setModalIsOpen(false)}
          onAdd={fetchData}
        />
      )}
    </div>
  );
}
