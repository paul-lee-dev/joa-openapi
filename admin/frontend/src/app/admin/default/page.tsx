import WeekTransactionGraph from "@/components/graph/Graph";
import BankSelect from "@/components/select/bankNoLabel";

const Dashboard = () => {
  return (
    <div>
      <div className="flex">
        <BankSelect></BankSelect>
      </div>
      <div className="flex"></div>
      <WeekTransactionGraph></WeekTransactionGraph>
    </div>
  );
};

export default Dashboard;
