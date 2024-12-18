import StatsCards from "../admin/StatsCard";
import { fetchReservationStats } from "@/utils/actions";
import { formatCurrency } from "@/utils/format";
async function Stats() {
  const stats = await fetchReservationStats();

  return (
    <div className="mt-8 grid md:grid-cols-2 gap-4 lg:grid-cols-3">
      <StatsCards title="properties" value={stats.properties} />
      <StatsCards title="amount" value={stats.amount} />
      <StatsCards title="total" value={formatCurrency(stats.totalPrice)} />
    </div>
  );
}
export default Stats;