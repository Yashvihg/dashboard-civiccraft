import Card from "../components/card";

function DashboardPage() {
  return (
    <div className="flex">
      <section className="flex-col p-3">
        <h2 className="text-2xl font-semibold pl-3 text-primary-black">
          Dashboard
        </h2>
        <section className="flex bg-primary-yellow p-10">
          <h1 className="font-semibold">OverView</h1>{" "}
          <Card title="asjdk" bookingCount={10}></Card>
        </section>
      </section>
    </div>
  );
}

export default DashboardPage;
