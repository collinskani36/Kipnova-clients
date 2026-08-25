// ─── Analytics Section ────────────────────────────────────────────────────────

import { Stats } from "../types";
import { formatCategoryLabel } from "../utils";

interface Props {
  stats: Stats | null;
  categoryLabels: Record<string, string>;
}

export default function AnalyticsSection({ stats, categoryLabels }: Props) {
  return (
    <div className="content-section active">
      <div className="header">
        <h2>Analytics</h2>
        <p>Detailed insights and trends</p>
      </div>

      <div className="stats-grid">
        {stats?.inquiryTypes && Object.entries(stats.inquiryTypes).length > 0
          ? Object.entries(stats.inquiryTypes)
              .sort((a, b) => b[1] - a[1])
              .map(([type, count]) => (
                <div className="stat-card" key={type}>
                  <div className="stat-value">{count}</div>
                  <div className="stat-label">{categoryLabels[type] || formatCategoryLabel(type)}</div>
                </div>
              ))
          : (
            <div className="stat-card">
              <div className="stat-value">0</div>
              <div className="stat-label">No Inquiries Yet</div>
            </div>
          )
        }
      </div>
    </div>
  );
}
