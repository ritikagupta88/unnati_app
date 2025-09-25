// src/pages/RepayLoan.jsx
import React from "react";
import MainLayout from "../MainLayout";

const RepayLoan = () => {
  const steps = [
    {
      title: "Step 1: Loan Disbursal",
      description:
        "Your approved loan amount is credited to your registered bank account.",
    },
    {
      title: "Step 2: EMI Schedule",
      description:
        "An EMI (Equated Monthly Installment) schedule is generated with due dates.",
    },
    {
      title: "Step 3: Payment Reminder",
      description:
        "You receive timely reminders (SMS/Email) before your EMI due date.",
    },
    {
      title: "Step 4: Repayment",
      description:
        "Make your EMI payment easily via UPI, NetBanking, Debit Card, or Auto-Debit.",
    },
    {
      title: "Step 5: Loan Closure",
      description:
        "Once all EMIs are paid, you receive a loan closure certificate.",
    },
  ];

  return (
    <MainLayout childPaddingTop="3%">
      <div className="container my-5 repay-loan-page">
        <h1 className="mb-4">Loan Repayment Process</h1>
        <p>
          At <strong>Unnati</strong>, we make repayment simple, transparent, and
          convenient. Follow the steps below to understand how your repayment
          journey works:
        </p>

        <div className="timeline mt-5">
          {steps.map((step, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">{index + 1}</div>
              <div className="timeline-content">
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default RepayLoan;
