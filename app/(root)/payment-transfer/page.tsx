import PaymentTransferForm from "@/components/PaymentTransferForm";
import HeaderBox from "@/components/ui/HeaderBox";
import { getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const PaymentTransfer = async () => {
  const loggedIn = await getLoggedInUser();

  const accounts = await getAccounts({ userId: loggedIn.$id });
  if (!accounts) return;

  const accountsData = accounts?.data;

  return (
    <section className="payment-transfer">
      <HeaderBox
        title="Payment transfer"
        subtext="Please provide details for transfer of funds"
      />
      <section className="sixe-full pt-5">
        <PaymentTransferForm accounts={accountsData} />
      </section>
    </section>
  );
};

export default PaymentTransfer;
